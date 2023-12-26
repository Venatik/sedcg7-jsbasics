let myHeader = document.getElementById("myTitle")
console.log(myHeader);
console.log(myHeader.text);

let paragraphs = document.getElementsByClassName("myParagraph");
let secondParagraph = document.getElementsByClassName("second");
console.log(paragraphs);
console.log(paragraphs[0]);
console.log(secondParagraph);
console.log(secondParagraph[0]);

let paragraphs2 = document.getElementsByTagName("p");
let texts = document.getElementsByTagName("text");
console.log(paragraphs2);
console.log(paragraphs2[0]);
console.log(texts);
console.log(texts[0]);

let paragraphs3 = document.querySelectorAll("p");
let firstP = document.querySelector(".myParagraph");
let header = document.querySelector("#myTitle");
console.log(paragraphs3);
console.log(firstP);
console.log(header);

let paragraph = document.getElementsByClassName("myParagraph")[0];
let sibling = paragraph.nextElementSibling;
console.log(paragraph);
console.log(sibling);
console.log(sibling.previousElementSibling);

let parent = document.getElementsByClassName("myParagraph")[0];
let parentDiv = parent.parentElement;
console.log(parent);
console.log(parentDiv);

let myDiv = document.getElementById("main");
let divChildren = myDiv.children;
let divFirstChild = myDiv.firstElementChild;
let divLastchild = myDiv.lastElementChild;
console.log(divChildren);
console.log(divFirstChild);
console.log(divLastchild);

let textSpaces = myDiv.textContent;
let textNoSpaces = myDiv.innerText;
console.log(textSpaces);
console.log(textNoSpaces);

console.log(header.innerText);
header.innerText = "";
console.log(header.innerText);
header.innerText = "New Text!";
console.log(header.innerText);
header.innerText += " New new text!"
console.log(header.innerText);

console.log(myDiv);
myDiv.innerHTML += `<p class="new">Paragraph generated in JS</p>`;
console.log(myDiv);
// myDiv.innerHTML = ""; // remove all code from myDiv.