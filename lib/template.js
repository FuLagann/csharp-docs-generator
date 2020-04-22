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
const TemplateApi_1 = require("./models/TemplateApi");
const TemplateApi_2 = require("./models/TemplateApi");
const XmlFormat_1 = require("./models/XmlFormat");
// External functionality
const generate_1 = require("./generate");
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
const template_helpers_1 = require("./template-helpers");
// External libraries
const ejs = require("ejs");
const prettier = require("prettier");
// Variables
let generatedTypeJson;
/**Compiles the base template.
 * @param args {InputArguments} - The input arguments to look into.
 * @param typePath {string} - The path to the type to generate the documentation for.
 * @returns Returns the compiled template code.*/
function compileBase(args, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = args.templateUris.base;
        const sidebar = new TemplateApi_2.SidebarView("$~root");
        generatedTypeJson = yield generate_1.generateTypeDetails(args, typePath);
        // TODO: Generate sidebar
        return prettier.format(ejs.render(read_file_1.readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(), {
            displaySidebar: template_helpers_1.generateSidebar,
            createPartial: template_helpers_1.createPartial,
            uris: {
                css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
                scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
                type: args.templateUris.type
            },
            isNamespace: false,
            sidebarView: sidebar,
            typePath: typePath,
            breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.')
        }), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
    });
}
exports.compileBase = compileBase;
// TODO: Complete this
/**Compiles the namespace template, listing all the types.
 * @param args {InputArguments} - The input arguments to look into.
 * @param namespace {string} - The name of the namespace.
 * @param types {string[]} - The list of types witihn the namespace.
 * @returns Returns the compiled template code.*/
function compileNamespace(args, namespace, types) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = args.templateUris.base;
        const sidebar = new TemplateApi_2.SidebarView("$~root");
        // TODO: Generate sidebar
        // TODO: Figure out namespaces listed in namespace webpages
        return prettier.format(ejs.render(read_file_1.readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(), {
            displaySidebar: template_helpers_1.generateSidebar,
            createPartial: template_helpers_1.createPartial,
            uris: {
                css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
                scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
                type: args.templateUris.type
            },
            isNamespace: true,
            sidebarView: sidebar,
            namespaceName: namespace,
            types: types,
            typePath: namespace,
            breadcrumbs: namespace.split('.')
        }), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
    });
}
exports.compileNamespace = compileNamespace;
/**Compiles the type template.
 * @param filename {string} - The filename of the template file.
 * @param typePath {string} - The path to the type to look into and generate from.
 * @returns Returns the compiled template code.*/
function compileType(filename, typePath) {
    // Variables
    const args = index_1.getArguments();
    const xmlFormat = read_xml_1.getApiDoc(`T:${typePath}`, index_1.getDependencies());
    const xmlApi = getApiItems(xmlFormat);
    const details = generatedTypeJson;
    const uris = {
        constructors: args.templateUris.constructors,
        fields: args.templateUris.fields,
        properties: args.templateUris.properties,
        events: args.templateUris.events,
        methods: args.templateUris.methods
    };
    const members = getMembers(details, uris);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        uris: uris,
        members: members,
        createPartial: template_helpers_1.createPartial,
        capitalize: template_helpers_1.capitalize,
        getIdFrom: template_helpers_1.getIdFrom,
        createLinkToType: template_helpers_1.createLinkToType,
        createAnchorToType: template_helpers_1.createAnchorToType,
        getParameterType: template_helpers_1.getParameterType
    });
}
exports.compileType = compileType;
/**Compiles the field template.
 * @param filename {string} - The filename of the template file.
 * @param details {FieldInfo} - The details of the field to look into.
 * @returns Returns the compiled template code.*/
function compileField(filename, details) {
    // Variables
    const typePath = getTypePath(details.implementedType, details.name);
    const xmlFormat = read_xml_1.getApiDoc(`F:${typePath}`, index_1.getDependencies());
    const xmlApi = getApiItems(xmlFormat);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: template_helpers_1.capitalize,
        getIdFrom: template_helpers_1.getIdFrom,
        createLinkToType: template_helpers_1.createLinkToType,
        createAnchorToType: template_helpers_1.createAnchorToType,
        getParameterType: template_helpers_1.getParameterType
    });
}
exports.compileField = compileField;
/**Compiles the property template.
 * @param filename {string} - The filename of the template file.
 * @param details {PropertyInfo} - The details of the property to look into.
 * @returns Returns the compiled template code.*/
function compilePropety(filename, details) {
    // Variables
    const typePath = getPropertyTypePath(details);
    const xmlFormat = read_xml_1.getApiDoc(`P:${typePath}`, index_1.getDependencies());
    const xmlApi = getApiItems(xmlFormat);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: template_helpers_1.capitalize,
        getIdFrom: template_helpers_1.getIdFrom,
        createLinkToType: template_helpers_1.createLinkToType,
        createAnchorToType: template_helpers_1.createAnchorToType,
        getParameterType: template_helpers_1.getParameterType
    });
}
exports.compilePropety = compilePropety;
/**Compiles the event template.
 * @param filename {string} - The filename of the template file.
 * @param details {EventInfo} - The details of the event to look into.
 * @returns Returns the compiled template code.*/
