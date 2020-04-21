
// Models
import { TypeList } from "./models/SharpChecker";
import { InputArguments } from "./models/InputArguments";
import { NameDescription } from "./models/TemplateApi";
import { XmlFormat } from "./models/XmlFormat";
// External functionalities
import { getArguments, getTypeList } from "./index";
import { readFile } from "./read-file";
// External libraries
import { DOMParser } from "xmldom";
import markdownIt = require("markdown-it");
import prism = require("markdown-it-prism");

// Variables
const md = markdownIt({ html: true });
const TEXT_CONTENTS : string[][] = [
	["summary", "No description"],
	["returns", ""],
	["remarks", ""],
	["example", ""]
];

md.use(prism);

/**Gets the api documentation using the type path.
 * @param typePath {string} - The path to the type to look into.
 * @param xmls {string[]} - The list of xmls files to look into.
 * @return Returns a xml format to use for documentation.*/
export function getApiDoc(typePath : string, xmls : string[]) : XmlFormat {
	// Variables
	const parser : DOMParser = new DOMParser();
	let format : (XmlFormat | null) = null;
	
	for(let i = 0; i < xmls.length; i++) {
		// Variables
		const content = readFile(xmls[i]);
		const xml : XMLDocument = parser.parseFromString(content, "text/xml");
		
		if(!xml) {
			console.warn("Undefined xml [" + xmls[i] +"]!");
			console.log("Content: " + content.substring(0, Math.min(100, content.length)));
			continue;
		}
		
		format = generateMember(xml, typePath);
		if(format) { break; }
	}
	
	return format || new XmlFormat();
}

/**Gets all the xml locations that are associated with the binary files.
 * @param binaries {string[]} - The list of binaries to search for.
 * @returns Returns the list of xml documentations.*/
export function getXmls(binaries : string[]) : string[] {
	// Variables
	let results : string[] = [];
	
	for(let i = 0; i < binaries.length; i++) {
		results.push(binaries[i].replace(/\.(dll|exe)$/, ".xml").trim());
	}
	
	return results;
}

/**Creates a external link to the C# MSDN Library documentation of the given type.
 * @param typePath {string} - The type path to create the link with.
 * @returns Returns a link to the type found within the C# MSDN Library.*/
export function createSystemLink(typePath : string) : string {
	return `https://docs.microsoft.com/en-us/dotnet/api/${ typePath.toLowerCase() }`;
}

/**Creates an internal link to the given type.
 * @param typePath {string} - The type path to create the link with.
 * @return Returns a link to the type. If it's a dependent, then it will give a link to google,
 * look up the type. It's not the best thing to do, but it's a viable option.*/
