
# C# Documentation Generator

This action generates a static html documentation for C# projects. It will create documentation within the repository and commit it once it's finished generating.

**NOTE: This project will delete the folder listed under the `output-path` input. This is to delete old API content that no longer exists, but make sure to change the `output-path` variable is changed to an directory that won't delete files unnecessarily!**

## Table of Contents

* [Getting Started](#getting-started)
  * [Sample Build XML](#sample-build-yaml)
  * [Details About Inputs in Sample Code](#details-about-inputs-in-sample-code)
  * [Sample Project Details JSON](#sample-project-details-json)
  * [Details About Fields in Sample JSON Code](#details-about-fields-in-sample-json-code)
* [Inputs](#inputs)
* [Formats](#formats)
* [Using Templates](#using-templates)
* [Customizing the Template](#customizing-the-template)
* [Creating Your Own Templates](#creating-your-own-templates)
* [License](#license)

## Getting Started

To get started with the basic set up, go to each `.csproj` file that will compile the code and add the following to the `PropertyGroup`:

```xml
<GenerateDocumentationFile>true</GenerateDocumentationFile>
```

This will ensure that documentation will be generated for the action to use for generating the webpages. The `.csproj` file should look something like below:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
  </PropertyGroup>

</Project>
```

Next, create a new file in your repository. Name the file anything you want, with the extension `.yml`. Place the file in the `.github/workflows` folder (if there isn't one create one) in order for GitHub Actions to detect it. Copy and paste the code below into that new file:

### Sample Build YAML

Below is a sample `build.yml` for generating documentation. If you want to copy and paste, then replace the `binaries`, `user-email`, and `user-name` inputs to something that is more accurate to you [as detailed in the next subsection](#details-about-inputs-in-sample-code). Along with creating a `project-details.json`, that [can be found how to do in the wiki](https://github.com/FuLagann/csharp-docs-generator/wiki/Project-Details-JSON-Format). *It is also recommended that the creation of documentation is only for pushing to master (when stable finalized code is being pushed)*.

**IMPORTANT NOTE:** When having the action activate on `pull_request`, you need to set the `branch-name` to the current branch where the workflow resides. So if you have this workflow on a separate branch called `develop`, you'd need to add/change the `branch-name` input to be `develop`. Otherwise, the action will fail because pull requests are detached heads and any other branch will cause an "unrelated history during pull" error.

```yml
on:
  push:
    branches:
      - master
jobs:
  generate-docs:
    runs-on: windows-latest
    name: Generate Docs
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup .NET Core 3.1
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: "3.1.300"
      - name: Generate Documentation
        uses: FuLagann/csharp-docs-generator@v1.0
        with:
          build-tasks: dotnet build
          cleanup-tasks: dotnet clean
          binaries: src/Dummy.Library/bin/Debug/netstandard2.0/Dummy.Library.dll
          output-path: docs/api
          user-email: csharp.doc.gen@gmail.com
          user-name: C# Document Generator
```

### Details About Inputs in Sample Code

* `build-tasks` - This will a list of terminal commands that you would normally do in order to successfully build your project. Each separate task is delimited by commas ( `,` ). Replace this with the commands you need to succesfully build your project. If `dotnet build` works fine for you, then just keep it as is.
* `cleanup-tasks` - This will be a list of terminal commands that you would normally do to clean up any unneeded files generated by the build task that you would not want git to commit. Each separate task is delimited by commas ( `,` ). Replace this with the commands you need to successfully build your project. If `dotnet clean` works fine for you, then just keep it as is.
* `binaries` -  This will be a list of binary files to look into and generate from, relative to the root of the project. Each separate task is delimited by commas ( `,` ).
* `output-path` - This path is relative to the root of the project and will place all the generated files. **NOTE:** The path will be deleted if it already exist to make a clean slate, put in a new path where none of your files are found. Recommended to make the path within `docs` folder or wherever you have GitHub Pages set up. By default it will be `docs/api`.
* `user-email` - Change this to the email tied to your GitHub, it is needed to push the commit as yourself. If you don't want to place your email, then use the placeholder email: `csharp.doc.gen@gmail.com`.
* `user-name` - Change this to the name tied to your GitHub, it is needed to push the commit as yourself. If you don't want to place your name, then use the placeholder name: `C# Document Generator`.

For use more inputs that the action accepts, refer to the [Inputs section](#inputs).

### Sample Project Details JSON

Below is a sample `project-details.json` code that you can use to give some description on the generated webpages. Copy and paste this into a `project-details.json` to give the automated documentations some description. Once the file is created, use the input `project-details` and put the file, with it's directory (relative to the base folder of the project). For example if the file was created in the `json-files` folder and was called `project-details.json` then the input would be as follows: `project-details: json-files/project-details.json`.

```json
{
  "name": "Sample Project",
  "version": "1.0.0",
  "description": "This is a short description of the project",
  "license": "MIT",
  "keywords": [
    "sample",
    "keys",
    "for",
    "search",
    "engine",
    "optimization"
  ],
  "author": "Your Name Here",
  "copyrightYear": "2020",
  "favicon": "https://openclipart.org/image/400px/svg_to_png/203766/dog.png"
}
```

### Details About Fields in Sample JSON Code

* `name` - The name of the project, normally the name of the repository.

* `description` - A short description of the project, normally place right underneath the name of the project in the header.

* `favicon` - A link to a thumbnail for use of the web page's icon thumbnail.

* `keywords` - A list of keywords that are used for the meta data of each web page.

* `team` - The name of the team that worked on this project, omitting this will normally make the template use the author member instead.

* `author` - The name of the author(s) that worked on this project.

* `copyrightYear` - A string that contains the copyright year, which can look like "2020" or "2014 - 2020".

* `version` - The version of the project.

* `license` - The license of the project, normally a string that mentions and links to the license.

This information for the `project-details.json` can also be [found on the wiki](https://github.com/FuLagann/csharp-docs-generator/wiki/Project-Details-JSON-Format).

## Inputs

**`binaries` as (string[]):** The list of binaries used to look into, must be named the same as the xml documentation. The list is separated by commas. **(Required)**

**`branch-name` as (string):** The name of the branch that the generation will commit to (if not specified it will commit to the current branch).

**`build-tasks` as (string[]):** The list of commands used to build the project prior to generating html documents. The list is separated by commas. **(Required)**

**`cleanup-tasks` as (string[]):** The list of commands used to clean up any building of project after generating html documents.The list is separated by commas.

**`commit-message` as (string):** The message of the commit that the generation will perform. *(Default: "Automated creation of documentation")*

**`include-private` as (boolean):** Set to true to include all the privates types and members. *(Default: false)*

**`project-details-json` as (string):** The json file that contains the details of the project, used for header and footer information.

**`template` as (string):** The name of the template to use to generate the webpages from. *(Default: "default")*

**`template-uris-json` as (string):** The json to get all the template files used to generate the documentation.

**`output-extension` as (string):** The output extension that every file built will contain. *(Default: ".html")*

**`output-path` as (string):** The output path of the generated documents. *(Default: "docs/api/")*

**`user-email` as (string):** The email of the user who will commit. *(Default: "csharp.doc.gen@gmail.com")*

**`user-name` as (string):** The name of the user who will commit. *(Default: "C# Document Generator")*

**`skip-git` as (boolean):** Set to true to completely skip the git pushing process. Only set to true if the one of the next process in the action is to push to git (from another action/library). If no other action is defined to push, none of the documentation will appear in the repo. *(Default: false)*

## Formats

There are various JSON formats to follow for various inputs, the following links will take you to a wiki where it describes it's specific format:

* [project-details-json](https://github.com/FuLagann/csharp-docs-generator/wiki/Project-Details-JSON-Format)
* [template-uris-json](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-URIs-JSON-Format)
* [Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#base-namespace-template-api)
* [Template API Helper Functions](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API-Helper-Functions)
* [Base (Namespace) Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#base-namespace-template-api)
* [Base (Type) Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#base-type-template-api)
* [Event Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#event-template-api)
* [Field Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#field-template-api)
* [Footer Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#footer-template-api)
* [Header Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#header-template-api)
* [Method Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#method-template-api)
* [Namespace Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#namespace-template-api)
* [Navigation Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#navigation-template-api)
* [Property Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#property-template-api)
* [Type Template API](https://github.com/FuLagann/csharp-docs-generator/wiki/Template-API#type-template-api)

## Using Templates

The action uses premade templates to create web pages with themes without extra work from the end-user. This is done by setting the `template` variable to a known name of a template or a public link to a premade template. The following are the known-named templates that the action currently uses:

* default

The following are templates that are in the works of being implemented:

* default-light
* default-dark
* architect
* cayman
* dinky
* hacker
* leap-day
* merlot
* midnight
* minima
* minimal
* modernist
* slate
* tactile
* time-machine

If you would like to use your own premade template, then just place a public link to the template and the action will promptly use that template.

## Customizing the Template

If you would like to override and customize parts of the premade template you are using, please follow the [wiki guide on customizing the template](https://github.com/FuLagann/csharp-docs-generator/wiki/Customizing-the-Template).

## Creating Your Own Templates

If you would like to create your own template, please follow the [wiki guide on creating your own template](https://github.com/FuLagann/csharp-docs-generator/wiki/Creating-Your-Own-Premade-Template).

## Reporting Bugs and Contributing

If there are any bugs or errors that arise, please [report them to the issues page](https://github.com/FuLagann/csharp-docs-generator/issues).

## License

This project uses an [MIT](LICENSE) license that grants people to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies.
