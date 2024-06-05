/*
JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

The Object Datatype
The object data type can contain both built-in objects, and user defined objects:

Built-in object types can be:
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/

// Numbers:
let length = 16;                            // Number
let weight = 16.5;                          // Number


// Strings:
let name = "John Doe";                      // String
let carName = 'Volvo';                      // String

// Booleans:
let x = 5;
let y = 5;
let z = 6;
let result = (x == y);                      // true
let result2 = (x == z);                     // false

// Objects:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Array Objects:
const fruits = ["Banana", "Orange", "Apple"];

// Date Objects:
const date = new Date();
console.log(date);

// Undefined:
let car;
console.log(car);                           // undefined

// Null:
let person2 = null;
console.log(person2);                        // null
