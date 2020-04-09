
import artifact = require("@actions/artifact");
import core = require("@actions/core");
import input = require("./input");
import io = require("@actions/io");
import tools = require("@actions/tool-cache");
import fs = require("fs");
import { InputArguments } from "./models/InputArguments";
import { XmlFormat } from "./models/XmlFormat";
import { exec } from "@actions/exec";
import { gatherApiMap, getXmls } from "./read-xml";
import { generateHtmlDocumentation, generateTypeList } from "./generate";
import { TypeList } from "./models/SharpChecker";

// Variables
export const TEMP_FOLDER = "__temp/";
export let NETSTANDARD_XMLS : string[]= [];
const NETSTANDARD_API = "https://github.com/FuLagann/csharp-docs-generator/raw/paulsbranch/packages/netstandard.zip";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-win-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-win-x64/SharpChecker";
const args : InputArguments = input.getInputs();
let dependencies : string[];
let sharpCheckerExe : string;
let xmlApi : Map<string, XmlFormat>;
let typeList : TypeList;

for(let i = 1; i <= 32; i++) {
	NETSTANDARD_XMLS.push(`${ TEMP_FOLDER }/debugging/netstandard-p${ i }.xml`);
}

/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
export function getSharpCheckerExe() : string { return sharpCheckerExe; }

export function getXmlApi() : Map<string, XmlFormat> { return xmlApi; }

export function getArguments() : InputArguments { return args; }

export function getDependencies() : string[] { return dependencies; }

export function getTypeList() : TypeList { return typeList; }

/**Gets the template uri using the base path of the template json.
 * @param uri {string} - The file path relative to the template json.
 * @returns Returns the file path of the template uri.*/
export function getTemplateUri(uri : string) : string {
	// Variables
	const basePath : string = (args.templatePath == "" || args.templatePath == "." ?
		"./" :
		args.templatePath.replace(/[\\\/][\w\.]+$/gm, "/")
	);
	
	return basePath + uri;
}

/**Catches any error and reports the action as a failed aciton*/
async function onError(error : Error) { core.setFailed(error.message); }

/**Catches an error when pushing to git, this will check the status and push if possible.*/
async function onGitError() {
	await exec("git status").catch(onError);
	await exec("git pull").catch(onError);
	await exec("git push").catch(onError);
}

/**Executes all the build tasks needed prior to document generation.*/
async function executeBuildTasks() {
	for(let i = 0; i < args.buildTasks.length; i++) {
		// Variables
		const task = args.buildTasks[i].trim();
		
		if(task == "") { continue; }
		
		console.log(`Running: ${ task }`);
		await exec(task);
	}
}

/**Downloads the SharpChecker tool needed to look deeper into the binaries.*/
async function downloadTools() {
	try { await io.rmRF(TEMP_FOLDER); } catch(e) {}
	try { await io.mkdirP(TEMP_FOLDER); } catch(e) {}
	
	// Variables
	let zipLocation = await tools.downloadTool(SHARP_CHECKER_URL);
	const unziplocation = await tools.extractZip(zipLocation, TEMP_FOLDER);
	
	zipLocation = await tools.downloadTool(NETSTANDARD_API);
	await tools.extractZip(zipLocation, TEMP_FOLDER + "debugging/");
	sharpCheckerExe = `${ unziplocation }/${ SHARP_CHECKER_EXE }`;
}

/**Generates the html documentation.*/
async function generateDocs() {
	dependencies = getXmls(args.binaries).concat(NETSTANDARD_XMLS);
	typeList = await generateTypeList(args);
	xmlApi = new Map<string, XmlFormat>();
	try { await io.rmRF(args.outputPath); } catch(e) {}
	try { await io.mkdirP(args.outputPath); } catch(e) {}
	await generateHtmlDocumentation(args);
}

export let artifactFiles : string[] = [];

async function uploadArtifacts() {
	// Variables
	const client = artifact.create();
	const name = "debugging-artifacts";
	const files = fs.existsSync(TEMP_FOLDER + "debugging/debug.txt") ? [TEMP_FOLDER + "debugging/debug.txt"] : [];
	
	if(files.length > 0) {
		await client.uploadArtifact(name, files.concat(NETSTANDARD_XMLS), TEMP_FOLDER + "debugging/", { continueOnError: true });
	}
}

/**Cleans everything up before pushing to the repository so nothing unwanted gets committed.*/
async function cleanUp() {
	try {
		await io.rmRF(TEMP_FOLDER);
		
		for(let i = 0; i < args.cleanUpTasks.length; i++) {
			// Variables
			const task = args.cleanUpTasks[i].trim();
			
			if(task == "") { continue; }
			
			console.log(`Running: ${ task }`);
			await exec(task);
		}
	} catch(e) {}
}

/**Pushes the new content into the repository.*/
async function gitPush() {
	await exec("git", ["config", "--global", "user.name",  args.user.name]);
	await exec("git", ["config", "--global", "user.email", args.user.email]);
	await exec("git", ["pull"]);
	// Creates a new branch to merge with
	if(args.branchName != "") {
		await exec("git", ["switch", "--create", args.branchName]);
	}
	await exec("git", ["add", "--all"]);
	// Commits along with previous commit instead
	if(args.amendNoEdit == true) {
		await exec("git", ["commit", "--amend", "--no-edit"]);
	}
	else {
		await exec("git", ["commit", "-m", args.commitMessage]);
	}
	// Pushing to a separate branch
	if(args.branchName != "") {
		await exec("git", ["push", "--set-upstream", "origin", args.branchName]);
	}
	else {
		await exec("git", ["push"]);
	}
}

(async function() {
	await executeBuildTasks();
	await downloadTools();
	await generateDocs();
	await uploadArtifacts();
	await cleanUp();
	await gitPush().catch(onGitError);
})().catch(onError);
