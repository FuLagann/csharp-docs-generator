
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo } from "./models/SharpChecker";
import { TemplateApi, TemplateApiItems, NameDescription } from "./models/TemplateApi";
import { TemplateJson } from "./models/TemplateJson";
import { BaseTemplateVars, SidebarView } from "./models/TemplateVariables";
import { XmlFormat } from "./models/XmlFormat";
import { readFile } from "./read-file";
import { generateTypeDetails } from "./generate";
import { getArguments, getXmlApi, getTemplateUri, TEMP_FOLDER } from "./index";
import { createPartial, displaySidebar } from "./template-helpers";
import ejs = require("ejs");
import pretty = require("pretty");

// Variables
let generatedTypeJson : TypeInfo;

export async function compileBase(args : InputArguments, typePath : string) : Promise<string> {
	// Variables
	const filename = getTemplateUri(args.template.baseUri);
	const sidebar : SidebarView = new SidebarView("$~root");
	
	generatedTypeJson = await generateTypeDetails(args, typePath);
	// TODO: Generate sidebar
	
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
		breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.')
	}));
}

export async function compileNamespace(args : InputArguments, namespace : string, types : string[]) : Promise<string> {
	// Variables
	const filename = getTemplateUri(args.template.baseUri);
	const sidebar : SidebarView = new SidebarView("$~root");
	
	// TODO: Generate sidebar
	// TODO: Figure out namespaces listed in namespace webpages
	
	return pretty(ejs.render(readFile(filename), {
		displaySidebar: displaySidebar,
		createPartial: createPartial,
		uris: {
			css: args.template.cssUris,
			scripts: args.template.scriptUris,
			type: args.template.typeUri
		},
		isNamespace: true,
		sidebarView: sidebar,
		namespaceName: namespace,
		types: types,
		typePath: namespace,
		breadcrumbs: namespace.split('.')
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
	const typePath = getTypePath(details.implementedType, details.name);
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
	const typePath = getPropertyTypePath(details);
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
	const typePath = getTypePath(details.implementedType, details.name);
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

/**Gets the property's specific type path used for indices specifically.
 * @param details {PropertyInfo} - The details of the property to look into.
 * @returns Returns the type path specific to the property.*/
function getPropertyTypePath(details : PropertyInfo) : string {
	// Variables
	let typePath = getTypePath(details.implementedType, details.name);
	
	if(details.parameters.length) {
		// Variables
		let parameters : string[] = [];
		
		details.parameters.forEach(function(parameter) {
			parameters.push(parameter.typeInfo.fullName);
		});
		
		return `${ typePath }(${ parameters.join(',') })`;
	}
	
	return typePath;
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
	let typePath = getTypePath(details.implementedType, name);
	let parameters : string[] = [];
	
	if(details.genericParameters.length > 0) {
		typePath += "``" + details.genericParameters.length;
	}
	
	details.parameters.forEach(function(parameter) {
		// Variables
		let paramResult : string = parameter.typeInfo.nonInstancedFullName;
		let temp : string;
		
		for(let i = 0; i < details.implementedType.genericParameters.length; i++) {
			temp = details.implementedType.genericParameters[i].unlocalizedName;
			if(paramResult == temp) {
				paramResult = "`" + i;
				break;
			}
			paramResult = paramResult.replace(
				new RegExp(`([\\(<,])${ temp }([\\)\\[>,])`, "gm"),
				"$1`" + i + "$2"
			);
			paramResult = paramResult.replace(
				new RegExp(`${ temp }((?:\\[,*\\])+)`, "gm"),
				"`" + i + "$1"
			);
		}
		for(let i = 0; i < details.genericParameters.length; i++) {
			temp = details.genericParameters[i].unlocalizedName;
			if(paramResult == temp) {
				paramResult = "``" + i;
				break;
			}
			paramResult = paramResult.replace(
				new RegExp(`([\\(<,])${ temp }([\\)\\[>,])`, "gm"),
				"$1``" + i + "$2"
			);
			paramResult = paramResult.replace(
				new RegExp(`${ temp }((?:\\[,*\\])+)`, "gm"),
				"``" + i + "$1"
			);
		}
		
		paramResult = paramResult.replace(new RegExp("<", "gm"), "{").replace(new RegExp(">", "gm"), "}");
		
		if(parameter.modifier != "") { paramResult += "@"; }
		
		parameters.push(paramResult);
	});
	
	if(parameters.length > 0) {
		// Variables
		const methodPath = `${ typePath }(${ parameters.join(',') })`;
		
		if(details.isConversionOperator) {
			return `${ methodPath }~${ details.returnType.nonInstancedFullName }`;
		}
		
		return methodPath;
	}
	
	return typePath;
}

/**Gets the type path using the type info and member name
 * @param typeInfo {QuickTypeInfo} - The information of the type.
 * @param name {string} - The name of the member
 * @returns Returns the friendly type path*/
function getTypePath(typeInfo : QuickTypeInfo, name : string) : string {
	return typeInfo.unlocalizedName+ "." + name;
}

/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format : (XmlFormat | undefined)) : TemplateApiItems {
	if(format == undefined) { format = new XmlFormat(); }
	
	return {
		summary: format.summary,
		returns: {
			exists: doesItemExist(format.returns),
			value: format.returns
		},
		remarks: {
			exists: doesItemExist(format.remarks),
			value: format.remarks
		},
		example: {
			exists: doesItemExist(format.example),
			value: format.example
		},
		parameters: {
			exists: doesArrayItemExist(format.parameters),
			value: format.parameters
		},
		exceptions: {
			exists: doesArrayItemExist(format.exceptions),
			value: format.exceptions
		},
		typeParameters: {
			exists: doesArrayItemExist(format.typeParameters),
			value: format.typeParameters
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
