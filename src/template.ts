
import { TypeInfo } from "./models/SharpChecker";
import { TemplateApi, TemplateApiItems, NameDescription } from "./models/TemplateApi";
import { TemplateJson } from "./models/TemplateJson";
import { BaseTemplateVars } from "./models/TemplateVariables";
import { readFile } from "./read-file";
import ejs = require("ejs");
import markdownIt = require("markdown-it");
import pretty = require("pretty");

// Variables
const md = markdownIt();

export function compileType(filename : string, typePath : string) : string {
	return ejs.render(readFile(filename), {});
}

export function compileBase(filename : string, templateApi : TemplateJson, breadcrumbs : string[], typePath : string) : string {
	// Variables
	let variables = new BaseTemplateVars(templateApi);
	
	variables.breadcrumbs = breadcrumbs;
	variables.typePath = typePath;
	
	return pretty(ejs.render(readFile(filename), variables), { ocd: true });
}

/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, any>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(api : Map<string, any>) : TemplateApiItems {
	// Variables
	const summary : string = api.get("summary") || "No description.";
	const returns : string = api.get("returns");
	const remarks : string = api.get("remarks");
	const example : string = api.get("example");
	const param : NameDescription[] = api.get("param");
	const exceptions : NameDescription[] = api.get("exception");
	const typeParams : NameDescription[] = api.get("typeparam");
	
	return {
		summary: md.render(summary),
		returns: {
			exists: doesItemExist(returns),
			value: md.render(returns || "")
		},
		remarks: {
			exists: doesItemExist(remarks),
			value: md.render(remarks || "")
		},
		example: {
			exists: doesItemExist(example),
			value: md.render(example || "")
		},
		parameters: {
			exists: doesArrayItemExist(param),
			value: renderMarkdownForArray(param)
		},
		exceptions: {
			exists: doesArrayItemExist(exceptions),
			value: renderMarkdownForArray(exceptions)
		},
		typeParameters: {
			exists: doesArrayItemExist(typeParams),
			value: renderMarkdownForArray(typeParams)
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
