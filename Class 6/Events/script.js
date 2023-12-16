// Events
console.log("------------------Events------------------");

// 1. Select the element (Button)
// 2. Choose the event (click)
// 3. Respond to event (write code)

// Three ways to bind events to an element
// 1. HTML event handlers - uses attributes in HTML
// 2. Traditional DOM event handlers
// 3. DOM Level 2 event listeners - most common way

// --------------------HTML Event Handlers--------------------

function alertMessage() {
    alert("This is an alert message");
}

let messageText = document.getElementById("message");
function changeText() {
    messageText.innerText = "This is a new message";
}

// --------------------Traditional DOM Event Handlers--------------------

// anonymous function - function is defined inside the event handler, used in one place only

// document.getElementById("btnDOM1").onclick = function() {
//     alert("Button clicked - event binding in traditional DOM!");
// }

// named function - function is defined outside the event handler, can be reused

let button = document.getElementById("btnDOM1");
function alertMe() {
    alert("Button clicked - event binding in traditional DOM!");
}
button.onclick = alertMe;

// ------------------------DOM Level 2 Event Listeners--------------------

let button5 = document.getElementById("btnDOM2");

// document.getElementById("btnDOM2").addEventListener("click", function() {
//     alert("Button clicked - event binding in DOM Level 2!");
// });

button5.addEventListener("click", function() {
    alert("Button clicked - we learned about addEventListener()!");
});

// Exercise 1

let button6 = document.getElementById("btn6");
let myName = "Stefan";

button6.addEventListener("click", function() {
    alert(`Hello ${myName}!`);
});

// Exercise 2

// 1. Add 2 buttons: "Show text", "Hide text"
// 2. Add an h1 with some text
// 3. On click on "Show text" button, the text should be displayed
// 4. On click on "Hide text" button, the text should be hidden

let heading = document.getElementById("myHeader");
let showText = document.getElementById("btnShow");
let hideText = document.getElementById("btnHide");

showText.addEventListener("click", function() {
    heading.style.display = "block";
});
hideText.addEventListener("click", function() {
    heading.style.display = "none";
});

// --------------------Target event object--------------------

let redDivider = document.getElementById("redDiv");
let secondDivider = document.getElementById("secondDiv");
let paragraph = document.getElementById("someParagraph");

function setColorToDiv(event) {
    event.target.style.backgroundColor = "red";
}

redDivider.addEventListener("mousemove", setColorToDiv); //event.target = redDivider
secondDivider.addEventListener("mousemove", setColorToDiv); //event.target = secondDivider
paragraph.addEventListener("click", setColorToDiv); //event.target = paragraph

// --------------------Removing events--------------------
// Add click event to our target element redDivider
// On click on the target element, remove the mousemove event listener
// When the target element is clicked, also add green background

redDivider.addEventListener("click", function(event) {
    event.target.style.backgroundColor = "green";
    event.target.removeEventListener("mousemove", setColorToDiv);   
});

// --------------------Getting values from inputs --------------------

let inputName = document.getElementById("nameField");
let buttonField = document.getElementById("btnField");

buttonField.addEventListener("click", function() {
    // get value from input
    console.log(`Somebody shared their name: ${inputName.value}.`);
    // clear input field
    inputName.value = "";
});

// Exercise 3

// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let buttonSubmit = document.getElementById("btnSubmit");
// let outputParagraph = document.getElementById("output");

// buttonSubmit.addEventListener("click", function() {
//     outputParagraph.innerHTML = (`First name: ${firstName.value}, Last name: ${lastName.value}, Email: ${email.value}, Password: ${password.value}`);
//     firstName.value = "";
//     lastName.value = "";
//     email.value = "";
//     password.value = "";
// });

// Alternative solution:
let input = document.getElementById("userForm").children;
let buttonSubmit = document.getElementById("btnSubmit");
let outputParagraph = document.getElementById("output");

function getUserInfo(inputElements) {
    let result = "User: ";
    for (let input of inputElements) {
        if (input.value) {
            result += input.value + " ";
        }
    }
    return result;
    }

buttonSubmit.addEventListener("click", function() {
    outputParagraph.innerText = getUserInfo(input)
});
