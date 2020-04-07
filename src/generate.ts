
import { InputArguments } from "./models/InputArguments";
import { TypeList, TypeInfo } from "./models/SharpChecker";
import { TemplateApi } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
import { TEMP_FOLDER, getSharpCheckerExe, getTemplateUri } from "./index";
import { readFile } from "./read-file";
import { compileBase, compileNamespace } from "./template";
import { exec } from "@actions/exec";
import fs = require("fs");

export async function generateHtmlDocumentation(args : InputArguments) {
	// Variables
	const list : TypeList = await generateTypeList(args);
	
	console.log("Generating HTML Documentation...");
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
			// TODO: Add customization to output file extension
			const filename = args.outputPath + typePath + args.outputExtension;
			const html = await compileBase(args, typePath);
			
			fs.writeFileSync(filename.toLowerCase(), html);
			console.log(`Created ${ filename }!`);
		}
	}
	console.log("Generation completed!");
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
async function generateTypeList(args : InputArguments) : Promise<TypeList> {
	// Variables
	const sharpChecker : string = getSharpCheckerExe();
	const sharpCheckerArgs : string[] = getSharpCheckerArguments(args, true, "-l");
	
	await exec(sharpChecker, sharpCheckerArgs);
	
	return JSON.parse(readFile(sharpCheckerArgs[1])) as TypeList;
}

/**Gets the arguments for sharp checker.
 * @param args {InputArguments} - The input arguments to get the binaries from.
 * @param isList {boolean} - Set to true to print out a list of types.
 * @param typePath {string} - The type path to search (can be used to determine if it's a type list).
 * @returns Returns a list of arguments used for sharp checker.*/
function getSharpCheckerArguments(args : InputArguments, isList : boolean, typePath : string) : string[] {
	// Variables
	const includePrivate : string[] = args.includePrivate ? ["-p"] : [];
	const outputPath : string = TEMP_FOLDER + "debugging/" + (isList ? "list.json" : "type.json");
	
	return ["-o", outputPath, typePath].concat(includePrivate).concat(args.binaries);
}
