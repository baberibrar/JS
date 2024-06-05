/*
Real Life Objects
In real life, objects are things like: houses, cars, people, animals, or any other subjects.

Object Properties
A real life car has properties like weight and color:
car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
Car objects have the same properties, but the values differ from car to car.

Object Methods
A real life car has methods like start and stop:
car.start(), car.drive(), car.brake(), car.stop().
Car objects have the same methods, but the methods are performed at different times.
*/

/*
JavaScript Objects
Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to an object named car:
*/

const car = {type:"Fiat", model:"500", color:"white"};

// Creating a JavaScript Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Create an Object
const person2 = {};
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";


console.log(person);
console.log(person2);

const person3 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person3.fullName()); // John Doe