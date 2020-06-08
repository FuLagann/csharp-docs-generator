
export interface CompactFullUris {
	compact : string;
	full : string;
};

export interface TemplateUris {
	base : string;
	includeDefaultCss : boolean;
	includeDefaultScripts : boolean;
	includeDefaultImages : boolean;
	localCss : string[];
	globalCss : string[];
	localScripts : string[];
	globalScripts : string[];
	localImages : string[];
	globalImages : string[];
	namespace : string;
	type : string;
	constructors : CompactFullUris;
	fields : CompactFullUris;
	properties : CompactFullUris;
	events : CompactFullUris;
	methods : CompactFullUris;
	header : string;
	footer : string;
	navigation : string;
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
	projectDetails : string;
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
		this.projectDetails = "";
		this.templateUris = {
			base: "",
			includeDefaultCss: true,
			includeDefaultScripts: true,
			includeDefaultImages: true,
			globalCss: [],
			localCss: [],
			globalScripts: [],
			localScripts: [],
			globalImages: [],
			localImages: [],
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
