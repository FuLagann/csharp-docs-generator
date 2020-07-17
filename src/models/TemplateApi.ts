import { CompactFullUris } from "./InputArguments";
import { ParameterInfo, GenericParametersInfo, QuickTypeInfo } from "./SharpChecker";

/**This format is used to give more details for namespace's list of types and their documentation.*/
export interface NamespaceDetails {
	/**The type information of the type.*/
	typeInfo : QuickTypeInfo;
	/**The XML comment documentation on the type.*/
	typeDocs : XmlDocItems;
}

/**This format contains a name and a description. Mainly used for mapping parameters' names to their documented description.*/
export interface NameDescription {
	/**The name of the content, typically a parameter.*/
	name : string;
	/**The description of the content, typically the description documented.*/
	description : string;
}

/**This format contains a name, description, and details of the parameter. Mainly used for mapping parameters' names to their documented description.*/
export interface ParameterNameDescription extends NameDescription {
	/**The details of the parameter to give more in-depth information about the code.*/
	details : (ParameterInfo | undefined);
}

/**This format contains a name, description, and details of the generic parameter. Mainly used for mapping generic parameters' names to their documented description.*/
export interface GenericParameterNameDescription extends NameDescription {
	/**The details of the generic parameter to give more in-depth information about the code.*/
	details : (GenericParametersInfo | undefined);
}

/**A tree that holds the information for search.js and navigation.*/
export class SidebarView {
	/**The name of the namespace, type, or member that the navigation will show.*/
	name : string;
	/**The tag used for the searching JS feature, mainly used for internal use.*/
	tag : string;
	/**The link to the actual namespace, type, or member.*/
	link : string;
	/**The list of children that will be nested underneath the current SidebarView.*/
	children : SidebarView[];
	
	constructor(name : string, link : string, tag : string) {
		this.name = name;
		this.link = link;
		this.tag = tag;
		this.children = [];
	}
}

/**This format is meant to hold the list of members, the type it's a part of, anchored name links to send the user to the top of the list, and a compact-full uris for further templating.*/
export class MemberList {
	/**The list of members used to go through and render the partial view template.*/
	list : any[];
	/**The name of the anchor link, used to id the section.*/
	linkName : string;
	/**The full named type where the members comes from.*/
	type : string;
	/**The compact and full partial view templates used for rendering.*/
	uris : CompactFullUris;
	
	constructor(list : any[], linkName : string, templateType : string, templateUris : CompactFullUris) {
		this.list = list;
		this.linkName = linkName;
		this.type = templateType;
		this.uris = templateUris;
	}
}

/**The compact and full uris to the members of a type for generating the member list.*/
export interface TemplateApiUris {
	/**The compact and full uris of the constructor.*/
	constructors : CompactFullUris;
	/**The compact and full uris of the fields.*/
	fields : CompactFullUris;
	/**The compact and full uris of the properties.*/
	properties : CompactFullUris;
	/**The compact and full uris of the events.*/
	events : CompactFullUris;
	/**The compact and full uris of the methods.*/
	methods : CompactFullUris;
}

/**This format is the C#'s XML Comment Documentation in JSON form.*/
export interface XmlDocItems {
	/**The summary of the type/member. Defaults to "No Description." if there is no summary written for the type/member.*/
	summary : string;
	/**Gets the return value with details and whether it exists.*/
	returns : ExistsReturnsValue;
	/**Gets the remarks value and whether it exists.*/
	remarks : ExistsValue;
	/**Gets the example value and whether it exists.*/
	example : ExistsValue;
	/**Gets the list of parameters (names, descriptions, and details) and whether it exists.*/
	parameters : ExistsParameterValueArray;
	/**Gets the list of exceptions (names and descriptions) and whether it exists.*/
	exceptions : ExistsValueArray;
	/**Gets the list of type parameters (names, descriptions, and details) and whether it exists.*/
	typeParameters : ExistsGenericParameterValueArray;
}

/**This format checks if there exists a value and the value itself, used to not render anything if there isn't a value.*/
interface ExistsValue {
	/**Set to true if the value exists.*/
	exists : boolean;
	/**The value as a string, if it exists. This is normally the description of the content.*/
	value : string;
}

/**This format checks if there exists a value, the value itself, and the return type information; used to not render anything if there isn't a value.*/
interface ExistsReturnsValue extends ExistsValue {
	/**The type information details that the return value holds.*/
	details : (QuickTypeInfo | undefined);
}

/**This format checks if there exists an array of values and the array itself, used to not render anything if there isn't a value.*/
interface ExistsValueArray {
	/**Set to true if the value exists.*/
	exists : boolean;
	/**The array of values as names mapped to their descriptions, if it exists.*/
	value : NameDescription[];
}

/**This format checks if there exists an array of values and the array itself, used to not render anything if there isn't a value and is used for parameters.*/
interface ExistsParameterValueArray {
	/**Set to true if the array of values exists.*/
	exists : boolean;
	/**The list of names mapped to their description and the detail of the parameter, if it exists.*/
	value : ParameterNameDescription[];
}

/**This format checks if there exists an array of values and the array itself, used to not render anything if there isn't a value and is used for generic parameters.*/
interface ExistsGenericParameterValueArray {
	/**Set to true if the array of values exists.*/
	exists : boolean;
	/**The list of names mapped to their description and the detail of the generic parameter, if it exists.*/
	value : GenericParameterNameDescription[];
}
