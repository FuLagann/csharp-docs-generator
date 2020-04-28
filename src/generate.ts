
// Models
import { InputArguments } from "./models/InputArguments";
import { TypeInfo, TypeList, FieldInfo, PropertyInfo, EventInfo, MethodInfo } from "./models/SharpChecker";
import { SidebarView } from "./models/TemplateApi";
// External functionalities
import { TEMP_FOLDER, getSharpCheckerExe, getArguments } from "./index";
import { readFile } from "./read-file";
import { createInternalLink } from "./read-xml";
import { getIdFrom } from "./template-helpers";
import { compileBase, compileNamespace, compileSidebar } from "./template";
// External libraries
import { exec } from "@actions/exec";
import fs = require("fs");
import io = require("@actions/io");
import path = require("path");

// Variables
let typeList : (TypeList | null) = null;

/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
export async function generateHtmlDocumentation(args : InputArguments) {
	// Variables
	const list : TypeList = await generateTypeList(args);
	const sidebar : SidebarView = await createSidebar(list);
	const sidebarHtml : string = compileSidebar(args, sidebar);
	const navFilename : string = args.outputPath + "--navigation" + args.outputExtension;
	
	console.log("Generating HTML Documentation...");
	await generateCssAndScriptFiles(args);
	fs.writeFileSync(navFilename, sidebarHtml);
	for(const key in list.types) {
		// Variables
		const value : string[] = list.types[key] as string[];
		const namespaceFilename = args.outputPath + key + args.outputExtension;
		const html = (await compileNamespace(args, key, value)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
		
		fs.writeFileSync(namespaceFilename.toLowerCase(), html);
		console.log(`Created ${ namespaceFilename }`);
		
		for(let i = 0; i < value.length; i++) {
			// Variables
			const typePath = value[i].replace(/\//g, ".");
			if(typePath.indexOf("<") != -1) { continue; }
			const filename = args.outputPath + typePath.replace(/`/g, "-") + args.outputExtension;
			const html = (await compileBase(args, typePath)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
			
			fs.writeFileSync(filename.toLowerCase(), html);
			console.log(`Created ${ filename }!`);
		}
	}
	console.log("Generation completed!");
}

/**Generates the local css and javascript files used by the template.
 * @param args {InputArguments} - The input arguments to look into the local css and javascript.*/
export async function generateCssAndScriptFiles(args : InputArguments) {
	await generateSupplementaryFile(path.join(args.outputPath, "css/"), args.templateUris.localCss || []);
	await generateSupplementaryFile(path.join(args.outputPath, "js/"), args.templateUris.localScripts || []);
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

/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.*/
async function generateSupplementaryFile(basePath : string, files : string[]) {
	try { await io.mkdirP(basePath); } catch {}
	for(let i = 0; i < files.length; i++) {
		// Variables
		const filename = files[i].replace(/.*[\\\/]([\w\.]+)$/gm, "$1");
		const content = readFile(files[i]);
		
		console.log(path.join(basePath, filename));
		fs.writeFileSync(path.join(basePath, filename), content);
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

/**Creates a sidebar view from the given list of types.
 * @param list {TypeList} - The list of types to look into.
 * @returns Returns a sidebar view to be generated through templating.*/
async function createSidebar(list : TypeList) : Promise<SidebarView> {
	// Variables
	let sidebar : SidebarView = new SidebarView("$~root", "");
	
	for(const key in list.types) {
		// Variables
		const values : string[] = list.types[key];
		
		for(let a = 0; a < values.length; a++) {
			// Variables
			const value = values[a];
			const matches = value.match(/\w+(?=\.)/g);
			
			sidebar = await assignToSidebar(sidebar, matches || [], value);
		}
	}
	
	return sidebar;
}

/**Assigns the type and namespaces to the sidebar.
 * @param sidebar {SidebarView} - The sidebar view to insert the type into.
 * @param namespaces {string[]} - The breadcrumb of namespaces to place into the sidebar.
 * @param typePath {string} - The path of the type.
 * @returns Returns the sidebar view with the inserted type.*/
async function assignToSidebar(sidebar : SidebarView, namespaces : string[], typePath : string) : Promise<SidebarView> {
	// Variables
	let args : InputArguments = getArguments();
	let tempSidebar : SidebarView = sidebar;
	let namespaceName : string = namespaces.join('.');
	let index : number = indexOfSidebarChild(tempSidebar.children, namespaceName);
	let typeInfo : TypeInfo;
	
	if(index == -1) {
		tempSidebar = insertionSortChild(tempSidebar, new SidebarView(namespaceName, ""));// namespaceName));
	}
	else {
		tempSidebar = tempSidebar.children[index];
	}
	
	typeInfo = await generateTypeDetails(args, typePath);
	tempSidebar = insertionSortChild(
		tempSidebar,
		new SidebarView(
			typeInfo.typeInfo.name,
			createInternalLink(typeInfo.typeInfo.unlocalizedName)
		)
	);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.constructors);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.fields);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticFields);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.properties);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticProperties);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.events);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticEvents);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.methods);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticMethods);
	tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.operators);
	
	return sidebar;
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
function insertMember(type : TypeInfo, sidebar : SidebarView, details : (FieldInfo[] | PropertyInfo[] | EventInfo[] | MethodInfo[])) : SidebarView {
	// Variables
	let name : string;
	
	for(let i = 0; i < details.length; i++) {
		name = details[i].name;
		if((details[i] as MethodInfo).genericParameters) {
			// Variables
			const method = details[i] as MethodInfo;
			
			name = `${ name }${ method.genericParameters }(${ method.parameterDeclaration })`;
		}
		else if((details[i] as PropertyInfo).getSetDeclaration) {
			// Variables
			const property = details[i] as PropertyInfo;
			
			if(property.parameters.length > 0) {
				name = `${ name }(${ property.parameterDeclaration })`;
			}
		}
		sidebar.children.push(new SidebarView(
			name,
			`${ createInternalLink(type.typeInfo.unlocalizedName) }#${ getIdFrom(details[i]) }`
		));
	}
	
	return sidebar;
}
