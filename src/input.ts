
// Models
import { CompactFullUris, InputArguments, TemplateUris } from "./models/InputArguments";
// External functionalities
import { TEMP_FOLDER } from "./index";
import { readFile } from "./read-file";
// External libraries
import core = require("@actions/core");
import tools = require("@actions/tool-cache");
import path = require("path");

/**Gets all the inputs from the action.yml file.
 * @returns Returns the input arguments from the action.yml file*/
export async function getInputs() : Promise<InputArguments> {
	// Variables
	let results : InputArguments = new InputArguments();
	
	results.buildTasks = splitString(core.getInput("build-tasks") || "", ',');
	results.cleanUpTasks = splitString(core.getInput("cleanup-tasks") || "", ',');
	results.binaries = splitString(core.getInput("binaries") || "", ",");
	results.branchName = core.getInput("branch-name") || results.branchName;
	results.outputPath = core.getInput("output-path") || results.outputPath;
	results.user.name = core.getInput("user-name") || results.user.name;
	results.user.email = core.getInput("user-email") || results.user.email;
	results.outputExtension = core.getInput("output-extension") || results.outputExtension;
	results.includePrivate = Boolean(core.getInput("include-private") == "true" || results.includePrivate);
	results.template = core.getInput("template") || results.template;
	results.templatePath = core.getInput("template-uris-json") || results.templatePath;
	results.projectDetails = core.getInput("project-details-json") || results.projectDetails;
	console.log("Gathering template data.");
	results.templateUris = await getTemplate(results.template, results.templateUris);
	results.templateUris = gatherUris(results.templatePath, results.templateUris, results.templatePath);
	
	return results;
}

/**Downloads the template data and returns the files that the template uses.
 * @param templateID {string} - The name of the template to look up.
 * @returns Returns the template files used for templating.*/
async function getTemplate(templateID : string, defaultUris : TemplateUris) : Promise<TemplateUris> {
	try {
		// Variables
		const toolLocation : string = getTemplateToolLocation(templateID);
		const zipLocation : string = await tools.downloadTool(toolLocation);
		const unzipLocation : string = await tools.extractZip(zipLocation, TEMP_FOLDER);
		let template : TemplateUris = JSON.parse(readFile(`${ unzipLocation }/template.json`)) as TemplateUris;
		
		template.base = path.join(TEMP_FOLDER, template.base);
		template.namespace = path.join(TEMP_FOLDER, template.namespace);
		template.type = path.join(TEMP_FOLDER, template.type);
		template.header = path.join(TEMP_FOLDER, template.header);
		template.footer = path.join(TEMP_FOLDER, template.footer);
		template.navigation = path.join(TEMP_FOLDER, template.navigation);
		template.constructors = updatePath(TEMP_FOLDER, template.constructors);
		template.fields = updatePath(TEMP_FOLDER, template.fields);
		template.properties = updatePath(TEMP_FOLDER, template.properties);
		template.events = updatePath(TEMP_FOLDER, template.events);
		template.methods = updatePath(TEMP_FOLDER, template.methods);
		template.localCss = updatePathForArray(TEMP_FOLDER, template.localCss);
		template.localScripts = updatePathForArray(TEMP_FOLDER, template.localScripts);
		template.globalCss = updatePathForArray(TEMP_FOLDER, template.globalCss);
		template.globalScripts = updatePathForArray(TEMP_FOLDER, template.globalScripts);
		
		return template;
	} catch {
		if(templateID == "default") { return defaultUris; }
		return await getTemplate("default", defaultUris);
	}
}

/**Updates the path of the given compact-full uris.
 * @param basePath {string} - The base path to where it is found.
 * @param uri {CompactFullUris} - The compact-full uris to update.
 * @returns Returns the compact-ful uris with updated paths.*/
function updatePath(basePath : string, uri : CompactFullUris) : CompactFullUris {
	uri.compact = path.join(basePath, uri.compact);
	uri.full = path.join(basePath, uri.full);
	
	return uri;
}

/**Updates the path for an entire array.
 * @param basePath {string} - The base path of where the files should be found.
 * @param list {string[]} - The list of files to update.
 * @returns Returns the list of files with updated paths*/
function updatePathForArray(basePath : string, list : string[]) : string[] {
	for(let i = 0; i < list.length; i++) {
		list[i] = path.join(basePath, list[i]);
	}
	
	return list;
}

/**Gets the location of where to download the template data.
 * @param templateID {string} - The indentifying name of the template, found within the repository's
 * packages directory. Alternatively, providing a link will just return the link.
 * @returns Returns the location of where to download the template data.*/
function getTemplateToolLocation(templateID : string) : string {
	if(templateID.startsWith("https://") || templateID.startsWith("http://")) {
		return templateID;
	}
	
	// Variables
	const index : number = templateID.indexOf('@');
	let templateZip : string = templateID.trim();
	let branch : string = "master";
	
	if(index != -1) {
		templateZip = templateZip.substring(0, index);
		branch = templateID.substring(index + 1);
	}
	
	if(!templateID.endsWith(".zip")) { templateZip = templateID + ".zip"; }
	
	// TODO: Check whether or not this even exists. If it doesn't then resort to a default.
	return `https://github.com/FuLagann/csharp-docs-generator/raw/${ branch }/packages/${ templateZip }`;
}

