"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateVariables_1 = require("./models/TemplateVariables");
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const template_1 = require("./template");
const ejs = require("ejs");
function displaySidebar(treeview, treeviewClass = "treeview", nestedviewClass = "nested") {
    if (treeview instanceof TemplateVariables_1.SidebarView && treeview.name == "$~root") {
        return (`<ul class="${treeviewClass}">` +
            `${displaySidebar(treeview.children, treeviewClass, nestedviewClass)}</ul>`);
    }
    // Variables
    const views = treeview;
    let results = [];
    for (let i = 0; i < views.length; i++) {
        results.push(views[i].name);
        if (views[i].children.length > 0) {
            results[i] += (`<ul class="${nestedviewClass}">` +
                `${displaySidebar(views[i].children, treeviewClass, nestedviewClass)}</ul>`);
        }
        results[i] = `<li>${results[i]}</li>`;
    }
    return results.join("");
}
exports.displaySidebar = displaySidebar;
function createPartial(type, uri, path, context = {}) {
    switch (type) {
        case "type": return template_1.compileType(index_1.getTemplateUri(uri), path);
        // TODO: Add constructor
        // TODO: Add property
        // TODO: Add event
        // TODO: Add field
        // TODO: Add method
    }
    return ejs.render(read_file_1.readFile(uri), context);
}
exports.createPartial = createPartial;
