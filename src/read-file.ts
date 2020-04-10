
// External libraries
import fs = require("fs");
import request = require("sync-request");

/**Reads the file or link and returns the file of the file.
 * @param filename {string} - The file or link to read from.
 * @param defaultText {string} - The default text to return. Defaults to "".
 * @returns Returns the content of the given file or link.*/
export function readFile(filename : string, defaultText : string = "") : string {
	if(filename == undefined || filename == "") { return defaultText; }
	
	try {
		return (filename.startsWith("http") ?
			readLink(filename) :
			fs.readFileSync(filename).toString()
		);
	} catch { return defaultText; }
}

/**Reads the link and returns the contents of that link.
 * @param link {string} - The link to read from.
 * @param defaultText {string} - The default text to return. Defaults to "".
 * @returns Returns the content of the given link.*/
export function readLink(link : string, defaultText : string = "") : string {
	try {
		// Variables
		const res = request.default("GET", link);
		
		return res.getBody().toString();
	} catch { return defaultText; }
}
