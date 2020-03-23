"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const read_file_1 = require("./read-file");
const InputArguments_1 = require("./models/InputArguments");
/**Gets all the inputs from the action.yml file.
 * @returns Returns the input arguments from the action.yml file*/
function getInputs() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Variables
    let results = new InputArguments_1.InputArguments();
    results.buildTasks = splitString((_a = core.getInput("build-tasks")) !== null && _a !== void 0 ? _a : "", ',');
    results.cleanUpTasks = splitString((_b = core.getInput("cleanup-tasks")) !== null && _b !== void 0 ? _b : "", ',');
    results.binaries = splitString((_c = core.getInput("binaries")) !== null && _c !== void 0 ? _c : "", ",");
    results.branchName = (_d = core.getInput("branch-name")) !== null && _d !== void 0 ? _d : results.branchName;
    results.amendNoEdit = Boolean((_e = core.getInput("amend-no-edit") == "true") !== null && _e !== void 0 ? _e : results.amendNoEdit);
    results.outputPath = (_f = core.getInput("output-path")) !== null && _f !== void 0 ? _f : results.outputPath;
    results.user.name = (_g = core.getInput("user-name")) !== null && _g !== void 0 ? _g : results.user.name;
    results.user.email = (_h = core.getInput("user-email")) !== null && _h !== void 0 ? _h : results.user.email;
    results.templatePath = (_j = core.getInput("template-json")) !== null && _j !== void 0 ? _j : results.templatePath;
    gatherUris(results.template, results.templatePath);
    return results;
}
exports.getInputs = getInputs;
/**Gathers all the uris needed for templating the documentation.
 * @param template {TemplateJson} - The template json to fill up.
 * @param yamlUri {string | undefined} - The yaml uri to look into.
 * @returns Returns all the uris needed for templating the documention.*/
function gatherUris(template, yamlUri) {
    var _a, _b, _c, _d, _e;
    // Variables
    const yamlJson = JSON.parse(yamlUri ? read_file_1.readFile(yamlUri).toString() : "{}");
    template.baseUri = (_a = yamlJson.baseUri) !== null && _a !== void 0 ? _a : template.baseUri;
    template.cssUris = (_b = yamlJson.cssUris) !== null && _b !== void 0 ? _b : template.cssUris;
    template.scriptUris = (_c = yamlJson.scriptUris) !== null && _c !== void 0 ? _c : template.scriptUris;
    template.namespaceUri = (_d = yamlJson.namespaceUri) !== null && _d !== void 0 ? _d : template.namespaceUri;
    template.typeUri = (_e = yamlJson.typeUri) !== null && _e !== void 0 ? _e : template.typeUri;
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
function gatherCompactFullUri(templateUri, yamlUri) {
    var _a, _b;
    templateUri.compact = (yamlUri ? (_a = yamlUri.compact) !== null && _a !== void 0 ? _a : templateUri.compact :
        templateUri.compact);
    templateUri.full = (yamlUri ? (_b = yamlUri.full) !== null && _b !== void 0 ? _b : templateUri.full :
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
