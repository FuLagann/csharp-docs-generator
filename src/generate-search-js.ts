
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
// Variables
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
	/**@type {string[]} - The value to search for.*/
	let vals;
	/**@type {{
			only : string,
			exclude : string[],
			regex : string,
			acceptAll : boolean
		}} - The filter to exclude objects from the search.*/
	let filter;
	/**@type {string} - The id of the search bar.*/
	let searchBarId = "search-bar";
	/**@type {string} - The id of the search results window.*/
	let searchResultsId = "search-results";
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
	/**@type {number} - The starting search interval to make the user wait before the search starts.*/
	let startingSearchInterval = 250;
	/**@type {string} - The item that tells the user that it's searching.*/
	let searchingItem = '<li style="text-align: center;">Searching...</li>';
	/**Sets the search interval. Make this number to small and you run the risk of freezing up the web app,
	 * this is to make the search pseudo-asynchronous.
	 * @param value {number} - The interval to wait between each iteration of the search.*/
	let setSearchInterval = function(value) { searchInterval = value; }
	/**Sets the starting search interval. Make this number to small and you run the risk of freezing up the web app,
	 * this is to make the search pseudo-asynchronous. This also stops the search bar from looking "glitchy".
	 * @param value {number} - The interval to wait before beginning the search.*/
	let setStartingSearchInterval = function(value) { startingSearchInterval = value; }
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
		outputWindow = document.getElementById(windowId);
		if(value == "") {
			outputWindow.classList.remove(outputWindowFocusClass);
			return;
		}
		getValuesAndFilter(value);
		outputList = document.getElementById(listId);
		outputList.innerHTML = searchingItem;
		outputWindow.classList.add(outputWindowFocusClass);
		namespaceIndex = (currNamespace && currType ? -1 : 0);
		typeIndex = 0;
		memberIndex = 0;
		timeout = setTimeout(search, startingSearchInterval);
	};
	/**Gets the value and filter content from the given input value.
	 * @param value {string} - The input value from the user.*/
	const getValuesAndFilter = function(value) {
		// Variables
		const temp = value.toLowerCase().trim().split(' ');
		let index = -1;
		
		vals = [];
		filter = {};
		
		for(let i = 0; i < temp.length; i++) {
			index = temp[i].indexOf(':');
			
			if(index == -1) {
				vals.push(temp[i]);
			}
			else {
				switch(temp[i].substring(0, index)) {
					case "only": {
						filter.only = temp[i].substring(index + 1).toLowerCase();
					} break;
					case "exclude": {
						if(!filter.exclude) {
							filter.exclude = [];
						}
						filter.exclude = filter.exclude.concat(
							temp[i].substring(index + 1).split(',')
						);
					} break;
					case "regex": {
						filter.regex = temp[i].substring(index + 1);
					} break;
					case "acceptall": {
						filter.acceptAll = (temp[i].substring(index + 1) != "false");
					} break;
				}
			}
		}
		
		if(vals.length == 0 && (!filter.regex || filter.regex == "") && filter.acceptAll != false) {
			filter.acceptAll = true;
		}
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
	 * @param values {string[]} - The values that the user has queried.
	 * @param regex {string} - The regular expression used to find a match.
	 * @param link {string} - The link to where the item will take the user.
	 * @param name {string} - The name of the namespace/type/member.
	 * @param markResult {markResult} - A function that marks the query string as bold onto the inputted string.*/
	let formatOutputListItem = function(values, regex, link, name, markResult) {
		// Variables
		let results = name;
		let regexStr = "";
		
		if(regex) {
			regexStr = regex;
		}
		if(values && values.length > 0) {
			regexStr = (
				(regexStr == "" ? "" : regexStr + "|") + 
				escapeRegex(values.join('|'))
			);
		}
		if(regexStr != "") {
			results = results.replace(
				new RegExp("(" + regexStr + ")", "gi"),
				"<b>$1</b>"
			);
		}
		
		return (
			'<li><a href="' +
			link +
			'">' +
			results +
			"</a></li>"
		);
	};
	/**Escapes the regex to safely use the characters: ., *, +, -, ?, ^, $, {, }, (, ), [, ], and \\.
	 * @param regex {string} - The regex string to escape.
	 * @returns {string} Returns the escaped regex string.*/
	const escapeRegex = function(regex) { return regex.replace(/[.*+\\-?$^{}()\\[\\]\\\\]/g, "\\\\$&"); }
	/**Sets a custom format output list item.
	 * @param func {formatOutputListItem} - The new formatting function to set.*/
	const setFormatOutputListItem = function(func) { formatOutputListItem = func; };
	/**Finds if the given value is fulfilling the criteria for accepting into the output list.
	 * @param type {string} - The type of membership used, uses namespace, type, or member.
	 * @param value {string} - The string to look into.
	 * @returns {boolean} Returns true if the given value fulfills the criteria for accepting into the output list.*/
	const isFulfillingCriteria = function(type, value) {
		// Variables
		const lowerCaseValue = value.toLowerCase();
		
		if(filter.only) {
			switch(filter.only) {
				case "namespace": case "type": case "member": {
					if(filter.only != type) {
						return false;
					}
				} break;
			}
		}
		if(filter.exclude) {
			// Variables
			let item;
			
			for(let i = 0; i < filter.exclude.length; i++) {
				item = filter.exclude[i].toLowerCase();
				
				if(item == type) {
					return false;
				}
			}
		}
		
		if(filter.acceptAll == true) {
			return true;
		}
		
		if(filter.regex) {
			if(lowerCaseValue.match(new RegExp(filter.regex, "gi"))) {
				return true;
			}
		}
		
		for(let i = 0; i < vals.length; i++) {
			if(lowerCaseValue.match(new RegExp(escapeRegex(vals[i]), "gi"))) {
				return true;
			}
		}
		
		return false;
	};
	/**Searches through the entire API little by little.*/
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
			let name;
			
			if(memberIndex == 0) {
				if(isFulfillingCriteria("namespace", currNamespace)) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						vals,
						filter.regex,
						namespace.link,
						currNamespace,
						markResult
					);
				}
				name = currNamespace + "." + currType;
				if(isFulfillingCriteria("type", name)) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						vals,
						filter.regex,
						type.link,
						name,
						markResult
					);
				}
			}
			
			name = currNamespace + "." + currType + "." + member.name;
			if(isFulfillingCriteria("member", name)) {
				removeSearchingItem();
				outputList.innerHTML += formatOutputListItem(
					vals,
					filter.regex,
					member.link,
					name,
					markResult
				);
			}
			
			memberIndex++;
			if(memberIndex >= type.members.length) {
				memberIndex = 0;
				namespaceIndex++;
			}
			
			timeout = setTimeout(search, searchInterval);
			return;
		}
		else {
			// Variables
			const namespace = searchJson[namespaceList[namespaceIndex]];
			const type = namespace.types[typeList[typeIndex]];
			const member = type.members[memberIndex];
			let name;
			
			if(typeIndex == 0 && memberIndex == 0) {
				if(!currNamespace || namespaceList[namespaceIndex] != currNamespace) {
					if(!isCurrentType()) {
						name = namespaceList[namespaceIndex];
						if(isFulfillingCriteria("namespace", name)) {
							removeSearchingItem();
							outputList.innerHTML += formatOutputListItem(
								vals,
								filter.regex,
								member.link,
								name,
								markResult
							);
						}
					}
				}
			}
			if(memberIndex == 0) {
				if(!isCurrentType()) {
					name = namespaceList[namespaceIndex] + "." + typeList[typeIndex];
					if(isFulfillingCriteria("type", name)) {
						removeSearchingItem();
						outputList.innerHTML += formatOutputListItem(
							vals,
							filter.regex,
							member.link,
							name,
							markResult
						);
					}
				}
			}
			
			
			if(!isCurrentType()) {
				name = namespaceList[namespaceIndex] + "." + typeList[typeIndex] + "." + member.name;
				if(isFulfillingCriteria("member", name)) {
					removeSearchingItem();
					outputList.innerHTML += formatOutputListItem(
						vals,
						filter.regex,
						member.link,
						name,
						markResult
					);
				}
			}
			
			memberIndex++;
			if(memberIndex >= type.members.length) {
				memberIndex = 0;
				
				typeIndex++;
			}
			if(typeIndex >= typeList.length) {
				typeIndex = 0;
				namespaceIndex++;
			}
			if(namespaceIndex < namespaceList.length) {
				timeout = setTimeout(search, searchInterval);
			}
			else {
				if(removeSearchingItem()) {
					outputList.innerHTML = '<li style="text-align: center;">No results found!</li>';
				}
			}
		}
	};
	/**Sets the search ids for search bar and search results window.
	 * @param searchBarID {string} - The id of the search bar to set.
	 * @param searchResultsID {string} - The id of the search results to set.*/
	const setSearchIds = function(searchBarID, searchResultsID) {
		searchBarId = searchBarID;
		searchResultsId = searchResultsID;
	};
	
	window.addEventListener("load", function() {
		// Variables
		let searchBar = document.getElementById(searchBarId);
		if(!searchBar) { return; }
		let help = "You can filter the search by using the following qualifiers:\n\n";
		
		help += "  only - Use namespace, type, or member to show search for only that kind of object.\n";
		help += "      Example: only:type\n\n";
		help += "  exclude - Use namespace, type, and member to exclude those objects from search, seperated by a comma ( , ).\n";
		help += "      Example: exclude:namespace,type\n\n";
		help += "  regex - Use this to search by using a regular expression string.\n";
		help += "      Example: regex:mat\\d+\n\n";
		help += "  acceptAll - Set this to true to search for every object.\n";
		help += "      Example: accepAll:true";
		
		searchBar.title = help;
	});
	
	window.addEventListener("click", function(args) {
		// Variables
		let target = args.target;
		let results = document.getElementById(searchResultsId);
		
		if(target.tagName == "A" && target.href != "") {
			results.classList.remove(outputWindowFocusClass);
			return;
		}
		
		if(target.id == searchBarId && target.value != "") {
			results.classList.add(outputWindowFocusClass);
			return;
		}
		if(!results.classList.contains(outputWindowFocusClass)) {
			return;
		}
		
		while(target != null) {
			if(target.id == searchBarId || target.id == searchResultsId) {
				break;
			}
			target = target.parentElement;
		}
		
		if(target == null) {
			results.classList.remove(outputWindowFocusClass);
		}
	});
	
	return {
		setCurrent: setCurrent,
		search: startSearch,
		setFormatOutputListItem: setFormatOutputListItem,
		setOutputWindowFocusClass: setOutputWindowFocusClass,
		setSearchInterval: setSearchInterval,
		setStartingSearchInterval: setStartingSearchInterval,
		setSearchIds: setSearchIds
	};
})();
`;
	fs.writeFileSync(filename, content);
}