
import { NETSTANDARD_XML, TEMP_FOLDER } from "./index";
import { readFile } from "./read-file";
import { NameDescription } from "./models/TemplateApi";
import { InputArguments } from "./models/InputArguments";
import { XmlFormat } from "./models/XmlFormat";
import { DOMParser } from "xmldom";
import fs = require("fs");
import io = require("@actions/io");

// Variables
const TEXT_CONTENTS : string[][] = [
	["summary", "No description"],
	["returns", ""],
	["remarks", ""],
	["example", ""]
];

/**Gathers a map of the api from the xml documents.
 * @param args {InputArguments} - The input arguments to get the xml documents from.
 * @returns Returns a documented map of the api.*/
export function gatherApiMap(args : InputArguments) : Map<string, XmlFormat> {
	// Variables
	let content : string;
	let api : Map<string, XmlFormat> = new Map<string, XmlFormat>();
	const parser : DOMParser = new DOMParser();
	const xmls : string[] = getXmls(args.binaries).concat([TEMP_FOLDER + NETSTANDARD_XML]);
	
	for(let i = 0; i < xmls.length; i++) {
		content = readFile(xmls[i]);
		generateMembers(api, parser.parseFromString(content, "text/xml"));
	}
	
	return api;
}

/**Gets all the xml locations that are associated with the binary files.
 * @param binaries {string[]} - The list of binaries to search for.
 * @returns Returns the list of xml documentations.*/
function getXmls(binaries : string[]) : string[] {
	// Variables
	let results : string[] = [];
	
	for(let i = 0; i < binaries.length; i++) {
		results.push(binaries[i].replace(/\.(dll|exe)/, ".xml").trim());
	}
	
	return results;
}

function generateMembers(api : Map<string, XmlFormat>, xml : XMLDocument) {
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
		let format : XmlFormat = setDataMembers(members[i]);
		
		format.type = type;
		api.set(typePath, format);
	}
}

function setDataMembers(member : Element) : XmlFormat {
	io.mkdirP(TEMP_FOLDER + "debugging/");
	// Variables
	let format : XmlFormat = new XmlFormat();
	const parameters : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("param"), "name");
	const exceptions : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("exception"), "cref");
	const typeParameters : NameDescription[] = gatherNameDescriptionList(member.getElementsByTagName("typeparam"), "name");
	
	for(let i = 0; i < TEXT_CONTENTS.length; i++) {
		format.setTextContent(
			TEXT_CONTENTS[i][0],
			getTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1])
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
function gatherNameDescriptionList(members : (HTMLCollectionOf<Element> | NodeListOf<Element>), attrName : string) : NameDescription[] {
	// Variables
	let results : NameDescription[] = [];
	
	for(let i = 0; i < members.length; i++) {
		// Variables
		const name = members[i].getAttribute(attrName);
		let desc = (members[i].textContent || "No description").trim() + ".";
		
		if(desc.endsWith("..")) { desc = desc.substring(0, desc.length - 1); }
		if(!name) { continue; }
		
		results.push({ name: name, description: makeTextContentFriendly(desc) });
	}
	
	return results;
}

/**Gets the text content of the member with a fail safe.
 * @param member {Element} - The element to look into.
 * @param id {string} - The name of the tag to look into.
 * @param defaultText {string} - The fail safe default text to go to when the tag or text was not found.
 * @returns Returns the text content of the member.*/
function getTextContent(member : Element, id : string, defaultText : string) : string {
	// Variables
	const elems = member.getElementsByTagName(id);
	
	if(elems.length == 0) { return defaultText; }
	
	// Variables
	let desc = (elems[0].textContent || defaultText).trim();
	
	if(desc != "") { desc += "."; }
	
	io.mkdirP(TEMP_FOLDER + "debugging/");
	fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\tOutter: " + member.outerHTML + "\n");
	for(let a = 0; a < member.children.length; a++) {
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t\tChildren: " + member.children[a].outerHTML + "\n");
	}
	
	if(desc.endsWith("..")) { desc = desc.substring(0, desc.length - 1); }
	
	return makeTextContentFriendly(desc);
}

function makeTextContentFriendly(desc : string) {
	io.mkdirP(TEMP_FOLDER + "debugging/");
	// Variables
	fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "Full: " + desc + "\n");
	const pattern = /<(see|paramref) (cref|name|langword)="(?:.\:)?([a-zA-Z0-9`\.~\(\)]+)"\W?\/>/gm;
	const results = desc.replace(pattern, function(substring : string, args : any[]) : string {
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "Text: " + substring + "\n");
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t" + args[0] + "\n");
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t" + args[1] + "\n");
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t" + args[2] + "\n");
		fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t---------------\n");
		return substring;
	});
	fs.appendFileSync(TEMP_FOLDER + "debugging/debug.txt", "\t\tReplaced: " + results + "\n\n");
	
	return results;
}
