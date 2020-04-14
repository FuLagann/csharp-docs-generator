import { CompactFullUris } from "./InputArguments";

export interface NameDescription {
	name : string;
	description : string;
}

export class SidebarView {
	name : string;
	children : SidebarView[];
	
	constructor(name : string) {
		this.name = name;
		this.children = [];
	}
}

export class MemberList {
	list : any[];
	linkName : string;
	templateType : string;
	templateUris : CompactFullUris;
	
	constructor(list : any[], linkName : string, templateType : string, templateUris : CompactFullUris) {
		this.list = list;
		this.linkName = linkName;
		this.templateType = templateType;
		this.templateUris = templateUris;
	}
}

export interface TemplateApiUris {
	constructors : CompactFullUris;
	fields : CompactFullUris;
	properties : CompactFullUris;
	events : CompactFullUris;
	methods : CompactFullUris;
}

export interface TemplateApiItems {
	summary : string;
	returns : ExistsValue;
	remarks : ExistsValue;
	example : ExistsValue;
	parameters : ExistsValueArray;
	exceptions : ExistsValueArray;
	typeParameters : ExistsValueArray;
}

interface ExistsValue {
	exists : boolean;
	value : string;
}

interface ExistsValueArray {
	exists : boolean;
	value : NameDescription[];
}
