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
exports.generateUuid = exports.getTypeList = exports.getDependencies = exports.getArguments = exports.getSharpCheckerExe = exports.NETSTANDARD_XMLS = exports.TEMP_FOLDER = exports.artifactFiles = void 0;
// External functionality
const generate_1 = require("./generate");
const input_1 = require("./input");
const read_xml_1 = require("./read-xml");
// External libraries
const exec_1 = require("@actions/exec");
const artifact = require("@actions/artifact");
const core = require("@actions/core");
const io = require("@actions/io");
const tools = require("@actions/tool-cache");
const fs = require("fs");
const read_deps_json_1 = require("./read-deps-json");
// Variables
/**The list of files to artifact.*/
exports.artifactFiles = [];
/**The temp folder where everything tool related will be placed (this is get completed deleted once completed)*/
exports.TEMP_FOLDER = `__temp-${generateUuid()}/`;
/**The list of xmls used for netstandard documentation (it's chopped up into parts because it's such a huge file).*/
exports.NETSTANDARD_XMLS = [];
const NETSTANDARD_API = "https://github.com/FuLagann/csharp-docs-generator/raw/paulsbranch/packages/netstandard.zip";
const SHARP_CHECKER_URL = "https://github.com/FuLagann/sharp-checker/releases/download/v1/SharpChecker-v1.0-standalone-win-x64.zip";
const SHARP_CHECKER_EXE = "SharpChecker-v1.0-win-x64/SharpChecker";
let args;
let dependencies;
let sharpCheckerExe;
let typeList;
let gitErrorState;
let isDetached = false;
const GIT_STATE_SETUP = "setup";
const GIT_STATE_PULL = "pull";
const GIT_STATE_CHECKOUT = "checkout";
const GIT_STATE_ADD = "add";
const GIT_STATE_COMMIT = "commit";
const GIT_STATE_PUSH = "push";
/**Gets the path to the SharpChecker program.
 * @returns Returns the path to the SharpChecker program.*/
function getSharpCheckerExe() { return sharpCheckerExe; }
exports.getSharpCheckerExe = getSharpCheckerExe;
/**Gets the input arguments.
 * @returns Returns the input arguments.*/
function getArguments() { return args; }
exports.getArguments = getArguments;
/**Gets all the xml dependencies to look into for documentation.
 * @returns Returns the list of xml dependencies to look into for documentation.*/
function getDependencies() { return dependencies; }
exports.getDependencies = getDependencies;
/**Gets the list of types to look into.
 * @returns Returns the list of types to look into.*/
function getTypeList() { return typeList; }
exports.getTypeList = getTypeList;
/**Generates a UUID (Unique User ID).
 * @returns Returns a randomly generated UUID.*/
function generateUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (chr) {
        // Variables
        let rng = Math.random() * 16 | 0;
        let variable = (chr == 'x' ?
            rng :
            (rng & 0x3 | 0x8));
        return variable.toString(16);
    });
}
exports.generateUuid = generateUuid;
/**Catches any error and reports the action as a failed aciton*/
function onError(error) {
    return __awaiter(this, void 0, void 0, function* () {
        console.error(error);
        core.setFailed(error.message);
    });
}
/**Catches an error when pushing to git, this will check the status and push if possible.*/
function onGitError() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exec_1.exec("git status").catch(onError);
        if (gitErrorState == GIT_STATE_COMMIT) {
            // Nothing to commit, do nothing to complete action
        }
        else if (gitErrorState == GIT_STATE_PUSH) {
            if (args.branchName != "") {
                try {
                    yield exec_1.exec("git", ["pull", "origin", args.branchName]);
                    yield exec_1.exec("git", ["push", "--set-upstream", "origin", args.branchName]);
                }
                catch (_a) {
                    yield exec_1.exec("git", ["push", "--force", "--set-upstream", "origin", args.branchName]);
                }
            }
            else {
                yield exec_1.exec("git", ["pull"]);
                yield exec_1.exec("git", ["push"]);
            }
        }
    });
}
/**Initiates the program, setting things up before everything starts up.*/
function initiate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.rmRF(exports.TEMP_FOLDER);
        }
        catch (_a) { }
        try {
            yield io.mkdirP(exports.TEMP_FOLDER);
        }
        catch (_b) { }
        console.log("Gathering input from workflow yaml.");
        args = yield input_1.getInputs();
        try {
            yield io.rmRF(args.outputPath);
        }
        catch (e) { }
        try {
            yield io.mkdirP(args.outputPath);
        }
        catch (e) { }
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
        console.log("Downloading SharpChecker tool.");
        // Variables
        let zipLocation = yield tools.downloadTool(SHARP_CHECKER_URL);
        let unzipLocation = yield tools.extractZip(zipLocation, exports.TEMP_FOLDER);
        sharpCheckerExe = `${unzipLocation}/${SHARP_CHECKER_EXE}`;
        // Openning up the netstandard api
        zipLocation = yield tools.downloadTool(NETSTANDARD_API);
        unzipLocation = yield tools.extractZip(zipLocation, exports.TEMP_FOLDER);
        for (let i = 1; i <= 32; i++) {
            exports.NETSTANDARD_XMLS.push(`${unzipLocation}/netstandard-p${i}.xml`);
        }
    });
}
/**Generates the html documentation.*/
function generateDocs() {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let dependencyXmls = yield read_deps_json_1.downloadDependencyXmls(args.binaries);
        dependencies = read_xml_1.getXmls(args.binaries).concat(exports.NETSTANDARD_XMLS).concat(dependencyXmls);
        typeList = yield generate_1.generateTypeList(args);
        yield generate_1.generateHtmlDocumentation(args);
    });
}
/**Uploads all the artifacts used for debugging*/
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
        if (args.skipGit) {
            return;
        }
        isDetached = (args.branchName == "<detached>");
        gitErrorState = GIT_STATE_SETUP;
        yield exec_1.exec("git", ["config", "--global", "user.name", args.user.name]);
        yield exec_1.exec("git", ["config", "--global", "user.email", args.user.email]);
        gitErrorState = GIT_STATE_PULL;
        try {
            yield exec_1.exec("git", ["pull"]);
        }
        catch (err) {
            isDetached = true;
        }
        // Creates a new branch to merge with
        if (args.branchName != "") {
            gitErrorState = GIT_STATE_CHECKOUT;
            try {
                // Experimental feature, don't mention it publically until I can verify this works properly
                if (args.branchName == "<detached>") {
                    yield exec_1.exec("git", ["checkout", "--detach"]);
                }
                else {
                    yield exec_1.exec("git", ["checkout", "-B", args.branchName]);
                }
            }
            catch (err) {
                // Just in case git checkout doesn't work (happened to me once).
                if (args.branchName == "<detached>") {
                    yield exec_1.exec("git", ["switch", "--detach"]);
                }
                else {
                    yield exec_1.exec("git", ["switch", "-C", args.branchName]);
                }
            }
        }
        gitErrorState = GIT_STATE_ADD;
        yield exec_1.exec("git", ["add", "--all"]);
        gitErrorState = GIT_STATE_COMMIT;
        yield exec_1.exec("git", ["commit", "-m", args.commitMessage]);
        // Pushing to a separate branch
        gitErrorState = GIT_STATE_PUSH;
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
        yield initiate();
        yield executeBuildTasks();
        yield downloadTools();
        yield generateDocs();
        //await uploadArtifacts();
        yield cleanUp();
        yield gitPush().catch(onGitError);
    });
})().catch(onError);
