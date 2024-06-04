/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/


// Automatically
x = 5
console.log(x)

// Using var
var x = 5
var y = 6
var z = x + y
console.log(z)

/*
Note
The var keyword was used in JavaScript code from 1995 to 2015.
The let keyword was introduced in ES6 (2015).
The var keyword should only be used in code written for older browsers.
*/


// Using let
let a = 5
let b = 6
let c = a + b
console.log(c)


// Using const
const pi = 3.14159
console.log(pi)

/*
When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
6. Never use var in modern code.
*/