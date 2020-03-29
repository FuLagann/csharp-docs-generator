
import { XmlFormat } from "./XmlFormat";

export interface TemplateApi {
	breadcrumbs: string[];
	api: Map<string, XmlFormat>;
}

export interface NameDescription {
	name: string;
	description: string;
}

export interface TemplateApiItems {
	summary: string;
	returns: ExistsValue;
	remarks: ExistsValue;
	example: ExistsValue;
	parameters: ExistsValueArray;
	exceptions: ExistsValueArray;
	typeParameters: ExistsValueArray;
}

interface ExistsValue {
	exists: boolean;
	value: string;
}

interface ExistsValueArray {
	exists: boolean;
	value: NameDescription[];
}
