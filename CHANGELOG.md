
v0.13 includes:
* Removed prettier render to make html code look prettier, as a move to migrate that process as an input option.
* Added namespace template compilation.
* Fixed error when putting path without an ending / or \ for output-path input.
* Fixing template zip file presets to work in general.
* Added local files to supplementary files and input template uris.

v0.12 includes:
* Updated QuickTypeInfo to reflect Sharp Checker.
* Updated createAnchorToType to not create hyperlinks for generic types.
* Created an alpha version of a search.js file to easily search through the API.
* Created usable version of a search.js file to easily search through the API.
* Updated search.js functionanlity for more customization and smoother interface.
* Improved search.js with:
  * Spaces will look for more points of entry.
  * Filters have been added:
    * accept-all - Set to true if you want to accept every item.
    * regex - The regex query to search with.
    * only - Set an array of "namespace", "type", "member", "constructor", "field", "event", "property", "method", "operator", and "static" to show only the given values. Multiples can be selected by a delimiter of ','.
    * strict-only - Set an array of "namespace", "type", "member", "constructor", "field", "event", "property", "method", "operator", and "static" to show only the given values. Multiples can be selected by a delimiter of ','. Objects must fulfills all tags the user has provided.
    * exclude - Excludes the different types "namespace", "type", or "member". Multiples can be selected by a delimiter of ','.
  * If the user only types in filters, the acceptAll filter will automatically be set to true.
  * Clicking out of the search bar input or search results window will close the window.
  * The searching will be delayed before actually searching so that the user doesn't see a "glitchy" looking search results window.
  * Search results get highlighted by the words that were queried, including regex results.
* Added help tooltip for search bar about filters.
* Added tags to the searchJson to affect filters such as only and exclude.
* Added search help text with escaped html to be placed on the webpage (no title).
* Updated searching function to batch searches per interval.

v0.11 includes:
* Added template content for namespace pages.
* Rearranged console logs for what's being generated.
* Fixed regex for getting filenames when copying over CSS and JS files.
* Added basic project details json for templates to use that will be used for headers and footers mainly.
* Added isGenericType function to templates.
* Corrected logic in getApiItems.
* Moved global css/js files to be after local css/js files.
* Updated createAnchorToType to include a parameter for multiple options, like:
  * Assigning classes to the anchor tag.
  * Setting the display name to full name instead of just the name of the type.

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

