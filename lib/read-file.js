"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External libraries
const fs = require("fs");
const request = require("sync-request");
/**Reads the file or link and returns the file of the file.
 * @param filename {string} - The file or link to read from.
 * @param defaultText {string} - The default text to return. Defaults to "".
 * @returns Returns the content of the given file or link.*/
function readFile(filename, defaultText = "") {
    if (filename == undefined || filename == "") {
        return defaultText;
    }
    try {
        return (filename.startsWith("http") ?
            readLink(filename, defaultText) :
            fs.readFileSync(filename).toString());
    }
    catch (_a) {
        return defaultText;
    }
}
exports.readFile = readFile;
/**Reads the link and returns the contents of that link.
 * @param link {string} - The link to read from.
 * @param defaultText {string} - The default text to return. Defaults to "".
 * @returns Returns the content of the given link.*/
function readLink(link, defaultText = "") {
    try {
        // Variables
        const res = request.default("GET", link);
        return res.getBody().toString();
    }
    catch (_a) {
        return defaultText;
    }
}
exports.readLink = readLink;
