"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_file_1 = require("./read-file");
const xmldom_1 = require("xmldom");
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
    const xmls = getXmls(args.binaries);
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
/**Generates all the members from the xml document into the map.
 * @param api {Map<string, any>} - The map used for templating and documentation generation. Will be filled in.
 * @param xml {XMLDocument} - The xml document to look into.*/
function generateMembers(api, xml) {
    if (!xml) {
        throw new Error("Undefined xml.");
    }
    // Variables
    const members = xml.getElementsByTagName("member");
    for (let a = 0; a < members.length; a++) {
        // Variables
        let name = members[a].getAttribute("name");
        if (!name) {
            throw new Error("No name for member! XML document invalid!");
        }
        // Variables
        const methodParam = name.split('(');
        let args = methodParam[0].split('.');
        const type = args[0].split(':')[0];
        let temp = api;
        args[0] = args[0].split(':')[1];
        if (methodParam.length > 1) {
            args[args.length - 1] += `(${methodParam[1]}`;
        }
        for (let b = 0; b < args.length; b++) {
            if (!temp.has(args[b])) {
                temp.set(args[b], new Map());
            }
            temp = temp.get(args[b]);
            if (b == args.length - 1) {
                temp.set("type", type);
                setDataMembers(temp, members[a]);
            }
            else if (temp.get("type") == undefined) {
                temp.set("type", "N");
            }
        }
    }
}
/**Sets all the data members into the map of api from the given member.
 * @param api {Map<string, any>} - The map to place data onto.
 * @param member {Element} - The member to look into.*/
function setDataMembers(api, member) {
    // Variables
    const parameters = gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
    const exceptions = gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
    const typeParameters = gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
    for (let i = 0; i < TEXT_CONTENTS.length; i++) {
        api.set(TEXT_CONTENTS[i][0], getTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1]));
    }
    api.set("param", parameters);
    api.set("exception", exceptions);
    api.set("typeparam", typeParameters);
}
/**Gather the name and description for the given attribute name of the collection of elements.
 * @param members {HTMLCollectionOf<Element>} - The list of members to look into.
 * @param attrName {string} - The name of the attribute to look into.
 * @returns Returns the list of names and descriptions of the attributes of the members.*/
function gatherNameDescriptionList(members, attrName) {
    // Variables
    let results = [];
    for (let i = 0; i < members.length; i++) {
        // Variables
        const name = members[i].getAttribute(attrName);
        const desc = (members[i].textContent || "No description").trim() + ".";
        if (!name) {
            continue;
        }
        results.push({ name: name, description: desc });
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
    return (elems[0].textContent || defaultText).trim() + ".";
}
