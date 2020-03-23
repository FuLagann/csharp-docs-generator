
import core = require("@actions/core");
import input = require("./input");
import io = require("@actions/io");
import tools = require("@actions/tool-cache");
import { InputArguments } from "./models/InputArguments";
import { exec } from "@actions/exec";
import { gatherApiMap } from "./read-xml";
import { generateHtmlDocumentation } from "./generate";

// Variables
const TEMP_FOLDER = "__temp/";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-linux-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-linux-x64/SharpChecker";
const args : InputArguments = input.getInputs();
let sharpCheckerExe : string;

/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
export function getSharpCheckerExe() : string { return sharpCheckerExe; }

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
	const zipLocation = await tools.downloadTool(SHARP_CHECKER_URL);
	const unzippedLocation = await tools.extractZip(zipLocation, TEMP_FOLDER);
	
	sharpCheckerExe = `${ unzippedLocation }/${ SHARP_CHECKER_EXE }`;
}

/**Generates the html documentation.*/
async function generateDocs() {
	// Variables
	const api : Map<string, any> = gatherApiMap(args);
	
	try { io.rmRF(args.outputPath); } catch(e) {}
	try { io.mkdirP(args.outputPath); } catch(e) {}
	await generateHtmlDocumentation(args, api);
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
	await cleanUp();
	await gitPush().catch(onGitError);
})().catch(onError)
