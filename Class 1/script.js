console.log("Hello from javascript");

//Variables

var trainer;
console.log(trainer);

//initialisation
trainer = "Pane";
console.log(trainer);

// declaration & init

var assistant = "Aleksandar";
console.log(assistant);

trainer = "Jove";
console.log(trainer)

//in js it's possible to reassign var value to a different data type

//Undefined vs Null
console.log("-------Undefined vs Null-------");

var testVar;
console.log(testVar);
console.log(typeof testVar);

var testVar02 = null;
console.log(testVar02);
console.log(typeof testVar02);

// Naming convention types:

// camelCase: testOne, userInputNumber - usually used for naming variables in JS
// PascalCase: UsedInputNumber - usually used for classes
// kebab-case - user-input-number

// Data types

// String
var name1 = "John Doe";
console.log(typeof name1);

// Number
var num1 = 5
console.log(typeof num1);

//Boolean
var booleanType = true
console.log(typeof booleanType);

// Equality in JS
console.log("-------Equality in JS--------")

console.log(5 === "5"); //Check if both are equal by value and type
console.log(5 == "5") //Check value

console.log(4 !== "4");
console.log(4 != "4");

console.log(4 > 2);

console.log(7 * 12);

//Assignment operators

var a = 5;
console.log("Original value of a:", a);
var b = 1;
console.log("Original value of b:", b);

console.log(a += b);
console.log("New value of a:", a);
console.log(a -= b);

// Exercise 3 - 1
var feetValue = 7;
var metersValue = feetValue * 0.3048;
console.log(metersValue);

//Alternative
var feet = 90;
var ponder = 0.3048;
var feetToMeters = feet * ponder;
console.log(feet + " feet are equal to:", feetToMeters, "meters.");


//Newer fancy way
console.log(`${feet} feet are equal to ${feetToMeters} meters.`)

// Exercise 3 -2
let sideA = 14;
let sideB = 8;
let resultArea = sideA * sideB;
console.log(`Rectangle area is ${resultArea}m2.`)

// Exercise 3 - 3
let radius = 4;
let pi = Math.PI
// console.log(pi);

let areaCircle = (radius * radius) * pi;
console.log(`Cicle Area is ${areaCircle}m2.`)