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
    const typePath = details.implementedType.unlocalizedName.replace('`', '-') + "." + details.name;
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi
    });
}
exports.compileField = compileField;
function compileBase(filename, templateApi, breadcrumbs, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        let variables = new TemplateVariables_1.BaseTemplateVars(templateApi);
        const args = index_1.getArguments();
        // TODO: Redo the template variables
        variables.breadcrumbs = breadcrumbs;
        variables.typePath = typePath;
        generatedTypeJson = yield generate_1.generateTypeDetails(args, typePath);
        return pretty(ejs.render(read_file_1.readFile(filename), variables), { ocd: true });
    });
}
exports.compileBase = compileBase;
/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format) {
    if (format == undefined) {
        format = new XmlFormat_1.XmlFormat();
    }
    return {
        summary: md.render(format.summary),
        returns: {
            exists: doesItemExist(format.returns),
            value: md.render(format.returns || "")
        },
        remarks: {
            exists: doesItemExist(format.remarks),
            value: md.render(format.remarks || "")
        },
        example: {
            exists: doesItemExist(format.example),
            value: md.render(format.example || "")
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
        temp[i].description = md.render(temp[i].description);
    }
    return temp;
}
