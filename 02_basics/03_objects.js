// singleton
// objects.create()

// object literal

const mySym = Symbol("X");

const JsUser = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    location: "USA", 
    fullName: function() {  // method
        return this.firstName + " " + this.lastName; // this refers to the object itself
    },
    [mySym]: "mySym"
};


// console.log(JsUser.fullName()); // John Doe
// console.log(JsUser["fullName"]()); // John Doe
console.log(JsUser);