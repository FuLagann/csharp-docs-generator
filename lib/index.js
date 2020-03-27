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
const core = require("@actions/core");
const input = require("./input");
const io = require("@actions/io");
const tools = require("@actions/tool-cache");
const exec_1 = require("@actions/exec");
const read_xml_1 = require("./read-xml");
const generate_1 = require("./generate");
// Variables
const TEMP_FOLDER = "__temp/";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-linux-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-linux-x64/SharpChecker";
const args = input.getInputs();
let sharpCheckerExe;
/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
function getSharpCheckerExe() { return sharpCheckerExe; }
exports.getSharpCheckerExe = getSharpCheckerExe;
function getArguments() { return args; }
exports.getArguments = getArguments;
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
            yield io.rmRF(TEMP_FOLDER);
        }
        catch (e) { }
        try {
            yield io.mkdirP(TEMP_FOLDER);
        }
        catch (e) { }
        // Variables
        const zipLocation = yield tools.downloadTool(SHARP_CHECKER_URL);
        const unzippedLocation = yield tools.extractZip(zipLocation, TEMP_FOLDER);
        sharpCheckerExe = `${unzippedLocation}/${SHARP_CHECKER_EXE}`;
    });
}
/**Generates the html documentation.*/
function generateDocs() {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const api = read_xml_1.gatherApiMap(args);
        try {
            yield io.rmRF(args.outputPath);
        }
        catch (e) { }
        try {
            yield io.mkdirP(args.outputPath);
        }
        catch (e) { }
        yield generate_1.generateHtmlDocumentation(args, api);
    });
}
/**Cleans everything up before pushing to the repository so nothing unwanted gets committed.*/
function cleanUp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.rmRF(TEMP_FOLDER);
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
        yield cleanUp();
        yield gitPush().catch(onGitError);
    });
})().catch(onError);
