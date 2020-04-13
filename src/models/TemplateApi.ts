
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
