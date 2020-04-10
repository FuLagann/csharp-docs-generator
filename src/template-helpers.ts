
// Models
import { FieldInfo, PropertyInfo, EventInfo, MethodInfo } from "./models/SharpChecker";
import { SidebarView } from "./models/TemplateApi";
// External functionalities
import { readFile } from "./read-file";
import { compileType, compileField, compilePropety, compileEvent, compileMethod } from "./template";
// External libraries
import ejs = require("ejs");

/**Creates a partial using the type and location to the template file.
 * @param type {string} - The type to create from (type, field, property, event, method).
 * @param url {string} - The location of the template file to use.
 * @param context {any} - The context used to pass over to the next template.
 * @returns Returns the compiled template code.*/
export function createPartial(type : string, url : string, context : any = {}) : string {
	switch(type) {
		case "type": return compileType(url, context as string);
		case "field": return compileField(url, context as FieldInfo);
		case "property": return compilePropety(url, context as PropertyInfo);
		case "event": return compileEvent(url, context as EventInfo);
		case "method": return compileMethod(url, context as MethodInfo);
	}
	
	return ejs.render(readFile(url), context);
}

/**Generates the html code for the sidebar tree view.
 * @returns Returns the html code for the sidebar tree view*/
export function generateSidebar(
	treeview : (SidebarView | SidebarView[]),
	treeviewClass : string = "treeview",
	nestedviewClass : string = "nested"
) : string {
	if(treeview instanceof SidebarView && treeview.name == "$~root") {
		return (
			`<ul class="${ treeviewClass }">` +
			`${ generateSidebar(treeview.children, treeviewClass, nestedviewClass) }</ul>`
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
				`${ generateSidebar(views[i].children, treeviewClass, nestedviewClass) }</ul>`
			)
		}
		
		results[i] = `<li>${ results[i] }</li>`;
	}
	
	return results.join("");
}
