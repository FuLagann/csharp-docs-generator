
import { InputArguments } from "./models/InputArguments";
import { TypeInfo } from "./models/SharpChecker";
import { TemplateApi, TemplateApiItems, NameDescription } from "./models/TemplateApi";
import { TemplateJson } from "./models/TemplateJson";
import { BaseTemplateVars } from "./models/TemplateVariables";
import { XmlFormat } from "./models/XmlFormat";
import { readFile } from "./read-file";
import { generateTypeDetails } from "./generate";
import { getArguments, getXmlApi } from "./index";
import { createPartial } from "./template-helpers";
import ejs = require("ejs");
import markdownIt = require("markdown-it");
import pretty = require("pretty");

// Variables
const md = markdownIt();
let generatedTypeJson : TypeInfo;

export function compileType(filename : string, typePath : string) : string {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), { details: generatedTypeJson, xmlDocs: xmlApi, createPartial: createPartial });
}

export async function compileBase(filename : string, templateApi : TemplateJson, breadcrumbs : string[], typePath : string) : Promise<string> {
	// Variables
	let variables = new BaseTemplateVars(templateApi);
	const args : InputArguments = getArguments();
	
	variables.breadcrumbs = breadcrumbs;
	variables.typePath = typePath;
	generatedTypeJson = await generateTypeDetails(args, typePath);
	
	return pretty(ejs.render(readFile(filename), variables), { ocd: true });
}

/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format : (XmlFormat | undefined)) : TemplateApiItems {
	if(format == undefined) { format = new XmlFormat(); }
	
	return {
		summary: md.render(format.summary),
		returns: {
			exists: doesItemExist(format.returns),
			value: md.render(format.returns || "")
		},
		remarks: {
			exists: doesItemExist(format.remarks),
			value: md.render(format.remarks || "")
		},
		example: {
			exists: doesItemExist(format.example),
			value: md.render(format.example || "")
		},
		parameters: {
			exists: doesArrayItemExist(format.parameters),
			value: renderMarkdownForArray(format.parameters)
		},
		exceptions: {
			exists: doesArrayItemExist(format.exceptions),
			value: renderMarkdownForArray(format.exceptions)
		},
		typeParameters: {
			exists: doesArrayItemExist(format.typeParameters),
			value: renderMarkdownForArray(format.typeParameters)
		}
	};
}

/**Finds if the given string is non-empty and exists.
 * @param str {string} - The string in quest.
 * @returns Returns true if the string is non-empty and exists.*/
function doesItemExist(str : string) : boolean { return (str != null && str != undefined && str != ""); }

/**Finds if the array is non-empty and exists.
 * @param list {any[]} - The list in question.
 * @returns Returns true if the list is non-empty and exists.*/
function doesArrayItemExist(list : any[]) : boolean {
	return (list != null && list != undefined && list.length > 0);
}

/**Goes through the array of name descriptions and renders it through markdown.
 * @param list {NameDescription} - The list of name description to render with.
 * @returns Returns a list of rendered name descriptions ready for html.*/
function renderMarkdownForArray(list : NameDescription[]) : NameDescription[] {
	// Variables
	let temp = list;
	
	for(let i = 0; i < temp.length; i++) {
		temp[i].description = md.render(temp[i].description);
	}
	
	return temp;
}
