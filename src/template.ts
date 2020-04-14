
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo } from "./models/SharpChecker";
import { TemplateApiItems } from "./models/TemplateApi";
import { SidebarView } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
// External functionality
import { generateTypeDetails } from "./generate";
import { getArguments, getDependencies } from "./index";
import { readFile } from "./read-file";
import { getApiDoc } from "./read-xml";
import { createPartial, generateSidebar, createLinkToType, createAnchorToType } from "./template-helpers";
// External libraries
import ejs = require("ejs");
import pretty = require("pretty");

// Variables
let generatedTypeJson : TypeInfo;

/**Compiles the base template.
 * @param args {InputArguments} - The input arguments to look into.
 * @param typePath {string} - The path to the type to generate the documentation for.
 * @returns Returns the compiled template code.*/
export async function compileBase(args : InputArguments, typePath : string) : Promise<string> {
	// Variables
	const filename = args.templateUris.base;
	const sidebar : SidebarView = new SidebarView("$~root");
	
	generatedTypeJson = await generateTypeDetails(args, typePath);
	// TODO: Generate sidebar
	
	return pretty(ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			displaySidebar: generateSidebar,
			createPartial: createPartial,
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
				type: args.templateUris.type
			},
			isNamespace: false,
			sidebarView: sidebar,
			typePath: typePath,
			breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.')
		}
	), { ocd: true });
}

// TODO: Complete this
/**Compiles the namespace template, listing all the types.
 * @param args {InputArguments} - The input arguments to look into.
 * @param namespace {string} - The name of the namespace.
 * @param types {string[]} - The list of types witihn the namespace.
 * @returns Returns the compiled template code.*/
export async function compileNamespace(args : InputArguments, namespace : string, types : string[]) : Promise<string> {
	// Variables
	const filename = args.templateUris.base;
	const sidebar : SidebarView = new SidebarView("$~root");
	
	// TODO: Generate sidebar
	// TODO: Figure out namespaces listed in namespace webpages
	
	return pretty(ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			displaySidebar: generateSidebar,
			createPartial: createPartial,
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
				type: args.templateUris.type
			},
			isNamespace: true,
			sidebarView: sidebar,
			namespaceName: namespace,
			types: types,
			typePath: namespace,
			breadcrumbs: namespace.split('.')
		}
	), { ocd: true });
}

/**Compiles the type template.
 * @param filename {string} - The filename of the template file.
 * @param typePath {string} - The path to the type to look into and generate from.
 * @returns Returns the compiled template code.*/
export function compileType(filename : string, typePath : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	const xmlFormat = getApiDoc(`T:${ typePath }`, getDependencies());
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: generatedTypeJson,
			xmlDocs: xmlApi,
			createPartial: createPartial,
			uris: {
				constructors: args.templateUris.constructors,
				fields: args.templateUris.fields,
				properties: args.templateUris.properties,
				events: args.templateUris.events,
				methods: args.templateUris.methods
			}
		}
	);
}

/**Compiles the field template.
 * @param filename {string} - The filename of the template file.
 * @param details {FieldInfo} - The details of the field to look into.
 * @returns Returns the compiled template code.*/
export function compileField(filename : string, details : FieldInfo) {
	// Variables
	const typePath = getTypePath(details.implementedType, details.name);
	const xmlFormat = getApiDoc(`F:${ typePath }`, getDependencies());
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			typeInfo: generatedTypeJson.typeInfo,
			createLinkToType: createLinkToType,
			createAnchorToType: createAnchorToType
		}
	);
}

/**Compiles the property template.
 * @param filename {string} - The filename of the template file.
 * @param details {PropertyInfo} - The details of the property to look into.
 * @returns Returns the compiled template code.*/
export function compilePropety(filename : string, details : PropertyInfo) {
	// Variables
	const typePath = getPropertyTypePath(details);
	const xmlFormat = getApiDoc(`P:${ typePath }`, getDependencies());
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			typeInfo: generatedTypeJson.typeInfo,
			createLinkToType: createLinkToType,
			createAnchorToType: createAnchorToType
		}
	);
}

/**Compiles the event template.
 * @param filename {string} - The filename of the template file.
 * @param details {EventInfo} - The details of the event to look into.
 * @returns Returns the compiled template code.*/
export function compileEvent(filename : string, details : EventInfo) {
	// Variables
	const typePath = getTypePath(details.implementedType, details.name);
	const xmlFormat = getApiDoc(`E:${ typePath }`, getDependencies());
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			typeInfo: generatedTypeJson.typeInfo,
			createLinkToType: createLinkToType,
			createAnchorToType: createAnchorToType
		}
	);
}

/**Compiles the method template.
 * @param filename {string} - The filename of the template file.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the compiled template code.*/
export function compileMethod(filename : string, details : MethodInfo) {
	// Variables
	const typePath = getMethodTypePath(details);
	const xmlFormat = getApiDoc(`M:${ typePath }`, getDependencies());
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat);
		
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			typeInfo: generatedTypeJson.typeInfo,
			createLinkToType: createLinkToType,
			createAnchorToType: createAnchorToType
		}
	);
}

/**Gets the relative links for the individual webpage to reference, in relation to the webpage.
 * @param localBasePath {string} - The local base path where the files can be found.
 * @param locals {string[]} - The local files that the template will generate and use.
 * @param globals {string[]} - The global files that the user already has and wants to include.
 * @returns Returns the links of both locals and globals relative to the individual webpage.*/
function getRelativeLinks(localBasePath : string, locals : string[], globals : string[]) : string[] {
	// Variables
	let list : string[] = globals ? globals.slice() : [];
	
	for(let i = 0; i < locals.length; i++) {
		if(!locals[i] || locals[i] == "") { continue; }
		list.push(locals[i].replace(/.*[\\\/]([\w\.]+)$/gm, `${ localBasePath }$1`));
	}
	
	return list;
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

/**Gets the api documentation items to be used by the template.
 * @param format {XmlFormat|undefined} - The format used to get the documentation from.
 * @return Returns the api documentation items.*/
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
