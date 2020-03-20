
# C# Documentation Generator

A GitHub action that generates html documentation for C# projects.

## Inputs

**`build-tasks`:** The list of commands used to build the project prior to generating html documents. **(REQUIRED).**

**`binaries`:** The list of binaries used to look into, must be named the same as the xml documentation. **(REQUIRED).**

**`output-path`:** The output path of the generated documents. *(Default: `docs/api`).*

**`cleanup-tasks`:** The list of commands used to clean up any building of project after generating html documents.

**`user-name`:** The name of the user who will commit. *(Default: `C# Document Generator`).*

**`user-email`:** The email of the user who will commit. *(Default: `csharp.doc.gen@gmail.com`).*

**`template-json`:** The json to get all the template files used to generate the documentation.

**`branch-name`:** The name of the branch that the generation will commit to (if not specified it will commit to the current branch).

**`commit-message`:** The message of the commit that the generation will perform. *(Default: `Automated creation of documentation`).*

**`amend-no-edit`:** Set to true if you want the generation to append itself to the latest commit instead of creating a new commit. *(Default: `false`).*

<details>
<summary>Example yml</summary>
<p>

```yml
on: [push]
jobs:
  generate-docs:
    runs-on: ubuntu-latest
	name: Generate Docs
	steps:
	  - name: Checkout
	    uses: actions/checkout@v2
	  - name: Buidling Docs
	    uses: FuLagann/csharp-docs/generator
		id: generate-docs
		with:
		  build-tasks: dotnet build -c Release -r netcoreapp3.1 src/Module1/Module1.csproj, dotnet build -c Debug -r netcoreapp3.1 src/Module2/Module2.csproj
		  binaries: src/Module1/bin/Release/netcoreapp3.1/Module1.dll, src/Module2/bin/Release/netcoreapp3.1/Module2.dll
		  output-path: docs/api/
		  template-json: docs/_template
		  branch-name: api-docs
		  commit-message: Automatically generated API docs
		  amend-no-edit: false
		  user-email: john.doe@email.com
		  user-name: John Doe
		  cleanup-tasks: dotnet clean, rm -r -f src/Module1/bin
```

</p>
</details>

## Template JSON Format

### CompactFullUris

An object used to give the compact and full versions of a member's information.

**`compact` as (string):** The file location (local to the location of the template.json) or URL to the handlebars html template for a compact view of the member, used to give the user a quick view of what the member has in store.

**`full` as (string):** The file location (local to the location of the template.json) or URL to the handlebars html template for a full view of the member, used to give the user a detailed view of what the member is.

### TemplateJson

The template JSON that contains all the file locations (relative to the template.json) / URLs used for templating and compiling together the documentation that will be generated for the API's documentation.

**`baseUri` as (string):** The file location (local to the location of the template.json) or URL to the handlebars html template for the base view where everything will be rendered on top of.

**`cssUris` as (string[]):** The file locations (local to the html documents) or URLs to any CSS for the html documentation.

**`scriptUris` as (string[]):** The file locations (local to the html documents) or URLs to any javascript scripts for the html documentation.

**`namespaceUri` as (string):** The file location (local to the location of the template.json) or URL to the handlebars template view of the namespace that will contain links to the contained types.

**`typeUri` as (string):** The file location (local to the location of the template.json) or URL to the handlebars template view of the type that will contain links and views to it's contained members.

**`constructorUri` as ([CompactFullUris](#compactfulluris)).** The file locations (local to the location of the template.json) or URLs to the handlebars template view of the constructors' compact and full view.

**`fieldsUri` as ([CompactFullUris](#compactfulluris)).** The file locations (local to the location of the template.json) or URLs to the handlebars template view of the fields' compact and full view.

**`propertiesUri` as ([CompactFullUris](#compactfulluris)).** The file locations (local to the location of the template.json) or URLs to the handlebars template view of the properties' compact and full view.

**`eventsUri` as ([CompactFullUris](#compactfulluris)).** The file locations (local to the location of the template.json) or URLs to the handlebars template view of the events' compact and full view.

**`methodsUri` as ([CompactFullUris](#compactfulluris)).** The file locations (local to the location of the template.json) or URLs to the handlebars template view of the methods' compact and full view.

<details>
<summary>Example JSON</summary>
<p>

```json
{
	"baseUri": "base.hbs",
	"cssUris": ["css/main.css", "css/api.css"],
	"scriptUris": [],
	"namespaceUri": "namespace.hbs",
	"typeUri": "type.hbs",
	"constructorUri": {
		"compact": "constructor-compact.hbs",
		"full": "constructor-full.hbs"
	},
	"fieldsUri": {
		"compact": "field-compact.hbs",
		"full": "field-full.hbs"
	},
	"propertiesUri": {
		"compact": "property-compact.hbs",
		"full": "property-full.hbs"
	},
	"eventsUri": {
		"compact": "event-compact.hbs",
		"full": "event-full.hbs"
	},
	"methodsUri": {
		"compact": "method-compact.hbs",
		"full": "method-full.hbs"
	}
}
```

</p>
</details>
