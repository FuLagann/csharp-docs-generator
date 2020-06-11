
/**All the information of types with it's associated library or executable.*/
export interface TypeList {
	/**A hashmap of a library or executable mapping to a list of types it contains.*/
	types : { [key : string] : string[] };
}

/**A quick look into the information of the type.*/
export interface QuickTypeInfo {
	/**The name of the type as found within the library's IL code.*/
	unlocalizedName : string;
	/**The name of the type that is slightly localized but not generically instanced.*/
	nonInstancedFullName : string;
	/**The name of the type as found when looking at the code.*/
	name : string;
	/**The full name of the type as found when looking at the code.
	 * Includes the namespace and the name within this variable.*/
	fullName : string;
	/**The name of the namespace where the type is located in.*/
	namespaceName : string;
	/**The list of generic parameters that the type contains.*/
	genericParameters : GenericParametersInfo[];
	/**Set to true if the type is a generic type.*/
	isGenericType : boolean;
}

/**All the information relevant to types.*/
export interface TypeInfo {
	/**The quick look at the information of the type (including name, namespace, generic parameters).*/
	typeInfo : QuickTypeInfo;
	/**The name of the assembly where the type is found in.*/
	assemblyName : string;
	/**Set to true if the type is a delegate declaration.*/
	isDelegate : boolean;
	/**Set to true if the type is a nested type.*/
	isNested : boolean;
	/**Set to true if the type is static and cannot have any instances only static members.*/
	isStatic : boolean;
	/**Set to true if the type is abstract and needs to be inherited to be used as an instance.*/
	isAbstract : boolean;
	/**Set to true if the type is sealed and cannot be inheritted from.*/
	isSealed : boolean;
	/**The accessor of the type (such as internal, private, protected, public).*/
	accessor : string;
	/**Any modifiers that the type contains (such as static, sealed, abstract, etc.).*/
	modifier : string;
	/**The object type of the type (such as class, struct, enum, or interface).*/
	objectType : string;
	/**Set to true if the type is nested and has a parent type.*/
	hasDeclaringType : boolean;
	/**Gets the parent type in which this type is nested under.
	 * If it is not a nested type, then it will be null. Check hasDeclaringType
	 * to see if it exists to begin with.*/
	declaringType : QuickTypeInfo;
	/**The partial declaration of the class within the inheritance declaration
	 * that can be found within the code.*/
	declaration : string;
	/**The full declaration of the type as it would be found within the code.*/
	fullDeclaration : string;
	/**The information of the base type that the type inherits.*/
	baseType : QuickTypeInfo;
	/**The array of attributes that the type contains.*/
	attributes : AttributeInfo[];
	/**The array of type information of interfaces that the type implements.*/
	interfaces : QuickTypeInfo[];
	/**The array of constructors that the type contains.*/
	constructors : MethodInfo[];
	/**The array of fields that the type contains.*/
	fields : FieldInfo[];
	/**The array of static fields that the type contains.*/
	staticFields : FieldInfo[];
	/**The array of properties that the type contains.*/
	properties : PropertyInfo[];
	/**The array of static properties that the type contains.*/
	staticProperties : PropertyInfo[];
	/**The array of events that the type contains.*/
	events : EventInfo[];
	/**The array of static events that the type contains.*/
	staticEvents : EventInfo[];
	/**The array of methods that the type contains.*/
	methods : MethodInfo[];
	/**The array of static methods that the type contains.*/
	staticMethods : MethodInfo[];
	/**The array of operators that the type contains.*/
	operators : MethodInfo[];
}

/**All the information relevant to generic parameters.*/
export interface GenericParametersInfo {
	/**The unlocalized name of the generic parameter as it would appear in the IL code.*/
	unlocalizedName : string;
	/**The name of the generic parameter.*/
	name : string;
	/**The list of constraints of what type the generic parameter should be.*/
	constraints : QuickTypeInfo[];
}

/**All the information relevant to the attribute's fields.*/
export interface AttributeFieldInfo {
	/**The name of the attribute field.*/
	name : string;
	/**The value of the attribute field.*/
	value : string;
	/**The information of the attribute field's type.*/
	typeInfo : QuickTypeInfo;
}

/**All the information relevant to an attribute.*/
export interface AttributeInfo {
	/**The information of the type that the attribute is.*/
	typeInfo : QuickTypeInfo;
	/**The list of constructor arguments that the attribute is declaring.*/
	constructorArgs : AttributeFieldInfo[];
	/**The list of fields and properties that the attribute is declaring.*/
	properties : AttributeFieldInfo[];
	/**The declaration of parameters as seen if looking at the code.*/
	parameterDeclaration : string;
	/**The declaration of the attribute as a whole, with name and parameters as seen if looking at the code.*/
	fullDeclaration : string;
}

