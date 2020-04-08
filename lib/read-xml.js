"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const XmlFormat_1 = require("./models/XmlFormat");
const xmldom_1 = require("xmldom");
const fs = require("fs");
const io = require("@actions/io");
// Variables
const TEXT_CONTENTS = [
    ["summary", "No description"],
    ["returns", ""],
    ["remarks", ""],
    ["example", ""]
];
/**Gathers a map of the api from the xml documents.
 * @param args {InputArguments} - The input arguments to get the xml documents from.
 * @returns Returns a documented map of the api.*/
function gatherApiMap(args) {
    // Variables
    let content;
    let api = new Map();
    const parser = new xmldom_1.DOMParser();
    const xmls = getXmls(args.binaries).concat([index_1.TEMP_FOLDER + index_1.NETSTANDARD_XML]);
    for (let i = 0; i < xmls.length; i++) {
        content = read_file_1.readFile(xmls[i]);
        generateMembers(api, parser.parseFromString(content, "text/xml"));
    }
    return api;
}
exports.gatherApiMap = gatherApiMap;
/**Gets all the xml locations that are associated with the binary files.
 * @param binaries {string[]} - The list of binaries to search for.
 * @returns Returns the list of xml documentations.*/
function getXmls(binaries) {
    // Variables
    let results = [];
    for (let i = 0; i < binaries.length; i++) {
        results.push(binaries[i].replace(/\.(dll|exe)/, ".xml").trim());
    }
    return results;
}
function generateMembers(api, xml) {
    if (!xml) {
        throw new Error("Undefined xml!");
    }
    // Variables
    const members = xml.getElementsByTagName("member");
    for (let i = 0; i < members.length; i++) {
        // Variables
        const name = members[i].getAttribute("name");
        if (!name) {
            throw new Error("No name for member! XML document invalid!");
        }
        let temp = name.split(':');
        const type = temp[0];
        const typePath = temp[1];
        let format = setDataMembers(members[i]);
        format.type = type;
        api.set(typePath, format);
    }
}
function setDataMembers(member) {
    io.mkdirP(index_1.TEMP_FOLDER + "debugging/");
    // Variables
    let format = new XmlFormat_1.XmlFormat();
    const parameters = gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
    const exceptions = gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
    const typeParameters = gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
    for (let i = 0; i < TEXT_CONTENTS.length; i++) {
        format.setTextContent(TEXT_CONTENTS[i][0], getTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1]));
    }
    format.parameters = parameters;
    format.exceptions = exceptions;
    format.typeParameters = typeParameters;
    return format;
}
/**Gather the name and description for the given attribute name of the collection of elements.
 * @param members {HTMLCollectionOf<Element>} - The list of members to look into.
 * @param attrName {string} - The name of the attribute to look into.
 * @returns Returns the list of names and descriptions of the attributes of the members.*/
function gatherNameDescriptionList(members, attrName) {
    // Variables
    let results = [];
    io.mkdirP(index_1.TEMP_FOLDER + "debugging/");
    for (let i = 0; i < members.length; i++) {
        // Variables
        const name = members[i].getAttribute(attrName);
        let desc = (members[i].textContent || "No description").trim() + ".";
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\tOutter: " + members[i].outerHTML + "\n");
        for (let a = 0; a < members[i].children.length; a++) {
            fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t\tChildren: " + members[i].children[a].outerHTML + "\n");
        }
        if (desc.endsWith("..")) {
            desc = desc.substring(0, desc.length - 1);
        }
        if (!name) {
            continue;
        }
        results.push({ name: name, description: makeTextContentFriendly(desc) });
    }
    return results;
}
/**Gets the text content of the member with a fail safe.
 * @param member {Element} - The element to look into.
 * @param id {string} - The name of the tag to look into.
 * @param defaultText {string} - The fail safe default text to go to when the tag or text was not found.
 * @returns Returns the text content of the member.*/
function getTextContent(member, id, defaultText) {
    // Variables
    const elems = member.getElementsByTagName(id);
    if (elems.length == 0) {
        return defaultText;
    }
    // Variables
    let desc = (elems[0].textContent || defaultText).trim();
    if (desc != "") {
        desc += ".";
    }
    fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\tOutter: " + member.outerHTML + "\n");
    for (let a = 0; a < member.children.length; a++) {
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t\tChildren: " + member.children[a].outerHTML + "\n");
    }
    if (desc.endsWith("..")) {
        desc = desc.substring(0, desc.length - 1);
    }
    return makeTextContentFriendly(desc);
}
function makeTextContentFriendly(desc) {
    io.mkdirP(index_1.TEMP_FOLDER + "debugging/");
    // Variables
    fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "Full: " + desc + "\n");
    const pattern = /<(see|paramref) (cref|name|langword)="(?:.\:)?([a-zA-Z0-9`\.~\(\)]+)"\W?\/>/gm;
    const results = desc.replace(pattern, function (substring, args) {
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "Text: " + substring + "\n");
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t" + args[0] + "\n");
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t" + args[1] + "\n");
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t" + args[2] + "\n");
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t---------------\n");
        return substring;
    });
    fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t\tReplaced: " + results + "\n\n");
    return results;
}
