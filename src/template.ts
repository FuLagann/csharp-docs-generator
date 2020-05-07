
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo, ParameterInfo, GenericParametersInfo } from "./models/SharpChecker";
import { NamespaceDetails, TemplateApiItems, TemplateApiUris, MemberList, NameDescription, ParameterNameDescription, GenericParameterNameDescription } from "./models/TemplateApi";
import { SidebarView } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
// External functionality
import { assignTypeToSidebr, generateTypeDetails, getSidebarView, setSidebarView, getProjectDetails } from "./generate";
import { getArguments, getDependencies } from "./index";
import { readFile } from "./read-file";
import { getApiDoc, markdown } from "./read-xml";
import * as Helper from "./template-helpers";
// External libraries
import ejs = require("ejs");
import prettier = require("prettier");

// Variables
let generatedTypeJson : TypeInfo;
let namespaceTypes : { [key : string] : NamespaceDetails[] } = {};

/**Gets the map of namespaces tied to the list of types.
 * @returns Returns the map of namespaces that are tied to the list of types.*/
export function getNamespaceTypes() : { [key : string] : NamespaceDetails[] } {
	return namespaceTypes;
}

/**Compiles the base template.
 * @param args {InputArguments} - The input arguments to look into.
 * @param typePath {string} - The path to the type to generate the documentation for.
 * @returns Returns the compiled template code.*/
export async function compileBase(args : InputArguments, typePath : string) : Promise<string> {
	// Variables
	const filename = args.templateUris.base;
	
	generatedTypeJson = await generateTypeDetails(args, typePath);
	
	return prettier.format(ejs.render(
		readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(),
		{
			createPartial: Helper.createPartial,
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
				type: args.templateUris.type,
				header: args.templateUris.header,
				footer: args.templateUris.footer,
				navigation: "--navigation" + args.outputExtension
			},
			isNamespace: false,
			typePath: typePath,
			breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.'),
			project: getProjectDetails()
		}
	), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
}

/**Compiles the namespace template, listing all the types.
 * @param args {InputArguments} - The input arguments to look into.
 * @param namespace {string} - The name of the namespace.
 * @param types {string[]} - The list of types witihn the namespace.
 * @returns Returns the compiled template code.*/
export async function compileNamespace(args : InputArguments, namespace : string, types : NamespaceDetails[]) : Promise<string> {
	// Variables
	const filename = args.templateUris.base;
	
	return prettier.format(ejs.render(
		readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(),
		{
			createPartial: Helper.createPartial,
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
				type: args.templateUris.type,
				header: args.templateUris.header,
				footer: args.templateUris.footer,
				navigation: "--navigation" + args.outputExtension
			},
			isNamespace: true,
			namespaceName: namespace,
			types: types,
			typePath: namespace,
			breadcrumbs: namespace.split('.'),
			project: getProjectDetails()
		}
	), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
}

/**Compiles the sidebar for it's own separate file.
 * @param args {InputArguments} - The input arguments to look into for the uris.
 * @param sidebar {SidebarView} - The sidebar view to generate.
 * @returns Returns the html code for the sidebar view.*/
export function compileSidebar(args : InputArguments, sidebar : SidebarView) : string {
	return prettier.format(ejs.render(
		readFile(args.templateUris.navigation),
		{
			displaySidebar: Helper.generateSidebar,
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
			},
			sidebarView: sidebar,
			project: getProjectDetails()
		}
	), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
}

/**Compiles the header template.
 * @param filename {string} - The filename to get the header template code from.
 * @returns Returns the compiled header template code.*/
export function compileHeader(filename : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	
	return ejs.render(
		readFile(filename),
		{
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
			},
			createPartial: Helper.createPartial,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			project: getProjectDetails()
		}
	);
}

/**Compiles the footer template.
 * @param filename {string} - The filename to get the footer template code from.
 * @returns Returns the compiled footer template code.*/
export function compileFooter(filename : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	
	return ejs.render(
		readFile(filename),
		{
			uris: {
				css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
				scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
			},
			createPartial: Helper.createPartial,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			project: getProjectDetails()
		}
	);
}

/**Compiles the type template.
 * @param filename {string} - The filename of the template file.
 * @param typePath {string} - The path to the type to look into and generate from.
 * @returns Returns the compiled template code.*/
