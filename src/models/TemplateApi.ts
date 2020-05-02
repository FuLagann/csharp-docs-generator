import { CompactFullUris } from "./InputArguments";
import { ParameterInfo, GenericParametersInfo, QuickTypeInfo } from "./SharpChecker";

export interface NamespaceDetails {
	typeInfo : QuickTypeInfo;
	typeDocs : TemplateApiItems;
}

export interface NameDescription {
	name : string;
	description : string;
}

export interface ParameterNameDescription extends NameDescription {
	details : (ParameterInfo | undefined);
}

export interface GenericParameterNameDescription extends NameDescription {
	details : (GenericParametersInfo | undefined);
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
	returns : ExistsReturnsValue;
	remarks : ExistsValue;
	example : ExistsValue;
	parameters : ExistsParameterValueArray;
	exceptions : ExistsValueArray;
	typeParameters : ExistsGenericParameterValueArray;
}

interface ExistsValue {
	exists : boolean;
	value : string;
}

interface ExistsReturnsValue {
	exists : boolean;
	value : string;
	details : (QuickTypeInfo | undefined);
}

interface ExistsValueArray {
	exists : boolean;
	value : NameDescription[];
}

interface ExistsParameterValueArray {
	exists : boolean;
	value : ParameterNameDescription[];
}

interface ExistsGenericParameterValueArray {
	exists : boolean;
	value : GenericParameterNameDescription[];
}
