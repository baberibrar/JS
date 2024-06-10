// IIFF - Immediately Invoked Function Expression
// It is a function that runs as soon as it is defined.
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// The JavaScript engine treats the function as an expression instead of a declaration.
// The function is executed right after its creation.
// The function is only executed once.
// The function is not accessible from the outside.
// The function is not hoisted.

(function chai(){
    console.log("IIFE")
})();

(() => {
    console.log("IIFE Arrow")
})()