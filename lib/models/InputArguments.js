"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputArguments {
    constructor() {
        this.buildTasks = [];
        this.cleanUpTasks = [];
        this.binaries = [];
        this.commitMessage = "Automated creation of documentation";
        this.outputPath = "docs/api/";
        this.branchName = "";
        this.amendNoEdit = false;
        // TODO: Add uri to the template
        this.template = {
            baseUri: "",
            cssUris: [],
            scriptUris: [],
            namespaceUri: "",
            typeUri: "",
            constructorsUri: {
                compact: "",
                full: ""
            },
            fieldsUri: {
                compact: "",
                full: ""
            },
            propertiesUri: {
                compact: "",
                full: ""
            },
            eventsUri: {
                compact: "",
                full: ""
            },
            methodsUri: {
                compact: "",
                full: ""
            }
        };
        // TODO: Add content to user info
        this.user = {
            name: "",
            email: ""
        };
    }
}
exports.InputArguments = InputArguments;
