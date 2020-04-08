
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
		if(!name) { continue; }
		let desc = getTextContentFromMember(members[i], "No description").trim();
		
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
function getTextContent(member : Element, id : string, defaultText : string) : string {
	// Variables
	const elems = member.getElementsByTagName(id);
	if(elems.length == 0) { return defaultText; }
	let desc = getTextContentFromMember(elems[0], defaultText).trim();
	
	if(desc != "" && !desc.endsWith(".")) { desc += "."; }
	
	return desc;
}

function getTextContentFromMember(member : Element, defaultText : string) : string {
	if(!member.textContent) { return defaultText; }
	
	// Variables
	let results : string = "";
	
	if(member.hasChildNodes()) {
		for(let i = 0; i < member.childNodes.length; i++) {
			results += member.childNodes[i].textContent;
			fs.appendFileSync(
				TEMP_FOLDER + "debugging/debug.txt",
				"\t\tChild: " + member.childNodes[i].textContent + "\n" +
				"\t\t\tChild Type: " + member.childNodes[i].nodeName + "\n"
			);
		}
	}
	else { results = member.textContent; }
	
	
	return results;
}
