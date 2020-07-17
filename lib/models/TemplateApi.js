"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberList = exports.SidebarView = void 0;
/**A tree that holds the information for search.js and navigation.*/
class SidebarView {
    constructor(name, link, tag) {
        this.name = name;
        this.link = link;
        this.tag = tag;
        this.children = [];
    }
}
exports.SidebarView = SidebarView;
/**This format is meant to hold the list of members, the type it's a part of, anchored name links to send the user to the top of the list, and a compact-full uris for further templating.*/
class MemberList {
    constructor(list, linkName, templateType, templateUris) {
        this.list = list;
        this.linkName = linkName;
        this.type = templateType;
        this.uris = templateUris;
    }
}
exports.MemberList = MemberList;
