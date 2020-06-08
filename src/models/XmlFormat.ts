
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
