console.log("JS BASICS");

// -------------- Ways of declaring variables ------------------
// VAR, LET, CONST

console.log("-------------- Ways of declaring variables ------------------");

// VAR
var myVar = 2;
// 100 lines later
myVar = 5;
// 300 lines later

var myVar = 20;

console.log("myVar:", myVar);
//var lets you redeclare variables and give new values

// LET
let myLet = 12;
// 100 lines later
myLet = 15;
// 300 lines later
// let myLet = 20;
// let doesn't allow us to redeclare variables, but we can give a new value
let myLetNew = 20;
console.log(myLet);
console.log(myLetNew);

// CONST
const myConst = 25;
// 100 lines later
// myConst = 30;
// const myConst = 30;

console.log("myConst:", myConst);

// --------------- Strings ----------------------------
console.log("------------------------Strings--------------------");

// Concatenation of strings

let myFirstString = "Hello";
let concatenatedString = myFirstString + " Aleksandar";
console.log(concatenatedString);

let weirdOperation = "2" + 4;
let weirdOperation2 = "2" + (4 + 5);
let weirdOperation3 = "2" + (4 + '5');
console.log(weirdOperation);
console.log(weirdOperation2);
console.log(weirdOperation3);

// Types of concatenating strings

let string01 = myFirstString + " Pane.";
let string02 = `Hey, ${myFirstString} Pane.`
let string03 = `${myFirstString}
from
multiple
lines.`;
let string04 = `The sum of the number ${5} and the number ${10} is ${5 + 10}.`
let string05 = 'Please don\'t cross at red lights.';

console.log(string01);
console.log(string02);
console.log(string03);
console.log(string04);
console.log(string05);

// ---------------------Numbers-----------------
console.log("--------------Numbers-------------------");

let operationWithString = 10 - 'bob';
console.log("Weird operation: ", operationWithString);

console.log(typeof(operationWithString));
console.log(operationWithString === NaN);
console.log(operationWithString == NaN);
console.log(isNaN(operationWithString));

let name1 = 'bob';
console.log(typeof(name1));
console.log(name1 === NaN);
console.log(name1 == NaN);
console.log(isNaN(name1));

// ES6 to the rescue

let isThisNaN = Number.isNaN(name1);
let isThisNaN2 = Number.isNaN(operationWithString);

console.log(isThisNaN);
console.log(isThisNaN2);

// -----------------------Logical Operators------------------
console.log("-----------------------Logical Operators------------------");

let operation01 = 2 > 1;
let operation02 = (4 + 5) === (2 + 7);
let operation03 = ("2" + "3") == (20 + 3);

console.log(operation01);
console.log(operation02);
console.log(operation03);

let operation04 = (2 > 3) && (5 == "5");
let operation05 = (2 > 3) || (5 == "5");
let operation06 = 'bob' && 1234;
let operation07 = 12345 || 'bob';
let operation08 = '' && 'bob';
let operation09 = 12345 && 'bob' || null;
let operation10 = null || 12345 && 'bob';
let operation11 = (null || 12345) && 'bob';
let operation12 = true && !(3 === "3");
//Priority of execution: not > and > or

console.log(operation04);
console.log(operation05);
console.log(operation06);
console.log(operation07);
console.log(operation08);
console.log(operation09);
console.log(operation10);
console.log(operation11);
console.log(operation12);

console.log("----------------Control Structures------------------");
console.log("----------------IF/ELSE IF/ELSE Statements------------------");

let score = 115;

if(score > 100) {
    console.log("Congrats!")

    if(score >= 120) {
        console.log("Best result ever, you win a bonus prize!")
    }
    else {
        console.log("You won, but not enough for a bonus prize!")
    }
}
else if(score === 100) {
    console.log("Congrats, you won, but just barely!")
}
else {
  console.log("Sorry, try again!")  
};

// The rest of the code continues
console.log("bla bla");

let trainer = "Pane";
if(trainer) {
    console.log(`Your trainer's name is ${trainer}.`)
}
else {
    console.log(`Your group currently does not have a trainer.`)
}

// Input prompt
let input = prompt("Please input a number:");
let fridayCash = parseFloat(input); //Convert to number
//parseInt = whole numbers. If there's a decimal the number will be rounded down.
//parseFloat = decimal numbers

if(fridayCash >= 50) {
    console.log("You can go out to a dinner and a movie.");
}
else if(fridayCash >= 35) {
    console.log("You can go out to a nice dinner.");
}
else if(fridayCash >= 12) {
    console.log("You have enough money to see a movie.");
}
else {
    console.log("Stay at home.");
}