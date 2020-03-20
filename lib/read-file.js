"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const request = require("sync-request");
/**Reads the file or link and returns the file of the file.
 * @param filename {string} - The file or link to read from.
 * @returns Returns the content of the given file or link.*/
function readFile(filename) {
    if (filename == undefined || filename == "") {
        return "";
    }
    return (filename.startsWith("http") ?
        readLink(filename) :
        fs.readFileSync(filename).toString());
}
exports.readFile = readFile;
/**Reads the link and returns the contents of that link.
 * @param link {string} - The link to read from.
 * @returns Returns the content of the given link.*/
function readLink(link) {
    // Variables
    const res = request.default("GET", link);
    return res.getBody().toString();
}
exports.readLink = readLink;
