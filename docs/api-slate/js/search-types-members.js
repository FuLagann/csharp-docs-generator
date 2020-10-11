
// Variables
const SearchHelper = (function() {
	// Variables
	/** @type {{
			[key : string] : {
				link : string;
				tags : string[];
				types : {
					[key : string] : {
						link : string;
						tags : string[];
						members : {
							link : string;
							tags : string[];
							name : string;
						}[];
					}
				}
			}
		}} - The js object used for searching.*/
	let searchJson = {
 "B3": {
  "link": "b3.html",
  "tags": [
   "namespace"
  ],
  "types": {
   "BezierCurve": {
    "link": "b3.beziercurve.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.beziercurve.html#BezierCurve(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "BezierCurve(float duration, Vector3[] points)"
     },
     {
      "link": "b3.beziercurve.html#Count",
      "tags": [
       "member",
       "property",
       "virtual"
      ],
      "name": "Count"
     },
     {
      "link": "b3.beziercurve.html#Duration",
      "tags": [
       "member",
       "property",
       "virtual"
      ],
      "name": "Duration"
     },
     {
      "link": "b3.beziercurve.html#IsReadOnly",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual"
      ],
      "name": "IsReadOnly"
     },
     {
      "link": "b3.beziercurve.html#Item(System.Int32)",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Item(int index)"
     },
     {
      "link": "b3.beziercurve.html#LoopType",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "LoopType"
     },
     {
      "link": "b3.beziercurve.html#Points",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Points"
     },
     {
      "link": "b3.beziercurve.html#Time",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Time"
     },
     {
      "link": "b3.beziercurve.html#Value",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Value"
     },
     {
      "link": "b3.beziercurve.html#Add(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Add(Vector3 point)"
     },
     {
      "link": "b3.beziercurve.html#Clear",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Clear()"
     },
     {
      "link": "b3.beziercurve.html#Contains(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Contains(Vector3 point)"
     },
     {
      "link": "b3.beziercurve.html#CopyTo(B3.Vector3,System.Int32)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "CopyTo(Vector3[] destination, int index)"
     },
     {
      "link": "b3.beziercurve.html#Equals(B3.BezierCurve)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(BezierCurve other)"
     },
     {
      "link": "b3.beziercurve.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.beziercurve.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.beziercurve.html#GetEnumerator",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetEnumerator()"
     },
     {
      "link": "b3.beziercurve.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.beziercurve.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.beziercurve.html#IndexOf(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "IndexOf(Vector3 point)"
     },
     {
      "link": "b3.beziercurve.html#Insert(System.Int32,B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Insert(int index, Vector3 point)"
     },
     {
      "link": "b3.beziercurve.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.beziercurve.html#Remove(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Remove(Vector3 point)"
     },
     {
      "link": "b3.beziercurve.html#RemoveAt(System.Int32)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "RemoveAt(int index)"
     },
     {
      "link": "b3.beziercurve.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.beziercurve.html#Update(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Update(float deltaTime)"
     }
    ]
   },
   "Color": {
    "link": "b3.color.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.color.html#Color(System.Int32,System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(int red, int green, int blue, int alpha)"
     },
     {
      "link": "b3.color.html#Color(System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(int red, int green, int blue)"
     },
     {
      "link": "b3.color.html#Color(System.Int32,System.Int32)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(int rgb, int alpha)"
     },
     {
      "link": "b3.color.html#Color(System.Int32)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(int rgb)"
     },
     {
      "link": "b3.color.html#Color(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(float red, float green, float blue, float alpha)"
     },
     {
      "link": "b3.color.html#Color(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(float red, float green, float blue)"
     },
     {
      "link": "b3.color.html#Color(System.String)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Color(string hex)"
     },
     {
      "link": "b3.color.html#Black",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Black"
     },
     {
      "link": "b3.color.html#Blue",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Blue"
     },
     {
      "link": "b3.color.html#Cyan",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Cyan"
     },
     {
      "link": "b3.color.html#Green",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Green"
     },
     {
      "link": "b3.color.html#Magenta",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Magenta"
     },
     {
      "link": "b3.color.html#Red",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Red"
     },
     {
      "link": "b3.color.html#White",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "White"
     },
     {
      "link": "b3.color.html#Yellow",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Yellow"
     },
     {
      "link": "b3.color.html#A",
      "tags": [
       "member",
       "property"
      ],
      "name": "A"
     },
     {
      "link": "b3.color.html#Alphaf",
      "tags": [
       "member",
       "property"
      ],
      "name": "Alphaf"
     },
     {
      "link": "b3.color.html#B",
      "tags": [
       "member",
       "property"
      ],
      "name": "B"
     },
     {
      "link": "b3.color.html#Bluef",
      "tags": [
       "member",
       "property"
      ],
      "name": "Bluef"
     },
     {
      "link": "b3.color.html#G",
      "tags": [
       "member",
       "property"
      ],
      "name": "G"
     },
     {
      "link": "b3.color.html#Greenf",
      "tags": [
       "member",
       "property"
      ],
      "name": "Greenf"
     },
     {
      "link": "b3.color.html#R",
      "tags": [
       "member",
       "property"
      ],
      "name": "R"
     },
     {
      "link": "b3.color.html#Redf",
      "tags": [
       "member",
       "property"
      ],
      "name": "Redf"
     },
     {
      "link": "b3.color.html#Add(B3.Color)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Color other)"
     },
     {
      "link": "b3.color.html#Divide(System.Single)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.color.html#Equals(B3.Color)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(Color other)"
     },
     {
      "link": "b3.color.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.color.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.color.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.color.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.color.html#Grayscale",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Grayscale()"
     },
     {
      "link": "b3.color.html#Invert",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Invert()"
     },
     {
      "link": "b3.color.html#LerpClamped(B3.Color,System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "LerpClamped(Color other, float t)"
     },
     {
      "link": "b3.color.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.color.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.color.html#Subtract(B3.Color)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Color other)"
     },
     {
      "link": "b3.color.html#ToHex",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToHex()"
     },
     {
      "link": "b3.color.html#ToInt32",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToInt32()"
     },
     {
      "link": "b3.color.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.color.html#Add(B3.Color,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Color a, ref Color b, out Color result)"
     },
     {
      "link": "b3.color.html#Add(B3.Color,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Color a, Color b, out Color result)"
     },
     {
      "link": "b3.color.html#Add(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Color a, ref Color b)"
     },
     {
      "link": "b3.color.html#Add(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Color a, Color b)"
     },
     {
      "link": "b3.color.html#Divide(System.Single,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Divide(System.Single,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Divide(System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Color color)"
     },
     {
      "link": "b3.color.html#Divide(System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Color color)"
     },
     {
      "link": "b3.color.html#Grayscale(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Grayscale(Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Grayscale(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Grayscale(ref Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Grayscale(B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Grayscale(Color color)"
     },
     {
      "link": "b3.color.html#Grayscale(B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Grayscale(ref Color color)"
     },
     {
      "link": "b3.color.html#Invert(B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Color color)"
     },
     {
      "link": "b3.color.html#Invert(B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Color color)"
     },
     {
      "link": "b3.color.html#Invert(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Invert(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Color color, out Color result)"
     },
     {
      "link": "b3.color.html#LerpClamped(B3.Color,B3.Color,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Color a, Color b, float t)"
     },
     {
      "link": "b3.color.html#LerpClamped(B3.Color,B3.Color,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Color a, ref Color b, float t)"
     },
     {
      "link": "b3.color.html#LerpClamped(B3.Color,B3.Color,System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Color a, Color b, float t, out Color result)"
     },
     {
      "link": "b3.color.html#LerpClamped(B3.Color,B3.Color,System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Color a, ref Color b, float t, out Color result)"
     },
     {
      "link": "b3.color.html#Multiply(System.Single,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Multiply(System.Single,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Color color, out Color result)"
     },
     {
      "link": "b3.color.html#Multiply(System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Color color)"
     },
     {
      "link": "b3.color.html#Multiply(System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Color color)"
     },
     {
      "link": "b3.color.html#Subtract(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Color a, Color b)"
     },
     {
      "link": "b3.color.html#Subtract(B3.Color,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Color a, Color b, out Color result)"
     },
     {
      "link": "b3.color.html#Subtract(B3.Color,B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Color a, ref Color b, out Color result)"
     },
     {
      "link": "b3.color.html#Subtract(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Color a, ref Color b)"
     },
     {
      "link": "b3.color.html#Addition(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Color left, Color right)"
     },
     {
      "link": "b3.color.html#Division(B3.Color,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Color left, float right)"
     },
     {
      "link": "b3.color.html#Equality(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Color left, Color right)"
     },
     {
      "link": "b3.color.html#Inequality(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Color left, Color right)"
     },
     {
      "link": "b3.color.html#Multiply(System.Single,B3.Color)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Color right)"
     },
     {
      "link": "b3.color.html#Multiply(B3.Color,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Color left, float right)"
     },
     {
      "link": "b3.color.html#Subtraction(B3.Color,B3.Color)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Color left, Color right)"
     }
    ]
   },
   "InterpolationLoopType": {
    "link": "b3.interpolationlooptype.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.interpolationlooptype.html#FullLoop",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "FullLoop"
     },
     {
      "link": "b3.interpolationlooptype.html#FullLoopBackwards",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "FullLoopBackwards"
     },
     {
      "link": "b3.interpolationlooptype.html#NoLoop",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "NoLoop"
     },
     {
      "link": "b3.interpolationlooptype.html#NoLoopBackwards",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "NoLoopBackwards"
     },
     {
      "link": "b3.interpolationlooptype.html#YoyoLoop",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "YoyoLoop"
     },
     {
      "link": "b3.interpolationlooptype.html#YoyoLoopBackwards",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "YoyoLoopBackwards"
     },
     {
      "link": "b3.interpolationlooptype.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(object target)"
     },
     {
      "link": "b3.interpolationlooptype.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.interpolationlooptype.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.interpolationlooptype.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.interpolationlooptype.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.interpolationlooptype.html#GetTypeCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetTypeCode()"
     },
     {
      "link": "b3.interpolationlooptype.html#HasFlag(System.Enum)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "HasFlag(enum flag)"
     },
     {
      "link": "b3.interpolationlooptype.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.interpolationlooptype.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.interpolationlooptype.html#ToString(System.String,System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format, IFormatProvider provider)"
     },
     {
      "link": "b3.interpolationlooptype.html#ToString(System.String)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format)"
     },
     {
      "link": "b3.interpolationlooptype.html#ToString(System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(IFormatProvider provider)"
     }
    ]
   },
   "IUpdatable": {
    "link": "b3.iupdatable.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.iupdatable.html#Update(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Update(float delta)"
     }
    ]
   },
   "Mathx": {
    "link": "b3.mathx.html",
    "tags": [
     "static",
     "type"
    ],
    "members": [
     {
      "link": "b3.mathx.html#DegToRad",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "DegToRad"
     },
     {
      "link": "b3.mathx.html#E",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "E"
     },
     {
      "link": "b3.mathx.html#Epsilon",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Epsilon"
     },
     {
      "link": "b3.mathx.html#Infinity",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Infinity"
     },
     {
      "link": "b3.mathx.html#NegativeInfinity",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "NegativeInfinity"
     },
     {
      "link": "b3.mathx.html#Pi",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Pi"
     },
     {
      "link": "b3.mathx.html#PiOverTwo",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "PiOverTwo"
     },
     {
      "link": "b3.mathx.html#RadToDeg",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "RadToDeg"
     },
     {
      "link": "b3.mathx.html#TwoPi",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "TwoPi"
     },
     {
      "link": "b3.mathx.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.mathx.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.mathx.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.mathx.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.mathx.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.mathx.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.mathx.html#Abs(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(int val)"
     },
     {
      "link": "b3.mathx.html#Abs(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(float val)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Abs(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Add(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.mathx.html#Adjugate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Adjugate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Approx(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(float a, float b)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Matrix,B3.Matrix,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector2,B3.Vector2,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector2,B3.Vector2,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Matrix,B3.Matrix,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, float epsilon, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Quaternion,B3.Quaternion,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Quaternion,B3.Quaternion,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, float epsilon, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector3,B3.Vector3,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector3,B3.Vector3,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector4,B3.Vector4,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector4,B3.Vector4,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.mathx.html#Approx(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(float a, float b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, float epsilon)"
     },
     {
      "link": "b3.mathx.html#Approx(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Arccos(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arccos(float val)"
     },
     {
      "link": "b3.mathx.html#ArccosDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArccosDeg(float val)"
     },
     {
      "link": "b3.mathx.html#Arcsin(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arcsin(float val)"
     },
     {
      "link": "b3.mathx.html#ArcsinDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArcsinDeg(float val)"
     },
     {
      "link": "b3.mathx.html#Arctan(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arctan(float val)"
     },
     {
      "link": "b3.mathx.html#Arctan(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arctan(float y, float x)"
     },
     {
      "link": "b3.mathx.html#Arctan(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arctan(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Arctan(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Arctan(Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#ArctanDeg(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArctanDeg(Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#ArctanDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArctanDeg(float val)"
     },
     {
      "link": "b3.mathx.html#ArctanDeg(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArctanDeg(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#ArctanDeg(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ArctanDeg(float y, float x)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Ceiling(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(float val)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Ceiling(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector3 vec, ref Vector3 min, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector4 vec, ref Vector4 min, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector2 vec, ref Vector2 min, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector4 vec, ref Vector4 min, ref Vector4 max)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector2 vec, ref Vector2 min, ref Vector2 max)"
     },
     {
      "link": "b3.mathx.html#Clamp(System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(int val, int min, int max)"
     },
     {
      "link": "b3.mathx.html#Clamp(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(float val, float min, float max)"
     },
     {
      "link": "b3.mathx.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector3 vec, ref Vector3 min, ref Vector3 max)"
     },
     {
      "link": "b3.mathx.html#Conjugate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Conjugate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Cos(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Cos(float theta)"
     },
     {
      "link": "b3.mathx.html#CosDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CosDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Cosh(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Cosh(float theta)"
     },
     {
      "link": "b3.mathx.html#CoshDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CoshDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Cot(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Cot(float theta)"
     },
     {
      "link": "b3.mathx.html#CotDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CotDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Coth(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Coth(float theta)"
     },
     {
      "link": "b3.mathx.html#CothDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CothDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#CreatePerpendicular(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#CreatePerpendicular(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#CrossProduct(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#CrossProduct(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Csc(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Csc(float theta)"
     },
     {
      "link": "b3.mathx.html#CscDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CscDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Csch(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Csch(float theta)"
     },
     {
      "link": "b3.mathx.html#CschDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CschDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Divide(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Divide(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Divide(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector4 a, ref Vector4 b, out float result)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector3 a, ref Vector3 b, out float result)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector2 a, ref Vector2 b, out float result)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Quaternion a, ref Quaternion b, out float result)"
     },
     {
      "link": "b3.mathx.html#Dot(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Floor(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(float val)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Floor(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Fraction(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(float val)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Fraction(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#FromAngle(System.Single,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta, float phi, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#FromAngle(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta, float phi)"
     },
     {
      "link": "b3.mathx.html#FromAngle(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#FromAngle(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta)"
     },
     {
      "link": "b3.mathx.html#GetDeterminant(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#GetDeterminant(B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(ref Matrix matrix, out float result)"
     },
     {
      "link": "b3.mathx.html#Invert(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Invert(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Invert(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Invert(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector2 a, ref Vector2 b, float t)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector3 a, ref Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector3 a, ref Vector3 b, float t)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector4 a, ref Vector4 b, float t)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector2 a, ref Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Lerp(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(float a, float b, float t)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Matrix a, ref Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Matrix a, ref Matrix b, float t)"
     },
     {
      "link": "b3.mathx.html#Lerp(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector4 a, ref Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Matrix a, ref Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector2 a, ref Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector3 a, ref Vector3 b, float t)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector4 a, ref Vector4 b, float t)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector2 a, ref Vector2 b, float t)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector3 a, ref Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Matrix a, ref Matrix b, float t)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector4 a, ref Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#LerpClamped(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(float a, float b, float t)"
     },
     {
      "link": "b3.mathx.html#Ln(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ln(int val)"
     },
     {
      "link": "b3.mathx.html#Ln(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ln(float val)"
     },
     {
      "link": "b3.mathx.html#Log(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log(int val, int newBase)"
     },
     {
      "link": "b3.mathx.html#Log(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log(float val, float newBase)"
     },
     {
      "link": "b3.mathx.html#Log(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log(int val)"
     },
     {
      "link": "b3.mathx.html#Log(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log(float val)"
     },
     {
      "link": "b3.mathx.html#Log10(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log10(int val)"
     },
     {
      "link": "b3.mathx.html#Log10(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Log10(float val)"
     },
     {
      "link": "b3.mathx.html#MapRange(System.Single,System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(float val, float inMin, float inMax, float outMin, float outMax)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector4 vec, ref Vector4 inMin, ref Vector4 inMax, ref Vector4 outMin, ref Vector4 outMax, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector2 vec, ref Vector2 inMin, ref Vector2 inMax, ref Vector2 outMin, ref Vector2 outMax)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector2 vec, ref Vector2 inMin, ref Vector2 inMax, ref Vector2 outMin, ref Vector2 outMax, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector3 vec, ref Vector3 inMin, ref Vector3 inMax, ref Vector3 outMin, ref Vector3 outMax)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector3 vec, ref Vector3 inMin, ref Vector3 inMax, ref Vector3 outMin, ref Vector3 outMax, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#MapRange(System.Int32,System.Int32,System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(int val, int inMin, int inMax, int outMin, int outMax)"
     },
     {
      "link": "b3.mathx.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector4 vec, ref Vector4 inMin, ref Vector4 inMax, ref Vector4 outMin, ref Vector4 outMax)"
     },
     {
      "link": "b3.mathx.html#Max(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(int val, int max)"
     },
     {
      "link": "b3.mathx.html#Max(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(float val, float max)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector3 vec, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector4 vec, ref Vector4 max)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector3 vec, ref Vector3 max)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector2 vec, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector2 vec, ref Vector2 max)"
     },
     {
      "link": "b3.mathx.html#Max(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector4 vec, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#MaxRange(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MaxRange(params float[] vals)"
     },
     {
      "link": "b3.mathx.html#MaxRange(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MaxRange(params int[] vals)"
     },
     {
      "link": "b3.mathx.html#Min(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(float val, float min)"
     },
     {
      "link": "b3.mathx.html#Min(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(int val, int min)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector3 vec, ref Vector3 min, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector4 vec, ref Vector4 min, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector4 vec, ref Vector4 min)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector3 vec, ref Vector3 min)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector2 vec, ref Vector2 min, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Min(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector2 vec, ref Vector2 min)"
     },
     {
      "link": "b3.mathx.html#MinMax(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(float a, float b, out float min, out float max)"
     },
     {
      "link": "b3.mathx.html#MinMax(System.Int32,System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(int a, int b, out int min, out int max)"
     },
     {
      "link": "b3.mathx.html#MinMax(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector3 a, ref Vector3 b, out Vector3 min, out Vector3 max)"
     },
     {
      "link": "b3.mathx.html#MinMax(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector4 a, ref Vector4 b, out Vector4 min, out Vector4 max)"
     },
     {
      "link": "b3.mathx.html#MinMax(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector2 a, ref Vector2 b, out Vector2 min, out Vector2 max)"
     },
     {
      "link": "b3.mathx.html#MinMaxRange(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMaxRange(out float min, out float max, params float[] vals)"
     },
     {
      "link": "b3.mathx.html#MinMaxRange(System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMaxRange(out int min, out int max, params int[] vals)"
     },
     {
      "link": "b3.mathx.html#MinRange(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinRange(params int[] vals)"
     },
     {
      "link": "b3.mathx.html#MinRange(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinRange(params float[] vals)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Multiply(B3.Quaternion,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Multiply(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Negate(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Quaternion quaternion)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Normalize(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Pow(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Pow(int val)"
     },
     {
      "link": "b3.mathx.html#Pow(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Pow(float a, float b)"
     },
     {
      "link": "b3.mathx.html#Pow(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Pow(int a, int b)"
     },
     {
      "link": "b3.mathx.html#Pow(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Pow(float val)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Project(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Reject(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector3 vec, ref Vector3 min, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector4 vec, ref Vector4 min, ref Vector4 max)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector4 vec, ref Vector4 min, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector3 vec, ref Vector3 min, ref Vector3 max)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector2 vec, ref Vector2 min, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector2 vec, ref Vector2 min, ref Vector2 max)"
     },
     {
      "link": "b3.mathx.html#Repeat(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(float val, float min, float max)"
     },
     {
      "link": "b3.mathx.html#Repeat(System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(int val, int min, int max)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector4 vec, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector4 vec, ref Vector4 max)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector3 vec, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector2 vec, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector2 vec, ref Vector2 max)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector3 vec, ref Vector3 max)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(float val, float max)"
     },
     {
      "link": "b3.mathx.html#RepeatFrom0(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(int val, int max)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector4,System.Int32,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, int digits, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector2,System.Int32,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, int digits, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector3,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, int digits)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector3,System.Int32,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, int digits, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector4,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, int digits)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector2,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, int digits)"
     },
     {
      "link": "b3.mathx.html#Round(System.Single,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(float val, int digits)"
     },
     {
      "link": "b3.mathx.html#Round(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(float val)"
     },
     {
      "link": "b3.mathx.html#Round(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Sec(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sec(float theta)"
     },
     {
      "link": "b3.mathx.html#SecDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "SecDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Sech(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sech(float theta)"
     },
     {
      "link": "b3.mathx.html#SechDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "SechDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Sign(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sign(int val)"
     },
     {
      "link": "b3.mathx.html#Sign(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sign(float val)"
     },
     {
      "link": "b3.mathx.html#Sin(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sin(float theta)"
     },
     {
      "link": "b3.mathx.html#SinDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "SinDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Sinh(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sinh(float theta)"
     },
     {
      "link": "b3.mathx.html#SinhDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "SinhDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(ref Quaternion a, ref Quaternion b, float t, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(ref Quaternion a, ref Quaternion b, float t)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector4 x, ref Vector4 leftEdge, ref Vector4 rightEdge)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector3 x, ref Vector3 leftEdge, ref Vector3 rightEdge, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector3 x, ref Vector3 leftEdge, ref Vector3 rightEdge)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector2 x, ref Vector2 leftEdge, ref Vector2 rightEdge, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector2 x, ref Vector2 leftEdge, ref Vector2 rightEdge)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector4 x, ref Vector4 leftEdge, ref Vector4 rightEdge, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(float x, float leftEdge, float rightEdge)"
     },
     {
      "link": "b3.mathx.html#Smoothstep(System.Int32,System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(int x, int leftEdge, int rightEdge)"
     },
     {
      "link": "b3.mathx.html#Sqrt(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(int val)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Sqrt(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(float val)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector2 vec)"
     },
     {
      "link": "b3.mathx.html#Sqrt(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.mathx.html#Subtract(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.mathx.html#Tan(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Tan(float theta)"
     },
     {
      "link": "b3.mathx.html#TanDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "TanDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Tanh(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Tanh(float theta)"
     },
     {
      "link": "b3.mathx.html#TanhDeg(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "TanhDeg(float theta)"
     },
     {
      "link": "b3.mathx.html#Transpose(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.mathx.html#Transpose(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(ref Matrix matrix)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector4 vec)"
     },
     {
      "link": "b3.mathx.html#Trunc(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(float val)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector3 vec)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.mathx.html#Trunc(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector2 vec)"
     }
    ]
   },
   "Matrix": {
    "link": "b3.matrix.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.matrix.html#Matrix(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Matrix(Vector4 row1, Vector4 row2, Vector4 row3, Vector4 row4)"
     },
     {
      "link": "b3.matrix.html#Matrix(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Matrix(float a11, float a12, float a13, float a14, float a21, float a22, float a23, float a24, float a31, float a32, float a33, float a34, float a41, float a42, float a43, float a44)"
     },
     {
      "link": "b3.matrix.html#row1",
      "tags": [
       "member",
       "field"
      ],
      "name": "row1"
     },
     {
      "link": "b3.matrix.html#row2",
      "tags": [
       "member",
       "field"
      ],
      "name": "row2"
     },
     {
      "link": "b3.matrix.html#row3",
      "tags": [
       "member",
       "field"
      ],
      "name": "row3"
     },
     {
      "link": "b3.matrix.html#row4",
      "tags": [
       "member",
       "field"
      ],
      "name": "row4"
     },
     {
      "link": "b3.matrix.html#Identity",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Identity"
     },
     {
      "link": "b3.matrix.html#Zero",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Zero"
     },
     {
      "link": "b3.matrix.html#A11",
      "tags": [
       "member",
       "property"
      ],
      "name": "A11"
     },
     {
      "link": "b3.matrix.html#A12",
      "tags": [
       "member",
       "property"
      ],
      "name": "A12"
     },
     {
      "link": "b3.matrix.html#A13",
      "tags": [
       "member",
       "property"
      ],
      "name": "A13"
     },
     {
      "link": "b3.matrix.html#A14",
      "tags": [
       "member",
       "property"
      ],
      "name": "A14"
     },
     {
      "link": "b3.matrix.html#A21",
      "tags": [
       "member",
       "property"
      ],
      "name": "A21"
     },
     {
      "link": "b3.matrix.html#A22",
      "tags": [
       "member",
       "property"
      ],
      "name": "A22"
     },
     {
      "link": "b3.matrix.html#A23",
      "tags": [
       "member",
       "property"
      ],
      "name": "A23"
     },
     {
      "link": "b3.matrix.html#A24",
      "tags": [
       "member",
       "property"
      ],
      "name": "A24"
     },
     {
      "link": "b3.matrix.html#A31",
      "tags": [
       "member",
       "property"
      ],
      "name": "A31"
     },
     {
      "link": "b3.matrix.html#A32",
      "tags": [
       "member",
       "property"
      ],
      "name": "A32"
     },
     {
      "link": "b3.matrix.html#A33",
      "tags": [
       "member",
       "property"
      ],
      "name": "A33"
     },
     {
      "link": "b3.matrix.html#A34",
      "tags": [
       "member",
       "property"
      ],
      "name": "A34"
     },
     {
      "link": "b3.matrix.html#A41",
      "tags": [
       "member",
       "property"
      ],
      "name": "A41"
     },
     {
      "link": "b3.matrix.html#A42",
      "tags": [
       "member",
       "property"
      ],
      "name": "A42"
     },
     {
      "link": "b3.matrix.html#A43",
      "tags": [
       "member",
       "property"
      ],
      "name": "A43"
     },
     {
      "link": "b3.matrix.html#A44",
      "tags": [
       "member",
       "property"
      ],
      "name": "A44"
     },
     {
      "link": "b3.matrix.html#Column1",
      "tags": [
       "member",
       "property"
      ],
      "name": "Column1"
     },
     {
      "link": "b3.matrix.html#Column2",
      "tags": [
       "member",
       "property"
      ],
      "name": "Column2"
     },
     {
      "link": "b3.matrix.html#Column3",
      "tags": [
       "member",
       "property"
      ],
      "name": "Column3"
     },
     {
      "link": "b3.matrix.html#Column4",
      "tags": [
       "member",
       "property"
      ],
      "name": "Column4"
     },
     {
      "link": "b3.matrix.html#Determinant",
      "tags": [
       "member",
       "property"
      ],
      "name": "Determinant"
     },
     {
      "link": "b3.matrix.html#Diagonal",
      "tags": [
       "member",
       "property"
      ],
      "name": "Diagonal"
     },
     {
      "link": "b3.matrix.html#Trace",
      "tags": [
       "member",
       "property"
      ],
      "name": "Trace"
     },
     {
      "link": "b3.matrix.html#Add(B3.Matrix)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Matrix other)"
     },
     {
      "link": "b3.matrix.html#Adjugate",
      "tags": [
       "member",
       "method"
      ],
      "name": "Adjugate()"
     },
     {
      "link": "b3.matrix.html#Divide(System.Single)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.matrix.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.matrix.html#Equals(B3.Matrix)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Matrix other)"
     },
     {
      "link": "b3.matrix.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.matrix.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.matrix.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.matrix.html#Invert",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Invert()"
     },
     {
      "link": "b3.matrix.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(Matrix other)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(Vector3 vector)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Vector2)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(Vector2 vector)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Vector4)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(Vector4 vector)"
     },
     {
      "link": "b3.matrix.html#Negate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Negate()"
     },
     {
      "link": "b3.matrix.html#Subtract(B3.Matrix)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Matrix other)"
     },
     {
      "link": "b3.matrix.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.matrix.html#Transpose",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Transpose()"
     },
     {
      "link": "b3.matrix.html#Add(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Add(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Matrix a, Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Add(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.matrix.html#Add(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Matrix a, Matrix b)"
     },
     {
      "link": "b3.matrix.html#Adjugate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Adjugate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Adjugate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Adjugate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Adjugate(ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Matrix a, Matrix b, float epsilon)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, out bool result)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Matrix a, Matrix b, out bool result)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Matrix a, Matrix b)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Matrix a, Matrix b, float epsilon, out bool result)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, float epsilon, out bool result)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b, float epsilon)"
     },
     {
      "link": "b3.matrix.html#Approx(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.matrix.html#CreateFromQuaternion(B3.Quaternion,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateFromQuaternion(ref Quaternion quaternion, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateFromQuaternion(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateFromQuaternion(Quaternion quaternion)"
     },
     {
      "link": "b3.matrix.html#CreateFromQuaternion(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateFromQuaternion(ref Quaternion quaternion)"
     },
     {
      "link": "b3.matrix.html#CreateFromQuaternion(B3.Quaternion,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateFromQuaternion(Quaternion quaternion, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateLookAt(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateLookAt(Vector3 from, Vector3 to, Vector3 up)"
     },
     {
      "link": "b3.matrix.html#CreateLookAt(B3.Vector3,B3.Vector3,B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateLookAt(ref Vector3 from, ref Vector3 to, ref Vector3 up, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateLookAt(B3.Vector3,B3.Vector3,B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateLookAt(Vector3 from, Vector3 to, Vector3 up, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateLookAt(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateLookAt(ref Vector3 from, ref Vector3 to, ref Vector3 up)"
     },
     {
      "link": "b3.matrix.html#CreateOrthographic(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateOrthographic(float width, float height, float near, float far)"
     },
     {
      "link": "b3.matrix.html#CreateOrthographic(System.Single,System.Single,System.Single,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateOrthographic(float width, float height, float near, float far, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateOrthographic(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateOrthographic(float left, float right, float top, float bottom, float near, float far)"
     },
     {
      "link": "b3.matrix.html#CreateOrthographic(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateOrthographic(float left, float right, float top, float bottom, float near, float far, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreatePerspective(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerspective(float left, float right, float top, float bottom, float near, float far)"
     },
     {
      "link": "b3.matrix.html#CreatePerspective(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerspective(float left, float right, float top, float bottom, float near, float far, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreatePerspective(System.Single,System.Single,System.Single,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerspective(float fov, float aspect, float near, float far, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreatePerspective(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerspective(float fov, float aspect, float near, float far)"
     },
     {
      "link": "b3.matrix.html#CreateRotationFromAxisAngle(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationFromAxisAngle(Vector3 axis, float theta)"
     },
     {
      "link": "b3.matrix.html#CreateRotationFromAxisAngle(B3.Vector3,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationFromAxisAngle(ref Vector3 axis, float theta, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateRotationFromAxisAngle(B3.Vector3,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationFromAxisAngle(Vector3 axis, float theta, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateRotationFromAxisAngle(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationFromAxisAngle(ref Vector3 axis, float theta)"
     },
     {
      "link": "b3.matrix.html#CreateRotationX(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationX(float theta)"
     },
     {
      "link": "b3.matrix.html#CreateRotationX(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationX(float theta, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateRotationY(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationY(float theta, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateRotationY(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationY(float theta)"
     },
     {
      "link": "b3.matrix.html#CreateRotationZ(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationZ(float theta, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateRotationZ(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateRotationZ(float theta)"
     },
     {
      "link": "b3.matrix.html#CreateScale(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(Vector3 scalars)"
     },
     {
      "link": "b3.matrix.html#CreateScale(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(ref Vector3 scalars)"
     },
     {
      "link": "b3.matrix.html#CreateScale(B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(Vector3 scalars, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateScale(B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(ref Vector3 scalars, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateScale(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(float scalar)"
     },
     {
      "link": "b3.matrix.html#CreateScale(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(float scalar, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateScale(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(float xScalar, float yScalar, float zScalar)"
     },
     {
      "link": "b3.matrix.html#CreateScale(System.Single,System.Single,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateScale(float xScalar, float yScalar, float zScalar, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(ref Vector3 position, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector2,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(Vector2 position, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector3,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(Vector3 position, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(Vector3 position)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector2,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(ref Vector2 position, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(Vector2 position)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(ref Vector3 position)"
     },
     {
      "link": "b3.matrix.html#CreateTranslation(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreateTranslation(ref Vector2 position)"
     },
     {
      "link": "b3.matrix.html#Divide(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Divide(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Divide(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Divide(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#GetDeterminant(B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(Matrix matrix, out float result)"
     },
     {
      "link": "b3.matrix.html#GetDeterminant(B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(ref Matrix matrix, out float result)"
     },
     {
      "link": "b3.matrix.html#GetDeterminant(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#GetDeterminant(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetDeterminant(Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Invert(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Invert(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Invert(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Invert(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Lerp(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Matrix a, ref Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Lerp(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Matrix a, Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Lerp(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Matrix a, Matrix b, float t)"
     },
     {
      "link": "b3.matrix.html#Lerp(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Matrix a, ref Matrix b, float t)"
     },
     {
      "link": "b3.matrix.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Matrix a, ref Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Matrix a, Matrix b, float t, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Matrix a, Matrix b, float t)"
     },
     {
      "link": "b3.matrix.html#LerpClamped(B3.Matrix,B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Matrix a, ref Matrix b, float t)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector4 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Matrix b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector4 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector3 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector3 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Matrix a, ref Vector2 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector2 b)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Matrix a, Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.matrix.html#Negate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Negate(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Negate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Negate(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Subtract(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Matrix a, Matrix b)"
     },
     {
      "link": "b3.matrix.html#Subtract(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Matrix a, ref Matrix b)"
     },
     {
      "link": "b3.matrix.html#Subtract(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Matrix a, Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Subtract(B3.Matrix,B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Matrix a, ref Matrix b, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Transpose(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(ref Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Transpose(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(ref Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Transpose(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(Matrix matrix, out Matrix result)"
     },
     {
      "link": "b3.matrix.html#Transpose(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Transpose(Matrix matrix)"
     },
     {
      "link": "b3.matrix.html#Addition(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Matrix left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#Division(B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Matrix left, float right)"
     },
     {
      "link": "b3.matrix.html#Equality(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Matrix left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#Inequality(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Matrix left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#Multiply(System.Single,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Matrix left, float right)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Matrix left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Matrix left, Vector4 right)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Matrix left, Vector3 right)"
     },
     {
      "link": "b3.matrix.html#Multiply(B3.Matrix,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Matrix left, Vector2 right)"
     },
     {
      "link": "b3.matrix.html#Subtraction(B3.Matrix,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Matrix left, Matrix right)"
     },
     {
      "link": "b3.matrix.html#UnaryNegation(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "UnaryNegation(Matrix matrix)"
     }
    ]
   },
   "Quaternion": {
    "link": "b3.quaternion.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.quaternion.html#Quaternion(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Quaternion(float a, float b, float c, float d)"
     },
     {
      "link": "b3.quaternion.html#Quaternion(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Quaternion(float yaw, float pitch, float roll)"
     },
     {
      "link": "b3.quaternion.html#a",
      "tags": [
       "member",
       "field"
      ],
      "name": "a"
     },
     {
      "link": "b3.quaternion.html#b",
      "tags": [
       "member",
       "field"
      ],
      "name": "b"
     },
     {
      "link": "b3.quaternion.html#c",
      "tags": [
       "member",
       "field"
      ],
      "name": "c"
     },
     {
      "link": "b3.quaternion.html#d",
      "tags": [
       "member",
       "field"
      ],
      "name": "d"
     },
     {
      "link": "b3.quaternion.html#Identity",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Identity"
     },
     {
      "link": "b3.quaternion.html#Magnitude",
      "tags": [
       "member",
       "property"
      ],
      "name": "Magnitude"
     },
     {
      "link": "b3.quaternion.html#MagnitudeSquared",
      "tags": [
       "member",
       "property"
      ],
      "name": "MagnitudeSquared"
     },
     {
      "link": "b3.quaternion.html#Add(B3.Quaternion)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#CompareTo(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CompareTo(object other)"
     },
     {
      "link": "b3.quaternion.html#Conjugate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Conjugate()"
     },
     {
      "link": "b3.quaternion.html#Divide(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Divide(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#Divide(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.quaternion.html#Dot(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Dot(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.quaternion.html#Equals(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.quaternion.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.quaternion.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.quaternion.html#Invert",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Invert()"
     },
     {
      "link": "b3.quaternion.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#Negate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Negate()"
     },
     {
      "link": "b3.quaternion.html#Normalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Normalize()"
     },
     {
      "link": "b3.quaternion.html#Slerp(B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Slerp(Quaternion other, float t)"
     },
     {
      "link": "b3.quaternion.html#Subtract(B3.Quaternion)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Quaternion other)"
     },
     {
      "link": "b3.quaternion.html#ToEulerAngles",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToEulerAngles()"
     },
     {
      "link": "b3.quaternion.html#ToMatrix",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToMatrix()"
     },
     {
      "link": "b3.quaternion.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.quaternion.html#Add(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Add(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Add(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Quaternion a, Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Add(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, float epsilon, out bool result)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Quaternion a, Quaternion b, float epsilon, out bool result)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, float epsilon)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Quaternion a, Quaternion b, float epsilon)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Quaternion a, ref Quaternion b, out bool result)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Quaternion a, Quaternion b, out bool result)"
     },
     {
      "link": "b3.quaternion.html#Approx(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Conjugate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Conjugate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Conjugate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Conjugate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Conjugate(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Divide(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Divide(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Divide(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(Quaternion a, Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Divide(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Divide(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Divide(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Divide(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Divide(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Dot(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Quaternion a, ref Quaternion b, out float result)"
     },
     {
      "link": "b3.quaternion.html#Dot(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Quaternion a, Quaternion b, out float result)"
     },
     {
      "link": "b3.quaternion.html#Dot(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Dot(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#FromAxisAngle(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAxisAngle(Vector3 axis, float theta)"
     },
     {
      "link": "b3.quaternion.html#FromAxisAngle(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAxisAngle(ref Vector3 axis, float theta)"
     },
     {
      "link": "b3.quaternion.html#FromAxisAngle(B3.Vector3,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAxisAngle(Vector3 axis, float theta, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromAxisAngle(B3.Vector3,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAxisAngle(ref Vector3 axis, float theta, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(B3.Vector3,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(ref Vector3 eulerAngles, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(System.Single,System.Single,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(float yaw, float pitch, float roll, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(B3.Vector3,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(Vector3 eulerAngles, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(ref Vector3 eulerAngles)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(Vector3 eulerAngles)"
     },
     {
      "link": "b3.quaternion.html#FromEulerAngles(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromEulerAngles(float yaw, float pitch, float roll)"
     },
     {
      "link": "b3.quaternion.html#FromMatrix(B3.Matrix,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromMatrix(ref Matrix matrix, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#FromMatrix(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromMatrix(Matrix matrix)"
     },
     {
      "link": "b3.quaternion.html#FromMatrix(B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromMatrix(ref Matrix matrix)"
     },
     {
      "link": "b3.quaternion.html#FromMatrix(B3.Matrix,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromMatrix(Matrix matrix, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Invert(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Invert(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Invert(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Invert(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Invert(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector3 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector2 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector2 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector3 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion a, Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(ref Quaternion quaternion, ref Vector4 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector4 vec)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(Quaternion quaternion, Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.quaternion.html#Negate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Negate(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Negate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Negate(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Normalize(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Normalize(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#Normalize(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Normalize(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Quaternion quaternion, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(ref Quaternion a, ref Quaternion b, float t)"
     },
     {
      "link": "b3.quaternion.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(Quaternion a, Quaternion b, float t, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(ref Quaternion a, ref Quaternion b, float t, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Slerp(B3.Quaternion,B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Slerp(Quaternion a, Quaternion b, float t)"
     },
     {
      "link": "b3.quaternion.html#Subtract(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Quaternion a, Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#Subtract(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Quaternion a, ref Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Subtract(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Quaternion a, Quaternion b)"
     },
     {
      "link": "b3.quaternion.html#Subtract(B3.Quaternion,B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Quaternion a, ref Quaternion b, out Quaternion result)"
     },
     {
      "link": "b3.quaternion.html#ToEulerAngles(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToEulerAngles(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#ToEulerAngles(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToEulerAngles(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#ToEulerAngles(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToEulerAngles(Quaternion quaternion, out Vector3 result)"
     },
     {
      "link": "b3.quaternion.html#ToEulerAngles(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToEulerAngles(ref Quaternion quaternion, out Vector3 result)"
     },
     {
      "link": "b3.quaternion.html#ToMatrix(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToMatrix(Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#ToMatrix(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToMatrix(ref Quaternion quaternion)"
     },
     {
      "link": "b3.quaternion.html#ToMatrix(B3.Quaternion,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToMatrix(Quaternion quaternion, out Matrix result)"
     },
     {
      "link": "b3.quaternion.html#ToMatrix(B3.Quaternion,B3.Matrix)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToMatrix(ref Quaternion quaternion, out Matrix result)"
     },
     {
      "link": "b3.quaternion.html#Addition(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Division(B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Quaternion left, float right)"
     },
     {
      "link": "b3.quaternion.html#Division(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Equality(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Inequality(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(System.Single,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Quaternion left, float right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Quaternion left, Vector4 right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Quaternion left, Vector3 right)"
     },
     {
      "link": "b3.quaternion.html#Multiply(B3.Quaternion,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Quaternion left, Vector2 right)"
     },
     {
      "link": "b3.quaternion.html#Subtraction(B3.Quaternion,B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Quaternion left, Quaternion right)"
     },
     {
      "link": "b3.quaternion.html#UnaryNegation(B3.Quaternion)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "UnaryNegation(Quaternion quaternion)"
     }
    ]
   },
   "Random": {
    "link": "b3.random.html",
    "tags": [
     "static",
     "type"
    ],
    "members": [
     {
      "link": "b3.random.html#Angle",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "Angle"
     },
     {
      "link": "b3.random.html#AngleDeg",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "AngleDeg"
     },
     {
      "link": "b3.random.html#Color",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "Color"
     },
     {
      "link": "b3.random.html#Seed",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "Seed"
     },
     {
      "link": "b3.random.html#UnitVector2",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "UnitVector2"
     },
     {
      "link": "b3.random.html#UnitVector3",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "UnitVector3"
     },
     {
      "link": "b3.random.html#UnitVector4",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "UnitVector4"
     },
     {
      "link": "b3.random.html#Value",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "Value"
     },
     {
      "link": "b3.random.html#ValueInt32",
      "tags": [
       "member",
       "static",
       "property"
      ],
      "name": "ValueInt32"
     },
     {
      "link": "b3.random.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.random.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.random.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.random.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.random.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.random.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.random.html#Chance(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Chance(int percentage)"
     },
     {
      "link": "b3.random.html#Chance(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Chance(float percentage)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector4 min, Vector4 max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector4 min, ref Vector4 max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector4 min, Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector4 min, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector3 min, Vector3 max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector3 min, ref Vector3 max)"
     },
     {
      "link": "b3.random.html#Range(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(float min, float max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector3 min, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector2 min, Vector2 max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector2 min, ref Vector2 max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector2 min, Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(ref Vector2 min, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.random.html#Range(System.Int32,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(int min, int max)"
     },
     {
      "link": "b3.random.html#Range(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range(Vector3 min, Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector4 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector4 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector3 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector3 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector2 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector2 max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.random.html#Range0To(System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(int max)"
     },
     {
      "link": "b3.random.html#Range0To(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.random.html#Range0To(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Range0To(float max)"
     }
    ]
   },
   "Ray": {
    "link": "b3.ray.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.ray.html#Ray(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Ray(Vector3 origin, Vector3 direction)"
     },
     {
      "link": "b3.ray.html#Ray(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Ray(Vector2 origin, Vector2 direction)"
     },
     {
      "link": "b3.ray.html#Empty",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Empty"
     },
     {
      "link": "b3.ray.html#UnitXDir",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitXDir"
     },
     {
      "link": "b3.ray.html#UnitYDir",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitYDir"
     },
     {
      "link": "b3.ray.html#UnitZDir",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitZDir"
     },
     {
      "link": "b3.ray.html#Direction",
      "tags": [
       "member",
       "property"
      ],
      "name": "Direction"
     },
     {
      "link": "b3.ray.html#Origin",
      "tags": [
       "member",
       "property"
      ],
      "name": "Origin"
     },
     {
      "link": "b3.ray.html#Equals(B3.Ray)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(Ray ray)"
     },
     {
      "link": "b3.ray.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.ray.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.ray.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.ray.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.ray.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.ray.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.ray.html#GetPoint(System.Single,B3.Ray,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPoint(float distance, ref Ray ray, out Vector3 result)"
     },
     {
      "link": "b3.ray.html#GetPoint(System.Single,B3.Ray,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPoint(float distance, Ray ray, out Vector3 result)"
     },
     {
      "link": "b3.ray.html#GetPoint(System.Single,B3.Ray)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPoint(float distance, ref Ray ray)"
     },
     {
      "link": "b3.ray.html#GetPoint(System.Single,B3.Ray)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPoint(float distance, Ray ray)"
     },
     {
      "link": "b3.ray.html#GetPointFromPoint(B3.Vector3,B3.Ray,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPointFromPoint(ref Vector3 point, ref Ray ray, out Vector3 result)"
     },
     {
      "link": "b3.ray.html#GetPointFromPoint(B3.Vector3,B3.Ray,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPointFromPoint(Vector3 point, Ray ray, out Vector3 result)"
     },
     {
      "link": "b3.ray.html#GetPointFromPoint(B3.Vector3,B3.Ray)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPointFromPoint(ref Vector3 point, ref Ray ray)"
     },
     {
      "link": "b3.ray.html#GetPointFromPoint(B3.Vector3,B3.Ray)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "GetPointFromPoint(Vector3 point, Ray ray)"
     },
     {
      "link": "b3.ray.html#Equality(B3.Ray,B3.Ray)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Ray left, Ray right)"
     },
     {
      "link": "b3.ray.html#Inequality(B3.Ray,B3.Ray)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Ray left, Ray right)"
     }
    ]
   },
   "Spline": {
    "link": "b3.spline.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.spline.html#Spline(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Spline(float duration, Vector3[] points)"
     },
     {
      "link": "b3.spline.html#Count",
      "tags": [
       "member",
       "property",
       "virtual"
      ],
      "name": "Count"
     },
     {
      "link": "b3.spline.html#Duration",
      "tags": [
       "member",
       "property",
       "virtual"
      ],
      "name": "Duration"
     },
     {
      "link": "b3.spline.html#IsReadOnly",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual"
      ],
      "name": "IsReadOnly"
     },
     {
      "link": "b3.spline.html#Item(System.Int32)",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Item(int index)"
     },
     {
      "link": "b3.spline.html#LoopType",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "LoopType"
     },
     {
      "link": "b3.spline.html#Points",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Points"
     },
     {
      "link": "b3.spline.html#SplineType",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "SplineType"
     },
     {
      "link": "b3.spline.html#Time",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Time"
     },
     {
      "link": "b3.spline.html#Value",
      "tags": [
       "member",
       "property",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Value"
     },
     {
      "link": "b3.spline.html#Add(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Add(Vector3 point)"
     },
     {
      "link": "b3.spline.html#Clear",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Clear()"
     },
     {
      "link": "b3.spline.html#Contains(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Contains(Vector3 point)"
     },
     {
      "link": "b3.spline.html#CopyTo(B3.Vector3,System.Int32)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "CopyTo(Vector3[] destination, int index)"
     },
     {
      "link": "b3.spline.html#Equals(B3.Spline)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Spline other)"
     },
     {
      "link": "b3.spline.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.spline.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.spline.html#GetEnumerator",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetEnumerator()"
     },
     {
      "link": "b3.spline.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.spline.html#GetPointAt(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetPointAt(float time, out Vector3 result)"
     },
     {
      "link": "b3.spline.html#GetPointAt(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetPointAt(float time)"
     },
     {
      "link": "b3.spline.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.spline.html#IndexOf(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "IndexOf(Vector3 point)"
     },
     {
      "link": "b3.spline.html#Insert(System.Int32,B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Insert(int index, Vector3 point)"
     },
     {
      "link": "b3.spline.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.spline.html#Remove(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Remove(Vector3 point)"
     },
     {
      "link": "b3.spline.html#RemoveAt(System.Int32)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "RemoveAt(int index)"
     },
     {
      "link": "b3.spline.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.spline.html#Update(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Update(float deltaTime)"
     },
     {
      "link": "b3.spline.html#WithUnitDuration(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "WithUnitDuration(float unitDuration, Vector3[] points)"
     }
    ]
   },
   "SplineType": {
    "link": "b3.splinetype.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.splinetype.html#CatmullRom",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "CatmullRom"
     },
     {
      "link": "b3.splinetype.html#Linear",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Linear"
     },
     {
      "link": "b3.splinetype.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(object target)"
     },
     {
      "link": "b3.splinetype.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.splinetype.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.splinetype.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.splinetype.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.splinetype.html#GetTypeCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetTypeCode()"
     },
     {
      "link": "b3.splinetype.html#HasFlag(System.Enum)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "HasFlag(enum flag)"
     },
     {
      "link": "b3.splinetype.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.splinetype.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.splinetype.html#ToString(System.String,System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format, IFormatProvider provider)"
     },
     {
      "link": "b3.splinetype.html#ToString(System.String)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format)"
     },
     {
      "link": "b3.splinetype.html#ToString(System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(IFormatProvider provider)"
     }
    ]
   },
   "Tween": {
    "link": "b3.tween.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.tween.html#Tween(System.Single,System.Single,System.Single,B3.Tween/TweenCallback)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Tween(float start, float end, float duration, Tween.TweenCallback callback)"
     },
     {
      "link": "b3.tween.html#Callback",
      "tags": [
       "member",
       "property"
      ],
      "name": "Callback"
     },
     {
      "link": "b3.tween.html#Duration",
      "tags": [
       "member",
       "property"
      ],
      "name": "Duration"
     },
     {
      "link": "b3.tween.html#End",
      "tags": [
       "member",
       "property"
      ],
      "name": "End"
     },
     {
      "link": "b3.tween.html#IsFinished",
      "tags": [
       "member",
       "property"
      ],
      "name": "IsFinished"
     },
     {
      "link": "b3.tween.html#LoopType",
      "tags": [
       "member",
       "property"
      ],
      "name": "LoopType"
     },
     {
      "link": "b3.tween.html#Start",
      "tags": [
       "member",
       "property"
      ],
      "name": "Start"
     },
     {
      "link": "b3.tween.html#Time",
      "tags": [
       "member",
       "property"
      ],
      "name": "Time"
     },
     {
      "link": "b3.tween.html#Value",
      "tags": [
       "member",
       "property"
      ],
      "name": "Value"
     },
     {
      "link": "b3.tween.html#Equals(B3.Tween)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "Equals(Tween other)"
     },
     {
      "link": "b3.tween.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object other)"
     },
     {
      "link": "b3.tween.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.tween.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.tween.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.tween.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.tween.html#Reset",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Reset()"
     },
     {
      "link": "b3.tween.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.tween.html#Update(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Update(float deltaTime)"
     },
     {
      "link": "b3.tween.html#EaseInCirc(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInCirc(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseInExpo(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInExpo(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseInOutCirc(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInOutCirc(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseInOutExpo(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInOutExpo(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseInOutQuad(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInOutQuad(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseInQuad(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseInQuad(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseOutCirc(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseOutCirc(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseOutExpo(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseOutExpo(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#EaseOutQuad(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "EaseOutQuad(float start, float end, float t)"
     },
     {
      "link": "b3.tween.html#Linear(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Linear(float start, float end, float t)"
     }
    ]
   },
   "Tween.TweenCallback": {
    "link": "b3.tween.tweencallback.html",
    "tags": [
     "nested",
     "type"
    ],
    "members": [
     {
      "link": "b3.tween.tweencallback.html#Tween.TweenCallback(System.Object,System.IntPtr)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Tween.TweenCallback(object object, IntPtr method)"
     },
     {
      "link": "b3.tween.tweencallback.html#Method",
      "tags": [
       "member",
       "property"
      ],
      "name": "Method"
     },
     {
      "link": "b3.tween.tweencallback.html#Target",
      "tags": [
       "member",
       "property"
      ],
      "name": "Target"
     },
     {
      "link": "b3.tween.tweencallback.html#BeginInvoke(System.Single,System.Single,System.Single,System.AsyncCallback,System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "BeginInvoke(float start, float end, float t, AsyncCallback callback, object object)"
     },
     {
      "link": "b3.tween.tweencallback.html#Clone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Clone()"
     },
     {
      "link": "b3.tween.tweencallback.html#CombineImpl(System.Delegate)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "CombineImpl(Delegate follow)"
     },
     {
      "link": "b3.tween.tweencallback.html#DynamicInvoke(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "DynamicInvoke(params object[] args)"
     },
     {
      "link": "b3.tween.tweencallback.html#DynamicInvokeImpl(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "DynamicInvokeImpl(object[] args)"
     },
     {
      "link": "b3.tween.tweencallback.html#EndInvoke(System.IAsyncResult)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "EndInvoke(IAsyncResult result)"
     },
     {
      "link": "b3.tween.tweencallback.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.tween.tweencallback.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.tween.tweencallback.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.tween.tweencallback.html#GetInvocationList",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetInvocationList()"
     },
     {
      "link": "b3.tween.tweencallback.html#GetMethodImpl",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetMethodImpl()"
     },
     {
      "link": "b3.tween.tweencallback.html#GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetObjectData(SerializationInfo info, StreamingContext context)"
     },
     {
      "link": "b3.tween.tweencallback.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.tween.tweencallback.html#Invoke(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Invoke(float start, float end, float t)"
     },
     {
      "link": "b3.tween.tweencallback.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.tween.tweencallback.html#RemoveImpl(System.Delegate)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "RemoveImpl(Delegate value)"
     },
     {
      "link": "b3.tween.tweencallback.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.tween.tweencallback.html#Equality(System.MulticastDelegate,System.MulticastDelegate)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(MulticastDelegate d1, MulticastDelegate d2)"
     },
     {
      "link": "b3.tween.tweencallback.html#Inequality(System.MulticastDelegate,System.MulticastDelegate)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(MulticastDelegate d1, MulticastDelegate d2)"
     }
    ]
   },
   "Vector2": {
    "link": "b3.vector2.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.vector2.html#Vector2(System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector2(float x, float y)"
     },
     {
      "link": "b3.vector2.html#Vector2(System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector2(float xy)"
     },
     {
      "link": "b3.vector2.html#x",
      "tags": [
       "member",
       "field"
      ],
      "name": "x"
     },
     {
      "link": "b3.vector2.html#y",
      "tags": [
       "member",
       "field"
      ],
      "name": "y"
     },
     {
      "link": "b3.vector2.html#One",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "One"
     },
     {
      "link": "b3.vector2.html#UnitX",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitX"
     },
     {
      "link": "b3.vector2.html#UnitY",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitY"
     },
     {
      "link": "b3.vector2.html#Zero",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Zero"
     },
     {
      "link": "b3.vector2.html#Heading",
      "tags": [
       "member",
       "property"
      ],
      "name": "Heading"
     },
     {
      "link": "b3.vector2.html#Magnitude",
      "tags": [
       "member",
       "property"
      ],
      "name": "Magnitude"
     },
     {
      "link": "b3.vector2.html#MagnitudeSquared",
      "tags": [
       "member",
       "property"
      ],
      "name": "MagnitudeSquared"
     },
     {
      "link": "b3.vector2.html#Add(B3.Vector2)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Vector2 other)"
     },
     {
      "link": "b3.vector2.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(object other)"
     },
     {
      "link": "b3.vector2.html#CompareTo(B3.Vector2)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CompareTo(Vector2 other)"
     },
     {
      "link": "b3.vector2.html#CreatePerpendicular",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CreatePerpendicular()"
     },
     {
      "link": "b3.vector2.html#Divide(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.vector2.html#Dot(B3.Vector2)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Dot(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.vector2.html#Equals(B3.Vector2)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Vector2 other)"
     },
     {
      "link": "b3.vector2.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.vector2.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.vector2.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.vector2.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.vector2.html#Negate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Negate()"
     },
     {
      "link": "b3.vector2.html#Normalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Normalize()"
     },
     {
      "link": "b3.vector2.html#Subtract(B3.Vector2)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Vector2 other)"
     },
     {
      "link": "b3.vector2.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.vector2.html#ToVector3",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector3()"
     },
     {
      "link": "b3.vector2.html#ToVector4",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector4()"
     },
     {
      "link": "b3.vector2.html#Abs(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Abs(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Abs(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Abs(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Add(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Add(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Add(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector2 a, Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Add(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector2 a, Vector2 b, float epsilon)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector2 a, Vector2 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, out bool result)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector2 a, ref Vector2 b, float epsilon)"
     },
     {
      "link": "b3.vector2.html#Approx(B3.Vector2,B3.Vector2,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector2 a, Vector2 b, out bool result)"
     },
     {
      "link": "b3.vector2.html#Ceiling(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Ceiling(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Ceiling(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Ceiling(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector2 vec, ref Vector2 min, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector2 vec, Vector2 min, Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector2 vec, ref Vector2 min, ref Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Clamp(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector2 vec, Vector2 min, Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#CreatePerpendicular(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#CreatePerpendicular(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#CreatePerpendicular(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#CreatePerpendicular(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CreatePerpendicular(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Divide(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Divide(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Divide(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Divide(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Dot(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Dot(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector2 a, Vector2 b, out float result)"
     },
     {
      "link": "b3.vector2.html#Dot(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector2 a, ref Vector2 b, out float result)"
     },
     {
      "link": "b3.vector2.html#Dot(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Floor(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Floor(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Floor(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Floor(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Fraction(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Fraction(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Fraction(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Fraction(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#FromAngle(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#FromAngle(System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngle(float theta)"
     },
     {
      "link": "b3.vector2.html#Lerp(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector2 a, Vector2 b, float t)"
     },
     {
      "link": "b3.vector2.html#Lerp(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector2 a, ref Vector2 b, float t)"
     },
     {
      "link": "b3.vector2.html#Lerp(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector2 a, Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Lerp(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector2 a, ref Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector2 a, ref Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector2 a, Vector2 b, float t, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector2 a, Vector2 b, float t)"
     },
     {
      "link": "b3.vector2.html#LerpClamped(B3.Vector2,B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector2 a, ref Vector2 b, float t)"
     },
     {
      "link": "b3.vector2.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector2 vec, ref Vector2 inMin, ref Vector2 inMax, ref Vector2 outMin, ref Vector2 outMax, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector2 vec, Vector2 inMin, Vector2 inMax, Vector2 outMin, ref Vector2 outMax)"
     },
     {
      "link": "b3.vector2.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector2 vec, ref Vector2 inMin, ref Vector2 inMax, ref Vector2 outMin, ref Vector2 outMax)"
     },
     {
      "link": "b3.vector2.html#MapRange(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector2 vec, Vector2 inMin, Vector2 inMax, Vector2 outMin, Vector2 outMax, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Max(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector2 vec, Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Max(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector2 vec, ref Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Max(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector2 vec, Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Max(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector2 vec, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Min(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector2 vec, Vector2 min)"
     },
     {
      "link": "b3.vector2.html#Min(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector2 vec, Vector2 min, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Min(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector2 vec, ref Vector2 min, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Min(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector2 vec, ref Vector2 min)"
     },
     {
      "link": "b3.vector2.html#MinMax(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(Vector2 a, Vector2 b, out Vector2 min, out Vector2 max)"
     },
     {
      "link": "b3.vector2.html#MinMax(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector2 a, ref Vector2 b, out Vector2 min, out Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Negate(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Negate(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Negate(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Negate(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Normalize(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Normalize(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Normalize(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Normalize(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Project(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Project(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Project(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Project(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Reject(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Reject(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector2 a, Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Reject(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Reject(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector2 vec, ref Vector2 min, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector2 vec, Vector2 min, Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector2 vec, ref Vector2 min, ref Vector2 max)"
     },
     {
      "link": "b3.vector2.html#Repeat(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector2 vec, Vector2 min, Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#RepeatFrom0(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector2 vec, Vector2 max)"
     },
     {
      "link": "b3.vector2.html#RepeatFrom0(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector2 vec, ref Vector2 max)"
     },
     {
      "link": "b3.vector2.html#RepeatFrom0(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector2 vec, Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#RepeatFrom0(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector2 vec, ref Vector2 max, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, int digits)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,System.Int32,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector2 vec, int digits, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,System.Int32,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector2 vec, int digits, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Round(B3.Vector2,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector2 vec, int digits)"
     },
     {
      "link": "b3.vector2.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector2 x, ref Vector2 leftEdge, ref Vector2 rightEdge, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector2 x, Vector2 leftEdge, Vector2 rightEdge, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector2 x, ref Vector2 leftEdge, ref Vector2 rightEdge)"
     },
     {
      "link": "b3.vector2.html#Smoothstep(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector2 x, Vector2 leftEdge, Vector2 rightEdge)"
     },
     {
      "link": "b3.vector2.html#Sqrt(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Sqrt(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Sqrt(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Sqrt(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Subtract(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector2 a, Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Subtract(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector2 a, ref Vector2 b)"
     },
     {
      "link": "b3.vector2.html#Subtract(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector2 a, Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Subtract(B3.Vector2,B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector2 a, ref Vector2 b, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#ToVector3(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#ToVector3(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#ToVector3(B3.Vector2,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(Vector2 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector2.html#ToVector3(B3.Vector2,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(ref Vector2 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector2.html#ToVector4(B3.Vector2,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(Vector2 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector2.html#ToVector4(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#ToVector4(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#ToVector4(B3.Vector2,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(ref Vector2 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector2.html#Trunc(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Trunc(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Trunc(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector2 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector2.html#Trunc(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Addition(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Vector2 left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#Division(B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Vector2 left, float right)"
     },
     {
      "link": "b3.vector2.html#Equality(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Vector2 left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#Inequality(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Vector2 left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#Multiply(System.Single,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#Multiply(B3.Vector2,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector2 left, float right)"
     },
     {
      "link": "b3.vector2.html#Multiply(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector2 left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#op_Explicit__Vector3(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector3(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#op_Explicit__Vector4(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector4(Vector2 vec)"
     },
     {
      "link": "b3.vector2.html#Subtraction(B3.Vector2,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Vector2 left, Vector2 right)"
     },
     {
      "link": "b3.vector2.html#UnaryNegation(B3.Vector2)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "UnaryNegation(Vector2 vec)"
     }
    ]
   },
   "Vector3": {
    "link": "b3.vector3.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.vector3.html#Vector3(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector3(float x, float y, float z)"
     },
     {
      "link": "b3.vector3.html#Vector3(System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector3(float x, float y)"
     },
     {
      "link": "b3.vector3.html#Vector3(System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector3(float xyz)"
     },
     {
      "link": "b3.vector3.html#x",
      "tags": [
       "member",
       "field"
      ],
      "name": "x"
     },
     {
      "link": "b3.vector3.html#y",
      "tags": [
       "member",
       "field"
      ],
      "name": "y"
     },
     {
      "link": "b3.vector3.html#z",
      "tags": [
       "member",
       "field"
      ],
      "name": "z"
     },
     {
      "link": "b3.vector3.html#One",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "One"
     },
     {
      "link": "b3.vector3.html#UnitX",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitX"
     },
     {
      "link": "b3.vector3.html#UnitY",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitY"
     },
     {
      "link": "b3.vector3.html#UnitZ",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitZ"
     },
     {
      "link": "b3.vector3.html#Zero",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Zero"
     },
     {
      "link": "b3.vector3.html#Magnitude",
      "tags": [
       "member",
       "property"
      ],
      "name": "Magnitude"
     },
     {
      "link": "b3.vector3.html#MagnitudeSquared",
      "tags": [
       "member",
       "property"
      ],
      "name": "MagnitudeSquared"
     },
     {
      "link": "b3.vector3.html#Add(B3.Vector3)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Vector3 other)"
     },
     {
      "link": "b3.vector3.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(object other)"
     },
     {
      "link": "b3.vector3.html#CompareTo(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CompareTo(Vector3 other)"
     },
     {
      "link": "b3.vector3.html#CrossProduct(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CrossProduct(Vector3 other)"
     },
     {
      "link": "b3.vector3.html#Divide(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.vector3.html#Dot(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Dot(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.vector3.html#Equals(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Vector3 other)"
     },
     {
      "link": "b3.vector3.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.vector3.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.vector3.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.vector3.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.vector3.html#Negate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Negate()"
     },
     {
      "link": "b3.vector3.html#Normalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Normalize()"
     },
     {
      "link": "b3.vector3.html#Subtract(B3.Vector3)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Vector3 other)"
     },
     {
      "link": "b3.vector3.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.vector3.html#ToVector2",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector2()"
     },
     {
      "link": "b3.vector3.html#ToVector4",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector4()"
     },
     {
      "link": "b3.vector3.html#Abs(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Abs(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Abs(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Abs(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Add(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Add(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Add(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector3 a, Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Add(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector3 a, Vector3 b, float epsilon)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector3 a, Vector3 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, out bool result)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector3 a, ref Vector3 b, float epsilon)"
     },
     {
      "link": "b3.vector3.html#Approx(B3.Vector3,B3.Vector3,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector3 a, Vector3 b, out bool result)"
     },
     {
      "link": "b3.vector3.html#Ceiling(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Ceiling(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Ceiling(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Ceiling(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector3 vec, ref Vector3 min, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector3 vec, Vector3 min, Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector3 vec, ref Vector3 min, ref Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Clamp(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector3 vec, Vector3 min, Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#CrossProduct(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#CrossProduct(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(Vector3 a, Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#CrossProduct(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#CrossProduct(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "CrossProduct(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Divide(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Divide(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Divide(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Divide(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Dot(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Dot(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector3 a, Vector3 b, out float result)"
     },
     {
      "link": "b3.vector3.html#Dot(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector3 a, ref Vector3 b, out float result)"
     },
     {
      "link": "b3.vector3.html#Dot(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Floor(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Floor(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Floor(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Floor(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Fraction(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Fraction(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Fraction(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Fraction(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#FromAngles(System.Single,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngles(float theta, float phi, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#FromAngles(System.Single,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "FromAngles(float theta, float phi)"
     },
     {
      "link": "b3.vector3.html#Lerp(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector3 a, Vector3 b, float t)"
     },
     {
      "link": "b3.vector3.html#Lerp(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector3 a, ref Vector3 b, float t)"
     },
     {
      "link": "b3.vector3.html#Lerp(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector3 a, Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Lerp(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector3 a, ref Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector3 a, ref Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector3 a, Vector3 b, float t, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector3 a, Vector3 b, float t)"
     },
     {
      "link": "b3.vector3.html#LerpClamped(B3.Vector3,B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector3 a, ref Vector3 b, float t)"
     },
     {
      "link": "b3.vector3.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector3 vec, ref Vector3 inMin, ref Vector3 inMax, ref Vector3 outMin, ref Vector3 outMax, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector3 vec, Vector3 inMin, Vector3 inMax, Vector3 outMin, ref Vector3 outMax)"
     },
     {
      "link": "b3.vector3.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector3 vec, ref Vector3 inMin, ref Vector3 inMax, ref Vector3 outMin, ref Vector3 outMax)"
     },
     {
      "link": "b3.vector3.html#MapRange(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector3 vec, Vector3 inMin, Vector3 inMax, Vector3 outMin, Vector3 outMax, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Max(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector3 vec, Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Max(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector3 vec, ref Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Max(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector3 vec, Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Max(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector3 vec, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Min(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector3 vec, Vector3 min)"
     },
     {
      "link": "b3.vector3.html#Min(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector3 vec, Vector3 min, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Min(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector3 vec, ref Vector3 min, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Min(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector3 vec, ref Vector3 min)"
     },
     {
      "link": "b3.vector3.html#MinMax(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(Vector3 a, Vector3 b, out Vector3 min, out Vector3 max)"
     },
     {
      "link": "b3.vector3.html#MinMax(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector3 a, ref Vector3 b, out Vector3 min, out Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Negate(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Negate(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Negate(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Negate(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Normalize(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Normalize(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Normalize(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Normalize(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Project(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Project(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Project(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Project(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Reject(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Reject(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector3 a, Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Reject(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Reject(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector3 vec, ref Vector3 min, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector3 vec, Vector3 min, Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector3 vec, ref Vector3 min, ref Vector3 max)"
     },
     {
      "link": "b3.vector3.html#Repeat(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector3 vec, Vector3 min, Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#RepeatFrom0(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector3 vec, Vector3 max)"
     },
     {
      "link": "b3.vector3.html#RepeatFrom0(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector3 vec, ref Vector3 max)"
     },
     {
      "link": "b3.vector3.html#RepeatFrom0(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector3 vec, Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#RepeatFrom0(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector3 vec, ref Vector3 max, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, int digits)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,System.Int32,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector3 vec, int digits, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,System.Int32,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector3 vec, int digits, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Round(B3.Vector3,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector3 vec, int digits)"
     },
     {
      "link": "b3.vector3.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector3 x, ref Vector3 leftEdge, ref Vector3 rightEdge, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector3 x, Vector3 leftEdge, Vector3 rightEdge, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector3 x, ref Vector3 leftEdge, ref Vector3 rightEdge)"
     },
     {
      "link": "b3.vector3.html#Smoothstep(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector3 x, Vector3 leftEdge, Vector3 rightEdge)"
     },
     {
      "link": "b3.vector3.html#Sqrt(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Sqrt(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Sqrt(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Sqrt(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Subtract(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector3 a, Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Subtract(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector3 a, ref Vector3 b)"
     },
     {
      "link": "b3.vector3.html#Subtract(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector3 a, Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Subtract(B3.Vector3,B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector3 a, ref Vector3 b, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#ToVector2(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#ToVector2(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#ToVector2(B3.Vector3,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(Vector3 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector3.html#ToVector2(B3.Vector3,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(ref Vector3 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector3.html#ToVector4(B3.Vector3,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(Vector3 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector3.html#ToVector4(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#ToVector4(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#ToVector4(B3.Vector3,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector4(ref Vector3 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector3.html#Trunc(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Trunc(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Trunc(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector3 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector3.html#Trunc(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Addition(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Vector3 left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#Division(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Vector3 left, float right)"
     },
     {
      "link": "b3.vector3.html#Equality(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Vector3 left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#Inequality(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Vector3 left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#Multiply(System.Single,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#Multiply(B3.Vector3,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector3 left, float right)"
     },
     {
      "link": "b3.vector3.html#Multiply(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector3 left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#op_Explicit__Vector2(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector2(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#op_Explicit__Vector4(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector4(Vector3 vec)"
     },
     {
      "link": "b3.vector3.html#Subtraction(B3.Vector3,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Vector3 left, Vector3 right)"
     },
     {
      "link": "b3.vector3.html#UnaryNegation(B3.Vector3)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "UnaryNegation(Vector3 vec)"
     }
    ]
   },
   "Vector4": {
    "link": "b3.vector4.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.vector4.html#Vector4(System.Single,System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector4(float x, float y, float z, float w)"
     },
     {
      "link": "b3.vector4.html#Vector4(System.Single,System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector4(float x, float y, float z)"
     },
     {
      "link": "b3.vector4.html#Vector4(System.Single,System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector4(float x, float y)"
     },
     {
      "link": "b3.vector4.html#Vector4(System.Single)",
      "tags": [
       "member",
       "constructor"
      ],
      "name": "Vector4(float xyzw)"
     },
     {
      "link": "b3.vector4.html#w",
      "tags": [
       "member",
       "field"
      ],
      "name": "w"
     },
     {
      "link": "b3.vector4.html#x",
      "tags": [
       "member",
       "field"
      ],
      "name": "x"
     },
     {
      "link": "b3.vector4.html#y",
      "tags": [
       "member",
       "field"
      ],
      "name": "y"
     },
     {
      "link": "b3.vector4.html#z",
      "tags": [
       "member",
       "field"
      ],
      "name": "z"
     },
     {
      "link": "b3.vector4.html#One",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "One"
     },
     {
      "link": "b3.vector4.html#UnitW",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitW"
     },
     {
      "link": "b3.vector4.html#UnitX",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitX"
     },
     {
      "link": "b3.vector4.html#UnitY",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitY"
     },
     {
      "link": "b3.vector4.html#UnitZ",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "UnitZ"
     },
     {
      "link": "b3.vector4.html#Zero",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Zero"
     },
     {
      "link": "b3.vector4.html#Magnitude",
      "tags": [
       "member",
       "property"
      ],
      "name": "Magnitude"
     },
     {
      "link": "b3.vector4.html#MagnitudeSquared",
      "tags": [
       "member",
       "property"
      ],
      "name": "MagnitudeSquared"
     },
     {
      "link": "b3.vector4.html#Add(B3.Vector4)",
      "tags": [
       "member",
       "method"
      ],
      "name": "Add(Vector4 other)"
     },
     {
      "link": "b3.vector4.html#CompareTo(B3.Vector4)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(Vector4 other)"
     },
     {
      "link": "b3.vector4.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "CompareTo(object other)"
     },
     {
      "link": "b3.vector4.html#Divide(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Divide(float scalar)"
     },
     {
      "link": "b3.vector4.html#Dot(B3.Vector4)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Dot(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.vector4.html#Equals(B3.Vector4)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Equals(Vector4 other)"
     },
     {
      "link": "b3.vector4.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.vector4.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.vector4.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.vector4.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Multiply(float scalar)"
     },
     {
      "link": "b3.vector4.html#Negate",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Negate()"
     },
     {
      "link": "b3.vector4.html#Normalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Normalize()"
     },
     {
      "link": "b3.vector4.html#Subtract(B3.Vector4)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Subtract(Vector4 other)"
     },
     {
      "link": "b3.vector4.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.vector4.html#ToVector2",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector2()"
     },
     {
      "link": "b3.vector4.html#ToVector3",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToVector3()"
     },
     {
      "link": "b3.vector4.html#Abs(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Abs(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Abs(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Abs(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Abs(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Add(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Add(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector4 a, Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Add(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Add(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Add(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, out bool result)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Single,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector4 a, Vector4 b, float epsilon, out bool result)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Boolean)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector4 a, Vector4 b, out bool result)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector4 a, Vector4 b, float epsilon)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(ref Vector4 a, ref Vector4 b, float epsilon)"
     },
     {
      "link": "b3.vector4.html#Approx(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Approx(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Ceiling(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Ceiling(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Ceiling(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Ceiling(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Ceiling(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector4 vec, ref Vector4 min, ref Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(ref Vector4 vec, ref Vector4 min, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector4 vec, Vector4 min, Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Clamp(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Clamp(Vector4 vec, Vector4 min, Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Divide(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Divide(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Divide(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Divide(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Divide(float scalar, Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Dot(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector4 a, Vector4 b, out float result)"
     },
     {
      "link": "b3.vector4.html#Dot(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Dot(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Dot(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Dot(ref Vector4 a, ref Vector4 b, out float result)"
     },
     {
      "link": "b3.vector4.html#Floor(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Floor(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Floor(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Floor(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Floor(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Fraction(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Fraction(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Fraction(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Fraction(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Fraction(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Lerp(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector4 a, Vector4 b, float t)"
     },
     {
      "link": "b3.vector4.html#Lerp(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector4 a, ref Vector4 b, float t)"
     },
     {
      "link": "b3.vector4.html#Lerp(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(Vector4 a, Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Lerp(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Lerp(ref Vector4 a, ref Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector4 a, ref Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector4 a, Vector4 b, float t, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(Vector4 a, Vector4 b, float t)"
     },
     {
      "link": "b3.vector4.html#LerpClamped(B3.Vector4,B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "LerpClamped(ref Vector4 a, ref Vector4 b, float t)"
     },
     {
      "link": "b3.vector4.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector4 vec, Vector4 inMin, Vector4 inMax, Vector4 outMin, Vector4 outMax, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(Vector4 vec, Vector4 inMin, Vector4 inMax, Vector4 outMin, ref Vector4 outMax)"
     },
     {
      "link": "b3.vector4.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector4 vec, ref Vector4 inMin, ref Vector4 inMax, ref Vector4 outMin, ref Vector4 outMax, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#MapRange(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MapRange(ref Vector4 vec, ref Vector4 inMin, ref Vector4 inMax, ref Vector4 outMin, ref Vector4 outMax)"
     },
     {
      "link": "b3.vector4.html#Max(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector4 vec, ref Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Max(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector4 vec, Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Max(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(ref Vector4 vec, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Max(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Max(Vector4 vec, Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Min(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector4 vec, ref Vector4 min)"
     },
     {
      "link": "b3.vector4.html#Min(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector4 vec, Vector4 min, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Min(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(ref Vector4 vec, ref Vector4 min, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Min(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Min(Vector4 vec, Vector4 min)"
     },
     {
      "link": "b3.vector4.html#MinMax(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(Vector4 a, Vector4 b, out Vector4 min, out Vector4 max)"
     },
     {
      "link": "b3.vector4.html#MinMax(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "MinMax(ref Vector4 a, ref Vector4 b, out Vector4 min, out Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Multiply(float scalar, ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Negate(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Negate(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Negate(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Negate(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Negate(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Normalize(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Normalize(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Normalize(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Normalize(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Normalize(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Project(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Project(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Project(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Project(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Project(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Reject(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Reject(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector4 a, Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Reject(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Reject(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Reject(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector4 vec, ref Vector4 min, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector4 vec, Vector4 min, Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(ref Vector4 vec, ref Vector4 min, ref Vector4 max)"
     },
     {
      "link": "b3.vector4.html#Repeat(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Repeat(Vector4 vec, Vector4 min, Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#RepeatFrom0(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector4 vec, Vector4 max)"
     },
     {
      "link": "b3.vector4.html#RepeatFrom0(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector4 vec, ref Vector4 max)"
     },
     {
      "link": "b3.vector4.html#RepeatFrom0(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(Vector4 vec, Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#RepeatFrom0(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "RepeatFrom0(ref Vector4 vec, ref Vector4 max, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, int digits)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,System.Int32,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector4 vec, int digits, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,System.Int32,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(ref Vector4 vec, int digits, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Round(B3.Vector4,System.Int32)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Round(Vector4 vec, int digits)"
     },
     {
      "link": "b3.vector4.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector4 x, ref Vector4 leftEdge, ref Vector4 rightEdge, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector4 x, Vector4 leftEdge, Vector4 rightEdge, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(ref Vector4 x, ref Vector4 leftEdge, ref Vector4 rightEdge)"
     },
     {
      "link": "b3.vector4.html#Smoothstep(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Smoothstep(Vector4 x, Vector4 leftEdge, Vector4 rightEdge)"
     },
     {
      "link": "b3.vector4.html#Sqrt(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Sqrt(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Sqrt(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Sqrt(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Sqrt(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Subtract(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector4 a, Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Subtract(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector4 a, ref Vector4 b)"
     },
     {
      "link": "b3.vector4.html#Subtract(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(Vector4 a, Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Subtract(B3.Vector4,B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Subtract(ref Vector4 a, ref Vector4 b, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#ToVector2(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#ToVector2(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#ToVector2(B3.Vector4,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(Vector4 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector4.html#ToVector2(B3.Vector4,B3.Vector2)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector2(ref Vector4 vec, out Vector2 result)"
     },
     {
      "link": "b3.vector4.html#ToVector3(B3.Vector4,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(Vector4 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector4.html#ToVector3(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#ToVector3(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#ToVector3(B3.Vector4,B3.Vector3)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "ToVector3(ref Vector4 vec, out Vector3 result)"
     },
     {
      "link": "b3.vector4.html#Trunc(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Trunc(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Trunc(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector4 vec, out Vector4 result)"
     },
     {
      "link": "b3.vector4.html#Trunc(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "method"
      ],
      "name": "Trunc(ref Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Addition(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Addition(Vector4 left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#Division(B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Division(Vector4 left, float right)"
     },
     {
      "link": "b3.vector4.html#Equality(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Equality(Vector4 left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#Inequality(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Inequality(Vector4 left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#Multiply(System.Single,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(float left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#Multiply(B3.Vector4,System.Single)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector4 left, float right)"
     },
     {
      "link": "b3.vector4.html#Multiply(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Multiply(Vector4 left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#op_Explicit__Vector2(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector2(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#op_Explicit__Vector3(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "op_Explicit__Vector3(Vector4 vec)"
     },
     {
      "link": "b3.vector4.html#Subtraction(B3.Vector4,B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "Subtraction(Vector4 left, Vector4 right)"
     },
     {
      "link": "b3.vector4.html#UnaryNegation(B3.Vector4)",
      "tags": [
       "member",
       "static",
       "operator"
      ],
      "name": "UnaryNegation(Vector4 obj)"
     }
    ]
   }
  }
 },
 "B3.Management": {
  "link": "b3.management.html",
  "tags": [
   "namespace"
  ],
  "types": {
   "FileLocationType": {
    "link": "b3.management.filelocationtype.html",
    "tags": [
     "type"
    ],
    "members": [
     {
      "link": "b3.management.filelocationtype.html#Default",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Default"
     },
     {
      "link": "b3.management.filelocationtype.html#Embedded",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Embedded"
     },
     {
      "link": "b3.management.filelocationtype.html#Http",
      "tags": [
       "member",
       "static",
       "field"
      ],
      "name": "Http"
     },
     {
      "link": "b3.management.filelocationtype.html#CompareTo(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual"
      ],
      "name": "CompareTo(object target)"
     },
     {
      "link": "b3.management.filelocationtype.html#Equals(System.Object)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual"
      ],
      "name": "Equals(object obj)"
     },
     {
      "link": "b3.management.filelocationtype.html#Finalize",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "Finalize()"
     },
     {
      "link": "b3.management.filelocationtype.html#GetHashCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetHashCode()"
     },
     {
      "link": "b3.management.filelocationtype.html#GetType",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetType()"
     },
     {
      "link": "b3.management.filelocationtype.html#GetTypeCode",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "GetTypeCode()"
     },
     {
      "link": "b3.management.filelocationtype.html#HasFlag(System.Enum)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "HasFlag(enum flag)"
     },
     {
      "link": "b3.management.filelocationtype.html#MemberwiseClone",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "MemberwiseClone()"
     },
     {
      "link": "b3.management.filelocationtype.html#ToString",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString()"
     },
     {
      "link": "b3.management.filelocationtype.html#ToString(System.String,System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format, IFormatProvider provider)"
     },
     {
      "link": "b3.management.filelocationtype.html#ToString(System.String)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(string format)"
     },
     {
      "link": "b3.management.filelocationtype.html#ToString(System.IFormatProvider)",
      "tags": [
       "member",
       "method",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual",
       "virtual"
      ],
      "name": "ToString(IFormatProvider provider)"
     }
    ]
   }
  }
 }
};
	/**@type {string[]} - The value to search for.*/
	let vals;
	/**@type {{
			only : string[],
			strictOnly : string[],
			exclude : string[],
			regex : string,
			acceptAll : boolean
		}} - The filter to exclude objects from the search.*/
	let filter;
	/**@type {string} - The id of the search bar.*/
	let searchBarId = "search-bar";
	/**@type {string} - The id of the search results window.*/
	let searchResultsId = "search-results";
	/**@type {string} - The id of the search help menu in the modal.*/
	let searchBarHelpId = "search-help-desc";
	/**@type {HTMLElement} - The list element that will be outputting the found results.*/
	let outputList;
	/**@type {HTMLElement} - The window element that will be toggled on and off whenever searching begins.*/
	let outputWindow;
	/**@type {number} - The id of the timeout function.*/
	let timeout;
	/**@type {number} - The index to the namespace to look into.*/
	let namespaceIndex;
	/**@type {number} - The index to the type to look into.*/
	let typeIndex;
	/**@type {number} - The index to the member to look into.*/
	let memberIndex;
	/**@type {string[]} - The list of namespaces used for searching.*/
	let namespaceList;
	/**@type {string[]} - The list of type used for searching.*/
	let typeList;
	/**@type {string} - The current namespace to search for first.*/
	let currNamespace;
	/**@type {string} - The current type to search for first.*/
	let currType;
	/**@type {string} - The name of the class that will pop the output window into focus.*/
	let outputWindowFocusClass = "active";
	/**@type {number} - The search interval.*/
	let searchInterval = 150;
	/**@type {number} - The starting search interval to make the user wait before the search starts.*/
	let startingSearchInterval = 250;
	/**@type {string} - The item that tells the user that it's searching.*/
	let searchingItem = '<li id="--searching-display-in-window--" style="text-align: center;">Searching...</li>';
	/**Sets the search interval. Make this number to small and you run the risk of freezing up the web app,
	 * this is to make the search pseudo-asynchronous.
	 * @param value {number} - The interval to wait between each iteration of the search.*/
	let setSearchInterval = function(value) { searchInterval = value; }
	/**Sets the starting search interval. Make this number to small and you run the risk of freezing up the web app,
	 * this is to make the search pseudo-asynchronous. This also stops the search bar from looking "glitchy".
	 * @param value {number} - The interval to wait before beginning the search.*/
	let setStartingSearchInterval = function(value) { startingSearchInterval = value; }
	/**Sets the output window's focus class to a specific class.
	 * @param value {string} - The new class that will make the output window appear.*/
	let setOutputWindowFocusClass = function(value) { outputWindowFocusClass = value; };
	/**Sets the current namespace and type to search for first.
	 * @param namespace {string} - The namespace to search for.
	 * @param type {string} - The type to search for.*/
	const setCurrent = function(namespace, type) {
		currNamespace = namespace;
		currType = type.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	};
	/**Marks the result with a bolded mark of what the query string was.
	 * @param input {string} - The input string to mark.
	 * @param value {string} - The value string to mark win.
	 * @return {string} Returns the input string marked by the query string.*/
	const markResult = function(input, value) {
		// Variables
		let start = input.toLowerCase().indexOf(value);
		let end = start + value.length;
		
		return (
			input.substring(0, start) +
			"<b>" + input.substring(start, end) + "</b>" +
			input.substring(end)
		);
	};
	/**Starts searching through the API for anything similar to the given value.
	 * @param value {string} - The value used to query the API.
	 * @param windowId {string} - The id of the window to toggle on and off when searching.
	 * @param listId {string} - The id of the list to output the search results.*/
	const startSearch = function(value, windowId, listId) {
		if(timeout) {
			window.clearTimeout(timeout);
		}
		outputWindow = document.getElementById(windowId);
		if(value == "") {
			outputWindow.classList.remove(outputWindowFocusClass);
			return;
		}
		getValuesAndFilter(value);
		outputList = document.getElementById(listId);
		outputList.innerHTML = searchingItem;
		outputWindow.classList.add(outputWindowFocusClass);
		namespaceIndex = (currNamespace && currType ? -1 : 0);
		typeIndex = 0;
		memberIndex = 0;
		timeout = setTimeout(search, startingSearchInterval);
	};
	/**Gets the value and filter content from the given input value.
	 * @param value {string} - The input value from the user.*/
	const getValuesAndFilter = function(value) {
		// Variables
		const temp = value.toLowerCase().trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").split(' ');
		let index = -1;
		
		vals = [];
		filter = {};
		
		for(let i = 0; i < temp.length; i++) {
			index = temp[i].indexOf(':');
			
			if(index == -1) {
				vals.push(temp[i]);
			}
			else {
				switch(temp[i].substring(0, index)) {
					case "only": {
						if(!filter.only) {
							filter.only = [];
						}
						filter.only = filter.only.concat(
							temp[i].substring(index + 1).split(',')
						);
					} break;
					case "strict-only": {
						if(!filter.strictOnly) {
							filter.strictOnly = [];
						}
						filter.strictOnly = filter.strictOnly.concat(
							temp[i].substring(index + 1).split(',')
						);
					} break;
					case "exclude": {
						if(!filter.exclude) {
							filter.exclude = [];
						}
						filter.exclude = filter.exclude.concat(
							temp[i].substring(index + 1).split(',')
						);
					} break;
					case "regex": {
						filter.regex = temp[i].substring(index + 1);
					} break;
					case "accept-all": {
						filter.acceptAll = (temp[i].substring(index + 1) != "false");
					} break;
				}
			}
		}
		
		if(vals.length == 0 && (!filter.regex || filter.regex == "") && filter.acceptAll != false) {
			filter.acceptAll = true;
		}
	};
	/**Removes the searching item telling the user they are searching.
	 * @return Returns true if the searching item was the only item and was promptly removed.*/
	const removeSearchingItem = function() {
		// Variables
		let searchingItem = document.getElementById("--searching-display-in-window--");
		
		if(searchingItem) {
			outputList.removeChild(searchingItem);
			return (outputList.innerHTML == "");
		}
		return false;
	};
	/**Finds if the current iteration of searching yields that it is the current type being viewed.
	 * Used to skip first search results of the current type.
	 * @returns Returns true if the current type is the one being viewed.*/
	const isCurrentType = function() {
		if(currNamespace && currType) {
			return (
				namespaceList[namespaceIndex] == currNamespace &&
				typeList[typeIndex] == currType
			);
		}
		return false;
	};
	/**Formats the outputted list item, customizable for end-user.
	 * @param values {string[]} - The values that the user has queried.
	 * @param regex {string} - The regular expression used to find a match.
	 * @param link {string} - The link to where the item will take the user.
	 * @param name {string} - The name of the namespace/type/member.
	 * @param markResult {markResult} - A function that marks the query string as bold onto the inputted string.*/
	let formatOutputListItem = function(values, regex, link, name, markResult) {
		// Variables
		let results = name;
		let regexStr = "";
		
		if(regex) {
			regexStr = regex;
		}
		if(values && values.length > 0) {
			regexStr = (
				(regexStr == "" ? "" : regexStr + "|") + 
				escapeRegex(values.join('|'))
			);
		}
		if(regexStr != "") {
			results = results.replace(
				new RegExp("(" + regexStr + ")", "gi"),
				"<b>$1</b>"
			);
		}
		
		return (
			'<li><a href="' + link + '">' +
			results +
			"</a></li>"
		);
	};
	/**Escapes the regex to safely use the characters: ., *, +, -, ?, ^, $, {, }, (, ), [, ], and \.
	 * @param regex {string} - The regex string to escape.
	 * @returns {string} Returns the escaped regex string.*/
	const escapeRegex = function(regex) { return regex.replace(/[.*+\-?$^{}()\[\]\\]/g, "\\$&"); }
	/**Sets a custom format output list item.
	 * @param func {formatOutputListItem} - The new formatting function to set.*/
	const setFormatOutputListItem = function(func) { formatOutputListItem = func; };
	/**Finds if the given value is fulfilling the criteria for accepting into the output list.
	 * @param tags {string} - The tags of membership the object is apart of.
	 * @param value {string} - The string to look into.
	 * @returns {boolean} Returns true if the given value fulfills the criteria for accepting into the output list.*/
	const isFulfillingCriteria = function(tags, value) {
		// Variables
		const lowerCaseValue = value.toLowerCase();
		
		if(filter.strictOnly) {
			for(let i = 0; i < filter.strictOnly.length; i++) {
				if(tags.indexOf(filter.strictOnly[i]) == -1) {
					return false;
				}
			}
		}
		if(filter.only) {
			// Variables
			let found = false;
			
			for(let i = 0; i < filter.only.length; i++) {
				if(tags.indexOf(filter.only[i]) != -1) {
					found = true;
					break;
				}
			}
			
			if(!found) { return false; }
		}
		if(filter.exclude) {
			// Variables
			let item;
			
			for(let i = 0; i < filter.exclude.length; i++) {
				item = filter.exclude[i]
				
				if(tags.indexOf(item) != -1) {
					return false;
				}
			}
		}
		
		if(filter.acceptAll == true) {
			return true;
		}
		
		if(filter.regex) {
			if(lowerCaseValue.match(new RegExp(filter.regex, "gi"))) {
				return true;
			}
		}
		
		for(let i = 0; i < vals.length; i++) {
			if(lowerCaseValue.match(new RegExp(escapeRegex(vals[i]), "gi"))) {
				return true;
			}
		}
		
		return false;
	};
	/**Searches through the entire API little by little.*/
	const search = function() {
		for(let i = 0; i < 100; i++) {
			if(!namespaceList && namespaceIndex == 0) {
				namespaceList = Object.keys(searchJson);
			}
			if(namespaceIndex >= 0 && typeIndex == 0) {
				typeList = Object.keys(searchJson[namespaceList[namespaceIndex]].types);
			}
		
			if(namespaceIndex == -1) {
				// Variables
				const namespace = searchJson[currNamespace];
				const type = namespace.types[currType];
				const member = type.members[memberIndex];
				let name;
				
				if(memberIndex == 0) {
					if(isFulfillingCriteria(namespace.tags, currNamespace)) {
						outputList.innerHTML += formatOutputListItem(
							vals,
							filter.regex,
							namespace.link,
							currNamespace,
							markResult
						);
					}
					name = currNamespace + "." + currType;
					if(isFulfillingCriteria(type.tags, name)) {
						outputList.innerHTML += formatOutputListItem(
							vals,
							filter.regex,
							type.link,
							name,
							markResult
						);
					}
				}
				
				name = currNamespace + "." + currType + "." + member.name;
				if(isFulfillingCriteria(member.tags, name)) {
					outputList.innerHTML += formatOutputListItem(
						vals,
						filter.regex,
						member.link,
						name,
						markResult
					);
				}
				
				memberIndex++;
				if(memberIndex >= type.members.length) {
					memberIndex = 0;
					namespaceIndex++;
				}
			}
			else {
				// Variables
				const namespace = searchJson[namespaceList[namespaceIndex]];
				const type = namespace.types[typeList[typeIndex]];
				const member = type.members[memberIndex];
				let name;
				
				if(typeIndex == 0 && memberIndex == 0) {
					if(!currNamespace || namespaceList[namespaceIndex] != currNamespace) {
						if(!isCurrentType() && namespace) {
							name = namespaceList[namespaceIndex];
							if(isFulfillingCriteria(namespace.tags, name)) {
								outputList.innerHTML += formatOutputListItem(
									vals,
									filter.regex,
									namespace.link,
									name,
									markResult
								);
							}
						}
					}
				}
				if(memberIndex == 0) {
					if(!isCurrentType()) {
						name = namespaceList[namespaceIndex] + "." + typeList[typeIndex];
						if(isFulfillingCriteria(type.tags, name)) {
							outputList.innerHTML += formatOutputListItem(
								vals,
								filter.regex,
								type.link,
								name,
								markResult
							);
						}
					}
				}
				
				if(!isCurrentType() && member) {
					name = namespaceList[namespaceIndex] + "." + typeList[typeIndex] + "." + member.name;
					if(isFulfillingCriteria(member.tags, name)) {
						outputList.innerHTML += formatOutputListItem(
							vals,
							filter.regex,
							member.link,
							name,
							markResult
						);
					}
				}
				
				memberIndex++;
				if(type) {
					if(memberIndex >= type.members.length) {
						memberIndex = 0;
						
						typeIndex++;
					}
				}
				else {
					memberIndex = 0;
					typeIndex++;
				}
				if(typeIndex >= typeList.length) {
					typeIndex = 0;
					namespaceIndex++;
				}
			}
			
			if(namespaceList && namespaceIndex >= namespaceList.length) {
				break;
			}
		}
		
		if(namespaceIndex == -1 || namespaceIndex < namespaceList.length) {
			timeout = setTimeout(search, searchInterval);
		}
		else {
			if(removeSearchingItem()) {
				outputList.innerHTML = '<li style="text-align: center;">No results found!</li>';
			}
		}
	};
	/**Sets the search ids for search bar and search results window.
	 * @param searchBarID {string} - The id of the search bar to set.
	 * @param searchResultsID {string} - The id of the search results to set.*/
	const setSearchIds = function(searchBarID, searchResultsID, searchBarHelpID) {
		searchBarId = searchBarID;
		searchResultsId = searchResultsID;
		searchBarHelpId = searchBarHelpID;
	};
	/**Gets the help text of the search bar.
	 * @returns {string} Returns the help text for the search bar.*/
	const getHelpText = function(escapeHtml = false) {
		// Variables
		let help = "You can filter the search by using the following qualifiers:";
		
		if(escapeHtml) { help += "<br/><br/>\n"; }
		else { help += "\n\n"; }
		
		if(escapeHtml) { help += '<kbd class="search-bar-help-name">strict-only</kbd>'; }
		else { help += "  strict-only"; }
		help += " - Use an array of namespace, type, member, constructor, field,\n";
		help += "    event, property, method, static, sealed, virtual, nested, or operator to filter out types of objects,\n";
		help += "    seperated by a comma ( , ). Each category must be met to be accepted as a\n";
		help += "    result.";
		if(escapeHtml) { help += "<br/>\n&emsp;"; }
		else { help += "\n      "; }
		help += "Example: ";
		if(escapeHtml) { help += '<kbd class="search-bar-help-desc">strict-only:static,method</kbd>'; }
		else { help += "strict-only:static,method" }
		
		if(escapeHtml) { help += "<br/><br/>\n"; }
		else { help += "\n\n"; }
		
		if(escapeHtml) { help += '<kbd class="search-bar-help-name">only</kbd>'; }
		else { help += "  only"; }
		help += " - Use an array of namespace, type, member, constructor, field,\n";
		help += "    event, property, method, static, sealed, virtual, nested, or operator to filter out types of objects,\n";
		help += "    seperated by a comma ( , ).";
		if(escapeHtml) { help += "<br/>\n&emsp;"; }
		else { help += "\n      "; }
		help += "Example: ";
		if(escapeHtml) { help += '<kbd class="search-bar-help-desc">only:type,namespace</kbd>'; }
		else { help += "only:type,namespace"; }
		
		if(escapeHtml) { help += "<br/><br/>\n"; }
		else { help += "\n\n"; }
		
		if(escapeHtml) { help += '<kbd class="search-bar-help-name">exclude</kbd>'; }
		else { help += "  exclude"; }
		help += " - Use namespace, type, and member to exclude those objects from search,\n";
		help += "    seperated by a comma ( , ).";
		if(escapeHtml) { help += "<br/>\n&emsp;"; }
		else { help += "\n      "; }
		help += "Example: ";
		if(escapeHtml) { help += '<kbd class="search-bar-help-desc">exclude:namespace,type</kbd>'; }
		else { help += "exclude:namespace,type" }
		
		if(escapeHtml) { help += "<br/><br/>\n"; }
		else { help += "\n\n"; }
		
		if(escapeHtml) { help += '<kbd class="search-bar-help-name">regex</kbd>'; }
		else { help += "  regex"; }
		help += " - Use this to search by using a regular expression string.";
		if(escapeHtml) { help += "<br/>\n&emsp;"; }
		else { help += "\n      "; }
		help += "Example: ";
		if(escapeHtml) { help += '<kbd class="search-bar-help-desc">regex:mat\\d+</kbd>'; }
		else { help += "regex:mat\\d+"; }
		
		if(escapeHtml) { help += "<br/><br/>\n"; }
		else { help += "\n\n"; }
		
		if(escapeHtml) { help += '<kbd class="search-bar-help-name">accept-all</kbd>'; }
		else { help += "  accept-all"; }
		help += " - Set this to true to search for every object.";
		if(escapeHtml) { help += "<br/>\n&emsp;"; }
		else { help += "\n      "; }
		help += "Example: ";
		if(escapeHtml) { help += '<kbd class="search-bar-help-desc">accept-all:true</kbd>'; }
		else { help += "accept-all:true"; }
		
		return help;
	};
	
	window.addEventListener("load", function() {
		// Variables
		let searchBar = document.getElementById(searchBarId);
		let searchHelp = document.getElementById(searchBarHelpId);
		
		if(!searchBar) { return; }
		
		searchBar.title = getHelpText();
		searchHelp.innerHTML = getHelpText(true);
	});
	
	window.addEventListener("click", function(args) {
		// Variables
		let target = args.target;
		let results = document.getElementById(searchResultsId);
		
		if(!results) { return; }
		
		if(target.tagName == "A" && target.href != "") {
			results.classList.remove(outputWindowFocusClass);
			return;
		}
		
		if(target.id == searchBarId && target.value != "") {
			results.classList.add(outputWindowFocusClass);
			return;
		}
		if(!results.classList.contains(outputWindowFocusClass)) {
			return;
		}
		
		while(target != null) {
			if(target.id == searchBarId || target.id == searchResultsId) {
				break;
			}
			target = target.parentElement;
		}
		
		if(target == null) {
			results.classList.remove(outputWindowFocusClass);
		}
	});
	
	return {
		setCurrent: setCurrent,
		search: startSearch,
		setFormatOutputListItem: setFormatOutputListItem,
		setOutputWindowFocusClass: setOutputWindowFocusClass,
		setSearchInterval: setSearchInterval,
		setStartingSearchInterval: setStartingSearchInterval,
		setSearchIds: setSearchIds,
		getHelpText: getHelpText
	};
})();
