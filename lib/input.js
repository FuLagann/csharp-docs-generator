"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Models
const InputArguments_1 = require("./models/InputArguments");
// External functionalities
const index_1 = require("./index");
const read_file_1 = require("./read-file");
// External libraries
const core = require("@actions/core");
const tools = require("@actions/tool-cache");
const path = require("path");
/**Gets all the inputs from the action.yml file.
 * @returns Returns the input arguments from the action.yml file*/
function getInputs() {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let results = new InputArguments_1.InputArguments();
        results.buildTasks = splitString(core.getInput("build-tasks") || "", ',');
        results.cleanUpTasks = splitString(core.getInput("cleanup-tasks") || "", ',');
        results.binaries = splitString(core.getInput("binaries") || "", ",");
        results.branchName = core.getInput("branch-name") || results.branchName;
        results.outputPath = (core.getInput("output-path") || results.outputPath).trim();
        if (!results.outputPath.endsWith("/") || !results.outputPath.endsWith("\\")) {
            results.outputPath += "/";
        }
        results.user.name = core.getInput("user-name") || results.user.name;
        results.user.email = core.getInput("user-email") || results.user.email;
        results.outputExtension = core.getInput("output-extension") || results.outputExtension;
        results.includePrivate = Boolean(core.getInput("include-private") == "true" || results.includePrivate);
        results.template = core.getInput("template") || results.template;
        results.templatePath = core.getInput("template-uris-json") || results.templatePath;
        results.projectDetails = core.getInput("project-details-json") || results.projectDetails;
        console.log("Gathering template data.");
        results.templateUris = yield getTemplate(results.template, results.templateUris);
        results.templateUris = gatherUris(results.templatePath, results.templateUris, results.templatePath);
        return results;
    });
}
exports.getInputs = getInputs;
/**Downloads the template data and returns the files that the template uses.
 * @param templateID {string} - The name of the template to look up.
 * @returns Returns the template files used for templating.*/
function getTemplate(templateID, defaultUris) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Variables
            const toolLocation = getTemplateToolLocation(templateID);
            const zipLocation = yield tools.downloadTool(toolLocation);
            const unzipLocation = yield tools.extractZip(zipLocation, index_1.TEMP_FOLDER);
            let template = JSON.parse(read_file_1.readFile(`${unzipLocation}/template.json`));
            template.base = path.join(index_1.TEMP_FOLDER, template.base);
            template.namespace = path.join(index_1.TEMP_FOLDER, template.namespace);
            template.type = path.join(index_1.TEMP_FOLDER, template.type);
            template.header = path.join(index_1.TEMP_FOLDER, template.header);
            template.footer = path.join(index_1.TEMP_FOLDER, template.footer);
            template.navigation = path.join(index_1.TEMP_FOLDER, template.navigation);
            template.constructors = updatePath(index_1.TEMP_FOLDER, template.constructors);
            template.fields = updatePath(index_1.TEMP_FOLDER, template.fields);
            template.properties = updatePath(index_1.TEMP_FOLDER, template.properties);
            template.events = updatePath(index_1.TEMP_FOLDER, template.events);
            template.methods = updatePath(index_1.TEMP_FOLDER, template.methods);
            template.localCss = updatePathForArray(index_1.TEMP_FOLDER, template.localCss);
            template.localScripts = updatePathForArray(index_1.TEMP_FOLDER, template.localScripts);
            template.globalCss = updatePathForArray(index_1.TEMP_FOLDER, template.globalCss);
            template.globalScripts = updatePathForArray(index_1.TEMP_FOLDER, template.globalScripts);
            return template;
        }
        catch (_a) {
            if (templateID == "default") {
                return defaultUris;
            }
            return yield getTemplate("default", defaultUris);
        }
    });
}
/**Updates the path of the given compact-full uris.
 * @param basePath {string} - The base path to where it is found.
 * @param uri {CompactFullUris} - The compact-full uris to update.
 * @returns Returns the compact-ful uris with updated paths.*/
function updatePath(basePath, uri) {
    uri.compact = path.join(basePath, uri.compact);
    uri.full = path.join(basePath, uri.full);
    return uri;
}
/**Updates the path for an entire array.
 * @param basePath {string} - The base path of where the files should be found.
 * @param list {string[]} - The list of files to update.
 * @returns Returns the list of files with updated paths*/
function updatePathForArray(basePath, list) {
    for (let i = 0; i < list.length; i++) {
        list[i] = path.join(basePath, list[i]);
    }
    return list;
}
/**Gets the location of where to download the template data.
 * @param templateID {string} - The indentifying name of the template, found within the repository's
 * packages directory. Alternatively, providing a link will just return the link.
 * @returns Returns the location of where to download the template data.*/
function getTemplateToolLocation(templateID) {
    if (templateID.startsWith("https://") || templateID.startsWith("http://")) {
        return templateID;
    }
    // Variables
    const index = templateID.indexOf('@');
    let templateZip = templateID.trim();
    let branch = "master";
    if (index != -1) {
        templateZip = templateZip.substring(0, index);
        branch = templateID.substring(index + 1);
    }
    if (!templateID.endsWith(".zip")) {
        templateZip = templateID + ".zip";
    }
    // TODO: Check whether or not this even exists. If it doesn't then resort to a default.
    return `https://github.com/FuLagann/csharp-docs-generator/raw/${branch}/packages/templates/${templateZip}`;
}
/**Gathers all the uris needed for templating the documentation.
 * @param template {TemplateUris} - The template json to fill up.
 * @param yamlUri {string | undefined} - The yaml uri to look into.
 * @returns Returns all the uris needed for templating the documention.*/
function gatherUris(templatePath, template, yamlUri) {
    // Variables
    const yamlJson = JSON.parse(yamlUri ? read_file_1.readFile(yamlUri, "{}") : "{}");
    const basePath = (templatePath == "" || templatePath == "." ?
        "./" :
        templatePath.replace(/[\\\/][\w\.]+$/gm, "/"));
    template.base = getFilename(basePath, yamlJson.base, template.base);
    template.includeDefaultCss = yamlJson.includeDefaultCss || template.includeDefaultCss;
    template.includeDefaultScripts = yamlJson.includeDefaultScripts || template.includeDefaultScripts;
    template.localCss = getFilenames(template.includeDefaultCss, basePath, yamlJson.localCss, template.localCss);
    template.localScripts = getFilenames(template.includeDefaultScripts, basePath, yamlJson.localScripts, template.localScripts);
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
function getFilename(basePath, yaml, template) {
    if (yaml && yaml != "") {
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
function getFilenames(includeTemplates, basePath, yamls, templates) {
    // Variables
    let list = [];
    if (yamls && yamls.length > 0) {
        for (let i = 0; i < yamls.length; i++) {
            if (yamls[i] == "") {
                continue;
            }
            list.push(path.join(basePath, yamls[i]));
        }
    }
    if (includeTemplates || !yamls) {
        list = list.concat(templates);
    }
    return list;
}
/**Gathers the compact-full uris used for the template json.
 * @param templateUri {CompactFullUris} - The template uri to fill up.
 * @param yamlUri {CompactFullUris} - The uri coming from the action.yml.
 * @returns Returns the compact-full uris used for the template json*/
function gatherCompactFullUri(basePath, templateUri, yamlUri) {
    if (templateUri == undefined) {
        templateUri = { compact: "", full: "" };
    }
    templateUri.compact = (yamlUri ?
        getFilename(basePath, yamlUri.compact, templateUri.compact) :
        templateUri.compact);
    templateUri.full = (yamlUri ?
        getFilename(basePath, yamlUri.full, templateUri.full) :
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
