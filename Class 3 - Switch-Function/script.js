// ---------------SWITCH STATEMENT----------------
console.log("---------------SWITCH STATEMENT----------------");

// if/else example
// let userInput = parseInt(prompt("Enter a number from 1 to 7: "));

// if(userInput === 1) {
//     console.log(" You are free on Monday.");
// }
// else if(userInput === 2) {
//     console.log("You have a class on Tuesday.");
// }
// else if(userInput === 3) {
//     console.log("You are free on Wednesday.");
// }
// else if(userInput === 4) {
//     console.log("You have a class on Thursday.");
// }
// else if(userInput === 5) {
//     console.log("You are free on Friday.");
// }
// else if(userInput === 6) {
//     console.log("You have a class every other Saturday.");
// }
// else if(userInput === 7) {
//     console.log("You are free on Sunday.");
// }
// else {
//     console.log("Invalid input!");
// }

// switch statement example

// switch(userInput) {
//     case 1:
//         console.log(" You are free on Monday.");
//         break; 
//     case 2:
//         console.log("You have a class on Tuesday.");
//         break;
//     case 3:
//         console.log("You are free on Wednesday.");
//         break;
//     case 4: 
//         console.log("You have a class on Thursday.");
//         break;
//     case 5:
//         console.log("You are free on Friday.");
//         break;
//     case 6:
//         console.log("You have a class every other Saturday.");
//         break;
//     case 7:
//         console.log("You are free on Sunday.");
//         break;
//     default:
//         console.log("Invalid input!");
//         break;
// }

// Fallthrough scenario (if we omit some break):
// switch(userInput) {
//     case 1:
//         console.log(" You are free on Monday.");
//         break; 
//     case 2:
//         console.log("You have a class on Tuesday.");
//     case 3:
//         console.log("You are free on Wednesday.");
//     case 4: 
//         console.log("You have a class on Thursday.");
//         break;
//     case 5:
//         console.log("You are free on Friday.");
//         break;
//     case 6:
//         console.log("You have a class every other Saturday.");
//         break;
//     case 7:
//         console.log("You are free on Sunday.");
//         break;
//     default:
//         console.log("Invalid input!");
//         break;
// }

// You can call the function before it is declared, but try not to do it.
console.log("---------------FUNCTIONS----------------");

// function myFunction(x, y) {
//     let myVar = x * y;
//     console.log(myVar);
//     return myVar;
//     // once return is placed, the function stops executing
// }

// myFunction(2, 3);
// myFunction(600, 4);

// This function is only declared, but not called
// Good practice: first declare the function, then call it (use it)
function sayHello() {
    console.log("Hello G7!");
}

sayHello();

// Functions with parameters
// Scope

let globalScope = 222; //global scope
let num1 = 10;
let num2 = 5;

function sumOfNumbers(number1, number2) {
    let result = number1 + number2; // functional scope
    console.log(`The result is: ${result}`);
    globalScope = 300;
}

sumOfNumbers(4, 5);
console.log(globalScope);
// Possible to change variables declared outside the function, but not recommended.
result = 20; // global scope
console.log(`Outside result: ${result}`);

sumOfNumbers(num1, 5);
sumOfNumbers(num1, num2);

// Functions with return values

function sumOfNumbersReturn(num1, num2) {
    let result = num1 + num2;
    return result;
}

let resultSum1 = sumOfNumbersReturn(10, 40);
let resultSum2 = sumOfNumbersReturn(100, 50);
let totalResult = resultSum1 + resultSum2;

console.log(`Result sum1: ${resultSum1}`);
console.log(`Result sum2: ${resultSum2}`);
console.log(`Total result: ${totalResult}`);

let testSum1 = sumOfNumbers(10, 40);
let testSum2 = sumOfNumbers(100, 50);
let testResult = testSum1 + testSum2;
console.log(`Test result: ${testResult}`);

function changeGlobalValue(newValue) {
    globalScope = newValue;
}

changeGlobalValue(700);
console.log(`Global scope: ${globalScope}`);

// Functions with default parameters

function sumOfThreeNumbers(num1, num2, num3 = 150) { // 150 is default value of num3, if we give a value it will be ignored
    let resultOfNumbers = num1 + num2 + num3;
    return resultOfNumbers;
}

let functionResult = sumOfThreeNumbers(10, 20);
let functionResult2 = sumOfThreeNumbers(10, 20, 30);
let newTotalResult = functionResult + functionResult2;

console.log(`Function result: ${functionResult}`);
console.log(`Function result2: ${functionResult2}`);
console.log(`New total result: ${newTotalResult}`);

console.log("---------------SCOPE----------------");

let input = 5; // This lives in the global scope and we can use it in our function

function scopeTestFunction(num1, num2) { // This is the functional scope. Everything that's inside of the curly braces is the functional scope.
    let result = num1 + num2 + input;
    console.log(`The result is: ${result}`);

    if(input === 5) {
        let result2 = num1 + num2 - input;
        var someNumber = 5555;
        const someConst = 111;

        console.log(`result2 is: ${result2}`);
    }
        // console.log(`result2 is: ${result2}`); //gives error because let is block scope. It is only available inside the if statement.
        // console.log(`Some Const: ${someConst}`); // const is block scope. It is only available inside the if statement.

        console.log(`Some Number: ${someNumber}`); // var is function scope. It is available outside the if statement.
}

scopeTestFunction(1, 10);

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    console.log(`You are ${age} years old.`);
}

calculateAge(1989, 2023);

// With getcurrentyear builtin function

function calculateAge2(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    // alternative: let age = new Date().getFullYear() - birthYear;
    console.log(`You are ${age} years old.`);
}

calculateAge2(1989);