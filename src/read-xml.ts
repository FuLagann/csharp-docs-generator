
import { readFile } from "./read-file";
import { InputArguments } from "./models/InputArguments";
import { NameDescription } from "./models/TemplateApi";
import { DOMParser } from "xmldom";

// Variables
const TEXT_CONTENTS : string[][] = [
	["summary", "No description"],
	["returns", ""],
	["remarks", ""],
	["example", ""]
];

/**Gathers the template api from the xml documentations generated.
 * @param args {InputArguments} - The arguments used to look into the xml documents.
 * @returns Returns a hash map used to find the data from the xml documentation.*/
export function gatherTemplateApi(args : InputArguments) : Map<string, any> {
	// Variables
	let content : string;
	const parser = new DOMParser();
	let api : Map<string, any> = new Map<string, any>();
	let xmls : string[] = getXmls(args.binaries);
	
	for(let i = 0; i < xmls.length; i++) {
		content = readFile(xmls[i]);
		generateMembers(api, parser.parseFromString(content, "text/xml"));
	}
	
	return api;
}

/**Generates all the members of the xml onto the given api.
 * @param api {Map<string, any>} - The api used to generate the members.
 * @param xml {XMLDocument} - The xml document to look into.*/
function generateMembers(api : Map<string, any>, xml : XMLDocument) {
	if(!xml) { throw new Error("Undefined xml"); }
	
	// Variables
	const members = xml.getElementsByTagName("member");
	
	for(let i = 0; i < members.length; i++) {
		// Variables
		let name = members[i].getAttribute("name");
		
		if(!name) { throw new Error("No name for member! XML document invalid!"); }
		
		// Variables
		let methodParam = name.split('(');
		let args = methodParam[0].split('.');
		const type = args[0].split(':')[0];
		let temp : Map<string, any> = api;
		
		args[0] = args[0].split(':')[1];
		if(methodParam.length > 1) {
			args[args.length - 1] += `(${ methodParam[1] }`;
		}
		
		for(let mid = 0; mid < args.length; mid++) {
			if(!temp.has(args[mid])) {
				temp.set(args[mid], new Map<string, any>());
			}
			
			temp = temp.get(args[mid]) as Map<string, any>;
			if(mid == args.length - 1) {
				temp.set("type", type);
				setDataMembers(temp, members[i]);
			}
			else if(temp.get("type") == undefined) {
				temp.set("type", "N");
			}
		}
	}
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

/**Sets the data members onto the api map.
 * @param api {Map<string, any>} - The map to set the data member onto.
 * @param member {Element} - The member to look into.*/
function setDataMembers(api : Map<string, any>, member : Element) {
	// Variables
	const param = member.getElementsByTagName("param");
	const exceptionTags = member.getElementsByTagName("exception");
	const typeparam = member.getElementsByTagName("typeparam");
	let parameters : NameDescription[] = [];
	let exceptions : NameDescription[] = [];
	let typeParams : NameDescription[] = [];
	
	for(let i = 0; i < param.length; i++) {
		// Variables
		const paramName = param[i].getAttribute("name");
		const paramDesc = param[i].textContent || "No description";
		
		if(!paramName) { continue; }
		
		parameters.push({
			name: paramName,
			description: `${ paramDesc.trim() }.`
		});
	}
	
	for(let i = 0; i < exceptionTags.length; i++) {
		// Variables
		const exceptionType = exceptionTags[i].getAttribute("cref");
		const exceptionDesc = exceptionTags[i].textContent || "No description";
		
		if(!exceptionType) { continue; }
		
		exceptions.push({
			name: exceptionType,
			description: `${ exceptionDesc.trim() }.`
		});
	}
	
	for(let i = 0; i < typeparam.length; i++) {
		// Variables
		const typeParamName = typeparam[i].getAttribute("name");
		const typeParamDesc = typeparam[i].textContent || "No description";
		
		if(!typeParamName) { continue; }
		
		typeParams.push({
			name: typeParamName,
			description: `${ typeParamDesc.trim() }.`
		});
	}
	
	for(let i = 0; i < TEXT_CONTENTS.length; i++) {
		api.set(TEXT_CONTENTS[i][0], getTextContent(member, TEXT_CONTENTS[i][0], TEXT_CONTENTS[i][1]));
	}
	api.set("param", parameters);
	api.set("exception", exceptions);
	api.set("typeparam", typeParams);
}

/**Gets the text content of the member using a default text as a fail safe.
 * @param member {Element} - The member to look into.
 * @param id {string} - The child element name to look into.
 * @param defaultText {string} - The default text used as a fail safe.
 * @returns Returns the text content of the member.*/
function getTextContent(member : Element, id : string, defaultText : string) : string {
	// Variables
	const elems = member.getElementsByTagName(id);
	
	if(elems.length == 0) { return defaultText; }
	
	return `${ (elems[0].textContent || defaultText).trim() }.`;
}
