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
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const template_1 = require("./template");
const exec_1 = require("@actions/exec");
const fs = require("fs");
// Variables
let typeList = null;
function generateHtmlDocumentation(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const list = yield generateTypeList(args);
        console.log("Generating HTML Documentation...");
        for (const key in list.types) {
            // Variables
            const value = list.types[key];
            const namespaceFilename = args.outputPath + key + args.outputExtension;
            const html = yield template_1.compileNamespace(args, key, value);
            fs.writeFileSync(namespaceFilename.toLowerCase(), html);
            console.log(`Created ${namespaceFilename}`);
            for (let i = 0; i < value.length; i++) {
                // Variables
                const typePath = value[i].replace("/", ".");
                if (typePath.indexOf("<") != -1) {
                    continue;
                }
                const filename = args.outputPath + typePath + args.outputExtension;
                const html = yield template_1.compileBase(args, typePath);
                fs.writeFileSync(filename.toLowerCase(), html);
                console.log(`Created ${filename}!`);
            }
        }
        console.log("Generation completed!");
    });
}
exports.generateHtmlDocumentation = generateHtmlDocumentation;
/**Checks the type and returns it's info.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @param typePath {string} - The path to the type to look into.
 * @returns Returns the info of the type.*/
function generateTypeDetails(args, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const sharpChecker = index_1.getSharpCheckerExe();
        const sharpCheckerArgs = getSharpCheckerArguments(args, false, typePath);
        yield exec_1.exec(sharpChecker, sharpCheckerArgs);
        return JSON.parse(read_file_1.readFile(sharpCheckerArgs[1]));
    });
}
exports.generateTypeDetails = generateTypeDetails;
/**Checks the list of types and returns their names.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @returns Returns the list of the the types contained within the binaries inputted.*/
function generateTypeList(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!typeList) {
            // Variables
            const sharpChecker = index_1.getSharpCheckerExe();
            const sharpCheckerArgs = getSharpCheckerArguments(args, true, "-l");
            yield exec_1.exec(sharpChecker, sharpCheckerArgs);
            typeList = JSON.parse(read_file_1.readFile(sharpCheckerArgs[1]));
        }
        return typeList;
    });
}
exports.generateTypeList = generateTypeList;
/**Gets the arguments for sharp checker.
 * @param args {InputArguments} - The input arguments to get the binaries from.
 * @param isList {boolean} - Set to true to print out a list of types.
 * @param typePath {string} - The type path to search (can be used to determine if it's a type list).
 * @returns Returns a list of arguments used for sharp checker.*/
function getSharpCheckerArguments(args, isList, typePath) {
    // Variables
    const includePrivate = args.includePrivate ? ["-p"] : [];
    const outputPath = index_1.TEMP_FOLDER + (isList ? "list.json" : typePath + ".json");
    index_1.artifactFiles.push(outputPath);
    return ["-o", outputPath, typePath].concat(includePrivate).concat(args.binaries);
}
