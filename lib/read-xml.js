"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const XmlFormat_1 = require("./models/XmlFormat");
const xmldom_1 = require("xmldom");
const fs = require("fs");
const io = require("@actions/io");
const markdownIt = require("markdown-it");
// Variables
const md = markdownIt();
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
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const parser = new xmldom_1.DOMParser();
        const xmls = getXmls(args.binaries);
        let api = new Map();
        let content;
        for (let i = 0; i < xmls.length; i++) {
            content = read_file_1.readFile(xmls[i]);
            yield generateMembers(api, parser.parseFromString(content, "text/xml"));
        }
        return api;
    });
}
exports.gatherApiMap = gatherApiMap;
// TODO: Get api map of netstandard xml
// TODO: Get api map of dependancy xml
// TODO: Get the specific type/member from the xmls and place that type/member data into the api.
// While this will still be a pretty slow process, it should be faster by only getting the things
// that are needed instead of literally everything.
// Look into (xml as XmlDocument).getElementsByName("T:System.Collections.Generic.List`1")
//export async function gatherApiMapFromTypePath(api : Map<string, XmlFormat>, typePath : string, xmls : string[]) : Promise<Map<string, XmlFormat>>
function gatherApiMapFromTypePath(api, typePath, xmls) {
    // Variables
    const parser = new xmldom_1.DOMParser();
    let content;
    let found = false;
    for (let i = 0; i < xmls.length; i++) {
        content = read_file_1.readFile(xmls[i]);
        found = generateMemberFromTypePath(api, parser.parseFromString(content, "text/xml"), typePath);
        if (found === true) {
            break;
        }
    }
}
exports.gatherApiMapFromTypePath = gatherApiMapFromTypePath;
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
exports.getXmls = getXmls;
function generateMemberFromTypePath(api, xml, typePath) {
    if (!xml) {
        throw new Error("Undefined xml!");
    }
    // Variables
    const members = xml.getElementsByTagName("member");
    fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "Type: " + typePath + "\n");
    for (let i = 0; i < members.length; i++) {
        fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\tMember Name: " + members[i].getAttribute("name") + "\n");
        if (members[i].getAttribute("name") == typePath) {
            // Variables
            let temp = typePath.split(':');
            const type = temp[0];
            const ntypePath = temp[1];
            let format = setDataMembers(members[i]);
            format.type = type;
            api.set(ntypePath, format);
            return true;
        }
    }
    return false;
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
    for (let i = 0; i < members.length; i++) {
        // Variables
        const name = members[i].getAttribute(attrName);
        if (!name) {
            continue;
        }
        let desc = (getTextContentFromMember(members[i], "No description")).trim();
        if (desc != "" && !desc.endsWith(".")) {
            desc += ".";
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
    let desc = (getTextContentFromMember(elems[0], defaultText)).trim();
    if (desc != "" && !desc.endsWith(".")) {
        desc += ".";
    }
    return desc;
}
function getTextContentFromMember(member, defaultText) {
    var _a;
    if (!member.textContent) {
        return defaultText;
    }
    // Variables
    let results = "";
    if (member.hasChildNodes()) {
        for (let i = 0; i < member.childNodes.length; i++) {
            switch (member.childNodes[i].nodeName) {
                case "#text":
                    {
                        results += member.childNodes[i].textContent;
                        md.render("");
                    }
                    break;
                case "paramref":
                    {
                        results += '<span class="paramref">';
                        results += member.childNodes[i].getAttribute("name");
                        results += "</span>";
                    }
                    break;
                case "see":
                    {
                        // Variables
                        const child = member.childNodes[i];
                        if (child.hasAttribute("langword")) {
                            results += `<span class="langword">${child.getAttribute("langword")}</span>`;
                        }
                        else if (child.hasAttribute("cref")) {
                            // Variables
                            const matches = (_a = child.getAttribute("cref")) === null || _a === void 0 ? void 0 : _a.match(/(.):((?:[a-zA-Z0-9`]+[\.\/]?)*).*/);
                            if (!matches) {
                                break;
                            }
                            const typeMatches = matches[2].match(/((?:[a-zA-Z0-9`]+[\.\/]?)*)[\.\/](.*)|([a-zA-Z0-9`]+)/);
                            if (!typeMatches) {
                                break;
                            }
                            let link = (typeMatches[1].startsWith("System") ?
                                createSystemLink(matches[2].replace(/[`\/]/g, ".")) :
                                createInternalLink(typeMatches[1]));
                            let name = (!typeMatches[1] ? typeMatches[0] : typeMatches[2].replace(/`+\d+/g, ""));
                            // TODO: Link to webpage using the xml type path
                            results += `[${name}](${link})`;
                        }
                    }
                    break;
            }
            fs.appendFileSync(index_1.TEMP_FOLDER + "debugging/debug.txt", "\t\tChild: " + member.childNodes[i].textContent + "\n" +
                "\t\t\tChild Type: " + member.childNodes[i].nodeName + "\n" +
                "\t\t\tChild Attrs: " + member.childNodes[i].attributes + "\n");
        }
    }
    else {
        results = member.textContent;
    }
    return results;
}
function createSystemLink(typePath) {
    return `https://docs.microsoft.com/en-us/dotnet/api/${typePath}`;
}
function createInternalLink(typePath) {
    // Variables
    const args = index_1.getArguments();
    const list = index_1.getTypeList();
    for (const key in list.types) {
        // Variables
        const value = list.types[key];
        for (let i = 0; i < value.length; i++) {
            if (value[i] == typePath) {
                return typePath.replace(/[`\/]/g, ".") + args.outputExtension;
            }
        }
    }
    return `https://www.google.com/search?q=${typePath.replace(/[`\/]/g, ".")}`;
}
