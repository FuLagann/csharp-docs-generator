
// External libraries
import fs = require("fs");
import request = require("sync-request");

/**Reads the file or link and returns the file of the file.
 * @param filename {string} - The file or link to read from.
 * @returns Returns the content of the given file or link.*/
export function readFile(filename : string) : string {
	if(filename == undefined || filename == "") { return ""; }
	
	return (filename.startsWith("http") ?
		readLink(filename) :
		fs.readFileSync(filename).toString()
	);
}

/**Reads the link and returns the contents of that link.
 * @param link {string} - The link to read from.
 * @returns Returns the content of the given link.*/
export function readLink(link : string) : string {
	// Variables
	const res = request.default("GET", link);
	
	return res.getBody().toString();
}
