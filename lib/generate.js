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
exports.assignTypeToSidebr = exports.generateTypeList = exports.generateTypeDetails = exports.generateCssAndScriptFiles = exports.generateHtmlDocumentation = exports.getProjectDetails = exports.setSidebarView = exports.getSidebarView = void 0;
const TemplateApi_1 = require("./models/TemplateApi");
// External functionalities
const generate_search_js_1 = require("./generate-search-js");
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
let sidebarView = new TemplateApi_1.SidebarView("$~root", "", "");
let typeList = null;
let projectDetails;
/**Gets the sidebar view.
 * @returns Returns the sidebar view.*/
function getSidebarView() { return sidebarView; }
exports.getSidebarView = getSidebarView;
/**Sets the sidebar view.
 * @param sidebar {SidebarView} - The new sidebar view to set.*/
function setSidebarView(sidebar) { sidebarView = sidebar; }
exports.setSidebarView = setSidebarView;
/**Gets the project details.
 * @returns Returns the project details.*/
function getProjectDetails() { return projectDetails; }
exports.getProjectDetails = getProjectDetails;
/**Generates the hmtl documentation, with the input arguments.
 * @param args {InputArguments} - The input arguments used for html documentation.*/
function generateHtmlDocumentation(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const list = yield generateTypeList(args);
        let filename;
        let html;
        let namespaceTypes;
        let searchJs = path.join(index_1.TEMP_FOLDER, "js/search-types-members.js");
        if (args.projectDetails != "") {
            projectDetails = JSON.parse(read_file_1.readFile(args.projectDetails));
        }
        try {
            io.mkdirP(path.join(index_1.TEMP_FOLDER, "js/"));
        }
        catch (_a) { }
        args.templateUris.localScripts.push(searchJs);
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
        generate_search_js_1.saveSearchJs(searchJs, sidebarView);
        console.log("Generating local CSS and JS files");
        yield generateCssAndScriptFiles(args);
        console.log("Generating namespace HTML documentation...");
        namespaceTypes = template_1.getNamespaceTypes();
        for (const key in namespaceTypes) {
            // Variables
            const value = namespaceTypes[key];
            filename = args.outputPath + key + args.outputExtension;
            html = (yield template_1.compileBaseNamespace(args, key, value)).replace(/(?<=>)\s+([\)\.]|<\/code>)/gm, "$1");
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
        yield generateSupplementaryFile(args.outputPath + "", args.templateUris.localFiles || [], true);
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
        tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(namespaceName, namespaceName.toLowerCase() + args.outputExtension, "namespace"));
    }
    else {
        tempSidebar = tempSidebar.children[index];
    }
    tempSidebar = insertionSortChild(tempSidebar, new TemplateApi_1.SidebarView(typeInfo.typeInfo.name, read_xml_1.createInternalLink(typeInfo.typeInfo.unlocalizedName), ((typeInfo.isNested ? "nested," : "") +
        (typeInfo.isSealed ? "sealed," : "") +
        (typeInfo.isStatic ? "static," : "") +
        "type")));
    tempSidebar = insertMember("member,constructor", typeInfo, tempSidebar, typeInfo.constructors);
    tempSidebar = insertMember("member,field", typeInfo, tempSidebar, typeInfo.fields);
    tempSidebar = insertMember("member,static,field", typeInfo, tempSidebar, typeInfo.staticFields);
    tempSidebar = insertMember("member,property", typeInfo, tempSidebar, typeInfo.properties);
    tempSidebar = insertMember("member,static,property", typeInfo, tempSidebar, typeInfo.staticProperties);
    tempSidebar = insertMember("member,event", typeInfo, tempSidebar, typeInfo.events);
    tempSidebar = insertMember("member,static,event", typeInfo, tempSidebar, typeInfo.staticEvents);
    tempSidebar = insertMember("member,method", typeInfo, tempSidebar, typeInfo.methods);
    tempSidebar = insertMember("member,static,method", typeInfo, tempSidebar, typeInfo.staticMethods);
    tempSidebar = insertMember("member,static,operator", typeInfo, tempSidebar, typeInfo.operators);
    return sidebar;
}
exports.assignTypeToSidebr = assignTypeToSidebr;
/**Generates the supplementary files (used for creating css and js files from templates).
 * @param basePath {string} - The base path to build to.
 * @param files {string[]} - The files to copy from and into the base path.
 * @param isGeneral {boolean} - Set to true to copy over the files generally, using the parent folder name to create in the local scope.*/
function generateSupplementaryFile(basePath, files, isGeneral = false) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield io.mkdirP(basePath);
        }
        catch (_a) { }
        for (let i = 0; i < files.length; i++) {
            // Variables
            let baseLocalPath = basePath;
            let filename = "";
            let filepath = "";
            if (isGeneral) {
                let match = files[i].match(/[\/\\]?[^\/\\]*[\/\\]?[^\/\\]+$/);
                if (match) {
                    filename = match[0];
                    match = filename.match(/[\/\\][^\/\\]+[\/\\]/);
                    if (match) {
                        baseLocalPath = path.join(baseLocalPath, match[0]);
                        filename = filename.replace(/.*[\/\\]([^\\\/]+)$/gm, "$1");
                        try {
                            yield io.mkdirP(baseLocalPath);
                        }
                        catch (_b) { }
                    }
                }
            }
            if (filename == "") {
                filename = files[i].replace(/.*[\\\/]([^\\\/]+)$/gm, "$1");
            }
            filepath = path.join(baseLocalPath, filename);
            fs.copyFileSync(files[i], filepath);
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
function insertMember(tags, type, sidebar, details) {
    // Variables
    let name;
    for (let i = 0; i < details.length; i++) {
        name = details[i].name;
        if (details[i].genericParameters) {
            // Variables
            const method = details[i];
            if (!method.isConstructor) {
                if (method.isVirtual) {
                    tags += ",virtual";
                }
            }
            name = `${name}${method.genericDeclaration}(${method.parameterDeclaration})`;
        }
        else if (details[i].getSetDeclaration) {
            // Variables
            const property = details[i];
            if (property.hasGetter) {
                if (property.getter.isVirtual) {
                    tags += ",virtual";
                }
            }
            else {
                if (property.setter.isVirtual) {
                    tags += ",virtual";
                }
            }
            if (property.parameters.length > 0) {
                name = `${name}(${property.parameterDeclaration})`;
            }
        }
        sidebar.children.push(new TemplateApi_1.SidebarView(name, `${read_xml_1.createInternalLink(type.typeInfo.unlocalizedName)}#${template_helpers_1.getIdFrom(details[i])}`, tags));
    }
    return sidebar;
}
