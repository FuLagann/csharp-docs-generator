
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, TypeList, FieldInfo, PropertyInfo, EventInfo, MethodInfo, QuickTypeInfo } from "./models/SharpChecker";
import { SidebarView, NamespaceDetails } from "./models/TemplateApi";
// External functionalities
import { saveSearchJs } from "./generate-search-js";
import { TEMP_FOLDER, getSharpCheckerExe, getArguments } from "./index";
import { readFile } from "./read-file";
import { createInternalLink } from "./read-xml";
import { getIdFrom } from "./template-helpers";
import { compileBase, compileBaseNamespace, compileSidebar, getNamespaceTypes } from "./template";
// External libraries
import { exec } from "@actions/exec";
import fs = require("fs");
import io = require("@actions/io");
import path = require("path");

// Variables
let sidebarView : SidebarView = new SidebarView("$~root", "", "");
let typeList : (TypeList | null) = null;
let projectDetails : any;

/**Gets the sidebar view.
 * @returns Returns the sidebar view.*/
export function getSidebarView() : SidebarView { return sidebarView; }

/**Sets the sidebar view.
 * @param sidebar {SidebarView} - The new sidebar view to set.*/
export function setSidebarView(sidebar : SidebarView) { sidebarView = sidebar; }

export function getProjectDetails() : any { return projectDetails; }

