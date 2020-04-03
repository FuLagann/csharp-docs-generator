
export interface TypeList {
	types : any;
}

export interface QuickTypeInfo {
	unlocalizedName : string;
	name : string;
	fullName : string;
	namespaceName : string;
	genericParameters : GenericParametersInfo[];
}

export interface TypeInfo {
	typeInfo : QuickTypeInfo;
	assemblyName : string;
	isDelegate : boolean;
	isNested : boolean;
	isStatic : boolean;
	isAbstract : boolean;
	isSealed : boolean;
	accessor : string;
	modifier : string;
	objectType : string;
	hasDeclaringType : boolean;
	declaringType : QuickTypeInfo;
	declaration : string;
	fullDeclaration : string;
	baseType : QuickTypeInfo;
	attributes : AttributeInfo[];
	interfaces : QuickTypeInfo[];
	constructors : MethodInfo[];
	fields : FieldInfo[];
	staticFields : FieldInfo[];
	properties : PropertyInfo[];
	staticProperties : PropertyInfo[];
	events : EventInfo[];
	staticEvents : EventInfo[];
	methods : MethodInfo[];
	staticMethods : MethodInfo[];
	operators : MethodInfo[];
}

export interface GenericParametersInfo {
	unlocalizedName : string;
	name : string;
	constraints : QuickTypeInfo[];
}

export interface AttributeFieldInfo {
	name : string;
	value : string;
	typeInfo : QuickTypeInfo;
}

export interface AttributeInfo {
	typeInfo : QuickTypeInfo;
	constructorArgs : AttributeFieldInfo[];
	properties : AttributeFieldInfo[];
	parameterDeclaration : string;
	fullDeclaration : string;
}

export interface FieldInfo {
	name : string;
	value : string;
	isConstant : boolean;
	isStatic : boolean;
	isReadonly : boolean;
	attributes : AttributeInfo[];
	accessor : string;
	modifier : string;
	typeInfo : QuickTypeInfo;
	implementedType : QuickTypeInfo;
	declaration : string;
}

export interface PropertyInfo {
	name : string;
	isStatic : boolean;
	hasGetter : boolean;
	hasSetter : boolean;
	attributes : AttributeInfo[];
	accessor : string;
	modifier : string;
	typeInfo : QuickTypeInfo;
	implementedType : QuickTypeInfo;
	parameters : ParameterInfo[];
	getter : MethodInfo;
	setter : MethodInfo;
	declaration : string;
	parameterDeclaration : string;
	getSetDeclaration : string;
	fullDeclaration : string;
}

export interface EventInfo {
	name : string;
	isStatic : boolean;
	accessor : string;
	modifier : string;
	typeInfo : QuickTypeInfo;
	implementedType : QuickTypeInfo;
	adder : MethodInfo;
	remover : MethodInfo;
	fullDeclaration : string;
}

export interface MethodInfo {
	name : string;
	accessor : string;
	modifier : string;
	isAbstract : boolean;
	isConstructor : boolean;
	isConversionOperator : boolean;
	isExtension : boolean;
	isOperator : boolean;
	isOverriden : boolean;
	isStatic : boolean;
	isVirtual : boolean;
	implementedType : QuickTypeInfo;
	returnType : QuickTypeInfo;
	attributes : AttributeInfo[];
	parameters : ParameterInfo[];
	genericParameters : GenericParametersInfo[];
	declaration : string;
	genericDeclaration : string;
	parameterDeclaration : string;
	fullDeclaration : string;
}

export interface ParameterInfo {
	name : string;
	defaultValue : string;
	attributes : AttributeInfo[];
	modifier : string;
	isOptional : boolean;
	typeInfo : QuickTypeInfo;
	genericParameterDeclarations : string[];
	fullDeclaration : string;
}
