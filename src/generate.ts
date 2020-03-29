
import { InputArguments } from "./models/InputArguments";
import { TypeInfo } from "./models/SharpChecker";
import { TemplateApi } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
import { getSharpCheckerExe, getTemplateUri } from "./index";
import { readFile } from "./read-file";
import { compileBase, compileType } from "./template";
import { exec } from "@actions/exec";
import fs = require("fs");

export async function generateHtmlDocumentation(args : InputArguments, api : Map<string, XmlFormat>) {
	console.log("Generating HTML Documentation...");
	
	api.forEach(function(val : XmlFormat, key : string) {
		switch(val.type) {
			case "T": {
				// Variables
				const typePath = key.replace('`', '-');
				const filename = args.outputPath + typePath + ".html"; // TODO: Add customization to output file extension
				const html = compileBase(
					getTemplateUri(args.template.baseUri),
					args.template,
					[],
					typePath
				);
				
				fs.writeFileSync(filename.toLowerCase(), html);
				console.log(`Created ${ filename }!`);
			} break;
		}
	});
	
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
