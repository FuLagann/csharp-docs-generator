
import core = require("@actions/core");
import { readFile } from "./read-file";
import { InputArguments } from "./models/InputArguments";
import { CompactFullUris, TemplateJson } from "./models/TemplateJson";

/**Gets all the inputs from the action.yml file.
 * @returns Returns the input arguments from the action.yml file*/
export function getInputs() : InputArguments {
	// Variables
	let results : InputArguments = new InputArguments();
	
	results.buildTasks = splitString(core.getInput("build-tasks") || "", ',');
	results.cleanUpTasks = splitString(core.getInput("cleanup-tasks") || "", ',');
	results.binaries = splitString(core.getInput("binaries") || "", ",");
	results.branchName = core.getInput("branch-name") || results.branchName;
	results.amendNoEdit = Boolean(core.getInput("amend-no-edit") == "true" || results.amendNoEdit);
	results.outputPath = core.getInput("output-path") || results.outputPath;
	results.user.name = core.getInput("user-name") || results.user.name;
	results.user.email = core.getInput("user-email") || results.user.email;
	results.templatePath = core.getInput("template-json") || results.templatePath;
	gatherUris(results.template, results.templatePath);
	
	return results;
}

/**Gathers all the uris needed for templating the documentation.
 * @param template {TemplateJson} - The template json to fill up.
 * @param yamlUri {string | undefined} - The yaml uri to look into.
 * @returns Returns all the uris needed for templating the documention.*/
function gatherUris(template : TemplateJson, yamlUri : string | undefined) : TemplateJson {
	// Variables
	const yamlJson : TemplateJson = JSON.parse(yamlUri ? readFile(yamlUri).toString() : "{}");
	
	template.baseUri = yamlJson.baseUri || template.baseUri;
	template.cssUris = yamlJson.cssUris || template.cssUris;
	template.scriptUris = yamlJson.scriptUris || template.scriptUris;
	template.namespaceUri = yamlJson.namespaceUri || template.namespaceUri;
	template.typeUri = yamlJson.typeUri || template.typeUri;
	gatherCompactFullUri(template.constructorsUri, yamlJson.constructorsUri);
	gatherCompactFullUri(template.fieldsUri, yamlJson.fieldsUri);
	gatherCompactFullUri(template.propertiesUri, yamlJson.propertiesUri);
	gatherCompactFullUri(template.eventsUri, yamlJson.eventsUri);
	gatherCompactFullUri(template.methodsUri, yamlJson.methodsUri);
	
	return template;
}

/**Gathers the compact-full uris used for the template json.
 * @param templateUri {CompactFullUris} - The template uri to fill up.
 * @param yamlUri {CompactFullUris} - The uri coming from the action.yml.
 * @returns Returns the compact-full uris used for the template json*/
function gatherCompactFullUri(templateUri : CompactFullUris, yamlUri : CompactFullUris) : CompactFullUris {
	templateUri.compact = (yamlUri ?
		yamlUri.compact || templateUri.compact :
		templateUri.compact
	);
	templateUri.full = (yamlUri ?
		yamlUri.full || templateUri.full :
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
