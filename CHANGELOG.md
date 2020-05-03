

v0.11 includes:
* Added template content for namespace pages.
* Rearranged console logs for what's being generated.
* Fixed regex for getting filenames when copying over CSS and JS files.
* Added basic project details json for templates to use that will be used for headers and footers mainly.
* Added isGenericType function to templates.

v0.10 includes:
* Updated getApiItems to include ParameterInfo and GenericParameterInfo details for undocumented items to appear.
* Updated bad logic if checking for getGenericParameterDetails and reworked that to work.
* Added header and footer template compilation.
* Added comment documentation to header and footer.
* Sidebar generation comes after doc generation, with type compilations added to sidebar content.

v0.9 includes;
* Creation of sidebar content (navigation for namespaces, types, and members).
* Rendering of sidebar content.
* Updated names of members for sidebar view.
* Updated sideview to include links.
* Changed sidebar view so namespace has it's own list instead of being nested.
* Corrected link to members as anchored.
* Added an ending caret dot span for terminal sidebar elements.
* Added comment documentation to functions.
* Cleaned up unwanted whitespacing.
* Added navigation template to template uris model.

v0.8 includes:
* Updated sharp checker types to reflect updated version.
* Included prism code highlighting.
* Added codeDeclaration variable to templating.
* Trimmed description content to take out unneeded tabbed spaces.
* Removed whitespace line remover.
* Replaced pretty with prettier.
* Fixed misspelling of outputted file (`` ` => - ``).
* Updated code declaration + turned off wrapping from prettier.

v0.7 includes:
* Generates local css and javascript files.
* Added functions to templating:
  * Capitalizes sentences (removing hyphens).
  * Getting an anchor id from a member info.
  * Getting a list of members for type templating.
  * Get the type info from a parameter

v0.6 includes:
* Reads dependency json to download dependency .xml files for use on documentation.
* Added functions for templates:
  * Creating link to type using type path.
  * Creating anchor to type using quick type info.
* Updated outputted html to look cleaner.

v0.5 includes:
* Gets packaged templates from packages folder within repository.

v0.4 includes:
* Getting documentation from NETStandard API.

v0.3 includes:
* Generates html code from API.
* Compiles templates together for each webpage.

