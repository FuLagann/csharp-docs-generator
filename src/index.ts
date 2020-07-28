
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeList } from "./models/SharpChecker";
// External functionality
import { generateHtmlDocumentation, generateTypeList } from "./generate";
import { getInputs } from "./input";
import { getXmls } from "./read-xml";
// External libraries
import { exec } from "@actions/exec";
import artifact = require("@actions/artifact");
import core = require("@actions/core");
import io = require("@actions/io");
import tools = require("@actions/tool-cache");
import fs = require("fs");
import { downloadDependencyXmls } from "./read-deps-json";

// Variables
/**The list of files to artifact.*/
export let artifactFiles : string[] = [];
/**The temp folder where everything tool related will be placed (this is get completed deleted once completed)*/
export const TEMP_FOLDER = `__temp-${ generateUuid() }/`;
/**The list of xmls used for netstandard documentation (it's chopped up into parts because it's such a huge file).*/
export let NETSTANDARD_XMLS : string[]= [];
const NETSTANDARD_API = "https://github.com/FuLagann/csharp-docs-generator/raw/paulsbranch/packages/netstandard.zip";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-win-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-win-x64/SharpChecker";
let args : InputArguments;
let dependencies : string[];
let sharpCheckerExe : string;
let typeList : TypeList;
let gitErrorState : string;
let isDetached : boolean = false;
const GIT_STATE_SETUP = "setup";
const GIT_STATE_PULL = "pull";
const GIT_STATE_CHECKOUT = "checkout";
const GIT_STATE_ADD = "add";
const GIT_STATE_COMMIT = "commit";
const GIT_STATE_PUSH = "push";

/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
export function getSharpCheckerExe() : string { return sharpCheckerExe; }

/**Gets the input arguments.
 * @returns Returns the input arguments.*/
export function getArguments() : InputArguments { return args; }

/**Gets all the xml dependencies to look into for documentation.
 * @returns Returns the list of xml dependencies to look into for documentation.*/
export function getDependencies() : string[] { return dependencies; }

/**Gets the list of types to look into.
 * @returns Returns the list of types to look into.*/
export function getTypeList() : TypeList { return typeList; }

/**Generates a UUID (Unique User ID).
 * @returns Returns a randomly generated UUID.*/
export function generateUuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(chr) {
		// Variables
		let rng = Math.random() * 16 | 0;
		let variable = (chr == 'x' ?
			rng :
			(rng & 0x3 | 0x8)
		);
		
		return variable.toString(16);
	})
}

/**Catches any error and reports the action as a failed aciton*/
async function onError(error : Error) {
	console.error(error);
	core.setFailed(error.message);
}

/**Catches an error when pushing to git, this will check the status and push if possible.*/
async function onGitError() {
	await exec("git status").catch(onError);
	if(gitErrorState == GIT_STATE_COMMIT) {
		// Nothing to commit, do nothing to complete action
	}
	else if(gitErrorState == GIT_STATE_PUSH) {
		if(args.branchName != "") {
			await exec("git", ["pull", "origin", args.branchName]);
			await exec("git", ["push", "--set-upstream", "origin", args.branchName]);
		}
		else {
			await exec("git", ["pull"]);
			await exec("git", ["push"]);
		}
	}
}

/**Initiates the program, setting things up before everything starts up.*/
async function initiate() {
	try { await io.rmRF(TEMP_FOLDER); } catch {}
	try { await io.mkdirP(TEMP_FOLDER); } catch {}
	console.log("Gathering input from workflow yaml.");
	args = await getInputs();
	try { await io.rmRF(args.outputPath); } catch(e) {}
	try { await io.mkdirP(args.outputPath); } catch(e) {}
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
	console.log("Downloading SharpChecker tool.");
	// Variables
	let zipLocation = await tools.downloadTool(SHARP_CHECKER_URL);
	let unzipLocation = await tools.extractZip(zipLocation, TEMP_FOLDER);
	
	sharpCheckerExe = `${ unzipLocation }/${ SHARP_CHECKER_EXE }`;
	// Openning up the netstandard api
	zipLocation = await tools.downloadTool(NETSTANDARD_API);
	unzipLocation = await tools.extractZip(zipLocation, TEMP_FOLDER);
	for(let i = 1; i <= 32; i++) {
		NETSTANDARD_XMLS.push(`${ unzipLocation }/netstandard-p${ i }.xml`);
	}
}

/**Generates the html documentation.*/
async function generateDocs() {
	// Variables
	let dependencyXmls : string[] = await downloadDependencyXmls(args.binaries);
	
	dependencies = getXmls(args.binaries).concat(NETSTANDARD_XMLS).concat(dependencyXmls);
	typeList = await generateTypeList(args);
	await generateHtmlDocumentation(args);
}

/**Uploads all the artifacts used for debugging*/
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
	isDetached = (args.branchName == "<detached>");
	gitErrorState = GIT_STATE_SETUP;
	await exec("git", ["config", "--global", "user.name",  args.user.name]);
	await exec("git", ["config", "--global", "user.email", args.user.email]);
	
	gitErrorState = GIT_STATE_PULL;
	try {
		await exec("git", ["pull"]);
	}
	catch(err) { isDetached = true; }
	
	if(!isDetached && args.branchName != "") {
		await exec("git", ["pull", "origin", args.branchName]);
	}
	
	// Creates a new branch to merge with
	if(args.branchName != "") {
		gitErrorState = GIT_STATE_CHECKOUT;
		try {
			// Experimental feature, don't mention it publically until I can verify this works properly
			if(args.branchName == "<detached>") {
				await exec("git", ["checkout", "--detach"]);
			}
			else {
				await exec("git", ["checkout", "-B", args.branchName]);
			}
		}
		catch(err) {
			// Just in case git checkout doesn't work (happened to me once).
			if(args.branchName == "<detached>") {
				await exec("git", ["switch", "--detach"]);
			}
			else {
				await exec("git", ["switch", "-C", args.branchName]);
			}
		}
	}
	gitErrorState = GIT_STATE_ADD;
	await exec("git", ["add", "--all"]);
	gitErrorState = GIT_STATE_COMMIT;
	await exec("git", ["commit", "-m", args.commitMessage]);
	// Pushing to a separate branch
	gitErrorState = GIT_STATE_PUSH;
	if(!isDetached && args.branchName != "") {
		await exec("git", ["push", "--set-upstream", "origin", args.branchName]);
	}
	else {
		await exec("git", ["push"]);
	}
}

(async function() {
	await initiate();
	await executeBuildTasks();
	await downloadTools();
	await generateDocs();
	//await uploadArtifacts();
	await cleanUp();
	await gitPush().catch(onGitError);
})().catch(onError);