function compileEvent(filename, details) {
    // Variables
    const typePath = getTypePath(details.implementedType, details.name);
    const xmlFormat = read_xml_1.getApiDoc(`E:${typePath}`, index_1.getDependencies());
    const xmlApi = getApiItems(xmlFormat);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: template_helpers_1.capitalize,
        getIdFrom: template_helpers_1.getIdFrom,
        createLinkToType: template_helpers_1.createLinkToType,
        createAnchorToType: template_helpers_1.createAnchorToType,
        getParameterType: template_helpers_1.getParameterType
    });
}
exports.compileEvent = compileEvent;
/**Compiles the method template.
 * @param filename {string} - The filename of the template file.
 * @param details {MethodInfo} - The details of the method to look into.
 * @returns Returns the compiled template code.*/
function compileMethod(filename, details) {
    // Variables
    const typePath = getMethodTypePath(details);
    const xmlFormat = read_xml_1.getApiDoc(`M:${typePath}`, index_1.getDependencies());
    const xmlApi = getApiItems(xmlFormat);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: template_helpers_1.capitalize,
        getIdFrom: template_helpers_1.getIdFrom,
        createLinkToType: template_helpers_1.createLinkToType,
        createAnchorToType: template_helpers_1.createAnchorToType,
        getParameterType: template_helpers_1.getParameterType
    });
}
exports.compileMethod = compileMethod;
/**Gets the members of the type used for templating.
 * @param details {TypeInfo} - The type info to look into.
 * @param uris {TemplateApiUris} - The uris used to reference other templates for partials.
 * @returns Returns the list of members of the type used for templating.*/
function getMembers(details, uris) {
    return [
        new TemplateApi_1.MemberList(details.constructors, "constructors", "method", uris.constructors),
        new TemplateApi_1.MemberList(details.fields, "fields", "field", uris.fields),
        new TemplateApi_1.MemberList(details.staticFields, "static-fields", "field", uris.fields),
        new TemplateApi_1.MemberList(details.properties, "properties", "property", uris.properties),
        new TemplateApi_1.MemberList(details.staticProperties, "static-properties", "property", uris.properties),
        new TemplateApi_1.MemberList(details.events, "events", "event", uris.events),
        new TemplateApi_1.MemberList(details.staticEvents, "static-events", "event", uris.events),
        new TemplateApi_1.MemberList(details.methods, "methods", "method", uris.methods),
        new TemplateApi_1.MemberList(details.staticMethods, "static-methods", "method", uris.methods),
        new TemplateApi_1.MemberList(details.operators, "operators", "method", uris.methods)
    ];
}
/**Gets the relative links for the individual webpage to reference, in relation to the webpage.
 * @param localBasePath {string} - The local base path where the files can be found.
 * @param locals {string[]} - The local files that the template will generate and use.
 * @param globals {string[]} - The global files that the user already has and wants to include.
 * @returns Returns the links of both locals and globals relative to the individual webpage.*/
function getRelativeLinks(localBasePath, locals, globals) {
    // Variables
    let list = globals ? globals.slice() : [];
    for (let i = 0; i < locals.length; i++) {
        if (!locals[i] || locals[i] == "") {
            continue;
        }
        list.push(locals[i].replace(/.*[\\\/]([\w\.]+)$/gm, `${localBasePath}$1`));
    }
    return list;
}
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
/**Gets the api documentation items to be used by the template.
 * @param format {XmlFormat|undefined} - The format used to get the documentation from.
 * @return Returns the api documentation items.*/
function getApiItems(format) {
    if (format == undefined) {
        format = new XmlFormat_1.XmlFormat();
    }
    // TODO: Add details parameter.
    return {
        summary: format.summary,
        // TODO: Update this to reflect the details iff the format doesn't exist
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
        // TODO: Update this to reflect the details iff the format doesn't exist
        // TODO: Update the value to fill up by the details
        parameters: {
            exists: doesArrayItemExist(format.parameters),
            value: format.parameters
        },
        exceptions: {
            exists: doesArrayItemExist(format.exceptions),
            value: format.exceptions
        },
        // TODO: Update this to reflect the details iff the format doesn't exist
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
/**Gets the code declaration thats been parsed through markdown-it.
 * @param info {TypeInfo | FieldInfo | PropertyInfo | EventInfo | MethodInfo} - The info to look into.
 * @returns Returns the rendered markdown code.*/
function getMarkdownCodeDeclaration(info) {
    // Variables
    let code = "";
    for (let i = 0; i < info.attributes.length; i++) {
        code += info.attributes[i].fullDeclaration + "\n";
    }
    code += info.fullDeclaration;
    if (!info.staticMethods) {
        code += ";";
    }
    code = "```csharp\n" + code + "\n```";
    return read_xml_1.markdown.render(code);
}
