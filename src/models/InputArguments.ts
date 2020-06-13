
export interface CompactFullUris {
	compact : string;
	full : string;
};

export interface TemplateUris {
	base : string;
	includeDefaultCss : boolean;
	includeDefaultScripts : boolean;
	includeDefaultFiles : boolean;
	localCss : string[];
	globalCss : string[];
	localScripts : string[];
	globalScripts : string[];
	localFiles : string[];
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

/**The details of the project used for templates.*/
export interface ProjectDetails {
	/**The name of the project, normally the name of the repository.*/
	name : string | undefined;
	/**The version of the project.*/
	version : string | undefined;
	/**A short description of the project, normally place right underneath the name of the project in the header.*/
	description : string | undefined;
	/**The license of the project, normally a string that mentions and links to the license.*/
	license : string | undefined;
	/**A list of keywords that are used for the meta data of each web page.*/
	keywords : string[] | undefined;
	/**The name of the team that worked on this project, omitting this will normally make the template use the `author` member instead.*/
	team : string | undefined;
	/**The name of the author(s) that worked on this project.*/
	author : string | undefined;
	/**A string that contains the copyright year, which can look like "2020" or "2014 - 2020".*/
	copyrightYear : string | undefined;
	/**A link to a thumbnail for use of the web page's icon thumbnail.*/
	favicon : string | undefined;
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
			includeDefaultFiles: true,
			globalCss: [],
			localCss: [],
			globalScripts: [],
			localScripts: [],
			localFiles: [],
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
