/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/

function myFunction(p1, p2){
    return p1 * p2; // The function returns the product of p1 and p2
}

console.log(myFunction(4, 3)); // 12

/*
Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
*/

let x = myFunction(4, 3);

function myFunction(p1, p2){
    return p1 * p2; // The function returns the product of p1 and p2
}

console.log(x); // 12


function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

console.log("Temperature in Celsius: " + toCelsius(77)); // 25
