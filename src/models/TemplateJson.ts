
export interface CompactFullUris {
	compact: string,
	full: string
};

export interface TemplateJson {
	baseUri: string,
	cssUris: string[],
	scriptUris: string[]
	namespaceUri: string,
	typeUri:string,
	constructorsUri: CompactFullUris,
	fieldsUri: CompactFullUris,
	propertiesUri: CompactFullUris,
	eventsUri: CompactFullUris,
	methodsUri: CompactFullUris
}
