import { CompactFullUris } from "./InputArguments";

export interface NameDescription {
	name : string;
	description : string;
}

export class SidebarView {
	name : string;
	link : string;
	children : SidebarView[];
	
	constructor(name : string, link : string) {
		this.name = name;
		this.link = link;
		this.children = [];
	}
}

export class MemberList {
	list : any[];
	linkName : string;
	type : string;
	uris : CompactFullUris;
	
	constructor(list : any[], linkName : string, templateType : string, templateUris : CompactFullUris) {
		this.list = list;
		this.linkName = linkName;
		this.type = templateType;
		this.uris = templateUris;
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
