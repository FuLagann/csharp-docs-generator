"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class InputArguments {
    constructor() {
        this.buildTasks = [];
        this.cleanUpTasks = [];
        this.binaries = [];
        this.commitMessage = "Automated creation of documentation";
        this.outputPath = "docs/api/";
        this.branchName = "";
        this.amendNoEdit = false;
        this.templatePath = "./";
        this.outputExtension = ".html";
        this.includePrivate = false;
        // TODO: Add uri to the template
        this.template = {
            base: "",
            css: [],
            scripts: [],
            namespace: "",
            type: "",
            constructors: {
                compact: "",
                full: ""
            },
            fields: {
                compact: "",
                full: ""
            },
            properties: {
                compact: "",
                full: ""
            },
            events: {
                compact: "",
                full: ""
            },
            methods: {
                compact: "",
                full: ""
            }
        };
        this.user = {
            name: "C# Document Generator",
            email: "csharp.doc.gen@gmail.com"
        };
    }
}
exports.InputArguments = InputArguments;
