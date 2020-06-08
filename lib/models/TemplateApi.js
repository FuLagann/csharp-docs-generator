"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberList = exports.SidebarView = void 0;
class SidebarView {
    constructor(name, link, tag) {
        this.name = name;
        this.link = link;
        this.tag = tag;
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