export function compileType(filename : string, typePath : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	const xmlFormat = getApiDoc(`T:${ typePath }`, getDependencies());
	const details = generatedTypeJson;
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat, details);
	const uris = {
		constructors: args.templateUris.constructors,
		fields: args.templateUris.fields,
		properties: args.templateUris.properties,
		events: args.templateUris.events,
		methods: args.templateUris.methods
	};
	const members = getMembers(details, uris);
	
	setSidebarView(assignTypeToSidebr(getSidebarView(), details));
	if(!namespaceTypes[details.typeInfo.namespaceName]) {
		namespaceTypes[details.typeInfo.namespaceName] = [];
	}
	namespaceTypes[details.typeInfo.namespaceName].push({
		typeInfo: details.typeInfo,
		typeDocs: xmlApi
	});
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			codeDeclaration: getMarkdownCodeDeclaration(details),
			uris: uris,
			members: members,
			createPartial: Helper.createPartial,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			isGenericType: Helper.isGenericType,
			project: getProjectDetails()
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
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat, details);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			codeDeclaration: getMarkdownCodeDeclaration(details),
			typeInfo: generatedTypeJson.typeInfo,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			isGenericType: Helper.isGenericType,
			project: getProjectDetails()
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
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat, details);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			codeDeclaration: getMarkdownCodeDeclaration(details),
			typeInfo: generatedTypeJson.typeInfo,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			isGenericType: Helper.isGenericType,
			project: getProjectDetails()
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
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat, details);
	
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			codeDeclaration: getMarkdownCodeDeclaration(details),
			typeInfo: generatedTypeJson.typeInfo,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			isGenericType: Helper.isGenericType,
			project: getProjectDetails()
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
	const xmlApi : TemplateApiItems = getApiItems(xmlFormat, details);
		
	return ejs.render(
		readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(),
		{
			details: details,
			xmlDocs: xmlApi,
			codeDeclaration: getMarkdownCodeDeclaration(details),
			typeInfo: generatedTypeJson.typeInfo,
			capitalize: Helper.capitalize,
			getIdFrom: Helper.getIdFrom,
			createLinkToType: Helper.createLinkToType,
			createAnchorToType: Helper.createAnchorToType,
			getParameterType: Helper.getParameterType,
			isGenericType: Helper.isGenericType,
			project: getProjectDetails()
		}
	);
}

/**Gets the members of the type used for templating.
 * @param details {TypeInfo} - The type info to look into.
 * @param uris {TemplateApiUris} - The uris used to reference other templates for partials.
 * @returns Returns the list of members of the type used for templating.*/
function getMembers(details : TypeInfo, uris : TemplateApiUris) : MemberList[] {
	return [
		new MemberList(details.constructors, "constructors", "method", uris.constructors),
		new MemberList(details.fields, "fields", "field", uris.fields),
		new MemberList(details.staticFields, "static-fields", "field", uris.fields),
		new MemberList(details.properties, "properties", "property", uris.properties),
		new MemberList(details.staticProperties, "static-properties", "property", uris.properties),
		new MemberList(details.events, "events", "event", uris.events),
		new MemberList(details.staticEvents, "static-events", "event", uris.events),
		new MemberList(details.methods, "methods", "method", uris.methods),
		new MemberList(details.staticMethods, "static-methods", "method", uris.methods),
		new MemberList(details.operators, "operators", "method", uris.methods)
	];
}

/**Gets the relative links for the individual webpage to reference, in relation to the webpage.
 * @param localBasePath {string} - The local base path where the files can be found.
 * @param locals {string[]} - The local files that the template will generate and use.
 * @param globals {string[]} - The global files that the user already has and wants to include.
 * @returns Returns the links of both locals and globals relative to the individual webpage.*/
