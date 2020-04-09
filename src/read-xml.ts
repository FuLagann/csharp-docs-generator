
import { NETSTANDARD_XML, TEMP_FOLDER, getArguments } from "./index";
import { readFile } from "./read-file";
import { generateTypeList } from "./generate";
import { NameDescription } from "./models/TemplateApi";
import { InputArguments } from "./models/InputArguments";
import { XmlFormat } from "./models/XmlFormat";
import { TypeList } from "./models/SharpChecker";
import { DOMParser } from "xmldom";
import fs = require("fs");
import io = require("@actions/io");
import markdownIt = require("markdown-it");

// Variables
const md = markdownIt();
const TEXT_CONTENTS : string[][] = [
	["summary", "No description"],
	["returns", ""],
	["remarks", ""],
	["example", ""]
];

/**Gathers a map of the api from the xml documents.
 * @param args {InputArguments} - The input arguments to get the xml documents from.
 * @returns Returns a documented map of the api.*/
export async function gatherApiMap(args : InputArguments) : Promise<Map<string, XmlFormat>> {
	// Variables
	const parser : DOMParser = new DOMParser();
	const xmls : string[] = getXmls(args.binaries);
	let api : Map<string, XmlFormat> = new Map<string, XmlFormat>();
	let content : string;
	
	for(let i = 0; i < xmls.length; i++) {
		content = readFile(xmls[i]);
		await generateMembers(api, parser.parseFromString(content, "text/xml"));
	}
	
	return api;
}

// TODO: Get api map of netstandard xml
// TODO: Get api map of dependancy xml
// TODO: Get the specific type/member from the xmls and place that type/member data into the api.
// While this will still be a pretty slow process, it should be faster by only getting the things
// that are needed instead of literally everything.
// Look into (xml as XmlDocument).getElementsByName("T:System.Collections.Generic.List`1")
//export async function gatherApiMapFromTypePath(api : Map<string, XmlFormat>, typePath : string, xmls : string[]) : Promise<Map<string, XmlFormat>>

export async function gatherApiMapFromTypePath(api : Map<string, XmlFormat>, typePath : string, xmls : string[]) {
	// Variables
	const parser : DOMParser = new DOMParser();
	let content : string;
	let found : boolean = false;
	
	for(let i = 0; i < xmls.length; i++) {
		content = readFile(xmls[i]);
		found = await generateMemberFromTypePath(api, parser.parseFromString(content, "text/xml"), typePath);
		if(found) { break; }
	}
}

/**Gets all the xml locations that are associated with the binary files.
 * @param binaries {string[]} - The list of binaries to search for.
 * @returns Returns the list of xml documentations.*/
export function getXmls(binaries : string[]) : string[] {
	// Variables
	let results : string[] = [];
	
	for(let i = 0; i < binaries.length; i++) {
		results.push(binaries[i].replace(/\.(dll|exe)/, ".xml").trim());
	}
	
	return results;
}

async function generateMemberFromTypePath(api : Map<string, XmlFormat>, xml : XMLDocument, typePath : string) : Promise<boolean> {
	if(!xml) { throw new Error("Undefined xml!"); }
	
	// Variables
	const members = xml.getElementsByName(typePath);
	
	if(members.length > 0) {
		// Variables
		let temp : string[] = typePath.split(':');
		const type : string = temp[0];
		const ntypePath : string = temp[1];
		let format : XmlFormat = await setDataMembers(members[0]);
		
		format.type = type;
		api.set(ntypePath, format);
		return true;
	}
	
	return false;
}

async function generateMembers(api : Map<string, XmlFormat>, xml : XMLDocument) {
	if(!xml) { throw new Error("Undefined xml!"); }
	
	// Variables
	const members = xml.getElementsByTagName("member");
	
	for(let i = 0; i < members.length; i++) {
		// Variables
		const name : (string | null) = members[i].getAttribute("name");
		if(!name) { throw new Error("No name for member! XML document invalid!"); }
		let temp : string[] = name.split(':');
		const type : string = temp[0];
		const typePath : string = temp[1];
		let format : XmlFormat = await setDataMembers(members[i]);
		
		format.type = type;
		api.set(typePath, format);
	}
}

