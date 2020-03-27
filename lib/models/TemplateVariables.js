"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_helpers_1 = require("../template-helpers");
class GeneralTemplateVars {
    constructor() {
        this.displaySidebar = template_helpers_1.displaySidebar;
        this.createPartial = template_helpers_1.createPartial;
    }
}
exports.GeneralTemplateVars = GeneralTemplateVars;
class SidebarView {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}
exports.SidebarView = SidebarView;
class BaseTemplateVars extends GeneralTemplateVars {
    constructor(json) {
        super();
        this.cssUris = json.cssUris;
        this.scriptUris = json.scriptUris;
        this.breadcrumbs = [];
        this.typeUri = json.typeUri;
        this.typePath = "";
        this.isNamespace = false;
        this.sidebarView = new SidebarView("$~root");
    }
}
exports.BaseTemplateVars = BaseTemplateVars;
