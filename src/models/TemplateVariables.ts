
import { TemplateJson } from "./TemplateJson";
import { createPartial, displaySidebar } from "../template-helpers";

export class GeneralTemplateVars {
	createPartial : Function;
	displaySidebar : Function;
	
	constructor() {
		this.displaySidebar = displaySidebar;
		this.createPartial = createPartial;
	}
}

export class SidebarView {
	name : string;
	children : SidebarView[];
	
	constructor(name : string) {
		this.name = name;
		this.children = [];
	}
}

export class BaseTemplateVars extends GeneralTemplateVars {
	cssUris : string[];
	scriptUris : string[];
	breadcrumbs : string[];
	typeUri : string;
	typePath : string;
	isNamespace : boolean;
	sidebarView : SidebarView;
	
	constructor(json : TemplateJson) {
		super();
		this.cssUris = json.cssUris;
		this.scriptUris = json.scriptUris;
		this.breadcrumbs = [];
		this.typeUri = json.typeUri;
		this.typePath = "";
		this.isNamespace = false;
		this.sidebarView = new SidebarView("$~root");
	}
}
