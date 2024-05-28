const mySym = Symbol("key1")

const JsUser = {
    name: "Baber",
    [mySym]: "key2",
    age: 22,
    location: "LHR",
    email: "example@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.greeting = function (){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function (){
    console.log(`Hello, ${this.name}`);
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["mySym"])
// console.log(JsUser[mySym])
// console.log(JsUser)
console.log(JsUser.greetingTwo())