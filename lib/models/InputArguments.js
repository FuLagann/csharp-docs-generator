"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputArguments = void 0;
;
class InputArguments {
    constructor() {
        this.buildTasks = [];
        this.cleanUpTasks = [];
        this.binaries = [];
        this.commitMessage = "Automated creation of documentation";
        this.outputPath = "docs/api/";
        this.branchName = "";
        this.templatePath = "";
        this.outputExtension = ".html";
        this.includePrivate = false;
        this.template = "default";
        this.projectDetails = "";
        this.templateUris = {
            base: "",
            includeDefaultCss: true,
            includeDefaultScripts: true,
            globalCss: [],
            localCss: [],
            globalScripts: [],
            localScripts: [],
            namespace: "",
            type: "",
            navigation: "",
            header: "",
            footer: "",
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
