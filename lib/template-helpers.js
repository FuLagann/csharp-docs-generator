"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateApi_1 = require("./models/TemplateApi");
// External functionalities
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
const template_1 = require("./template");
// External libraries
const ejs = require("ejs");
/**Capitalizes the given string, turning hello-world to Hello World.
 * @param val {string} - The value used to capitalize.
 * @returns Returns the capitalized string*/
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
        case "type": return template_1.compileType(url, context);
        case "field": return template_1.compileField(url, context);
        case "property": return template_1.compilePropety(url, context);
        case "event": return template_1.compileEvent(url, context);
        case "method": return template_1.compileMethod(url, context);
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
 * @returns Returns an anchor tag to the type with a link.*/
function createAnchorToType(typeInfo) {
    // Variables
    const link = createLinkToType(typeInfo.unlocalizedName);
    return `<a href="${link}">${typeInfo.name.replace('<', "&lt;").replace('>', "&gt;")}</a>`;
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
        nonInstancedFullName: ""
    };
}
exports.getParameterType = getParameterType;
/**Generates the html code for the sidebar tree view.
 * @returns Returns the html code for the sidebar tree view*/
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
        results[i] = `<li>${results[i]}</li>`;
    }
    return results.join("");
}
exports.generateSidebar = generateSidebar;
