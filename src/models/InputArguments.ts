
export interface CompactFullUris {
	compact : string;
	full : string;
};

export interface TemplateUris {
	base : string;
	includeDefaultCss : boolean;
	includeDefaultScripts : boolean;
	localCss : string[];
	globalCss : string[];
	localScripts : string[];
	globalScripts : string[];
	namespace : string;
	type : string;
	constructors : CompactFullUris;
	fields : CompactFullUris;
	properties : CompactFullUris;
	events : CompactFullUris;
	methods : CompactFullUris;
}

export class InputArguments {
	buildTasks : string[];
	cleanUpTasks : string[];
	binaries : string[];
	commitMessage : string;
	branchName : string;
	template : string;
	templatePath : string;
	templateUris : TemplateUris;
	outputPath : string;
	outputExtension : string;
	includePrivate : boolean;
	user : {
		name : string,
		email : string
	};
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
