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
exports.downloadDependencyXmls = void 0;
// External functionalities
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
// External libraries
const fs = require("fs");
const io = require("@actions/io");
const path = require("path");
const tools = require("@actions/tool-cache");
/**Downloads all the dependency xmls.
 * @param binaries {string[]} - The binary files used to look into.
 * @returns Returns the list of dependency xmls.*/
function downloadDependencyXmls(binaries) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let results = [];
        let temp = [];
        let tempXml;
        let dependencies;
        let depsJson;
        for (let i = 0; i < binaries.length; i++) {
            depsJson = binaries[i].replace(/\.(dll|exe)/, ".deps.json").trim();
            dependencies = JSON.parse(read_file_1.readFile(depsJson, "{}"));
            temp = yield downloadDependencies(dependencies, temp);
            tempXml = read_xml_1.getXmls(temp);
            tempXml = removeDuplicates(results, temp);
            results = results.concat(tempXml);
        }
        return results;
    });
}
exports.downloadDependencyXmls = downloadDependencyXmls;
/**Removes all the duplicates from the temp array.
 * @param results {string[]} - The results that contains no duplicates, to look through.
 * @param temp {string[]} - The temp array to remove duplicates from.
 * @returns Returns the temp array with no duplicates.*/
function removeDuplicates(results, temp) {
    for (let i = temp.length - 1; i >= 0; i--) {
        // Variables
        let index = results.indexOf(temp[i]);
        if (!fs.existsSync(temp[i])) {
            temp.splice(i, 1);
            continue;
        }
        if (index == -1) {
            continue;
        }
        temp.splice(i, 1);
    }
    return temp;
}
/**Downloads the dependencies from the dependency json file.
 * @param dependencies {DependencyJson} - The dependency json to look through.
 * @param prevDependencies {string[]} - The list of previous dependencies to check for any dependencies.
 * @returns Returns the list of dependency xmls.*/
function downloadDependencies(dependencies, prevDependencies) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let target = dependencies.runtimeTarget.name;
        let targ;
        let lib;
        let deps = [];
        let runtimes = new Map();
        let zipLocation = "";
        let unzipLocation = "";
        let results = [];
        for (const key in dependencies.targets[target]) {
            if (key.startsWith("NETStandard.Library") || key.startsWith("Microsoft.NETCore.Platforms")) {
                continue;
            }
            targ = dependencies.targets[target][key];
            if (targ.dependencies) {
                for (const depKey in targ.dependencies) {
                    deps.push(`${depKey}/${targ.dependencies[depKey]}`);
                }
            }
            if (targ.runtime) {
                // Variables
                let list = runtimes.get(key) || [];
                for (const runKey in targ.runtime) {
                    list.push(runKey);
                }
                runtimes.set(key, list);
            }
        }
        for (let i = 0; i < deps.length; i++) {
            if (deps[i].startsWith("NETStandard.Library") || deps[i].startsWith("Microsoft.NETCore.Platforms")) {
                continue;
            }
            if (dependencies.libraries[deps[i]]) {
                lib = dependencies.libraries[deps[i]];
                if (lib.type == "project" || !lib.serviceable) {
                    continue;
                }
                else if (lib.type == "package") {
                    // Variables
                    let libPath = lib.path || "";
                    let extractPath = `${index_1.TEMP_FOLDER}/libs/${lib.path}`;
                    let list;
                    if (libPath == "") {
                        continue;
                    }
                    libPath = `https://www.nuget.org/api/v2/package/${libPath}`;
                    try {
                        yield io.mkdirP(extractPath);
                    }
                    catch (_a) { }
                    zipLocation = yield tools.downloadTool(libPath);
                    unzipLocation = yield tools.extractZip(zipLocation, extractPath);
                    list = runtimes.get(deps[i]) || [];
                    for (let j = 0; j < list.length; j++) {
                        console.log(path.join(unzipLocation, index_1.generateUuid(), list[j]));
                        results.push(path.join(unzipLocation, index_1.generateUuid(), list[j]));
                    }
                }
            }
        }
        return results;
    });
}
