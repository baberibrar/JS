/*
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/


// A variable defined with the const keyword cannot be reassigned:
// const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable.
// console.log(PI); // 3.14159


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

console.log(cars); // [ 'Toyota', 'Volvo', 'BMW', 'Audi' ]

/*
Constant Objects
You can change the properties of a constant object:
*/

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Baber"

console.log(car)