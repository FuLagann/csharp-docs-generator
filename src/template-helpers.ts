
import { SidebarView } from "./models/TemplateVariables";
import { getTemplateUri } from "./index";
import { readFile } from "./read-file";
import { compileType, compileField } from "./template";
import ejs = require("ejs");
import { FieldInfo } from "./models/SharpChecker";

export function displaySidebar(
	treeview : (SidebarView | SidebarView[]),
	treeviewClass : string = "treeview",
	nestedviewClass : string = "nested"
) : string {
	if(treeview instanceof SidebarView && treeview.name == "$~root") {
		return (
			`<ul class="${ treeviewClass }">` +
			`${ displaySidebar(treeview.children, treeviewClass, nestedviewClass) }</ul>`
		);
	}
	
	// Variables
	const views = treeview as SidebarView[];
	let results = [];
	
	for(let i = 0; i < views.length; i++) {
		results.push(views[i].name);
		
		if(views[i].children.length > 0) {
			results[i] += (
				`<ul class="${ nestedviewClass }">` +
				`${ displaySidebar(views[i].children, treeviewClass, nestedviewClass) }</ul>`
			)
		}
		
		results[i] = `<li>${ results[i] }</li>`;
	}
	
	return results.join("");
}

export function createPartial(type : string, uri : string, context : any = {}) {
	// Variables
	const url = getTemplateUri(uri);
	
	switch(type) {
		case "type": return compileType(url, context as string);
		case "field": return compileField(url, context as FieldInfo);
		// TODO: Add constructor
		// TODO: Add property
		// TODO: Add event
		// TODO: Add method
	}
	
	return ejs.render(readFile(url), context);
}