/**Gathers all the uris needed for templating the documentation.
 * @param template {TemplateUris} - The template json to fill up.
 * @param yamlUri {string | undefined} - The yaml uri to look into.
 * @returns Returns all the uris needed for templating the documention.*/
function gatherUris(templatePath : string, template : TemplateUris, yamlUri : string | undefined) : TemplateUris {
	// Variables
	const yamlJson : TemplateUris = JSON.parse(yamlUri ? readFile(yamlUri, "{}") : "{}");
	const basePath : string = (templatePath == "" || templatePath == "." ?
		"./" :
		templatePath.replace(/[\\\/][\w\.]+$/gm, "/")
	);
	
	template.base = getFilename(basePath, yamlJson.base, template.base);
	template.includeDefaultCss = yamlJson.includeDefaultCss || template.includeDefaultCss;
	template.includeDefaultScripts = yamlJson.includeDefaultScripts || template.includeDefaultScripts;
	template.localCss = getFilenames(
		template.includeDefaultCss,
		basePath,
		yamlJson.localCss,
		template.localCss
	);
	template.localScripts = getFilenames(
		template.includeDefaultScripts,
		basePath,
		yamlJson.localScripts,
		template.localScripts
	);
	template.globalCss = yamlJson.globalCss || [];
	template.globalScripts = yamlJson.globalScripts || [];
	template.namespace = getFilename(basePath, yamlJson.namespace, template.namespace);
	template.type = getFilename(basePath, yamlJson.type, template.type);
	template.header = getFilename(basePath, yamlJson.header, template.header);
	template.footer = getFilename(basePath, yamlJson.footer, template.footer);
	template.navigation = getFilename(basePath, yamlJson.navigation, template.navigation);
	template.constructors = gatherCompactFullUri(basePath, template.constructors, yamlJson.constructors);
	template.fields = gatherCompactFullUri(basePath, template.fields, yamlJson.fields);
	template.properties = gatherCompactFullUri(basePath, template.properties, yamlJson.properties);
	template.events = gatherCompactFullUri(basePath, template.events, yamlJson.events);
	template.methods = gatherCompactFullUri(basePath, template.methods, yamlJson.methods);
	
	return template;
}

/**Gets the file name.
 * @param basePath {string} - The base path of where the template uri json the user has defined.
 * @param yaml {string | undefined} - The user defined location of the file.
 * @param template {string} - The location of the file that the template uses.
 * @returns Returns the filename that is either user defined or template defined.*/
function getFilename(basePath : string, yaml : (string | undefined), template : string) : string {
	if(yaml && yaml != "") {
		return path.join(basePath, yaml);
	}
	return template;
}

/**Gets the file names of the given local files.
 * @param includeTemplates {boolean} - Set to true to include the template's internal files.
 * @param basePath {string} - The base path of the template uri json the user has provided.
 * @param yamls {string[] | undefined} - The list of local files that the user can
 * define and is used by their personal template.
 * @param templates {string[]} - The list of local files that the template has.
 * @returns Returns the list of file names of the local files.*/
function getFilenames(
	includeTemplates : boolean, basePath : string,
	yamls : (string[] | undefined), templates : string[]
) : string[] {
	// Variables
	let list : string[] = [];
	
	if(yamls && yamls.length > 0) {
		for(let i = 0; i < yamls.length; i++) {
			if(yamls[i] == "") { continue; }
			list.push(path.join(basePath, yamls[i]));
		}
	}
	if(includeTemplates || !yamls) {
		list = list.concat(templates);
	}
	
	return list;
}

/**Gathers the compact-full uris used for the template json.
 * @param templateUri {CompactFullUris} - The template uri to fill up.
 * @param yamlUri {CompactFullUris} - The uri coming from the action.yml.
 * @returns Returns the compact-full uris used for the template json*/
function gatherCompactFullUri(basePath : string, templateUri : CompactFullUris, yamlUri : (CompactFullUris | undefined)) : CompactFullUris {
	if(templateUri == undefined) {
		templateUri = { compact: "", full: "" };
	}
	templateUri.compact = (yamlUri ?
		getFilename(basePath, yamlUri.compact, templateUri.compact) :
		templateUri.compact
	);
	templateUri.full = (yamlUri ?
		getFilename(basePath, yamlUri.full, templateUri.full) :
		templateUri.full
	);
	
	return templateUri;
}

/**Splits the string with respect to not splitting strings unnecessarily.
 * @param str {string} - The string to split.
 * @param delimiter {string} - The delimiter to split the string with.
 * @returns Returns the list of strings that are split correctly.*/
function splitString(str : string, delimiter : string) : string[] {
	if(str == "") { return []; }
	
	// Variables
	let prev = 0;
	let results : string[] = [];
	let isQuoted : boolean = false;
	
	for(let i = 0; i < str.length; i++) {
		if(str.charAt(i) == '"') { isQuoted = !isQuoted; }
		else if(!isQuoted && str.charAt(i) == delimiter) {
			results.push(str.substr(prev, i - prev).trim());
			prev = i + 1;
		}
	}
	results.push(str.substr(prev).trim());
	
	return results;
}