/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
export async function generateHtmlDocumentation(args : InputArguments) {
	// Variables
	const list : TypeList = await generateTypeList(args);
	let filename : string;
	let html : string;
	let namespaceTypes : { [key : string] : NamespaceDetails[] };
	let searchJs : string = path.join(TEMP_FOLDER, "js/search-types-members.js");
	
	if(args.projectDetails != "") {
		projectDetails = JSON.parse(readFile(args.projectDetails));
	}
	
	try { io.mkdirP(path.join(TEMP_FOLDER, "js/")); } catch {}
	args.templateUris.localScripts.push(searchJs);
	
	console.log("Generating type HTML documentation...");
	for(const key in list.types) {
		// Variables
		const value : string[] = list.types[key] as string[];
		
		for(let i = 0; i < value.length; i++) {
			// Variables
			const typePath = value[i].replace(/\//g, ".");
			
			if(typePath.indexOf("<") != -1) { continue; }
			
			filename = args.outputPath + typePath.replace(/`/g, "-") + args.outputExtension;
			html = (await compileBase(args, typePath)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
			
			fs.writeFileSync(filename.toLowerCase(), html);
			console.log(`Created ${ filename }!`);
		}
	}
	
	saveSearchJs(searchJs, sidebarView);
	console.log("Generating local CSS and JS files");
	await generateCssAndScriptFiles(args);
	console.log("Generating namespace HTML documentation...");
	namespaceTypes = getNamespaceTypes();
	for(const key in namespaceTypes) {
		// Variables
		const value : NamespaceDetails[] = namespaceTypes[key] as NamespaceDetails[];
		
		filename = args.outputPath + key + args.outputExtension;
		html = (await compileBaseNamespace(args, key, value)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
		
		fs.writeFileSync(filename.toLowerCase(), html);
		console.log(`Created ${ filename }`);
	}
	
	html = compileSidebar(args, sidebarView);
	filename = args.outputPath + "--navigation" + args.outputExtension;
	fs.writeFileSync(filename, html);
	console.log("HTML generation complete!");
}

/**Generates the local css and javascript files used by the template.
 * @param args {InputArguments} - The input arguments to look into the local css and javascript.*/
export async function generateCssAndScriptFiles(args : InputArguments) {
	await generateSupplementaryFile(path.join(args.outputPath, "/css/"), args.templateUris.localCss || []);
	await generateSupplementaryFile(path.join(args.outputPath, "/js/"), args.templateUris.localScripts || []);
	await generateSupplementaryFile(path.join(args.outputPath, "/images/"), args.templateUris.localImages || [], true);
}

/**Checks the type and returns it's info.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @param typePath {string} - The path to the type to look into.
 * @returns Returns the info of the type.*/
export async function generateTypeDetails(args : InputArguments, typePath : string) : Promise<TypeInfo> {
	// Variables
	const sharpChecker : string = getSharpCheckerExe();
	const sharpCheckerArgs : string[] = getSharpCheckerArguments(args, false, typePath);
	
	await exec(sharpChecker, sharpCheckerArgs);
	
	return JSON.parse(readFile(sharpCheckerArgs[1])) as TypeInfo;
}

/**Checks the list of types and returns their names.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @returns Returns the list of the the types contained within the binaries inputted.*/
export async function generateTypeList(args : InputArguments) : Promise<TypeList> {
	if(!typeList) {
		// Variables
		const sharpChecker : string = getSharpCheckerExe();
		const sharpCheckerArgs : string[] = getSharpCheckerArguments(args, true, "-l");
		
		await exec(sharpChecker, sharpCheckerArgs);
		typeList = JSON.parse(readFile(sharpCheckerArgs[1])) as TypeList;
	}
	return typeList;
}

/**Assigns the type and namespaces to the sidebar.
 * @param sidebar {SidebarView} - The sidebar view to insert the type into.
 * @param typeInfo {TypeInfo} - The type info to look into.
 * @returns Returns the sidebar view with the inserted type.*/
export function assignTypeToSidebr(sidebar : SidebarView, typeInfo : TypeInfo) : SidebarView {
	// Variables
	let args : InputArguments = getArguments();
	let tempSidebar : SidebarView = sidebar;
	let namespaceName : string = (typeInfo.typeInfo.namespaceName != "" ? 
		typeInfo.typeInfo.namespaceName :
		"(No Namespace)"
	);
	let index : number = indexOfSidebarChild(tempSidebar.children, namespaceName);
	
	if(index == -1) {
		tempSidebar = insertionSortChild(
			tempSidebar,
			new SidebarView(
				namespaceName,
				namespaceName.toLowerCase() + args.outputExtension,
				"namespace"
			)
		);
	}
	else {
		tempSidebar = tempSidebar.children[index];
	}
	
	tempSidebar = insertionSortChild(
		tempSidebar,
		new SidebarView(
			typeInfo.typeInfo.name,
			createInternalLink(typeInfo.typeInfo.unlocalizedName),
			(
				(typeInfo.isNested ? "nested," : "") +
				(typeInfo.isSealed ? "sealed," : "") +
				(typeInfo.isStatic ? "static," : "") +
				"type"
			)
		)
	);
	tempSidebar = insertMember("member,constructor", typeInfo, tempSidebar, typeInfo.constructors);
	tempSidebar = insertMember("member,field", typeInfo, tempSidebar, typeInfo.fields);
	tempSidebar = insertMember("member,static,field", typeInfo, tempSidebar, typeInfo.staticFields);
	tempSidebar = insertMember("member,property", typeInfo, tempSidebar, typeInfo.properties);
	tempSidebar = insertMember("member,static,property", typeInfo, tempSidebar, typeInfo.staticProperties);
	tempSidebar = insertMember("member,event", typeInfo, tempSidebar, typeInfo.events);
	tempSidebar = insertMember("member,static,event", typeInfo, tempSidebar, typeInfo.staticEvents);
	tempSidebar = insertMember("member,method", typeInfo, tempSidebar, typeInfo.methods);
	tempSidebar = insertMember("member,static,method", typeInfo, tempSidebar, typeInfo.staticMethods);
	tempSidebar = insertMember("member,static,operator", typeInfo, tempSidebar, typeInfo.operators);
	
	return sidebar;
}

/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.*/
async function generateSupplementaryFile(basePath : string, files : string[], useBase64 : boolean = false) {
	try { await io.mkdirP(basePath); } catch {}
	
	for(let i = 0; i < files.length; i++) {
		// Variables
		const filename = files[i].replace(/.*[\\\/]([^\\\/]+)$/gm, "$1");
		const filepath = path.join(basePath, filename);
		
		fs.copyFileSync(files[i], filepath);
		
		// const content = readFile(files[i]);
		
		// if(!useBase64) {
		// 	fs.writeFileSync(path.join(basePath, filename), content);
		// }
		// else {
		// 	fs.writeFileSync(path.join(basePath, filename), content, "base64");
		// }
	}
}

/**Gets the arguments for sharp checker.
 * @param args {InputArguments} - The input arguments to get the binaries from.
 * @param isList {boolean} - Set to true to print out a list of types.
 * @param typePath {string} - The type path to search (can be used to determine if it's a type list).
 * @returns Returns a list of arguments used for sharp checker.*/
function getSharpCheckerArguments(args : InputArguments, isList : boolean, typePath : string) : string[] {
	// Variables
	const includePrivate : string[] = args.includePrivate ? ["-p"] : [];
	const outputPath : string = TEMP_FOLDER + (isList ? "list.json" : "type.json");
	
	return ["-o", outputPath, typePath].concat(includePrivate).concat(args.binaries);
}

/**Gets the index of the sidebar child from the given name.
 * @param children {SidebarView[]} - The list of sidebar views to look into.
 * @param name {string} - The name of the sidebar view too look for.
 * @returns Returns the index of the child that was found, returns -1 if no child was found.*/
function indexOfSidebarChild(children : SidebarView[], name : string) : number {
	for(let i = 0; i < children.length; i++) {
		if(children[i].name == name) { return i; }
	}
	
	return -1;
}

/**Inserts the child through an insertion sort.
 * @param sidebar {SidebarView} - The sidebar view to insert the child into.
 * @param newSidebar {SidebarView} - The child to insert into the sidebar.
 * @returns Returns the sidebar view with the inserted child.*/
function insertionSortChild(sidebar : SidebarView, newSidebar : SidebarView) : SidebarView {
	for(let i = 0; i < sidebar.children.length; i++) {
		if(sidebar.children[i].name.localeCompare(newSidebar.name) > 0) {
			sidebar.children.splice(i, 0, newSidebar);
			return sidebar.children[i];
		}
	}
	
	sidebar.children.push(newSidebar);
	return sidebar.children[sidebar.children.length - 1];
}

/**Inserts the member into the sidebar in an unsorted fashion.
 * @param type {TypeInfo} - The type used to get the link for the sidebar.
 * @param sidebar {SidebarView} - The sidebar to insert the member.
 * @param details {FieldInfo[] | PropertyInfo[] | EventInfo[] | MethodInfo[]} - The list of details to iterate through and generate the sidebar member content.
 * @returns Returns the sidebar with the inserted member.*/
function insertMember(tags : string, type : TypeInfo, sidebar : SidebarView, details : (FieldInfo[] | PropertyInfo[] | EventInfo[] | MethodInfo[])) : SidebarView {
	// Variables
	let name : string;
	
	for(let i = 0; i < details.length; i++) {
		name = details[i].name;
		if((details[i] as MethodInfo).genericParameters) {
			// Variables
			const method = details[i] as MethodInfo;
			
			if(!method.isConstructor) {
				if(method.isVirtual) { tags += ",virtual"; }
			}
			name = `${ name }${ method.genericDeclaration }(${ method.parameterDeclaration })`;
		}
		else if((details[i] as PropertyInfo).getSetDeclaration) {
			// Variables
			const property = details[i] as PropertyInfo;
			
			if(property.hasGetter) {
				if(property.getter.isVirtual) { tags += ",virtual"; }
			}
			else {
				if(property.setter.isVirtual) { tags += ",virtual"; }
			}
			if(property.parameters.length > 0) {
				name = `${ name }(${ property.parameterDeclaration })`;
			}
		}
		sidebar.children.push(new SidebarView(
			name,
			`${ createInternalLink(type.typeInfo.unlocalizedName) }#${ getIdFrom(details[i]) }`,
			tags
		));
	}
	
	return sidebar;
}
