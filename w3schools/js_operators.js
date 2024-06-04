/*
Javascript operators are used to perform different types of mathematical and logical computations.

Examples:
The Assignment Operator = assigns values
The Addition Operator + adds values
The Multiplication Operator * multiplies values
The Comparison Operator > compares values
*/

// The Assignment Operator (=) assigns a value to a variable:

let x = 5;
console.log(x) // 5

// The Addition Operator (+) adds numbers:
let x = 5;
let y = 2;
let z = x + y;
console.log(z) // 7

// The Multiplication Operator (*) multiplies numbers:

let x = 5;
let y = 2;
let z = x * y;
console.log(z) // 10

/*
Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
*/

// Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers:
let a = 5;
let b = 2;
let c = a + b;
console.log(c) // 7

// Assignment Operators
// Assignment operators assign values to JavaScript variables:
let d = 5;
console.log(d) // 5

// Comparison Operators
// Comparison operators are used to compare two values:
let e = 5;
let f = 2;
let g = e > f;
console.log(g) // true

// String Operators
// The + operator can also be used to add (concatenate) strings:
let h = "Hello";
let i = "World!";
let j = h + " " + i;
console.log(j) // Hello World!

// Logical Operators
// Logical operators are used to determine the logic between variables or values:
let k = 5;
let l = 2;
let m = (k == 5 && l == 2);
console.log(m) // true

// Bitwise Operators
// Bitwise operators are used to perform bitwise calculations on numbers:
let n = 5;
let o = 2;
let p = n & o;
console.log(p) // 0

// Ternary Operators
// The conditional operator assigns a value to a variable based on some condition:
let q = 5;
let r = 2;
let s = (q > r) ? "q is greater than r" : "q is less than r";
console.log(s) // q is greater than r

// Type Operators
// The typeof operator returns the type of a variable:
let t = 5;
console.log(typeof t) // number
let u = "Hello";
console.log(typeof u) // string
let v = true;
console.log(typeof v) // boolean
let w = null;
console.log(typeof w) // object
let x = undefined;
console.log(typeof x) // undefined
let y = [1, 2, 3];
console.log(typeof y) // object
let z = {name: "John", age: 30};
console.log(typeof z) // object
let aa = function() {};
console.log(typeof aa) // function