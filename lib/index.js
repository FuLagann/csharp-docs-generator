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
const artifact = require("@actions/artifact");
const core = require("@actions/core");
const input = require("./input");
const io = require("@actions/io");
const tools = require("@actions/tool-cache");
const fs = require("fs");
const exec_1 = require("@actions/exec");
const read_xml_1 = require("./read-xml");
const generate_1 = require("./generate");
// Variables
exports.TEMP_FOLDER = "__temp/";
exports.NETSTANDARD_XMLS = [];
const NETSTANDARD_API = "https://github.com/FuLagann/csharp-docs-generator/raw/paulsbranch/packages/netstandard.zip";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-win-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-win-x64/SharpChecker";
const args = input.getInputs();
let dependencies = read_xml_1.getXmls(args.binaries).concat(exports.NETSTANDARD_XMLS);
let sharpCheckerExe;
let xmlApi;
let typeList;
for (let i = 1; i <= 32; i++) {
    exports.NETSTANDARD_XMLS.push(`${exports.TEMP_FOLDER}/debugging/netstandard-p${i}.xml`);
}
/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
function getSharpCheckerExe() { return sharpCheckerExe; }
exports.getSharpCheckerExe = getSharpCheckerExe;
function getXmlApi() { return xmlApi; }
exports.getXmlApi = getXmlApi;
function getArguments() { return args; }
exports.getArguments = getArguments;
function getDependencies() { return dependencies; }
exports.getDependencies = getDependencies;
function getTypeList() { return typeList; }
exports.getTypeList = getTypeList;
/**Gets the template uri using the base path of the template json.
 * @param uri {string} - The file path relative to the template json.
 * @returns Returns the file path of the template uri.*/
function getTemplateUri(uri) {
    // Variables
    const basePath = (args.templatePath == "" || args.templatePath == "." ?
        "./" :
        args.templatePath.replace(/[\\\/][\w\.]+$/gm, "/"));
    return basePath + uri;
}
exports.getTemplateUri = getTemplateUri;
/**Catches any error and reports the action as a failed aciton*/
function onError(error) {
    return __awaiter(this, void 0, void 0, function* () { core.setFailed(error.message); });
}
/**Catches an error when pushing to git, this will check the status and push if possible.*/
function onGitError() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec_1.exec("git status").catch(onError);
        yield exec_1.exec("git pull").catch(onError);
        yield exec_1.exec("git push").catch(onError);
    });
}
/**Executes all the build tasks needed prior to document generation.*/
function executeBuildTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < args.buildTasks.length; i++) {
            // Variables
            const task = args.buildTasks[i].trim();
            if (task == "") {
                continue;
            }
            console.log(`Running: ${task}`);
            yield exec_1.exec(task);
        }
    });
}
/**Downloads the SharpChecker tool needed to look deeper into the binaries.*/
function downloadTools() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.rmRF(exports.TEMP_FOLDER);
        }
        catch (e) { }
        try {
            yield io.mkdirP(exports.TEMP_FOLDER);
        }
        catch (e) { }
        // Variables
        let zipLocation = yield tools.downloadTool(SHARP_CHECKER_URL);
        const unziplocation = yield tools.extractZip(zipLocation, exports.TEMP_FOLDER);
        zipLocation = yield tools.downloadTool(NETSTANDARD_API);
        yield tools.extractZip(zipLocation, exports.TEMP_FOLDER + "debugging/");
        sharpCheckerExe = `${unziplocation}/${SHARP_CHECKER_EXE}`;
    });
}
/**Generates the html documentation.*/
function generateDocs() {
    return __awaiter(this, void 0, void 0, function* () {
        typeList = yield generate_1.generateTypeList(args);
        xmlApi = new Map();
        try {
            yield io.rmRF(args.outputPath);
        }
        catch (e) { }
        try {
            yield io.mkdirP(args.outputPath);
        }
        catch (e) { }
        yield generate_1.generateHtmlDocumentation(args);
    });
}
exports.artifactFiles = [];
function uploadArtifacts() {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const client = artifact.create();
        const name = "debugging-artifacts";
        const files = fs.existsSync(exports.TEMP_FOLDER + "debugging/debug.txt") ? [exports.TEMP_FOLDER + "debugging/debug.txt"] : [];
        if (files.length > 0) {
            yield client.uploadArtifact(name, files.concat(exports.NETSTANDARD_XMLS), exports.TEMP_FOLDER + "debugging/", { continueOnError: true });
        }
    });
}
/**Cleans everything up before pushing to the repository so nothing unwanted gets committed.*/
function cleanUp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.rmRF(exports.TEMP_FOLDER);
            for (let i = 0; i < args.cleanUpTasks.length; i++) {
                // Variables
                const task = args.cleanUpTasks[i].trim();
                if (task == "") {
                    continue;
                }
                console.log(`Running: ${task}`);
                yield exec_1.exec(task);
            }
        }
        catch (e) { }
    });
}
/**Pushes the new content into the repository.*/
function gitPush() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec_1.exec("git", ["config", "--global", "user.name", args.user.name]);
        yield exec_1.exec("git", ["config", "--global", "user.email", args.user.email]);
        yield exec_1.exec("git", ["pull"]);
        // Creates a new branch to merge with
        if (args.branchName != "") {
            yield exec_1.exec("git", ["switch", "--create", args.branchName]);
        }
        yield exec_1.exec("git", ["add", "--all"]);
        // Commits along with previous commit instead
        if (args.amendNoEdit == true) {
            yield exec_1.exec("git", ["commit", "--amend", "--no-edit"]);
        }
        else {
            yield exec_1.exec("git", ["commit", "-m", args.commitMessage]);
        }
        // Pushing to a separate branch
        if (args.branchName != "") {
            yield exec_1.exec("git", ["push", "--set-upstream", "origin", args.branchName]);
        }
        else {
            yield exec_1.exec("git", ["push"]);
        }
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield executeBuildTasks();
        yield downloadTools();
        yield generateDocs();
        yield uploadArtifacts();
        yield cleanUp();
        yield gitPush().catch(onGitError);
    });
})().catch(onError);
