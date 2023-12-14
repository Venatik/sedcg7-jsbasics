// Arrays
console.log("----------Arrays-----------");

let myFirstArray = ["Stefan", "Ivan", "Jonas", "Ilija"];
let emptyArray = []; // Arrays can be empty.
let mixedArray = ["Stefan", 10, true, undefined, null, {}, []]; // Arrays can have multiple data types.


console.log(myFirstArray);
console.log(emptyArray);
console.log(mixedArray);

// Access elements in an array
let firstElement = myFirstArray[0];
let secondElement = myFirstArray[1];

console.log(firstElement);
console.log(secondElement);

// Change value of elements in an array
myFirstArray[0] = "Stefanija";
console.log(myFirstArray);
console.log(myFirstArray[0]);

// Getting the length of an array
console.log(`The length of myFirstArray is ${myFirstArray.length}`);

let lastElement = myFirstArray[myFirstArray.length - 1];
console.log(lastElement);

// Adding and removing elements from an array
myFirstArray[myFirstArray.length] = "Dimitar"; // Adds an element to the end of the array
console.log(myFirstArray);
console.log(myFirstArray[myFirstArray.length - 1]);
console.log(myFirstArray[4]);

// Adding elements with .push() method (end of the array)
myFirstArray.push("Ivana", "Stole"); // Adds an element to the end of the array
console.log(myFirstArray);

// Adding elements with .unshift() method (beginning of the array)
myFirstArray.unshift("Pane", "Aleksandar"); // Adds an element to the beginning of the array
console.log(myFirstArray);

// .splice() method - index, how many elements to remove, what to add
myFirstArray.splice(0, 2, "Stefan", "Bob", "Bobule"); // Removes 2 elements from index 0 and adds "Stefan" and "Bob"
console.log(myFirstArray);

// .pop() method - removes the last element from the array
myFirstArray.pop();
console.log(myFirstArray);

// .shift() method - removes the first element from the array
myFirstArray.shift();
console.log(myFirstArray);

// Loop
console.log("-----------Loops-----------");

// While loop
let counter = 1;
while(counter <= 10) {
    console.log(counter);
    counter++; // If we don't add this, the loop will run forever
}

// Exercise 1: Write a javascript program to write the sum of squares of the numbers from 101 to 150
let sum = 0;
let whileCounter = 101;
while(whileCounter <= 150) {
    // whileCounter++; if we put the counter first, we will skip the first number (101)
    console.log(`whileCounter: ${whileCounter}`);
    sum += Math.pow(whileCounter, 2);
    console.log(`Math.pow(): ${Math.pow(whileCounter, 2)}`);
    console.log(`Sum of Squares: ${sum}`);
    whileCounter++;
}
console.log(`The sum of squares of the numbers from 101 to 150 is: ${sum}`);

// Do while loop

// Ask the user to guess our secret number via prompt (ranging from 0-9)
// If the user guesses the number, we print "You guessed the number"
// If the user doesn't guess the number, we ask them to guess again until they guess the number

const secretNumber = 5;
let userNumber = 0;
// do {
//     userNumber = parseInt(prompt("Guess the secret number from 0-9:"));
//     if(userNumber == secretNumber) {
//         console.log("You guessed the number");
//     } else {
//         userNumber = prompt("Guess again");
//     }
// } while (userNumber !== secretNumber);

// Way 2:
// do {
//     userNumber = parseInt(prompt("Guess the secret number from 0-9:"));
// } while (userNumber !== secretNumber);

// while(true) { // Using while(true) is the same as using do while
//     userNumber = parseInt(prompt("Guess the secret number from 0-9:"));
//     if (userNumber === secretNumber) {
//         console.log("You guessed the number");
//         break;
//     }
// }

// For loop
console.log("-----------For loop-----------");

for(let i = 2; i <= 100; i += 2) {
    console.log(i);
}

let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for(let i = 0; i < workingDays.length; i++) {
    console.log(`Day: ${workingDays[i]}`);
}

// Print until Wednesday, without Wednesday
for(let i = 0; i < workingDays.length; i++) {
    if(workingDays[i] === "Wednesday") {
        break;
    }
    console.log(`Day: ${workingDays[i]}`);
}

// Print all days, except Tuesday and Thursday
for(let i = 0; i < workingDays.length; i++) {
    if(workingDays[i] === "Tuesday" || workingDays[i] === "Thursday") {
        continue;
    }
    console.log(`Day: ${workingDays[i]}`);
}

// For-of loop
console.log("-----------For-of loop-----------");

let forOfLoop = [1, 2, 3, 4, 5];
for(let number of forOfLoop) {
    console.log(number);
}

for(let day of workingDays) {
    if(day === "Tuesday" || day === "Thursday") {
        continue;
    }
    console.log(`Day: ${day}`);
}