export function createInternalLink(typePath : string) : string {
	// Variables
	const args : InputArguments = getArguments();
	const list : TypeList = getTypeList();
	
	for(const key in list.types) {
		// Variables
		const value : string[] = list.types[key] as string[];
		
		for(let i = 0; i < value.length; i++) {
			if(value[i] == typePath) {
				return typePath.replace(/`/g, '-').replace(/\//g, '.').toLowerCase() + args.outputExtension;
			}
		}
	}
	
	return `https://www.google.com/search?q=${ typePath.replace(/`/g, '-').replace(/\//g, ".").toLowerCase() }`;
}

/**Generates the documentation member from the given type path.
 * @param xml {XMLDocument} - The xml document to look into.
 * @param typePath {string} - The type path to look up.
 * @returns Returns the xml format to use for documentation. Returns null if the member was not found.*/
function generateMember(xml : XMLDocument, typePath : string) : (XmlFormat | null) {
	// Variables
	const members = xml.getElementsByTagName("member");
	
	for(let i = 0; i < members.length; i++) {
		if(members[i].getAttribute("name") == typePath) {
			// Variables
			let format : XmlFormat = generateXmlFormat(members[i]);
			
			format.type = typePath.split(':')[0];
			return format;
		}
	}
	
	return null;
}

/**Creates the xml format from the given member.
 * @param member {Element} - The element to look into.
 * @returns Returns the xml format used to create documentation out of.*/
function generateXmlFormat(member : Element) : XmlFormat {
	// Variables
	let format : XmlFormat = new XmlFormat();
	const parameters : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
	const exceptions : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
	const typeParameters : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
	
	for(let i = 0; i < TEXT_CONTENTS.length; i++) {
		format.setTextContent(
			TEXT_CONTENTS[i][0],
			getMarkdownTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1])
		);
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
function gatherNameDescriptionList(members : (HTMLCollectionOf<Element> | NodeListOf<Element>), attrName : string) : NameDescription[] {
	// Variables
	let results : NameDescription[] = [];
	
	for(let i = 0; i < members.length; i++) {
		// Variables
		const name = members[i].getAttribute(attrName);
		if(!name) { continue; }
		let desc = (getTextContent(members[i], "No description")).trim();
		
		if(desc != "" && !(desc.endsWith(".") || desc.endsWith('!') || desc.endsWith('?') || desc.endsWith("```"))) { desc += "."; }
		
		results.push({ name: name, description: md.render(desc) });
	}
	
	return results;
}

/**Gets the text content of the member with a fail safe.
 * @param member {Element} - The element to look into.
 * @param id {string} - The name of the tag to look into.
 * @param defaultText {string} - The fail safe default text to go to when the tag or text was not found.
 * @returns Returns rendered markdown text content of the member.*/
function getMarkdownTextContent(member : Element, id : string, defaultText : string) : string {
	// Variables
	const elems = member.getElementsByTagName(id);
	if(elems.length == 0) { return defaultText; }
	let desc = (getTextContent(elems[0], defaultText)).trim();
	
	if(desc != "" && !(desc.endsWith(".") || desc.endsWith('!') || desc.endsWith('?') || desc.endsWith("```"))) { desc += "."; }
	if(id == "example") {
		console.log("Text Content:", desc);
		console.log("Markdown Render", md.render(desc));
	}
	
	return md.render(desc);
}

/**Gets the text content from the given member.
 * @param member {Element} - The member to look into.
 * @param defaultText {string} - The default text to use when the member has nothing to begin with.
 * @returns Returns the text content from the given member.*/
function getTextContent(member : Element, defaultText : string) : string {
	if(!member.textContent) { return defaultText; }
	
	// Variables
	let results : string = "";
	
	if(member.hasChildNodes()) {
		for(let i = 0; i < member.childNodes.length; i++) {
			switch(member.childNodes[i].nodeName) {
				case "#text": {
					results += member.childNodes[i].textContent;
				} break;
				case "paramref": {
					results += '<span class="paramref">';
					results += (member.childNodes[i] as Element).getAttribute("name");
					results += "</span>";
				} break;
				case "see": {
					// Variables
					const child : Element = member.childNodes[i] as Element;
					
					if(child.hasAttribute("langword")) {
						results += `<span class="langword">${ child.getAttribute("langword") }</span>`;
					}
					else if(child.hasAttribute("cref")) {
						// Variables
						const matches = child.getAttribute("cref")?.match(/(.):((?:[a-zA-Z0-9`]+[\.\/]?)*).*/);
						if(!matches) { break; }
						const typeMatches = matches[2].match(/((?:[a-zA-Z0-9`]+[\.\/]?)*)[\.\/](.*)|([a-zA-Z0-9`]+)/);
						if(!typeMatches) { break; }
						let link = (typeMatches[1].startsWith("System") ?
							createSystemLink(matches[2].replace(/`/g, '-').replace(/\//g, '.')) :
							createInternalLink(typeMatches[matches[1] == "T" ? 0 : 1])
						);
						let name = (!typeMatches[1] ? typeMatches[0] : typeMatches[2].replace(/`+\d+/g, ""));
						
						results += `<a href="${ link }">${ name }</a>`;
					}
				} break;
			}
		}
	}
	else { results = member.textContent; }
	
	
	return results;
}
