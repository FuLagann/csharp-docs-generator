"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateVariables_1 = require("./models/TemplateVariables");
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
function createPartial(uri, path) {
    return `${path} ==> ${uri}`;
}
exports.createPartial = createPartial;
