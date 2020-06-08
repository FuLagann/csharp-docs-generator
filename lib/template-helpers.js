"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateApi_1 = require("./models/TemplateApi");
// External functionalities
const read_file_1 = require("./read-file");
const template_1 = require("./template");
// External libraries
const ejs = require("ejs");
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
        results.push(views[i].name);
        if (views[i].children.length > 0) {
            results[i] += (`<ul class="${nestedviewClass}">` +
                `${generateSidebar(views[i].children, treeviewClass, nestedviewClass)}</ul>`);
        }
        results[i] = `<li>${results[i]}</li>`;
    }
    return results.join("");
}
exports.generateSidebar = generateSidebar;
