
/**This JSON format is used for members of a type, so that users can see a short-but-sweet view of the member and understand what it is with an anchor going to the fuller more detailed view of the member.*/
export interface CompactFullUris {
	/**The file location to the compact partial view of the member of the type that contains the short-but-sweet description of the member.*/
	compact : string;
	/**The file location to the full partial view of the member of the type that contains the full detailed description of the member.*/
	full : string;
};

/**This JSON format is used for gathering together all the EJS files split into different specific views to compile into a cohesive whole. Each partial view looks into different parts of the type.*/
export interface TemplateUris {
	/**Set to true to include the CSS files to be copied over by the premade template. Defaults to true by the action.*/
	includeDefaultCss : boolean;
	/**Set to true to include the JS files to be copied over by the premade template. Defaults to true by the action.*/
	includeDefaultScripts : boolean;
	/**Set to true to include any files to be copied over by the premade template. Defaults to true by the action.*/
	includeDefaultFiles : boolean;
	/**A list of CSS files to get copied over to the output path's CSS folder for local use.*/
	localCss : string[];
	/**A list of JS files to get copied over to the output path's JS folder for local use.*/
	localScripts : string[];
	/**A list of any kind of files to be copied over to the output path's folder for local use. The folder name will be the name of the folder where the local file is originally located at.*/
	localFiles : string[];
	/**A list of global CSS files to be referenced by the template.*/
	globalCss : string[];
	/**A list of global scripts to be referenced by the template.*/
	globalScripts : string[];
	/**The base template that will host the header, type, namespace, and footer templates.*/
	base : string;
	/**The navigation template that will host the header and footer and will create a nested list view of the navigation.*/
	navigation : string;
	/**The header template that will generate the header portion of the web page.*/
	header : string;
	/**The footer template that will generate the footer portion of the web page.*/
	footer : string;
	/**The namespace template that will generate all the types found within the namespace.*/
	namespace : string;
	/**The `type` template that will generate all the information on the type.*/
	type : string;
	/***The constructor template that will generate the compact and full views of all the constructors of the type.*/
	constructors : CompactFullUris;
	/**The field template that will generate all the compact and full views of all the fields of the type.*/
	fields : CompactFullUris;
	/**The property template that will generate all the compact and full views of all the properties of the type.*/
	properties : CompactFullUris;
	/**The event template that will generate all the compact and full views of all the events of the type.*/
	events : CompactFullUris;
	/**The method template that will generate all the compact and full views of all the methods and operators of the type.*/
	methods : CompactFullUris;
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

/**A class that holds all the input aguments that the action starts with.*/
export class InputArguments {
	/**The list of build tasks used at the very start of the action.*/
	buildTasks : string[];
	/**The list of clean up tasks used at the very end of the action.*/
	cleanUpTasks : string[];
	/**The list of binaries that the build tasks have generated, used to look into the code.*/
	binaries : string[];
	/**The message that is used when committing to the repository by the end.*/
	commitMessage : string;
	/**The name of the branch to push to, if it's blank then it will push to the master.*/
	branchName : string;
	/**The name of the premade template or a link to one.*/
	template : string;
	/**The path to the template.json, if specified.*/
	templatePath : string;
	/**The URIs of the content in the template.json, if the path was specified to begin with.*/
	templateUris : TemplateUris;
	/**The path where the action will place all the generated HTML code.*/
	outputPath : string;
	/**The extension of the html code.*/
	outputExtension : string;
	/**Set to true to display all the private/internal members and types of the libraries.*/
	includePrivate : boolean;
	/**The path to the project-details.json.*/
	projectDetails : string;
	/**The user information for git, used for committing.*/
	user : {
		/**The name of the user.*/
		name : string,
		/**The email of the user.*/
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
