
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, TypeList } from "./models/SharpChecker";
// External functionalities
import { TEMP_FOLDER, getSharpCheckerExe } from "./index";
import { readFile } from "./read-file";
import { compileBase, compileNamespace } from "./template";
// External libraries
import { exec } from "@actions/exec";
import fs = require("fs");
import io = require("@actions/io");
import path = require("path");

// Variables
let typeList : (TypeList | null) = null;

/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
export async function generateHtmlDocumentation(args : InputArguments) {
	// Variables
	const list : TypeList = await generateTypeList(args);
	
	console.log("Generating HTML Documentation...");
	await generateCssAndScriptFiles(args);
	for(const key in list.types) {
		// Variables
		const value : string[] = list.types[key] as string[];
		const namespaceFilename = args.outputPath + key + args.outputExtension;
		const html = await compileNamespace(args, key, value);
		
		fs.writeFileSync(namespaceFilename.toLowerCase(), html);
		console.log(`Created ${ namespaceFilename }`);
		
		for(let i = 0; i < value.length; i++) {
			// Variables
			const typePath = value[i].replace("/", ".");
			if(typePath.indexOf("<") != -1) { continue; }
			const filename = args.outputPath + typePath + args.outputExtension;
			const html = await compileBase(args, typePath);
			
			fs.writeFileSync(filename.toLowerCase(), html);
			console.log(`Created ${ filename }!`);
		}
	}
	console.log("Generation completed!");
}

/**Generates the local css and javascript files used by the template.
 * @param args {InputArguments} - The input arguments to look into the local css and javascript.*/
export async function generateCssAndScriptFiles(args : InputArguments) {
	await generateSupplementaryFile(path.join(args.outputPath, "css/"), args.templateUris.localCss || []);
	await generateSupplementaryFile(path.join(args.outputPath, "js/"), args.templateUris.localScripts || []);
}

/**Checks the type and returns it's info.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @param typePath {string} - The path to the type to look into.
 * @returns Returns the info of the type.*/
export async function generateTypeDetails(args : InputArguments, typePath : string) : Promise<TypeInfo> {
	// Variables
	const sharpChecker : string = getSharpCheckerExe();
	const sharpCheckerArgs : string[] = getSharpCheckerArguments(args, false, typePath);
	
	await exec(sharpChecker, sharpCheckerArgs);
	
	return JSON.parse(readFile(sharpCheckerArgs[1])) as TypeInfo;
}

/**Checks the list of types and returns their names.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @returns Returns the list of the the types contained within the binaries inputted.*/
export async function generateTypeList(args : InputArguments) : Promise<TypeList> {
	if(!typeList) {
		// Variables
		const sharpChecker : string = getSharpCheckerExe();
		const sharpCheckerArgs : string[] = getSharpCheckerArguments(args, true, "-l");
		
		await exec(sharpChecker, sharpCheckerArgs);
		typeList = JSON.parse(readFile(sharpCheckerArgs[1])) as TypeList;
	}
	return typeList;
}

/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.*/
async function generateSupplementaryFile(basePath : string, files : string[]) {
	try { await io.mkdirP(basePath); } catch {}
	for(let i = 0; i < files.length; i++) {
		// Variables
		const filename = files[i].replace(/.*[\\\/]([\w\.]+)$/gm, "$1");
		const content = readFile(files[i]);
		
		fs.writeFileSync(path.join(basePath, filename), content);
	}
}

/**Gets the arguments for sharp checker.
 * @param args {InputArguments} - The input arguments to get the binaries from.
 * @param isList {boolean} - Set to true to print out a list of types.
 * @param typePath {string} - The type path to search (can be used to determine if it's a type list).
 * @returns Returns a list of arguments used for sharp checker.*/
function getSharpCheckerArguments(args : InputArguments, isList : boolean, typePath : string) : string[] {
	// Variables
	const includePrivate : string[] = args.includePrivate ? ["-p"] : [];
	const outputPath : string = TEMP_FOLDER + (isList ? "list.json" : typePath + ".json");
	
	return ["-o", outputPath, typePath].concat(includePrivate).concat(args.binaries);
}