function getRelativeLinks(localBasePath : string, locals : string[], globals : string[]) : string[] {
	// Variables
	let list : string[] = [];
	
	for(let i = 0; i < locals.length; i++) {
		if(!locals[i] || locals[i] == "") { continue; }
		list.push(locals[i].replace(/.*[\\\/]([^\\\/]+)$/gm, `${ localBasePath }$1`));
	}
	
	list = list.concat(globals);
	
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
function getApiItems(format : (XmlFormat | undefined), details : (TypeInfo | MethodInfo | PropertyInfo | EventInfo | FieldInfo)) : TemplateApiItems {
	if(format == undefined) { format = new XmlFormat(); }
	
	return {
		summary: format.summary,
		returns: {
			exists: doesItemExist(
				format.returns ||
				((details as MethodInfo).returnType && (details as MethodInfo).returnType.name != "void" ?
					(details as MethodInfo).returnType.name :
					""
				)
			),
			value: format.returns,
			details: (details as MethodInfo).returnType
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
			exists: (
				doesArrayItemExist(format.parameters) ||
				doesArrayItemExist((details as (MethodInfo | PropertyInfo)).parameters)
			),
			value: getParameterDetails(format.parameters, details)
		},
		exceptions: {
			exists: doesArrayItemExist(format.exceptions),
			value: format.exceptions
		},
		typeParameters: {
			exists: (
				doesArrayItemExist(format.typeParameters) ||
				doesArrayItemExist((details as MethodInfo).genericParameters) ||
				doesArrayItemExist((details as TypeInfo).typeInfo ?
					(details as TypeInfo).typeInfo.genericParameters :
					[]
				)
			),
			value: getGenericParameterDetails(format.typeParameters, details)
		}
	};
}

/**Gets all the details of the method/property's parameters with the added description found within the xml. This is
 * so that even if there is no XML documentation to the parameters, they will still appear in the template.
 * @param format {NameDescription[]} - The list of names and descriptions of the parameters that were gathered.
 * @param details {MethodInfo | PropertyInfo | any} - The details to look into.
 * @returns Returns a true list of parameter details with descriptions, whether or not documented in the XML.*/
function getParameterDetails(format : NameDescription[], details : (MethodInfo | PropertyInfo | any)) : ParameterNameDescription[] {
	if(!details || !(details as (MethodInfo | PropertyInfo)).parameters) {
		return format as ParameterNameDescription[];
	}
	
	// Variables
	let parameters : ParameterNameDescription[] = [];
	let temp : ParameterInfo[] = (details as (MethodInfo | PropertyInfo)).parameters;
	
	for(let a = 0; a < temp.length; a++) {
		// Variables
		let index = -1;
		let parameter : ParameterNameDescription = {
			name: temp[a].name,
			description: "<p>No description.</p>",
			details: temp[a]
		};
		
		for(let b = 0; b < format.length; b++) {
			if(temp[a].name == format[b].name) {
				index = b;
				break;
			}
		}
		
		if(index != -1) { parameter.description = format[index].description; }
		parameters.push(parameter);
	}
	
	return parameters;
}

/**Gets all the details of the type/method's generic parameters with the added description found within the xml. This
 * is so that even if there is no XML documentation to the generic parameters, they will still appear in the template.
 * @param format {NameDescription[]} - The list of names and description of the generic parameters that were gathered.
 * @param details {TypeInfo | MethodInfo | any} - The details to look into.
 * @returns Returns a true list of generic parameter details with descriptions, whether or not documented in the XML.*/
function getGenericParameterDetails(format : NameDescription[], details : (TypeInfo | MethodInfo | any)) : GenericParameterNameDescription[] {
	if(
		details &&
		(
			(details as MethodInfo).genericParameters ||
			(
				(details as TypeInfo).typeInfo &&
				(details as TypeInfo).typeInfo.genericParameters
			)
		)
	) {
		// Variables
		let typeParameters : GenericParameterNameDescription[] = [];
		let temp : GenericParametersInfo[] = ((details as MethodInfo).genericParameters ?
			(details as MethodInfo).genericParameters :
			(details as TypeInfo).typeInfo.genericParameters
		);
		
		for(let a = 0; a < temp.length; a++) {
			// Variables
			let index = -1;
			let generic : GenericParameterNameDescription = {
				name: temp[a].name,
				description: "<p>No description.</p>",
				details: temp[a]
			};
			
			for(let b = 0; b < format.length; b++) {
				if(temp[a].name == format[b].name) {
					index = b;
					break;
				}
			}
			
			if(index != -1) { generic.description = format[index].description; }
			typeParameters.push(generic);
		}
		
		return typeParameters;
	}
	
	return format as GenericParameterNameDescription[];
}

/**Finds if the given string is non-empty and exists.
 * @param str {string} - The string in quest.
 * @returns Returns true if the string is non-empty and exists.*/
function doesItemExist(str : string) : boolean { return (str != null && str != undefined && str != ""); }

/**Finds if the array is non-empty and exists.
 * @param list {any[]} - The list in question.
 * @returns Returns true if the list is non-empty and exists.*/
function doesArrayItemExist(list : any[]) : boolean { return (list != null && list != undefined && list.length > 0); }

/**Gets the code declaration thats been parsed through markdown-it.
 * @param info {TypeInfo | FieldInfo | PropertyInfo | EventInfo | MethodInfo} - The info to look into.
 * @returns Returns the rendered markdown code.*/
function getMarkdownCodeDeclaration(info : (TypeInfo | FieldInfo | PropertyInfo | EventInfo | MethodInfo)) : string {
	// Variables
	let code = "";
	
	for(let i = 0; i < info.attributes.length; i++) {
		code += info.attributes[i].fullDeclaration + "\n";
	}
	code += info.fullDeclaration;
	if(!(info as TypeInfo).staticMethods) {
		code += ";";
	}
	code = "```csharp\n" + code + "\n```";
	
	return markdown.render(code);
}
