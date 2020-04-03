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
function generateHtmlDocumentation(args) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Generating HTML Documentation...");
        // Variables
        const list = yield generateTypeList(args);
        let keys = list.types.keys();
        let key = keys.next();
        while (!key.done) {
            // Variables
            let value = list.types.get(key.value);
            for (let i = 0; i < value.length; i++) {
                // Variables
                const typePath = value[i].replace("/", ".");
                if (typePath.indexOf("<") != -1) {
                    continue;
                }
                // TODO: Add customization to output file extension
                const filename = args.outputPath + typePath + ".hmtl";
                const html = yield template_1.compileBase(index_1.getTemplateUri(args.template.baseUri), args.template, typePath);
                fs.writeFileSync(filename.toLowerCase(), html);
                console.log(`Created ${filename}!`);
            }
            key = keys.next();
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
        const outputPath = "__temp/type.json";
        yield exec_1.exec(sharpChecker, ["-o", outputPath, typePath].concat(args.binaries));
        return JSON.parse(read_file_1.readFile(outputPath));
    });
}
exports.generateTypeDetails = generateTypeDetails;
/**Checks the list of types and returns their names.
 * @param args {InputArguments} - The input arguments used to look into the input binaries.
 * @returns Returns the list of the the types contained within the binaries inputted.*/
function generateTypeList(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const sharpChecker = index_1.getSharpCheckerExe();
        const outputPath = "__temp/list.json";
        yield exec_1.exec(sharpChecker, ["-o", outputPath, "-l"].concat(args.binaries));
        return JSON.parse(read_file_1.readFile(outputPath));
    });
}
