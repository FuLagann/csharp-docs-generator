"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateVariables_1 = require("./models/TemplateVariables");
const XmlFormat_1 = require("./models/XmlFormat");
const read_file_1 = require("./read-file");
const generate_1 = require("./generate");
const index_1 = require("./index");
const template_helpers_1 = require("./template-helpers");
const ejs = require("ejs");
const pretty = require("pretty");
const read_xml_1 = require("./read-xml");
// Variables
let generatedTypeJson;
function compileBase(args, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = index_1.getTemplateUri(args.template.baseUri);
        const sidebar = new TemplateVariables_1.SidebarView("$~root");
        generatedTypeJson = yield generate_1.generateTypeDetails(args, typePath);
        // TODO: Generate sidebar
        return pretty(ejs.render(read_file_1.readFile(filename), {
            displaySidebar: template_helpers_1.displaySidebar,
            createPartial: template_helpers_1.createPartial,
            uris: {
                css: args.template.cssUris,
                scripts: args.template.scriptUris,
                type: args.template.typeUri
            },
            isNamespace: false,
            sidebarView: sidebar,
            typePath: typePath,
            breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.')
        }));
    });
}
exports.compileBase = compileBase;
function compileNamespace(args, namespace, types) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = index_1.getTemplateUri(args.template.baseUri);
        const sidebar = new TemplateVariables_1.SidebarView("$~root");
        // TODO: Generate sidebar
        // TODO: Figure out namespaces listed in namespace webpages
        return pretty(ejs.render(read_file_1.readFile(filename), {
            displaySidebar: template_helpers_1.displaySidebar,
            createPartial: template_helpers_1.createPartial,
            uris: {
                css: args.template.cssUris,
                scripts: args.template.scriptUris,
                type: args.template.typeUri
            },
            isNamespace: true,
            sidebarView: sidebar,
            namespaceName: namespace,
            types: types,
            typePath: namespace,
            breadcrumbs: namespace.split('.')
        }));
    });
}
exports.compileNamespace = compileNamespace;
function compileType(filename, typePath) {
    // Variables
    const args = index_1.getArguments();
    const api = index_1.getXmlApi();
    if (!api.has(typePath)) {
        read_xml_1.gatherApiMapFromTypePath(api, `T:${typePath}`, index_1.getDependencies());
    }
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: generatedTypeJson,
        xmlDocs: xmlApi,
        createPartial: template_helpers_1.createPartial,
        uris: {
            constructors: args.template.constructorsUri,
            fields: args.template.fieldsUri,
            properties: args.template.propertiesUri,
            events: args.template.eventsUri,
            methods: args.template.methodsUri
        }
    });
}
exports.compileType = compileType;
function compileField(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getTypePath(details.implementedType, details.name);
    if (!api.has(typePath)) {
        read_xml_1.gatherApiMapFromTypePath(api, `F:${typePath}`, index_1.getDependencies());
    }
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi,
        typeInfo: generatedTypeJson.typeInfo
    });
}
exports.compileField = compileField;
function compilePropety(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getPropertyTypePath(details);
    if (!api.has(typePath)) {
        read_xml_1.gatherApiMapFromTypePath(api, `P:${typePath}`, index_1.getDependencies());
    }
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi,
        typeInfo: generatedTypeJson.typeInfo
    });
}
exports.compilePropety = compilePropety;
function compileEvent(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getTypePath(details.implementedType, details.name);
    if (!api.has(typePath)) {
        read_xml_1.gatherApiMapFromTypePath(api, `E:${typePath}`, index_1.getDependencies());
    }
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi,
        typeInfo: generatedTypeJson.typeInfo
    });
}
exports.compileEvent = compileEvent;
function compileMethod(filename, details) {
    // Variables
    const api = index_1.getXmlApi();
    const typePath = getMethodTypePath(details);
    if (!api.has(typePath)) {
        read_xml_1.gatherApiMapFromTypePath(api, `M:${typePath}`, index_1.getDependencies());
    }
    const xmlApi = getApiItems(api.get(typePath));
    return ejs.render(read_file_1.readFile(filename), {
        details: details,
        xmlDocs: xmlApi,
        typeInfo: generatedTypeJson.typeInfo
    });
}
exports.compileMethod = compileMethod;
/**Gets the property's specific type path used for indices specifically.
 * @param details {PropertyInfo} - The details of the property to look into.
 * @returns Returns the type path specific to the property.*/
