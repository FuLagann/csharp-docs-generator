"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_file_1 = require("./read-file");
const hbs = require("handlebars");
const markdownIt = require("markdown-it");
const pretty = require("pretty");
// Variables
const md = markdownIt();
hbs.registerHelper("renderPartial", function (partialId, options) {
    // Variables
    const source = read_file_1.readFile(partialId);
    const html = hbs.compile(source)(options.hash);
    return new hbs.SafeString(html);
});
function compileType(filename, json, details, partials) {
    return pretty(compileGeneral("type", filename, json, details, partials));
}
exports.compileType = compileType;
/**Compiles the template in general.
 * @param templateId {string} - The name of the template to look into (such as method, field, etc).
 * @param filename {string} - The name of the file to get the template from.
 * @param json {TemplateApi} - The template api used for rendering.
 * @param context {any} - The context used for anything extra.
 * @returns Returns a compiled html code.*/
function compileGeneral(templateId, filename, json, details, context) {
    // Variables
    const template = compileHandlebars(filename);
    const apiItems = getApiItems(json.api);
    let templateJson = context;
    templateJson["breadcrumbs"] = json.breadcrumbs;
    templateJson["breadcrumbsFull"] = json.breadcrumbs.join('.');
    templateJson[templateId] = apiItems;
    templateJson["details"] = details;
    return template(templateJson);
}
/**Compiles the handlebars file from the givne filename.
 * @param filename {string} - The filename to grab from.
 * @returns Returns a handlebars templating delegate.*/
function compileHandlebars(filename) {
    // Variables
    let source = read_file_1.readFile(filename);
    return hbs.compile(source);
}
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