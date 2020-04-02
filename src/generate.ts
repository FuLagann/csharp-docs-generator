
import { InputArguments } from "./models/InputArguments";
import { TypeList, TypeInfo } from "./models/SharpChecker";
import { TemplateApi } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
import { getSharpCheckerExe, getTemplateUri } from "./index";
import { readFile } from "./read-file";
import { compileBase, compileType } from "./template";
import { exec } from "@actions/exec";
import fs = require("fs");

export async function generateHtmlDocumentation(args : InputArguments) {
	console.log("Generating HTML Documentation...");
	
	// Variables
	const list : TypeList = await generateTypeList(args);
	let keys = list.type.keys();
	let key = keys.next();
	
	while(!key.done) {
		// Variables
		let value : string[] = list.type.get(key.value) as string[];
		
		for(let i = 0; i < value.length; i++) {
			// Variables
			const typePath = value[i].replace("/", ".");
			if(typePath.indexOf("<") != -1) { continue; }
			// TODO: Add customization to output file extension
			const filename = args.outputPath + typePath + ".hmtl";
			const html = await compileBase(
				getTemplateUri(args.template.baseUri),
				args.template,
				typePath
			);
			
			fs.writeFileSync(filename.toLowerCase(), html);
			console.log(`Created ${ filename }!`);
		}
		
		key = keys.next();
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
	const outputPath : string = "__temp/type.json";
	
	await exec(sharpChecker, ["-o", outputPath, typePath].concat(args.binaries));
	
	return JSON.parse(readFile(outputPath)) as TypeInfo;
}

/**Checks the list of types and returns their names.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @returns Returns the list of the the types contained within the binaries inputted.*/
async function generateTypeList(args : InputArguments) : Promise<TypeList> {
	// Variables
	const sharpChecker : string = getSharpCheckerExe();
	const outputPath : string = "__temp/list.json";
	
	await exec(sharpChecker, ["-o", outputPath, "--list"].concat(args.binaries));
	
	return JSON.parse(readFile(outputPath)) as TypeList;
}
