
import { InputArguments } from "./models/InputArguments";
import { TypeInfo } from "./models/SharpChecker";
import { TemplateApi } from "./models/TemplateApi";
import { getSharpCheckerExe } from "./index";
import { readFile } from "./read-file";
import { compileType } from "./template";
import { exec } from "@actions/exec";
import fs = require("fs");

export async function generateHtmlDocumentation(args : InputArguments, api : Map<string, any>) {
	// Variables
	let stack : TemplateApi[] = [{ api: api, breadcrumbs: [] }];
	let temp : (TemplateApi | undefined);
	let keys : IterableIterator<string>;
	let iterator : IteratorResult<string, any>;
	let key : string;
	
	console.log("Generating HTML Documentation...");
	while(stack.length > 0) {
		if(temp == undefined) { break; }
		
		keys = temp.api.keys();
		
		while(true) {
			iterator = keys.next();
			if(iterator.done) { break; }
			key = iterator.value;
			
			if(key == "type") {
				switch(temp.api.get(key)) {
					case "T": {
						// Variables
						const typePath = temp.breadcrumbs.join('.').replace('`', '-');
						const filename = args.outputPath + typePath + ".html";
						const typeDetails = await checkType(args, typePath);
						const html = compileType(args.template.typeUri, temp, typeDetails, args.template);
						
						fs.writeFileSync(filename, html);
						console.log(`Created ${ filename }!`);
					} break;
				}
				continue;
			}
			
			switch(key) {
				case "summary": case "returns": case "remarks":
				case "example": case "typeparam": case "param":
				case "exception":
					continue;
				default: {
					stack.push({
						api: temp.api.get(key),
						breadcrumbs: temp.breadcrumbs.concat([key])
					});
				} break;
			}
		}
	}
	
	console.log("Generation completed!");
}

/**Checks the type and returns it's info.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @param typePath {string} - The path to the type to look into.
 * @returns Returns the info of the type.*/
async function checkType(args : InputArguments, typePath : string) : Promise<TypeInfo> {
	// Variables
	const sharpChecker : string = getSharpCheckerExe();
	const outputPath : string = "__temp/type.json";
	
	await exec(sharpChecker, ["-o", outputPath, typePath].concat(args.binaries));
	
	return JSON.parse(readFile(outputPath)) as TypeInfo;
}
