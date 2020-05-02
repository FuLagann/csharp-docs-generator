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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateApi_1 = require("./models/TemplateApi");
const XmlFormat_1 = require("./models/XmlFormat");
// External functionality
const generate_1 = require("./generate");
const index_1 = require("./index");
const read_file_1 = require("./read-file");
const read_xml_1 = require("./read-xml");
const Helper = __importStar(require("./template-helpers"));
// External libraries
const ejs = require("ejs");
const prettier = require("prettier");
// Variables
let generatedTypeJson;
let namespaceTypes = {};
/**Gets the map of namespaces tied to the list of types.
 * @returns Returns the map of namespaces that are tied to the list of types.*/
function getNamespaceTypes() {
    return namespaceTypes;
}
exports.getNamespaceTypes = getNamespaceTypes;
/**Compiles the base template.
 * @param args {InputArguments} - The input arguments to look into.
 * @param typePath {string} - The path to the type to generate the documentation for.
 * @returns Returns the compiled template code.*/
function compileBase(args, typePath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = args.templateUris.base;
        generatedTypeJson = yield generate_1.generateTypeDetails(args, typePath);
        return prettier.format(ejs.render(read_file_1.readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(), {
            createPartial: Helper.createPartial,
            uris: {
                css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
                scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
                type: args.templateUris.type,
                header: args.templateUris.header,
                footer: args.templateUris.footer,
                navigation: "--navigation" + args.outputExtension
            },
            isNamespace: false,
            typePath: typePath,
            breadcrumbs: generatedTypeJson.typeInfo.fullName.split('.'),
            project: generate_1.getProjectDetails()
        }), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
    });
}
exports.compileBase = compileBase;
/**Compiles the namespace template, listing all the types.
 * @param args {InputArguments} - The input arguments to look into.
 * @param namespace {string} - The name of the namespace.
 * @param types {string[]} - The list of types witihn the namespace.
 * @returns Returns the compiled template code.*/
function compileNamespace(args, namespace, types) {
    return __awaiter(this, void 0, void 0, function* () {
        // Variables
        const filename = args.templateUris.base;
        return prettier.format(ejs.render(read_file_1.readFile(filename).replace(/(?<=\S)\s+(?=<\/code>)/gm, "").trim(), {
            createPartial: Helper.createPartial,
            uris: {
                css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
                scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || []),
                type: args.templateUris.type,
                header: args.templateUris.header,
                footer: args.templateUris.footer,
                navigation: "--navigation" + args.outputExtension
            },
            isNamespace: true,
            namespaceName: namespace,
            types: types,
            typePath: namespace,
            breadcrumbs: namespace.split('.'),
            project: generate_1.getProjectDetails()
        }), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
    });
}
exports.compileNamespace = compileNamespace;
/**Compiles the sidebar for it's own separate file.
 * @param args {InputArguments} - The input arguments to look into for the uris.
 * @param sidebar {SidebarView} - The sidebar view to generate.
 * @returns Returns the html code for the sidebar view.*/
function compileSidebar(args, sidebar) {
    return prettier.format(ejs.render(read_file_1.readFile(args.templateUris.navigation), {
        displaySidebar: Helper.generateSidebar,
        uris: {
            css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
            scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
        },
        sidebarView: sidebar,
        project: generate_1.getProjectDetails()
    }), { parser: "html", endOfLine: "crlf", htmlWhitespaceSensitivity: "ignore", proseWrap: "never" });
}
exports.compileSidebar = compileSidebar;
/**Compiles the header template.
 * @param filename {string} - The filename to get the header template code from.
 * @returns Returns the compiled header template code.*/
function compileHeader(filename) {
    // Variables
    const args = index_1.getArguments();
    return ejs.render(read_file_1.readFile(filename), {
        uris: {
            css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
            scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
        },
        createPartial: Helper.createPartial,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
    });
}
exports.compileHeader = compileHeader;
/**Compiles the footer template.
 * @param filename {string} - The filename to get the footer template code from.
 * @returns Returns the compiled footer template code.*/
function compileFooter(filename) {
    // Variables
    const args = index_1.getArguments();
    return ejs.render(read_file_1.readFile(filename), {
        uris: {
            css: getRelativeLinks("css/", args.templateUris.localCss || [], args.templateUris.globalCss || []),
            scripts: getRelativeLinks("js/", args.templateUris.localScripts || [], args.templateUris.globalScripts || [])
        },
        createPartial: Helper.createPartial,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
    });
}
exports.compileFooter = compileFooter;
/**Compiles the type template.
 * @param filename {string} - The filename of the template file.
 * @param typePath {string} - The path to the type to look into and generate from.
 * @returns Returns the compiled template code.*/