/**All the information relevant to fields.*/
export interface FieldInfo {
	/**The name of the field.*/
	name : string;
	/**The value of the field (if it's a constant).*/
	value : string;
	/**Set to true if the field is constant.*/
	isConstant : boolean;
	/**Set to true if the field is static.*/
	isStatic : boolean;
	/**Set to true if the field is readonly.*/
	isReadonly : boolean;
	/**The list of attributes that the field contains.*/
	attributes : AttributeInfo[];
	/**The accessor of the field (such as internal, private, protected, public).*/
	accessor : string;
	/**Any modifiers to the field (such as static, const, static readonly, etc).*/
	modifier : string;
	/**The type information of the field's type.*/
	typeInfo : QuickTypeInfo;
	/**The type the field is implemented in.*/
	implementedType : QuickTypeInfo;
	/**The declaration of the field as it is found witihn the code.*/
	fullDeclaration : string;
}

/**All the information relevant to the property.*/
export interface PropertyInfo {
	/**The name of the property.*/
	name : string;
	/**Set to true if the property is static.*/
	isStatic : boolean;
	/**Set to true if the property has a getter method.*/
	hasGetter : boolean;
	/**Set to true if the property has a setter method.*/
	hasSetter : boolean;
	/**The list of attributes associated with the property.*/
	attributes : AttributeInfo[];
	/**The accessor of the property (such as internal, private, protected, public).*/
	accessor : string;
	/**Any modifiers to the property (such as static, virtual, override, etc.).*/
	modifier : string;
	/**The information of the property's type.*/
	typeInfo : QuickTypeInfo;
	/**The information of where the property was implemented.*/
	implementedType : QuickTypeInfo;
	/**The parameters the property has (if any).*/
	parameters : ParameterInfo[];
	/**The getter method of the property (this can be null, you must check the hasGetter variable).*/
	getter : MethodInfo;
	/**The setter method of the property (this can be null, you must check the hasSetter variable).*/
	setter : MethodInfo;
	/**The partial declaration of the property as can be found in the code.*/
	declaration : string;
	/**The partial declaration of the property's parameters (if any) as can be found in the code.*/
	parameterDeclaration : string;
	/**The partial declaration of the property that determines the accessibility of the get and set
	 * methods as can be found in the code.*/
	getSetDeclaration : string;
	/**The full declaration of the property as can be found in the code.*/
	fullDeclaration : string;
}

/**All the information relevant to events.*/
export interface EventInfo {
	/**The name of the event.*/
	name : string;
	/**Set to true if the event is static.*/
	isStatic : boolean;
	/**The accessor of the event (such as internal, private, protected, public).*/
	accessor : string;
	/**Any modifiers of the event (such as static, virtual, override, etc.).*/
	modifier : string;
	/**The information of the event's type.*/
	typeInfo : QuickTypeInfo;
	/**The attributes associated with the event.*/
	attributes : AttributeInfo[];
	/**The type the event is implemented in.*/
	implementedType : QuickTypeInfo;
	/**The information of the event's adding method.*/
	adder : MethodInfo;
	/**The information of the event's removing method.*/
	remover : MethodInfo;
	/**The declaration of the event as it would be found in the code.*/
	fullDeclaration : string;
}

/**All the information relevant to methods.*/
export interface MethodInfo {
	/**The name of the method.*/
	name : string;
	/**The accessor of the method (such as internal, private, protected, public).*/
	accessor : string;
	/**Any modifiers of the method (such as static, virtual, override, etc.).*/
	modifier : string;
	/**Set to true if the method is abstract.*/
	isAbstract : boolean;
	/**Set to true if the method is a constructor.*/
	isConstructor : boolean;
	/**Set to true if the method is a conversion operator.*/
	isConversionOperator : boolean;
	/**Set to true if the method is an extension.*/
	isExtension : boolean;
	/**Set to true if the method is an operator.*/
	isOperator : boolean;
	/**Set to true if the method is overriden.*/
	isOverriden : boolean;
	/**Set to true if the method is static.*/
	isStatic : boolean;
	/**Set to true if the method is virtual.*/
	isVirtual : boolean;
	/**The type that the method is implemented in.*/
	implementedType : QuickTypeInfo;
	/**The type that the method returns.*/
	returnType : QuickTypeInfo;
	/**The attributes of the methods.*/
	attributes : AttributeInfo[];
	/**The parameters that the methods contains.*/
	parameters : ParameterInfo[];
	/**The generic parameters that the method uses.*/
	genericParameters : GenericParametersInfo[];
	/**The partial declaration of the method (without parameters) that can be found in the code.*/
	declaration : string;
	/**The partial declaration of the generics that can be found in the code.*/
	genericDeclaration : string;
	/**The partial declaration of the parameters that can be found in the code.*/
	parameterDeclaration : string;
	/**The full declaration of the method that can be found in the code.*/
	fullDeclaration : string;
}

/**All the information relevant to parameters.*/
export interface ParameterInfo {
	/**The name of the parameter.*/
	name : string;
	/**The default value of the parameter (if it exists).*/
	defaultValue : string;
	/**The list of attributes that the parameter contains.*/
	attributes : AttributeInfo[];
	/**Any modifiers to the parameter (such as ref, in, out, params, etc.).*/
	modifier : string;
	/**Set to true if the parameter is optional and can be left out when calling the method.*/
	isOptional : boolean;
	/**The information of the parameter's type.*/
	typeInfo : QuickTypeInfo;
	/**The list of types used for the generic parameters.*/
	genericParameterDeclarations : string[];
	/**The full declaration of the parameter as it would be found within the code.*/
	fullDeclaration : string;
}
