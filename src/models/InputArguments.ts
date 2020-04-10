
export interface CompactFullUris {
	compact : string,
	full : string
};

export interface TemplateUris {
	base : string,
	css: string[],
	scripts : string[]
	namespace : string,
	type :string,
	constructors : CompactFullUris,
	fields : CompactFullUris,
	properties : CompactFullUris,
	events : CompactFullUris,
	methods : CompactFullUris
}

export class InputArguments {
	buildTasks : string[];
	cleanUpTasks : string[];
	binaries : string[];
	commitMessage : string;
	branchName : string;
	amendNoEdit : boolean;
	templatePath : string;
	template : TemplateUris;
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
