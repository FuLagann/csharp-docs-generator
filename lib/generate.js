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
// External functionalities
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const template_1 = require("./template");
// External libraries
const exec_1 = require("@actions/exec");
const fs = require("fs");
const io = require("@actions/io");
const path = require("path");
const TemplateApi_1 = require("./models/TemplateApi");
// Variables
let typeList = null;
/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
function generateHtmlDocumentation(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const list = yield generateTypeList(args);
        const sidebar = yield createSidebar(list);
        console.log("Generating HTML Documentation...");
        yield generateCssAndScriptFiles(args);
        for (const key in list.types) {
            // Variables
            const value = list.types[key];
            const namespaceFilename = args.outputPath + key + args.outputExtension;
            const html = yield template_1.compileNamespace(args, key, value, sidebar);
            fs.writeFileSync(namespaceFilename.toLowerCase(), html);
            console.log(`Created ${namespaceFilename}`);
            for (let i = 0; i < value.length; i++) {
                // Variables
                const typePath = value[i].replace(/\//g, ".");
                if (typePath.indexOf("<") != -1) {
                    continue;
                }
                const filename = args.outputPath + typePath.replace(/`/g, "-") + args.outputExtension;
                const html = yield template_1.compileBase(args, typePath, sidebar);
                fs.writeFileSync(filename.toLowerCase(), html);
                console.log(`Created ${filename}!`);
            }
        }
        console.log("Generation completed!");
    });
}
exports.generateHtmlDocumentation = generateHtmlDocumentation;
/**Generates the local css and javascript files used by the template.
 * @param args {InputArguments} - The input arguments to look into the local css and javascript.*/
function generateCssAndScriptFiles(args) {
    return __awaiter(this, void 0, void 0, function* () {
        yield generateSupplementaryFile(path.join(args.outputPath, "css/"), args.templateUris.localCss || []);
        yield generateSupplementaryFile(path.join(args.outputPath, "js/"), args.templateUris.localScripts || []);
    });
}
exports.generateCssAndScriptFiles = generateCssAndScriptFiles;
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
/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.*/
function generateSupplementaryFile(basePath, files) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.mkdirP(basePath);
        }
        catch (_a) { }
        for (let i = 0; i < files.length; i++) {
            // Variables
            const filename = files[i].replace(/.*[\\\/]([\w\.]+)$/gm, "$1");
            const content = read_file_1.readFile(files[i]);
            console.log(path.join(basePath, filename));
            fs.writeFileSync(path.join(basePath, filename), content);
        }
    });
}
/**Gets the arguments for sharp checker.
 * @param args {InputArguments} - The input arguments to get the binaries from.
 * @param isList {boolean} - Set to true to print out a list of types.
 * @param typePath {string} - The type path to search (can be used to determine if it's a type list).
 * @returns Returns a list of arguments used for sharp checker.*/
function getSharpCheckerArguments(args, isList, typePath) {
    // Variables
    const includePrivate = args.includePrivate ? ["-p"] : [];
    const outputPath = index_1.TEMP_FOLDER + (isList ? "list.json" : "type.json");
    return ["-o", outputPath, typePath].concat(includePrivate).concat(args.binaries);
}
function createSidebar(list) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let sidebar = new TemplateApi_1.SidebarView("$~root");
        for (const key in list.types) {
            // Variables
            const values = list.types[key];
            for (let a = 0; a < values.length; a++) {
                // Variables
                const value = values[a];
                const matches = value.match(/\w+(?=\.)/g);
                sidebar = yield assignToSidebar(sidebar, matches || [], value);
            }
        }
        return sidebar;
    });
}
function assignToSidebar(sidebar, namespaces, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const args = index_1.getArguments();
        let tempSidebar = sidebar;
        let index;
        let typeInfo;
        for (let i = 0; i < namespaces.length; i++) {
            index = indexOfSidebarChild(tempSidebar.children, namespaces[i]);
            if (index == -1) {
                tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(namespaces[i]));
                continue;
            }
            tempSidebar = tempSidebar.children[index];
        }
        typeInfo = yield generateTypeDetails(args, typePath);
        console.log(tempSidebar);
        tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(typeInfo.typeInfo.name));
        console.log(tempSidebar);
        tempSidebar = insertMember(tempSidebar, typeInfo.fields);
        tempSidebar = insertMember(tempSidebar, typeInfo.staticFields);
        tempSidebar = insertMember(tempSidebar, typeInfo.properties);
        tempSidebar = insertMember(tempSidebar, typeInfo.staticProperties);
        tempSidebar = insertMember(tempSidebar, typeInfo.events);
        tempSidebar = insertMember(tempSidebar, typeInfo.staticEvents);
        tempSidebar = insertMember(tempSidebar, typeInfo.constructors);
        tempSidebar = insertMember(tempSidebar, typeInfo.methods);
        tempSidebar = insertMember(tempSidebar, typeInfo.staticMethods);
        tempSidebar = insertMember(tempSidebar, typeInfo.operators);
        return sidebar;
    });
}
function indexOfSidebarChild(children, name) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].name == name) {
            return i;
        }
    }
    return -1;
}
function insertionSortChild(sidebar, newSidebar, returnChild = true) {
    for (let i = 0; i < sidebar.children.length; i++) {
        if (sidebar.children[i].name.localeCompare(newSidebar.name) > 0) {
            sidebar.children.splice(i, 0, newSidebar);
            if (returnChild) {
                return sidebar.children[i];
            }
            else {
                return sidebar;
            }
        }
    }
    sidebar.children.push(newSidebar);
    if (returnChild) {
        return sidebar.children[sidebar.children.length - 1];
    }
    else {
        return sidebar;
    }
}
function insertMember(sidebar, details) {
    for (let i = 0; i < details.length; i++) {
        console.log("Loop (" + i + "): " + details[i].name);
        console.log(sidebar);
        insertionSortChild(sidebar, new TemplateApi_1.SidebarView(details[i].name), false);
    }
    return sidebar;
}
