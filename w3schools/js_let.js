/*
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope
*/

let x = 5;
console.log(x) // ReferenceError: x is not defined

let z = 5;
{
    var y = 6;
}
console.log(z) // 6

/*
What is Good?
let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.

What is Not Good?
var does not have to be declared.
var is hoisted.
var binds to this.
*/