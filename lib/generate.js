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
function generateHtmlDocumentation(args, api) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let queue = [{ api: api, breadcrumbs: [] }];
        let temp;
        let keys;
        let iterator;
        let key;
        console.log("Generating HTML Documentation...");
        while (queue.length > 0) {
            temp = queue.shift();
            if (temp == undefined) {
                break;
            }
            keys = temp.api.keys();
            while (true) {
                iterator = keys.next();
                if (iterator.done) {
                    break;
                }
                key = iterator.value;
                if (key == "type") {
                    switch (temp.api.get(key)) {
                        case "T":
                            {
                                // Variables
                                const typePath = temp.breadcrumbs.join('.').replace('`', '-');
                                const filename = args.outputPath + typePath + ".html";
                                const typeDetails = yield checkType(args, typePath);
                                const html = template_1.compileType(index_1.getTemplateUri(args.template.typeUri), temp, typeDetails, args.template);
                                fs.writeFileSync(filename, html);
                                console.log(`Created ${filename}!`);
                            }
                            break;
                    }
                    continue;
                }
                switch (key) {
                    case "summary":
                    case "returns":
                    case "remarks":
                    case "example":
                    case "typeparam":
                    case "param":
                    case "exception":
                        continue;
                    default:
                        {
                            queue.push({
                                api: temp.api.get(key),
                                breadcrumbs: temp.breadcrumbs.concat([key])
                            });
                            console.log(`Added ${key} into queue!`);
                        }
                        break;
                }
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
function checkType(args, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const sharpChecker = index_1.getSharpCheckerExe();
        const outputPath = "__temp/type.json";
        yield exec_1.exec(sharpChecker, ["-o", outputPath, typePath].concat(args.binaries));
        return JSON.parse(read_file_1.readFile(outputPath));
    });
}
