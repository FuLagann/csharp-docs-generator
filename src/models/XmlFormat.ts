
import { NameDescription } from "./TemplateApi";

export class XmlFormat {
	type : string;
	summary : string;
	returns : string;
	remarks : string;
	example : string;
	parameters : NameDescription[];
	exceptions : NameDescription[];
	typeParameters : NameDescription[];
	
	constructor() {
		this.type = "";
		this.summary = "No description.";
		this.returns = "";
		this.remarks = "";
		this.example = "";
		this.parameters = [];
		this.exceptions = [];
		this.typeParameters = [];
	}
	
	setTextContent(parameter : string, content : string) {
		switch(parameter) {
			case "summary": this.summary = content; break;
			case "returns": this.returns = content; break;
			case "remarks": this.remarks = content; break;
			case "example": this.example = content; break;
		}
	}
}

export interface DependencyJson {
	runtimeTarget : DependencyRuntimeTarget;
	targets : { [key : string] : { [key : string] : DependencyTarget } }
	libraries : { [key : string] : DependencyLibrary }
}

export interface DependencyRuntimeTarget {
	name : string;
	signiture : string;
}

export interface DependencyTarget {
	dependencies : ({ [key : string] : string } | undefined);
	runtime : ({ [key : string] : any } | undefined);
}

export interface DependencyLibrary {
	type : string;
	serviceable : boolean;
	sha512 : string;
	path : (string | undefined);
	hasPath : (string | undefined);
}