function getPropertyTypePath(details) {
    // Variables
    let typePath = getTypePath(details.implementedType, details.name);
    if (details.parameters.length) {
        // Variables
        let parameters = [];
        details.parameters.forEach(function (parameter) {
            parameters.push(parameter.typeInfo.fullName);
        });
        return `${typePath}(${parameters.join(',')})`;
    }
    return typePath;
}
/**Gets the method's specific type path used to differentiate methods with different types of parameters.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the type path specific to the method.*/
function getMethodTypePath(details) {
    // Variables
    let name = details.name;
    if (details.isConstructor) {
        name = "#ctor";
    }
    if (details.isConversionOperator) {
        name = (details.modifier.indexOf("implicit") == -1 ?
            "op_Explicit" :
            "op_Implicit");
    }
    else if (details.isOperator && !name.startsWith("op_")) {
        name = "op_" + name;
    }
    let typePath = getTypePath(details.implementedType, name);
    let parameters = [];
    if (details.genericParameters.length > 0) {
        typePath += "``" + details.genericParameters.length;
    }
    details.parameters.forEach(function (parameter) {
        // Variables
        let paramResult = parameter.typeInfo.nonInstancedFullName;
        let temp;
        for (let i = 0; i < details.implementedType.genericParameters.length; i++) {
            temp = details.implementedType.genericParameters[i].unlocalizedName;
            if (paramResult == temp) {
                paramResult = "`" + i;
                break;
            }
            paramResult = paramResult.replace(new RegExp(`([\\(<,])${temp}([\\)\\[>,])`, "gm"), "$1`" + i + "$2");
            paramResult = paramResult.replace(new RegExp(`${temp}((?:\\[,*\\])+)`, "gm"), "`" + i + "$1");
        }
        for (let i = 0; i < details.genericParameters.length; i++) {
            temp = details.genericParameters[i].unlocalizedName;
            if (paramResult == temp) {
                paramResult = "``" + i;
                break;
            }
            paramResult = paramResult.replace(new RegExp(`([\\(<,])${temp}([\\)\\[>,])`, "gm"), "$1``" + i + "$2");
            paramResult = paramResult.replace(new RegExp(`${temp}((?:\\[,*\\])+)`, "gm"), "``" + i + "$1");
        }
        paramResult = paramResult.replace(new RegExp("<", "gm"), "{").replace(new RegExp(">", "gm"), "}");
        if (parameter.modifier != "") {
            paramResult += "@";
        }
        parameters.push(paramResult);
    });
    if (parameters.length > 0) {
        // Variables
        const methodPath = `${typePath}(${parameters.join(',')})`;
        if (details.isConversionOperator) {
            return `${methodPath}~${details.returnType.nonInstancedFullName}`;
        }
        return methodPath;
    }
    return typePath;
}
/**Gets the type path using the type info and member name
 * @param typeInfo {QuickTypeInfo} - The information of the type.
 * @param name {string} - The name of the member
 * @returns Returns the friendly type path*/
function getTypePath(typeInfo, name) {
    return typeInfo.unlocalizedName + "." + name;
}
/**Gets all the api items from the surface level of the api.
 * @param api {Map<string, XmlFormat>} - The api to look into.
 * @returns Returns the template items needed to fill up the api documentation.*/
function getApiItems(format) {
    if (format == undefined) {
        format = new XmlFormat_1.XmlFormat();
    }
    return {
        summary: format.summary,
        returns: {
            exists: doesItemExist(format.returns),
            value: format.returns
        },
        remarks: {
            exists: doesItemExist(format.remarks),
            value: format.remarks
        },
        example: {
            exists: doesItemExist(format.example),
            value: format.example
        },
        parameters: {
            exists: doesArrayItemExist(format.parameters),
            value: format.parameters
        },
        exceptions: {
            exists: doesArrayItemExist(format.exceptions),
            value: format.exceptions
        },
        typeParameters: {
            exists: doesArrayItemExist(format.typeParameters),
            value: format.typeParameters
        }
    };
}
/**Finds if the given string is non-empty and exists.
 * @param str {string} - The string in quest.
 * @returns Returns true if the string is non-empty and exists.*/
function doesItemExist(str) { return (str != null && str != undefined && str != ""); }
/**Finds if the array is non-empty and exists.
 * @param list {any[]} - The list in question.
 * @returns Returns true if the list is non-empty and exists.*/
function doesArrayItemExist(list) {
    return (list != null && list != undefined && list.length > 0);
}