async function setDataMembers(member : Element) : Promise<XmlFormat> {
	io.mkdirP(TEMP_FOLDER + "debugging/");
	// Variables
	let format : XmlFormat = new XmlFormat();
	const parameters : NameDescription[] = await gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
	const exceptions : NameDescription[] = await gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
	const typeParameters : NameDescription[] = await gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
	
	for(let i = 0; i < TEXT_CONTENTS.length; i++) {
		format.setTextContent(
			TEXT_CONTENTS[i][0],
			await getTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1])
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
 * @returns Returns the list of names and descriptions of the attributes of the members.*/
async function gatherNameDescriptionList(members : (HTMLCollectionOf<Element> | NodeListOf<Element>), attrName : string) : Promise<NameDescription[]> {
	// Variables
	let results : NameDescription[] = [];
	
	for(let i = 0; i < members.length; i++) {
		// Variables
		const name = members[i].getAttribute(attrName);
		if(!name) { continue; }
		let desc = (await getTextContentFromMember(members[i], "No description")).trim();
		
		if(desc != "" && !desc.endsWith(".")) { desc += "."; }
		
		results.push({ name: name, description: desc });
	}
	
	return results;
}

/**Gets the text content of the member with a fail safe.
 * @param member {Element} - The element to look into.
 * @param id {string} - The name of the tag to look into.
 * @param defaultText {string} - The fail safe default text to go to when the tag or text was not found.
 * @returns Returns the text content of the member.*/
async function getTextContent(member : Element, id : string, defaultText : string) : Promise<string> {
	// Variables
	const elems = member.getElementsByTagName(id);
	if(elems.length == 0) { return defaultText; }
	let desc = (await getTextContentFromMember(elems[0], defaultText)).trim();
	
	if(desc != "" && !desc.endsWith(".")) { desc += "."; }
	
	return desc;
}

async function getTextContentFromMember(member : Element, defaultText : string) : Promise<string> {
	if(!member.textContent) { return defaultText; }
	
	// Variables
	let results : string = "";
	
	if(member.hasChildNodes()) {
		for(let i = 0; i < member.childNodes.length; i++) {
			switch(member.childNodes[i].nodeName) {
				case "#text": {
					results += member.childNodes[i].textContent;
					md.render("", );
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
							createSystemLink(matches[2].replace(/[`\/]/g, ".")) :
							await createInternalLink(typeMatches[1])
						);
						let name = (!typeMatches[1] ? typeMatches[0] : typeMatches[2].replace(/`+\d+/g, ""));
						
						// TODO: Link to webpage using the xml type path
						results += `[${ name }](${ link })`;
					}
				} break;
			}
			fs.appendFileSync(
				TEMP_FOLDER + "debugging/debug.txt",
				"\t\tChild: " + member.childNodes[i].textContent + "\n" +
				"\t\t\tChild Type: " + member.childNodes[i].nodeName + "\n" +
				"\t\t\tChild Attrs: " + (member.childNodes[i] as Element).attributes
			);
		}
	}
	else { results = member.textContent; }
	
	
	return results;
}

function createSystemLink(typePath : string) : string {
	return `https://docs.microsoft.com/en-us/dotnet/api/${ typePath }`;
}

async function createInternalLink(typePath : string) : Promise<string> {
	// Variables
	const args : InputArguments = getArguments();
	const list : TypeList = await generateTypeList(args);
	
	for(const key in list.types) {
		// Variables
		const value : string[] = list.types[key] as string[];
		
		for(let i = 0; i < value.length; i++) {
			if(value[i] == typePath) {
				return typePath.replace(/[`\/]/g, ".") + args.outputExtension;
			}
		}
	}
	
	return `https://www.google.com/search?q=${ typePath.replace(/[`\/]/g, ".") }`;
}
