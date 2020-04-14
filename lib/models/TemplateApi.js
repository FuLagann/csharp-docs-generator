"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SidebarView {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}
exports.SidebarView = SidebarView;
class MemberList {
    constructor(list, linkName, templateType, templateUris) {
        this.list = list;
        this.linkName = linkName;
        this.type = templateType;
        this.uris = templateUris;
    }
}
exports.MemberList = MemberList;
