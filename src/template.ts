
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo } from "./models/SharpChecker";
import { TemplateApi, TemplateApiItems, NameDescription } from "./models/TemplateApi";
import { TemplateJson } from "./models/TemplateJson";
import { BaseTemplateVars, SidebarView } from "./models/TemplateVariables";
import { XmlFormat } from "./models/XmlFormat";
import { readFile } from "./read-file";
import { generateTypeDetails } from "./generate";
import { getArguments, getXmlApi, getTemplateUri } from "./index";
import { createPartial, displaySidebar } from "./template-helpers";
import ejs = require("ejs");
import markdownIt = require("markdown-it");
import pretty = require("pretty");

// Variables
const md = markdownIt();
let generatedTypeJson : TypeInfo;

export async function compileBase(args : InputArguments, typePath : string) : Promise<string> {
	// Variables
	const filename = getTemplateUri(args.template.baseUri);
	const sidebar : SidebarView = new SidebarView("$~root");
	
	generatedTypeJson = await generateTypeDetails(args, typePath);
	
	return pretty(ejs.render(readFile(filename), {
		displaySidebar: displaySidebar,
		createPartial: createPartial,
		uris: {
			css: args.template.cssUris,
			scripts: args.template.scriptUris,
			type: args.template.typeUri
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
		xmlDocs: xmlApi,
		typeInfo: generatedTypeJson.typeInfo
	});
}

export function compilePropety(filename : string, details : PropertyInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getFriendlyTypePath(details.implementedType, details.name);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi,
		typeInfo: generatedTypeJson.typeInfo
	});
}

export function compileEvent(filename : string, details : EventInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getFriendlyTypePath(details.implementedType, details.name);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi,
		typeInfo: generatedTypeJson.typeInfo
	});
}

export function compileMethod(filename : string, details : MethodInfo) {
	// Variables
	const api : Map<string, XmlFormat> = getXmlApi();
	const typePath = getMethodTypePath(details);
	const xmlApi : TemplateApiItems = getApiItems(api.get(typePath));
	
	return ejs.render(readFile(filename), {
		details: details,
		xmlDocs: xmlApi,
		typeInfo: generatedTypeJson.typeInfo
	});
}

/**Gets the method's specific type path used to differentiate methods with different types of parameters.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the type path specific to the method.*/
function getMethodTypePath(details : MethodInfo) : string {
	// Variables
	let name = details.name;
	if(details.isConstructor) { name = "#ctor"; }
	if(details.isConversionOperator) {
		name = (details.modifier.indexOf("implicit") == -1 ?
			"op_Explicit" :
			"op_Implicit"
		);
	}
	else if(details.isOperator && !name.startsWith("op_")) { name = "op_" + name; }
	let typePath = getFriendlyTypePath(details.implementedType, name);
	let parameters : string[] = [];
	
	if(details.genericParameters.length > 0) {
		typePath += "``" + details.genericParameters.length;
	}
	
	details.parameters.forEach(function(parameter) {
		// Variables
		let paramResult : string = parameter.typeInfo.fullName;
		
		for(let i = 0; i < details.genericParameters.length; i++) {
			paramResult = paramResult.replace(
				new RegExp(`([<,])${ details.genericParameters[i].unlocalizedName }([>,])|^${ details.genericParameters[i].unlocalizedName }$`, "gm"),
				"$1``" + i + "$2"
			);
		}
		
		paramResult = paramResult.replace(new RegExp("<", "gm"), "{").replace(new RegExp(">", "gm"), "}");
		
		if(parameter.modifier != "") { paramResult += "@"; }
		
		parameters.push(paramResult);
	});
	
	console.log("Method: " + typePath + "(" + parameters.join(',') + ")");
	
	if(parameters.length > 0) {
		// Variables
		const methodPath = `${ typePath }(${ parameters.join(',') })`;
		
		if(details.isConversionOperator) {
			return `${ methodPath }~${ details.returnType.unlocalizedName }`;
		}
		
		return methodPath;
	}
	
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
