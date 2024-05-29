// name is a parameter of the function greeting
function greeting(name){
    console.log(`Hello, ${name}`);
}

// Baber is an argument of the function greeting 
greeting("Baber");


function square(number){
    let result = number * number;
    return result;
}

let number = square(5);
console.log(number);