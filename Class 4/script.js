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