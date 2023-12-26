// Selectors

// id selector - returns one element
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

// myHeader.innerText = "This is my new title";

// class selector - returns an array of elements
let paragraphs = document.getElementsByClassName("myParagraph");
console.log(paragraphs);

let paragraphOneElement = document.getElementsByClassName("second");
console.log(paragraphOneElement);
console.log(paragraphOneElement[0]);

// tag selector - returns an array of elements
let tagParagraphs = document.getElementsByTagName("p");
console.log(tagParagraphs);

// query selector - returns one element, even from a class/tag. You need to use the full syntax, just like CSS. # for id, . for class, nothing for tag.
let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);

let myHeaderQuery = document.querySelector("#myTitle");
console.log(myHeaderQuery);

let allParagraphsQuery = document.querySelectorAll("p");
console.log(allParagraphsQuery);

// Traversing the DOM tree
let child = document.querySelector(".child");
console.log(child);

let nextSibling = child.nextElementSibling;
console.log(nextSibling);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

// Parent selector
let parentElement = child.parentElement;
console.log(parentElement);

console.log(parentElement.querySelector(":nth-child(2)"));
console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);
console.log(parentElement.children);

// Changing elements
console.log(myHeader);
console.log(myHeader.textContent);
console.log(myHeader.innerText);

myHeader.innerText = "";
myHeader.innerText = "I am      the new header  of the page";
myHeader.innerText += " Hello G7";

console.log(myHeader.textContent);

let pets = ["Dog", "Cat", "Fish", "Rabbit", "Snake"];
let petList = document.getElementById("list");

// for (let i = 0; i < pets.length; i++) {
//   petList.innerHTML += `<li>${pets[i]}</li>`;
// }

for (let pet of pets) {
    list.innerHTML += `<li>${pet}</li>`;
}

petList.style.color = "black";
petList.style.backgroundColor = "pink";
petList.style.fontSize = "20px";
petList.style.display = "block"; // can set to "none" to hide

// Function exercise

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    return result; // if there is a value that we want to keep, we need to use return
}

let calcResult = multiplyTwoNumbers(3, 5); // this is the result of the function
let calcResult2 = multiplyTwoNumbers(10, 2);
console.log(calcResult);

let resultParagraph = document.getElementById("result");
resultParagraph.innerText = `The result of our calculation is ${calcResult}.`;

let resultParagraph2 = document.getElementById("result2");
resultParagraph2.innerText = `The result of our calculation with different parameters is ${calcResult2}.`;

// Function exercise 2, no need to save and return a value

function greetUser(name) {
    alert(`Welcome back, ${name}.`);
}

let namePrompt = prompt("What is your name?");
let namePrompt2 = prompt("What is your name?");
greetUser(namePrompt);
// 100 lines later
greetUser(namePrompt2);