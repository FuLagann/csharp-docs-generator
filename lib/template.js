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
const TemplateVariables_1 = require("./models/TemplateVariables");
const XmlFormat_1 = require("./models/XmlFormat");
const read_file_1 = require("./read-file");
const generate_1 = require("./generate");
const index_1 = require("./index");
const template_helpers_1 = require("./template-helpers");
const ejs = require("ejs");
const markdownIt = require("markdown-it");
const pretty = require("pretty");
// Variables
const md = markdownIt();
let generatedTypeJson;
function compileBase(filename, json, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const args = index_1.getArguments();
        const sidebar = new TemplateVariables_1.SidebarView("$~root");
        generatedTypeJson = yield generate_1.generateTypeDetails(args, typePath);
        return pretty(ejs.render(read_file_1.readFile(filename), {
            displaySidebar: template_helpers_1.displaySidebar,
            createPartial: template_helpers_1.createPartial,
            uris: {
                css: json.cssUris,
                scripts: json.scriptUris,
                type: json.typeUri
            },
            isNamespace: false,
            sidebarView: sidebar,
            typePath: typePath,
            breadcrumbs: [] // TODO: Figure out how to do this when compilation of namepsaces are possible
        }));
    });
}
exports.compileBase = compileBase;
function compileType(filename, typePath) {
    // Variables
    const args = index_1.getArguments();
    const api = index_1.getXmlApi();
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: generatedTypeJson,
        xmlDocs: xmlApi,
        createPartial: template_helpers_1.createPartial,
        uris: {
            constructors: args.template.constructorsUri,
            fields: args.template.fieldsUri,
            properties: args.template.propertiesUri,
            events: args.template.eventsUri,
            methods: args.template.methodsUri
        }
    });
}
exports.compileType = compileType;
function compileField(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getFriendlyTypePath(details.implementedType, details.name);
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi
    });
}
exports.compileField = compileField;
function compilePropety(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getFriendlyTypePath(details.implementedType, details.name);
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi
    });
}
exports.compilePropety = compilePropety;
function compileEvent(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getFriendlyTypePath(details.implementedType, details.name);
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi
    });
}
exports.compileEvent = compileEvent;
function compileMethod(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getMethodTypePath(details);
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi
    });
}
exports.compileMethod = compileMethod;
/**Gets the method's specific type path used to differentiate methods with different types of parameters.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the type path specific to the method.*/
function getMethodTypePath(details) {
    // Variables
    let name = details.name;
    if (details.isConstructor) {
        name = "#ctor";
    }
    if (details.isOperator && !name.startsWith("op_")) {
        name = "op_" + name;
    }
    let typePath = getFriendlyTypePath(details.implementedType, name);
    let parameters = [];
    if (details.genericParameters.length > 0) {
        typePath += "``" + details.genericParameters.length;
    }
    details.parameters.forEach(function (parameter) {
        // Variables
        let paramResult = parameter.typeInfo.fullName;
        for (let i = 0; i < details.genericParameters.length; i++) {
            paramResult = paramResult.replace(new RegExp(`([<,])${details.genericParameters[i].unlocalizedName}([>,])|^${details.genericParameters[i].unlocalizedName}$`, "gm"), "$1``" + i + "$2");
        }
        paramResult = paramResult.replace(new RegExp("<", "gm"), "{").replace(new RegExp(">", "gm"), "}");
        if (parameter.modifier != "") {
            paramResult += "@";
        }
        parameters.push(paramResult);
    });
    console.log("Method: " + typePath + "(" + parameters.join(',') + ")");
    if (parameters.length > 0) {
        return `${typePath}(${parameters.join(',')})`;
    }
    return typePath;
}
/**Gets the friendly version of the type path using the type info and member name
 * @param typeInfo {QuickTypeInfo} - The information of the type.
 * @param name {string} - The name of the member
 * @returns Returns the friendly type path*/
function getFriendlyTypePath(typeInfo, name) {
    return typeInfo.unlocalizedName.replace('`', '-') + "." + name;
}
/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format) {
    if (format == undefined) {
        format = new XmlFormat_1.XmlFormat();
    }
    return {
        summary: md.render(format.summary.trim()),
        returns: {
            exists: doesItemExist(format.returns),
            value: md.render((format.returns || "").trim())
        },
        remarks: {
            exists: doesItemExist(format.remarks),
            value: md.render((format.remarks || "").trim())
        },
        example: {
            exists: doesItemExist(format.example),
            value: md.render((format.example || "").trim())
        },
        parameters: {
            exists: doesArrayItemExist(format.parameters),
            value: renderMarkdownForArray(format.parameters)
        },
        exceptions: {
            exists: doesArrayItemExist(format.exceptions),
            value: renderMarkdownForArray(format.exceptions)
        },
        typeParameters: {
            exists: doesArrayItemExist(format.typeParameters),
            value: renderMarkdownForArray(format.typeParameters)
        }
    };
}
/**Finds if the given string is non-empty and exists.
 * @param str {string} - The string in quest.
 * @returns Returns true if the string is non-empty and exists.*/
function doesItemExist(str) { return (str != null && str != undefined && str != ""); }
/**Finds if the array is non-empty and exists.
 * @param list {any[]} - The list in question.
 * @returns Returns true if the list is non-empty and exists.*/
function doesArrayItemExist(list) {
    return (list != null && list != undefined && list.length > 0);
}
/**Goes through the array of name descriptions and renders it through markdown.
 * @param list {NameDescription} - The list of name description to render with.
 * @returns Returns a list of rendered name descriptions ready for html.*/
function renderMarkdownForArray(list) {
    // Variables
    let temp = list;
    for (let i = 0; i < temp.length; i++) {
        temp[i].description = md.render(temp[i].description.trim());
    }
    return temp;
}
