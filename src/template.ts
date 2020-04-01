
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo } from "./models/SharpChecker";
import { TemplateApi, TemplateApiItems, NameDescription } from "./models/TemplateApi";
import { TemplateJson } from "./models/TemplateJson";
import { BaseTemplateVars, SidebarView } from "./models/TemplateVariables";
import { XmlFormat } from "./models/XmlFormat";
import { readFile } from "./read-file";
import { generateTypeDetails } from "./generate";
import { getArguments, getXmlApi } from "./index";
import { createPartial, displaySidebar } from "./template-helpers";
import ejs = require("ejs");
import markdownIt = require("markdown-it");
import pretty = require("pretty");

// Variables
const md = markdownIt();
let generatedTypeJson : TypeInfo;

export async function compileBase(filename : string, json : TemplateJson, typePath : string) : Promise<string> {
	// Variables
	const args : InputArguments = getArguments();
	const sidebar : SidebarView = new SidebarView("$~root");
	
	generatedTypeJson = await generateTypeDetails(args, typePath);
	
	return pretty(ejs.render(readFile(filename), {
		displaySidebar: displaySidebar,
		createPartial: createPartial,
		uris: {
			css: json.cssUris,
			scripts: json.scriptUris,
			type: json.typeUri
		},
		isNamespace: false,
		sidebarView: sidebar,
		typePath: typePath,
		breadcrumbs: [] // TODO: Figure out how to do this when compilation of namepsaces are possible
	}));
}

export function compileType(filename : string, typePath : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	const api : Map<string, XmlFormat> = getXmlApi();
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: generatedTypeJson,
		xmlDocs: xmlApi,
		createPartial: createPartial,
		uris: {
			constructors: args.template.constructorsUri,
			fields: args.template.fieldsUri,
			properties: args.template.propertiesUri,
			events: args.template.eventsUri,
			methods: args.template.methodsUri
		}
	});
}

export function compileField(filename : string, details : FieldInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getFriendlyTypePath(details.implementedType, details.name);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi
	});
}

export function compilePropety(filename : string, details : PropertyInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getFriendlyTypePath(details.implementedType, details.name);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi
	});
}

export function compileEvent(filename : string, details : EventInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getFriendlyTypePath(details.implementedType, details.name);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi
	});
}

export function compileMethod(filename : string, details : MethodInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getMethodTypePath(details);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi
	});
}

/**Gets the method's specific type path used to differentiate methods with different types of parameters.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the type path specific to the method.*/
function getMethodTypePath(details : MethodInfo) : string {
	// Variables
	let typePath = getFriendlyTypePath(
		details.implementedType,
		(details.isConstructor ? "#ctor" : details.name)
	);
	let parameters : string[] = [];
	
	console.log("Method: " + typePath);
	
	details.parameters.forEach(function(parameter) {
		parameters.push(
			parameter.typeInfo.unlocalizedName + 
			(parameter.modifier != "" ? "@" : "")
		);
	});
	
	if(parameters.length > 0) { return `${ typePath }(${ parameters.join(',') })`; }
	
	return typePath;
}

/**Gets the friendly version of the type path using the type info and member name
 * @param typeInfo {QuickTypeInfo} - The information of the type.
 * @param name {string} - The name of the member
 * @returns Returns the friendly type path*/
function getFriendlyTypePath(typeInfo : QuickTypeInfo, name : string) : string {
	return typeInfo.unlocalizedName.replace('`', '-') + "." + name;
}

/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format : (XmlFormat | undefined)) : TemplateApiItems {
	if(format == undefined) { format = new XmlFormat(); }
	
	return {
		summary: md.render(format.summary.trim()),
		returns: {
			exists: doesItemExist(format.returns),
			value: md.render((format.returns || "").trim())
		},
		remarks: {
			exists: doesItemExist(format.remarks),
			value: md.render((format.remarks || "").trim())
		},
		example: {
			exists: doesItemExist(format.example),
			value: md.render((format.example || "").trim())
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
		temp[i].description = md.render(temp[i].description.trim());
	}
	
	return temp;
}
