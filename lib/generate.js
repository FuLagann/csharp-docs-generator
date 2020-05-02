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
const TemplateApi_1 = require("./models/TemplateApi");
// External functionalities
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
const template_helpers_1 = require("./template-helpers");
const template_1 = require("./template");
// External libraries
const exec_1 = require("@actions/exec");
const fs = require("fs");
const io = require("@actions/io");
const path = require("path");
// Variables
let sidebarView = new TemplateApi_1.SidebarView("$~root", "");
let typeList = null;
/**Gets the sidebar view.
 * @returns Returns the sidebar view.*/
function getSidebarView() { return sidebarView; }
exports.getSidebarView = getSidebarView;
/**Sets the sidebar view.
 * @param sidebar {SidebarView} - The new sidebar view to set.*/
function setSidebarView(sidebar) { sidebarView = sidebar; }
exports.setSidebarView = setSidebarView;
/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
function generateHtmlDocumentation(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const list = yield generateTypeList(args);
        let filename;
        let html;
        let namespaceTypes;
        console.log("Generating local CSS and JS files");
        yield generateCssAndScriptFiles(args);
        console.log("Generating type HTML documentation...");
        for (const key in list.types) {
            // Variables
            const value = list.types[key];
            for (let i = 0; i < value.length; i++) {
                // Variables
                const typePath = value[i].replace(/\//g, ".");
                if (typePath.indexOf("<") != -1) {
                    continue;
                }
                filename = args.outputPath + typePath.replace(/`/g, "-") + args.outputExtension;
                html = (yield template_1.compileBase(args, typePath)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
                fs.writeFileSync(filename.toLowerCase(), html);
                console.log(`Created ${filename}!`);
            }
        }
        console.log("Generating namespace HTML documentation...");
        namespaceTypes = template_1.getNamespaceTypes();
        for (const key in namespaceTypes) {
            // Variables
            const value = namespaceTypes[key];
            filename = args.outputPath + key + args.outputExtension;
            html = (yield template_1.compileNamespace(args, key, value)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
            fs.writeFileSync(filename.toLowerCase(), html);
            console.log(`Created ${filename}`);
        }
        html = template_1.compileSidebar(args, sidebarView);
        filename = args.outputPath + "--navigation" + args.outputExtension;
        fs.writeFileSync(filename, html);
        console.log("HTML generation complete!");
    });
}
exports.generateHtmlDocumentation = generateHtmlDocumentation;
/**Generates the local css and javascript files used by the template.
 * @param args {InputArguments} - The input arguments to look into the local css and javascript.*/
function generateCssAndScriptFiles(args) {
    return __awaiter(this, void 0, void 0, function* () {
        yield generateSupplementaryFile(path.join(args.outputPath, "/css/"), args.templateUris.localCss || []);
        yield generateSupplementaryFile(path.join(args.outputPath, "/js/"), args.templateUris.localScripts || []);
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
/**Assigns the type and namespaces to the sidebar.
 * @param sidebar {SidebarView} - The sidebar view to insert the type into.
 * @param typeInfo {TypeInfo} - The type info to look into.
 * @returns Returns the sidebar view with the inserted type.*/
function assignTypeToSidebr(sidebar, typeInfo) {
    // Variables
    let args = index_1.getArguments();
    let tempSidebar = sidebar;
    let namespaceName = (typeInfo.typeInfo.namespaceName != "" ?
        typeInfo.typeInfo.namespaceName :
        "(No Namespace)");
    let index = indexOfSidebarChild(tempSidebar.children, namespaceName);
    if (index == -1) {
        tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(namespaceName, "")); // namespaceName));
    }
    else {
        tempSidebar = tempSidebar.children[index];
    }
    tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(typeInfo.typeInfo.name, read_xml_1.createInternalLink(typeInfo.typeInfo.unlocalizedName)));
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.constructors);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.fields);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticFields);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.properties);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticProperties);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.events);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticEvents);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.methods);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.staticMethods);
    tempSidebar = insertMember(typeInfo, tempSidebar, typeInfo.operators);
    return sidebar;
}
exports.assignTypeToSidebr = assignTypeToSidebr;
/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.*/
function generateSupplementaryFile(basePath, files) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.mkdirP(basePath);
        }
        catch (_a) { }
        // TODO: Fix this, it breaks when copying the files over.
        for (let i = 0; i < files.length; i++) {
            console.log(files[i]);
            console.log(files[i].replace(/.*[\\\/]([^\\\/]+)$/gm, "$1"));
            // Variables
            const content = read_file_1.readFile(files[i]);
            const filename = files[i].replace(/.*[\\\/]([^\\\/]+)$/gm, "$1");
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
/**Gets the index of the sidebar child from the given name.
 * @param children {SidebarView[]} - The list of sidebar views to look into.
 * @param name {string} - The name of the sidebar view too look for.
 * @returns Returns the index of the child that was found, returns -1 if no child was found.*/
function indexOfSidebarChild(children, name) {
    for (let i = 0; i < children.length; i++) {
        if (children[i].name == name) {
            return i;
        }
    }
    return -1;
}
/**Inserts the child through an insertion sort.
 * @param sidebar {SidebarView} - The sidebar view to insert the child into.
 * @param newSidebar {SidebarView} - The child to insert into the sidebar.
 * @returns Returns the sidebar view with the inserted child.*/
function insertionSortChild(sidebar, newSidebar) {
    for (let i = 0; i < sidebar.children.length; i++) {
        if (sidebar.children[i].name.localeCompare(newSidebar.name) > 0) {
            sidebar.children.splice(i, 0, newSidebar);
            return sidebar.children[i];
        }
    }
    sidebar.children.push(newSidebar);
    return sidebar.children[sidebar.children.length - 1];
}
/**Inserts the member into the sidebar in an unsorted fashion.
 * @param type {TypeInfo} - The type used to get the link for the sidebar.
 * @param sidebar {SidebarView} - The sidebar to insert the member.
 * @param details {FieldInfo[] | PropertyInfo[] | EventInfo[] | MethodInfo[]} - The list of details to iterate through and generate the sidebar member content.
 * @returns Returns the sidebar with the inserted member.*/
function insertMember(type, sidebar, details) {
    // Variables
    let name;
    for (let i = 0; i < details.length; i++) {
        name = details[i].name;
        if (details[i].genericParameters) {
            // Variables
            const method = details[i];
            name = `${name}${method.genericDeclaration}(${method.parameterDeclaration})`;
        }
        else if (details[i].getSetDeclaration) {
            // Variables
            const property = details[i];
            if (property.parameters.length > 0) {
                name = `${name}(${property.parameterDeclaration})`;
            }
        }
        sidebar.children.push(new TemplateApi_1.SidebarView(name, `${read_xml_1.createInternalLink(type.typeInfo.unlocalizedName)}#${template_helpers_1.getIdFrom(details[i])}`));
    }
    return sidebar;
}
