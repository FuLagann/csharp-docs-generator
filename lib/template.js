"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateVariables_1 = require("./models/TemplateVariables");
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const ejs = require("ejs");
const markdownIt = require("markdown-it");
const pretty = require("pretty");
// Variables
const md = markdownIt();
function compileType(filename, typePath) {
    // Variables
    const args = index_1.getArguments();
    return ejs.render(read_file_1.readFile(filename), {});
}
exports.compileType = compileType;
function compileBase(filename, templateApi, breadcrumbs, typePath) {
    // Variables
    let variables = new TemplateVariables_1.BaseTemplateVars(templateApi);
    variables.breadcrumbs = breadcrumbs;
    variables.typePath = typePath;
    return pretty(ejs.render(read_file_1.readFile(filename), variables), { ocd: true });
}
exports.compileBase = compileBase;
/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, any>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(api) {
    // Variables
    const summary = api.get("summary") || "No description.";
    const returns = api.get("returns");
    const remarks = api.get("remarks");
    const example = api.get("example");
    const param = api.get("param");
    const exceptions = api.get("exception");
    const typeParams = api.get("typeparam");
    return {
        summary: summary,
        returns: {
            exists: doesItemExist(returns),
            value: md.render(returns || "")
        },
        remarks: {
            exists: doesItemExist(remarks),
            value: md.render(remarks || "")
        },
        example: {
            exists: doesItemExist(example),
            value: md.render(example || "")
        },
        parameters: {
            exists: doesArrayItemExist(param),
            value: renderMarkdownForArray(param)
        },
        exceptions: {
            exists: doesArrayItemExist(exceptions),
            value: renderMarkdownForArray(exceptions)
        },
        typeParameters: {
            exists: doesArrayItemExist(typeParams),
            value: renderMarkdownForArray(typeParams)
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
