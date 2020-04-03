
import { TemplateJson } from "./TemplateJson";

export class InputArguments {
	buildTasks: string[];
	cleanUpTasks: string[];
	binaries: string[];
	commitMessage: string;
	branchName: string;
	amendNoEdit: boolean;
	templatePath: string;
	template: TemplateJson;
	outputPath: string;
	outputExtension: string;
	includePrivate: boolean;
	user: {
		name: string,
		email: string
	};
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