function compileType(filename, typePath) {
    // Variables
    const args = index_1.getArguments();
    const xmlFormat = read_xml_1.getApiDoc(`T:${typePath}`, index_1.getDependencies());
    const details = generatedTypeJson;
    const xmlApi = getApiItems(xmlFormat, details);
    const uris = {
        constructors: args.templateUris.constructors,
        fields: args.templateUris.fields,
        properties: args.templateUris.properties,
        events: args.templateUris.events,
        methods: args.templateUris.methods
    };
    const members = getMembers(details, uris);
    generate_1.setSidebarView(generate_1.assignTypeToSidebr(generate_1.getSidebarView(), details));
    if (!namespaceTypes[details.typeInfo.namespaceName]) {
        namespaceTypes[details.typeInfo.namespaceName] = [];
    }
    namespaceTypes[details.typeInfo.namespaceName].push({
        typeInfo: details.typeInfo,
        typeDocs: xmlApi
    });
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        uris: uris,
        members: members,
        createPartial: Helper.createPartial,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
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
    const xmlApi = getApiItems(xmlFormat, details);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
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
    const xmlApi = getApiItems(xmlFormat, details);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
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
    const xmlApi = getApiItems(xmlFormat, details);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
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
    const xmlApi = getApiItems(xmlFormat, details);
    return ejs.render(read_file_1.readFile(filename).replace(/\s+\n/gm, "\n").replace(/\t/gm, "  ").trim(), {
        details: details,
        xmlDocs: xmlApi,
        codeDeclaration: getMarkdownCodeDeclaration(details),
        typeInfo: generatedTypeJson.typeInfo,
        capitalize: Helper.capitalize,
        getIdFrom: Helper.getIdFrom,
        createLinkToType: Helper.createLinkToType,
        createAnchorToType: Helper.createAnchorToType,
        getParameterType: Helper.getParameterType,
        project: generate_1.getProjectDetails()
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
        list.push(locals[i].replace(/.*[\\\/]([^\\\/]+)$/gm, `${localBasePath}$1`));
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
function getApiItems(format, details) {
    if (format == undefined) {
        format = new XmlFormat_1.XmlFormat();
    }
    return {
        summary: format.summary,
        returns: {
            exists: doesItemExist(format.returns ||
                (details.returnType && details.returnType.name != "void" ?
                    details.returnType.name :
                    "")),
            value: format.returns,
            details: details.returnType
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
            exists: doesArrayItemExist(format.parameters || details.parameters),
            value: getParameterDetails(format.parameters, details)
        },
        exceptions: {
            exists: doesArrayItemExist(format.exceptions),
            value: format.exceptions
        },
        typeParameters: {
            exists: doesArrayItemExist(format.typeParameters ||
                details.genericParameters ||
                (details.typeInfo ?
                    details.typeInfo.genericParameters :
                    undefined)),
            value: getGenericParameterDetails(format.typeParameters, details)
        }
    };
}
/**Gets all the details of the method/property's parameters with the added description found within the xml. This is
 * so that even if there is no XML documentation to the parameters, they will still appear in the template.
 * @param format {NameDescription[]} - The list of names and descriptions of the parameters that were gathered.
 * @param details {MethodInfo | PropertyInfo | any} - The details to look into.
 * @returns Returns a true list of parameter details with descriptions, whether or not documented in the XML.*/
function getParameterDetails(format, details) {
    if (!details || !details.parameters) {
        return [];
    }
    // Variables
    let parameters = [];
    let temp = details.parameters;
    for (let a = 0; a < temp.length; a++) {
        // Variables
        let index = -1;
        let parameter = {
            name: temp[a].name,
            description: "<p>No description.</p>",
            details: temp[a]
        };
        for (let b = 0; b < format.length; b++) {
            if (temp[a].name == format[b].name) {
                index = b;
                break;
            }
        }
        if (index != -1) {
            parameter.description = format[index].description;
        }
        parameters.push(parameter);
    }
    return parameters;
}
/**Gets all the details of the type/method's generic parameters with the added description found within the xml. This
 * is so that even if there is no XML documentation to the generic parameters, they will still appear in the template.
 * @param format {NameDescription[]} - The list of names and description of the generic parameters that were gathered.
 * @param details {TypeInfo | MethodInfo | any} - The details to look into.
 * @returns Returns a true list of generic parameter details with descriptions, whether or not documented in the XML.*/
function getGenericParameterDetails(format, details) {
    if (details &&
        (details.genericParameters ||
            (details.typeInfo &&
                details.typeInfo.genericParameters))) {
        // Variables
        let typeParameters = [];
        let temp = (details.genericParameters ?
            details.genericParameters :
            details.typeInfo.genericParameters);
        for (let a = 0; a < temp.length; a++) {
            // Variables
            let index = -1;
            let generic = {
                name: temp[a].name,
                description: "<p>No description.</p>",
                details: temp[a]
            };
            for (let b = 0; b < format.length; b++) {
                if (temp[a].name == format[b].name) {
                    index = b;
                    break;
                }
            }
            if (index != -1) {
                generic.description = format[index].description;
            }
            typeParameters.push(generic);
        }
        return typeParameters;
    }
    return format;
}
/**Finds if the given string is non-empty and exists.
 * @param str {string} - The string in quest.
 * @returns Returns true if the string is non-empty and exists.*/
function doesItemExist(str) { return (str != null && str != undefined && str != ""); }
/**Finds if the array is non-empty and exists.
 * @param list {any[]} - The list in question.
 * @returns Returns true if the list is non-empty and exists.*/
function doesArrayItemExist(list) { return (list != null && list != undefined && list.length > 0); }
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
