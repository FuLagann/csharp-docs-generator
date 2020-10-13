"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGenericType = exports.generateSidebar = exports.getParameterType = exports.createAnchorToType = exports.createLinkToType = exports.createPartial = exports.getIdFrom = exports.capitalize = void 0;
const TemplateApi_1 = require("./models/TemplateApi");
// External functionalities
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
const Templates = __importStar(require("./template"));
// External libraries
const ejs = require("ejs");
/**Capitalizes the given string, turning hello-world to Hello World.
 * @param val {string} - The value used to capitalize.
 * @returns Returns the capitalized string.*/
function capitalize(val) {
    return val.replace(/(?:^|\s|-)\w/g, function (v) {
        return v.toUpperCase();
    }).replace(/(\w)\-(\w)/g, "$1 $2");
}
exports.capitalize = capitalize;
/**Gets the id from the given details.
 * @param details {FieldInfo | PropertyInfo | EventInfo | MethodInfo} - The details to look into.
 * @returns Returns the id used for anchoring and referencing.*/
function getIdFrom(details) {
    if (details.returnType) {
        // Variables
        const method = details;
        let parameters = [];
        method.parameters.forEach(function (parameter) {
            parameters.push(parameter.typeInfo.unlocalizedName);
        });
        return (method.name +
            (parameters.length > 0 ? `(${parameters.join(',')})` : "")).replace(/`(\d+)/g, "-$1");
    }
    if (details.getSetDeclaration) {
        // Variables
        const property = details;
        let parameters = [];
        property.parameters.forEach(function (parameter) {
            parameters.push(parameter.typeInfo.unlocalizedName);
        });
        return (property.name +
            (parameters.length > 0 ? `(${parameters.join(',')})` : "")).replace(/`(\d+)/g, "-$1");
    }
    return details.name;
}
exports.getIdFrom = getIdFrom;
/**Creates a partial using the type and location to the template file.
 * @param type {string} - The type to create from (type, field, property, event, method).
 * @param url {string} - The location of the template file to use.
 * @param context {any} - The context used to pass over to the next template.
 * @returns Returns the compiled template code.*/
function createPartial(type, url, context = {}) {
    switch (type) {
        case "index": return Templates.compileIndex(url, context);
        case "type": return Templates.compileType(url, context);
        case "field": return Templates.compileField(url, context);
        case "property": return Templates.compilePropety(url, context);
        case "event": return Templates.compileEvent(url, context);
        case "method": return Templates.compileMethod(url, context);
        case "header": return Templates.compileHeader(url);
        case "footer": return Templates.compileFooter(url);
        case "namespace": return Templates.compileNamespace(url, context);
    }
    return ejs.render(read_file_1.readFile(url), context);
}
exports.createPartial = createPartial;
/**Creates a internal or external link to the given type.
 * @param typePath {string} - The type path to create a link from.
 * @returns Returns an http(s) link to where the type is found.*/
function createLinkToType(typePath) {
    return (typePath.startsWith("System") ?
        read_xml_1.createSystemLink(typePath.replace(/`/g, '-').replace(/\//g, '.')) :
        read_xml_1.createInternalLink(typePath));
}
exports.createLinkToType = createLinkToType;
/**Creates an anchor tag to the type (includes using the type name).
 * @param typeInfo {QuickTypeInfo} - The quick look into the type to look into.
 * @param options {any} - Extra options to apply to the returning anchor type.
 * The following options are used:
 * * classes (string) - The list of classes to apply to the returning tag, seperated by spaces.
 * * useFullName (boolean) - Set to true if the content of the anchor will use the full name instead
 * of just the shortened name.
 * @returns Returns an anchor tag to the type with a link.*/
function createAnchorToType(typeInfo, options = {}) {
    if (typeInfo.isGenericType) {
        if (options.classes) {
            return `<span class="${options.classes}">${typeInfo.name}</span>`;
        }
        return typeInfo.name;
    }
    // Variables
    const link = createLinkToType(typeInfo.unlocalizedName);
    const classNames = options.classes ? ` class="${options.classes}"` : "";
    const name = options.useFullName == true ? typeInfo.fullName : typeInfo.name;
    return `<a href="${link}"${classNames}>${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>`;
}
exports.createAnchorToType = createAnchorToType;
/**Gets the parameter type from the given name.
 * @param parameters {ParameterInfo[]} - The list of parameters to look into.
 * @param name {string} - The name of the parameter to look into.
 * @returns Returns the type info of the parameter.*/
function getParameterType(parameters, name) {
    for (let i = 0; i < parameters.length; i++) {
        if (parameters[i].name == name) {
            return parameters[i].typeInfo;
        }
    }
    return {
        name: "",
        unlocalizedName: "",
        fullName: "",
        namespaceName: "",
        genericParameters: [],
        nonInstancedFullName: "",
        isGenericType: false
    };
}
exports.getParameterType = getParameterType;
/**Generates the html code for the sidebar tree view.
 * @param treeview {SidebarView | SidebarView[]} - The sidebar tree view to traverse through and generate with.
 * @param treeviewClass {string} - The class name for the top view of the list items. Defaults to "treeview".
 * @param nestedviewClass {string} - The class name for the nested view of the list items. Defaults to "nested".
 * @returns Returns the html code for the sidebar tree view.*/
function generateSidebar(treeview, treeviewClass = "treeview", nestedviewClass = "nested") {
    if (treeview instanceof TemplateApi_1.SidebarView && treeview.name == "$~root") {
        return (`<ul class="${treeviewClass}">` +
            `${generateSidebar(treeview.children, treeviewClass, nestedviewClass)}</ul>`);
    }
    // Variables
    const views = treeview;
    let results = [];
    for (let i = 0; i < views.length; i++) {
        results.push(views[i].name.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
        if (views[i].link != "") {
            results[i] = `<a href="${views[i].link}">${results[i]}</a>`;
        }
        if (views[i].children.length > 0) {
            results[i] = `<span class="caret">${results[i]}</span>`;
            results[i] += (`<ul class="${nestedviewClass}">` +
                `${generateSidebar(views[i].children, treeviewClass, nestedviewClass)}</ul>`);
        }
        else {
            results[i] = `<span class="end-caret">${results[i]}</span>`;
        }
        results[i] = `<li>${results[i]}</li>`;
    }
    return results.join("");
}
exports.generateSidebar = generateSidebar;
/**Finds if the given parameter's type is a generic type.
 * @param parameter {ParameterNameDescription} - The parameter to look into.
 * @param xmlDocs {XmlDocItems} - The xml docs to look into.
 * @returns Returns true if the parameter's type is generic.*/
function isGenericType(parameter, xmlDocs) {
    var _a, _b;
    if (!xmlDocs.typeParameters.exists) {
        return false;
    }
    // Variables
    let paramTypeName = (_a = parameter.details) === null || _a === void 0 ? void 0 : _a.typeInfo.unlocalizedName;
    for (let i = 0; i < xmlDocs.typeParameters.value.length; i++) {
        // Variables
        const value = xmlDocs.typeParameters.value[i];
        if (paramTypeName == ((_b = value.details) === null || _b === void 0 ? void 0 : _b.unlocalizedName)) {
            return true;
        }
    }
    return false;
}
exports.isGenericType = isGenericType;
