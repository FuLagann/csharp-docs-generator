
// Models
import { InputArguments } from "./models/InputArguments";
import { SidebarView } from "./models/TemplateApi";
// External functionalities
import { getArguments } from "./index";
// External libraries
import fs = require("fs");

/**Saves the search javascript file to be copied for the templates.
 * @param filename {string} - The filename to save the search json to.
 * @param sidebar {SidebarView} - The sidebar view to look into to create the search js file.*/
export function saveSearchJs(filename : string, sidebar : SidebarView) {
	// Variables
	const args : InputArguments = getArguments();
	let searchJson : {
		[key : string] : {
			link : string;
			types : {
				[key : string] : {
					link : string;
					members : {
						link : string;
						name : string;
					}[];
				}
			}
		}
	} = {};
	let content : string;
	
	for(let a = 0; a < sidebar.children.length; a++) {
		// Variables
		const namespace = sidebar.children[a];
		
		if(!searchJson[namespace.name]) {
			searchJson[namespace.name] = {
				link: namespace.link || namespace.name.toLowerCase() + args.outputExtension,
				types: {}
			};
		}
		
		for(let b = 0; b < namespace.children.length; b++) {
			// Variables
			const type = namespace.children[b];
			
			if(!searchJson[namespace.name].types[type.name]) {
				searchJson[namespace.name].types[type.name] = {
					link: type.link,
					members: []
				};
			}
			
			for(let c = 0; c < type.children.length; c++) {
				searchJson[namespace.name].types[type.name].members.push({
					link: type.children[c].link,
					name: type.children[c].name
				});
			}
		}
	}
	
	content = `
const SearchHelper = (function() {
	// Variables
	/** @type {{
			[key : string] : {
				link : string;
				types : {
					[key : string] : {
						link : string;
						members : {
							link : string;
							name : string;
						}[];
					}
				}
			}
		}} - The js object used for searching.*/
	let searchJson = ${ JSON.stringify(searchJson, undefined, 1) };
	/**@type {string} - The value to search for.*/
	let val;
	/**@type {HTMLElement} - The list element that will be outputting the found results.*/
	let outputList;
	/**@type {HTMLElement} - The window element that will be toggled on and off whenever searching begins.*/
	let outputWindow;
	/**@type {number} - The id of the timeout function.*/
	let timeout;
	/**@type {number} - The index to the namespace to look into.*/
	let namespaceIndex;
	/**@type {number} - The index to the type to look into.*/
	let typeIndex;
	/**@type {number} - The index to the member to look into.*/
	let memberIndex;
	/**@type {string[]} - The list of namespaces used for searching.*/
	let namespaceList;
	/**@type {string[]} - The list of type used for searching.*/
	let typeList;
	/**@type {string} - The current namespace to search for first.*/
	let currNamespace;
	/**@type {string} - The current type to search for first.*/
	let currType;
	/**@type {string} - The name of the class that will pop the output window into focus.*/
	let outputWindowFocusClass = "active";
	/**@type {number} - The search interval.*/
	let searchInterval = 10;
	/**@type {string} - The item that tells the user that it's searching.*/
	let searchingItem = '<li style="text-align: center;">Searching...</li>';
	/**Sets the search interval. Make this number to small and you run the risk of freezing up the web app,
	 * this is to make the search pseudo-asynchronous.
	 * @param value {number} - The interval to wait between each iteration of the search.*/
	let setSearchInterval = function(value) { searchInterval = value; }
	/**Sets the output window's focus class to a specific class.
	 * @param value {string} - The new class that will make the output window appear.*/
	let setOutputWindowFocusClass = function(value) { outputWindowFocusClass = value; };
	/**Sets the current namespace and type to search for first.
	 * @param namespace {string} - The namespace to search for.
	 * @param type {string} - The type to search for.*/
	const setCurrent = function(namespace, type) {
		currNamespace = namespace;
		currType = type;
	};
	/**Marks the result with a bolded mark of what the query string was.
	 * @param input {string} - The input string to mark.
	 * @param value {string} - The value string to mark win.
	 * @return {string} Returns the input string marked by the query string.*/
	const markResult = function(input, value) {
		// Variables
		let start = input.toLowerCase().indexOf(value);
		let end = start + value.length;
		
		return (
			input.substring(0, start) +
			"<b>" + input.substring(start, end) + "</b>" +
			input.substring(end)
		);
	};
	/**Starts searching through the API for anything similar to the given value.
	 * @param value {string} - The value used to query the API.
	 * @param windowId {string} - The id of the window to toggle on and off when searching.
	 * @param listId {string} - The id of the list to output the search results.*/
	const startSearch = function(value, windowId, listId) {
	   if(timeout) {
		   window.clearTimeout(timeout);
	   }
	   val = value.toLowerCase();
	   outputList = document.getElementById(listId);
	   outputWindow = document.getElementById(windowId);
	   outputList.innerHTML = searchingItem;
	   outputWindow.classList.add(outputWindowFocusClass);
	   namespaceIndex = (currNamespace && currType ? -1 : 0);
	   console.log(namespaceIndex);
	   typeIndex = 0;
	   memberIndex = 0;
	   timeout = setTimeout(search, searchInterval);
	};
	/**Removes the searching item telling the user they are searching.
	 * @return Returns true if the searching item was the only item and was promptly removed.*/
	const removeSearchingItem = function() {
		if(outputList.innerHTML == searchingItem) {
			outputList.innerHTML = "";
			return true;
		}
		return false;
	};
	/**Finds if the current iteration of searching yields that it is the current type being viewed.
	 * Used to skip first search results of the current type.
	 * @returns Returns true if the current type is the one being viewed.*/
	const isCurrentType = function() {
		if(currNamespace && currType) {
			return (
				namespaceList[namespaceIndex] == currNamespace &&
				typeList[typeIndex] == currType
			);
		}
		return false;
	};
	/**Formats the outputted list item, customizable for end-user.
	 * @param value {string} - The value that the user has queried.
	 * @param link {string} - The link to where the item will take the user.
	 * @param namespace {string} - The name of the namespace.
	 * @param type {string | undefined} - The name of the type. If this is set to undefined, implies that the result is just the namespace.
	 * @param member {string | undefined} - The name of the member. If this is set to undefined, implies that the result is just the type.
	 * @param markResult {markResult} - A function that marks the query string as bold onto the inputted string.*/
	let formatOutputListItem = function(value, link, namespace, type, member, markResult) {
		// Variables
		const name = (type == undefined ?
			markResult(namespace, value) :
			(member == undefined ?
				namespace + "." + markResult(type, value) :
				namespace + "." + type + "." + markResult(member, value)
			)
		);
		
		return (
			'<li><a href="' +
			link +
			'">' +
			name +
			"</a></li>"
		);
	};
	/**Sets a custom format output list item.
	 * @param func {formatOutputListItem} - The new formatting function to set.*/
	const setFormatOutputListItem = function(func) { formatOutputListItem = func; };
	/**Searches through the entire API little by little*/
	const search = function() {
		if(!namespaceList && namespaceIndex == 0) {
			namespaceList = Object.keys(searchJson);
		}
		if(namespaceIndex >= 0 && typeIndex == 0) {
			typeList = Object.keys(searchJson[namespaceList[namespaceIndex]].types);
		}
		
		if(namespaceIndex == -1) {
			// Variables
			const namespace = searchJson[currNamespace];
			const type = namespace.types[currType];
			const member = type.members[memberIndex];
			
			if(member.name.toLowerCase().indexOf(val) != -1) {
				removeSearchingItem();
				outputList.innerHTML += formatOutputListItem(
					val,
					member.link,
					currNamespace,
					currType,
					member.name,
					markResult
				);
			}
			
			memberIndex++;
			if(memberIndex >= type.members.length) {
				memberIndex = 0;
				namespaceIndex++;
				if(currType.toLowerCase().indexOf(val) != -1) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						val,
						type.link,
						currNamespace,
						currType,
						undefined,
						markResult
					);
				}
				if(currNamespace.toLowerCase().indexOf(val) != -1) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						val,
						namespace.link,
						currNamespace,
						undefined,
						undefined,
						markResult
					);
				}
			}
			
			timeout = setTimeout(search, searchInterval);
			return;
		}
		else {
			// Variables
			const namespace = searchJson[namespaceList[namespaceIndex]];
			const type = namespace.types[typeList[typeIndex]];
			const member = type.members[memberIndex];
			
			if(!isCurrentType()) {
				if(member.name.toLowerCase().indexOf(val) != -1) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						val,
						member.link,
						namespaceList[namespaceIndex],
						typeList[typeIndex],
						member.name,
						markResult
					);
				}
			}
			
			memberIndex++;
			if(memberIndex >= type.members.length) {
				memberIndex = 0;
				
				if(!isCurrentType() && typeList[typeIndex].toLowerCase().indexOf(val) != -1) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						val,
						type.link,
						namespaceList[namespaceIndex],
						typeList[typeIndex],
						undefined,
						markResult
					);
				}
				
				typeIndex++;
			}
			if(typeIndex >= typeList.length) {
				typeIndex = 0;
				
				if(!isCurrentType() && namespaceList[namespaceIndex].toLowerCase().indexOf(val) != -1) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						val,
						namespace.link,
						namespaceList[namespaceIndex],
						undefined,
						undefined,
						markResult
					);
				}
				
				namespaceIndex++;
			}
			if(namespaceIndex < namespaceList.length) {
				timeout = setTimeout(search, searchInterval);
			}
			else {
				if(removeSearchingItem()) {
					outputList.innerHTML = '<li style="text-align: center;>No results found!</li>';
				}
			}
		}
	}
	
	return {
		setCurrent: setCurrent,
		search: startSearch,
		setFormatOutputListItem: setFormatOutputListItem,
		setOutputWindowFocusClass: setOutputWindowFocusClass,
		setSearchInterval: setSearchInterval
	};
})();
`;
	fs.writeFileSync(filename, content);
}