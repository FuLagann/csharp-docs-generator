"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
const InputArguments_1 = require("./models/InputArguments");
// External functionalities
const read_file_1 = require("./read-file");
// External libraries
const core = require("@actions/core");
/**Gets all the inputs from the action.yml file.
 * @returns Returns the input arguments from the action.yml file*/
function getInputs() {
    // Variables
    let results = new InputArguments_1.InputArguments();
    results.buildTasks = splitString(core.getInput("build-tasks") || "", ',');
    results.cleanUpTasks = splitString(core.getInput("cleanup-tasks") || "", ',');
    results.binaries = splitString(core.getInput("binaries") || "", ",");
    results.branchName = core.getInput("branch-name") || results.branchName;
    results.amendNoEdit = Boolean(core.getInput("amend-no-edit") == "true" || results.amendNoEdit);
    results.outputPath = core.getInput("output-path") || results.outputPath;
    results.user.name = core.getInput("user-name") || results.user.name;
    results.user.email = core.getInput("user-email") || results.user.email;
    results.templatePath = core.getInput("template-json") || results.templatePath;
    results.outputExtension = core.getInput("output-extension") || results.outputExtension;
    results.includePrivate = Boolean(core.getInput("include-private") == "true" || results.includePrivate);
    gatherUris(results.template, results.templatePath);
    return results;
}
exports.getInputs = getInputs;
/**Gathers all the uris needed for templating the documentation.
 * @param template {TemplateUris} - The template json to fill up.
 * @param yamlUri {string | undefined} - The yaml uri to look into.
 * @returns Returns all the uris needed for templating the documention.*/
function gatherUris(template, yamlUri) {
    // Variables
    const yamlJson = JSON.parse(yamlUri ? read_file_1.readFile(yamlUri).toString() : "{}");
    template.base = yamlJson.base || template.base;
    template.css = yamlJson.css || template.css;
    template.scripts = yamlJson.scripts || template.scripts;
    template.namespace = yamlJson.namespace || template.namespace;
    template.type = yamlJson.type || template.type;
    gatherCompactFullUri(template.constructors, yamlJson.constructors);
    gatherCompactFullUri(template.fields, yamlJson.fields);
    gatherCompactFullUri(template.properties, yamlJson.properties);
    gatherCompactFullUri(template.events, yamlJson.events);
    gatherCompactFullUri(template.methods, yamlJson.methods);
    return template;
}
/**Gathers the compact-full uris used for the template json.
 * @param templateUri {CompactFullUris} - The template uri to fill up.
 * @param yamlUri {CompactFullUris} - The uri coming from the action.yml.
 * @returns Returns the compact-full uris used for the template json*/
function gatherCompactFullUri(templateUri, yamlUri) {
    templateUri.compact = (yamlUri ?
        yamlUri.compact || templateUri.compact :
        templateUri.compact);
    templateUri.full = (yamlUri ?
        yamlUri.full || templateUri.full :
        templateUri.full);
    return templateUri;
}
/**Splits the string with respect to not splitting strings unnecessarily.
 * @param str {string} - The string to split.
 * @param delimiter {string} - The delimiter to split the string with.
 * @returns Returns the list of strings that are split correctly.*/
function splitString(str, delimiter) {
    if (str == "") {
        return [];
    }
    // Variables
    let prev = 0;
    let results = [];
    let isQuoted = false;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '"') {
            isQuoted = !isQuoted;
        }
        else if (!isQuoted && str.charAt(i) == delimiter) {
            results.push(str.substr(prev, i - prev).trim());
            prev = i + 1;
        }
    }
    results.push(str.substr(prev).trim());
    return results;
}
