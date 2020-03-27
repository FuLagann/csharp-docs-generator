
import { SidebarView } from "./models/TemplateVariables";
import { readFile } from "./read-file";
import { compileType } from "./template";
import ejs = require("ejs");

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

export function createPartial(type : string, uri : string, path : string, context : any = {}) {
	switch(type) {
		case "type": return compileType(uri, path);
		// TODO: Add constructor
		// TODO: Add property
		// TODO: Add event
		// TODO: Add field
		// TODO: Add method
	}
	
	return ejs.render(readFile(uri), context);
}
