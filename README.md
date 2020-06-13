
# C# Documentation Generator

This action generates a static html documentation for C# projects. It will create documentation within the repository and commit it once it's finished generating.

**NOTE: This project will delete the folder listed under the `output-path` input. This is to delete old API content that no longer exists, but make sure to change the `output-path` variable is changed to an directory that won't delete files unnecessarily!**

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

## Formats

There are various JSON formats to follow for various inputs, the following links will take you to a wiki where it describes it's specific format:

* [project-details-json](https://github.com/FuLagann/csharp-docs-generator/wiki/Project-Details-JSON-Format)
* `template-uris-json`
* Template API
* Navigation Template API
* Namespace Template API
* Header Template API
* Footer Template API
* Base Template API
* Type Template API
* Field Template API
* Property Template API
* Event Template API
* Constructor Template API
* Method Template API

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

## Creating Your Own Templates

If you would like to create your own template, please follow the wiki guide on creating your own.

## License

This project uses an [MIT](LICENSE) license that grants people to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies.
