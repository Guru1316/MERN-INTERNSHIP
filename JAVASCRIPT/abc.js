// var
console.log(a); // Undefined
var a = 10;
console.log(a);
var a = 20;
a = 20;
console.log(a);
{
    var a = 30;
    console.log(a);
}
console.log(a);

// let
// console.log(b); Referenceerror
let b = 10;
// let b = 20; SyntaxError
console.log(b);
b = 20;
console.log(b);
{
    let b = 30;
    console.log(b);
}
console.log(b);

// const
// console.log(c); ReferenceError
const c = 10;
console.log(c);
{
    const c = 20;
    console.log(c);
}
console.log(c);
// c = 30; TypeError


// Functions

// 1. Named Functions
namedFunc(); // Can be called
function namedFunc()
{
    console.log("Named Function is called");
}
// Function call
namedFunc();


// 2. Function Expression

// i) With var
// funcExp(); TypeError
var funcExp = function() {
    console.log("Function Expression is called");
}
funcExp();

// ii) With let
// funcExp2(); ReferenceError
let funcExp2 = function() {
    console.log("Function Expression is called");
}
funcExp2();

// iii) With const
// funcExp3(); ReferenceError
const funcExp3 = function() {
    console.log("Function Expression is called");
}
funcExp3();


// 3. Arrow Functions

// i) With var
// arrowFunc(); TypeError
var arrowFunc = () => {
    console.log("Arrow Function is called");
}
arrowFunc();

// ii) With let
// arrowFunc2(); ReferenceError
let arrowFunc2 = () => {
    console.log("Arrow Function is called");
}
arrowFunc2();

// iii) With const
// arrowFunc3(); ReferenceError
const arrowFunc3 = () => {
    console.log("Arrow Function is called");
}
arrowFunc3();

// 4. Callback Function (and) 5. IIFE (Immediately Invoking Function Expression)
(() => {
    console.log("Callback and IIFE Functions are called");
})()


// Functions With Parameters and Arguments
const addTwoNumbers = (parameter1, parameter2) => {
    console.log(parameter1, parameter2);
    let num1 = parameter1 || 10; 
    let num2 = parameter2 || 20;
    let sum = num1 + num2;
    console.log("The sum of Two Numbers is: ",sum);
}
addTwoNumbers(20, 50);
addTwoNumbers(40, 50);
addTwoNumbers(); // Output will be NaN - Not a Number if ( OR ) is not used