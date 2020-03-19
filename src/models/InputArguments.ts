
import { TemplateJson } from "./TemplateJson";

export class InputArguments {
	buildTasks: string[];
	cleanUpTasks: string[];
	binaries: string[];
	commitMessage: string;
	branchName: string;
	amendNoEdit: boolean;
	template: TemplateJson;
	user: {
		name: string,
		email: string
	};
	constructor() {
		this.buildTasks = [];
		this.cleanUpTasks = [];
		this.binaries = [];
		this.commitMessage = "Automated creation of documentation";
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
