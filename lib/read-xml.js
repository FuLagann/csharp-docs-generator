"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XmlFormat_1 = require("./models/XmlFormat");
// External functionalities
const index_1 = require("./index");
const read_file_1 = require("./read-file");
// External libraries
const xmldom_1 = require("xmldom");
const markdownIt = require("markdown-it");
// Variables
const md = markdownIt({ html: true });
const TEXT_CONTENTS = [
    ["summary", "No description"],
    ["returns", ""],
    ["remarks", ""],
    ["example", ""]
];
/**Gets the api documentation using the type path.
 * @param typePath {string} - The path to the type to look into.
 * @param xmls {string[]} - The list of xmls files to look into.
 * @return Returns a xml format to use for documentation.*/
function getApiDoc(typePath, xmls) {
    // Variables
    const parser = new xmldom_1.DOMParser();
    let format = null;
    for (let i = 0; i < xmls.length; i++) {
        // Variables
        const content = read_file_1.readFile(xmls[i]);
        const xml = parser.parseFromString(content, "text/xml");
        if (!xml) {
            console.warn("Undefined xml [" + xmls[i] + "]!");
            continue;
        }
        format = generateMember(xml, typePath);
        if (format) {
            break;
        }
    }
    return format || new XmlFormat_1.XmlFormat();
}
exports.getApiDoc = getApiDoc;
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
/**Generates the documentation member from the given type path.
 * @param xml {XMLDocument} - The xml document to look into.
 * @param typePath {string} - The type path to look up.
 * @returns Returns the xml format to use for documentation. Returns null if the member was not found.*/
function generateMember(xml, typePath) {
    // Variables
    const members = xml.getElementsByTagName("member");
    for (let i = 0; i < members.length; i++) {
        if (members[i].getAttribute("name") == typePath) {
            // Variables
            let format = generateXmlFormat(members[i]);
            format.type = typePath.split(':')[0];
            return format;
        }
    }
    return null;
}
/**Creates the xml format from the given member.
 * @param member {Element} - The element to look into.
 * @returns Returns the xml format used to create documentation out of.*/
function generateXmlFormat(member) {
    // Variables
    let format = new XmlFormat_1.XmlFormat();
    const parameters = gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
    const exceptions = gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
    const typeParameters = gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
    for (let i = 0; i < TEXT_CONTENTS.length; i++) {
        format.setTextContent(TEXT_CONTENTS[i][0], getMarkdownTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1]));
    }
    format.parameters = parameters;
    format.exceptions = exceptions;
    format.typeParameters = typeParameters;
    return format;
}
/**Gather the name and description for the given attribute name of the collection of elements.
 * @param members {HTMLCollectionOf<Element>} - The list of members to look into.
 * @param attrName {string} - The name of the attribute to look into.
 * @returns Returns the list of names and rendered markdown descriptions of the attributes of the members.*/
function gatherNameDescriptionList(members, attrName) {
    // Variables
    let results = [];
    for (let i = 0; i < members.length; i++) {
        // Variables
        const name = members[i].getAttribute(attrName);
        if (!name) {
            continue;
        }
        let desc = (getTextContent(members[i], "No description")).trim();
        if (desc != "" && !(desc.endsWith(".") || desc.endsWith('!') || desc.endsWith('?'))) {
            desc += ".";
        }
        results.push({ name: name, description: md.render(desc) });
    }
    return results;
}
/**Gets the text content of the member with a fail safe.
 * @param member {Element} - The element to look into.
 * @param id {string} - The name of the tag to look into.
 * @param defaultText {string} - The fail safe default text to go to when the tag or text was not found.
 * @returns Returns rendered markdown text content of the member.*/
function getMarkdownTextContent(member, id, defaultText) {
    // Variables
    const elems = member.getElementsByTagName(id);
    if (elems.length == 0) {
        return defaultText;
    }
    let desc = (getTextContent(elems[0], defaultText)).trim();
    if (desc != "" && !(desc.endsWith(".") || desc.endsWith('!') || desc.endsWith('?'))) {
        desc += ".";
    }
    return md.render(desc);
}
/**Gets the text content from the given member.
 * @param member {Element} - The member to look into.
 * @param defaultText {string} - The default text to use when the member has nothing to begin with.
 * @returns Returns the text content from the given member.*/
function getTextContent(member, defaultText) {
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
                                createSystemLink(matches[2].replace(/`/g, '-').replace(/\//g, '.')) :
                                createInternalLink(typeMatches[matches[1] == "T" ? 0 : 1]));
                            let name = (!typeMatches[1] ? typeMatches[0] : typeMatches[2].replace(/`+\d+/g, ""));
                            results += `<a href="${link}">${name}</a>`;
                        }
                    }
                    break;
            }
        }
    }
    else {
        results = member.textContent;
    }
    return results;
}
/**Creates a external link to the C# MSDN Library documentation of the given type.
 * @param typePath {string} - The type path to create the link with.
 * @returns Returns a link to the type found within the C# MSDN Library.*/
function createSystemLink(typePath) {
    return `https://docs.microsoft.com/en-us/dotnet/api/${typePath.toLowerCase()}`;
}
/**Creates an internal link to the given type.
 * @param typePath {string} - The type path to create the link with.
 * @return Returns a link to the type. If it's a dependent, then it will give a link to google,
 * look up the type. It's not the best thing to do, but it's a viable option.*/
function createInternalLink(typePath) {
    // Variables
    const args = index_1.getArguments();
    const list = index_1.getTypeList();
    for (const key in list.types) {
        // Variables
        const value = list.types[key];
        for (let i = 0; i < value.length; i++) {
            if (value[i] == typePath) {
                return typePath.replace(/`/g, '-').replace(/\//g, '.').toLowerCase() + args.outputExtension;
            }
        }
    }
    return `https://www.google.com/search?q=${typePath.replace(/`/g, '-').replace(/\//g, ".").toLowerCase()}`;
}
