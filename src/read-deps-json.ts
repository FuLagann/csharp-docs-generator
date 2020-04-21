
// Models
import { DependencyJson, DependencyTarget, DependencyLibrary } from "./models/XmlFormat";
// External functionalities
import { TEMP_FOLDER } from "./index";
import { readFile } from "./read-file";
import { getXmls } from "./read-xml";
// External libraries
import fs = require("fs");
import io = require("@actions/io");
import path = require("path");
import tools = require("@actions/tool-cache");

/**Downloads all the dependency xmls.
 * @param binaries {string[]} - The binary files used to look into.
 * @returns Returns the list of dependency xmls.*/
export async function downloadDependencyXmls(binaries : string[])  : Promise<string[]> {
	// Variables
	let results : string[] = [];
	let temp : string[];
	let dependencies : DependencyJson;
	let depsJson : string;
	
	for(let i = 0; i < binaries.length; i++) {
		depsJson = binaries[i].replace(/\.(dll|exe)/, ".deps.json").trim();
		dependencies = JSON.parse(readFile(depsJson, "{}")) as DependencyJson;
		temp = await downloadDependencies(dependencies);
		temp = removeDuplicates(results, temp);
		results = results.concat(temp);
	}
	
	return results;
}

/**Removes all the duplicates from the temp array.
 * @param results {string[]} - The results that contains no duplicates, to look through.
 * @param temp {string[]} - The temp array to remove duplicates from.
 * @returns Returns the temp array with no duplicates.*/
function removeDuplicates(results : string[], temp : string[]) : string[] {
	for(let i = temp.length - 1; i >= 0; i--) {
		// Variables
		let index = results.indexOf(temp[i]);
		
		if(!fs.existsSync(temp[i])) {
			temp.splice(i, 1);
			continue;
		}
		if(index == -1) { continue; }
		temp.splice(i, 1);
	}
	
	return temp;
}

/**Downloads the dependencies from the dependency json file.
 * @param dependencies {DependencyJson} - The dependency json to look through.
 * @returns Returns the list of dependency xmls.*/
async function downloadDependencies(dependencies : DependencyJson) : Promise<string[]> {
	// Variables
	let target : string = dependencies.runtimeTarget.name;
	let targ : DependencyTarget;
	let lib : DependencyLibrary;
	let deps : string[] = [];
	let runtimes : Map<string, string[]> = new Map<string, string[]>();
	let zipLocation : string = "";
	let unzipLocation : string = "";
	let results : string[] = [];
	
	for(const key in dependencies.targets[target]) {
		if(key.startsWith("NETStandard.Library") || key.startsWith("Microsoft.NETCore.Platforms")) {
			continue;
		}
		targ = dependencies.targets[target][key];
		if(targ.dependencies) {
			for(const depKey in targ.dependencies) {
				deps.push(`${ depKey }/${ targ.dependencies[depKey] }`);
			}
		}
		if(targ.runtime) {
			// Variables
			let list : string[] = runtimes.get(key) || [];
			
			for(const runKey in targ.runtime) {
				list.push(runKey);
			}
			
			runtimes.set(key, list);
		}
	}
	
	for(let i = 0; i < deps.length; i++) {
		if(deps[i].startsWith("NETStandard.Library") || deps[i].startsWith("Microsoft.NETCore.Platforms")) {
			continue;
		}
		if(dependencies.libraries[deps[i]]) {
			lib = dependencies.libraries[deps[i]];
			
			if(lib.type == "project" || !lib.serviceable) {
				continue;
			}
			else if(lib.type == "package") {
				// Variables
				let libPath : string = lib.path || "";
				let extractPath = `${ TEMP_FOLDER }/libs/${ lib.path }`;
				let list : string[];
				
				if(libPath == "") { continue; }
				libPath = `https://www.nuget.org/api/v2/package/${ libPath }`;
				try { await io.mkdirP(extractPath); } catch {}
				zipLocation = await tools.downloadTool(libPath);
				unzipLocation = await tools.extractZip(zipLocation, extractPath);
				list = runtimes.get(deps[i]) || [];
				for(let j = 0; j < list.length; j++) {
					results.push(path.join(unzipLocation, list[j]));
				}
			}
		}
	}
	
	return getXmls(results);
}
