// Objects
console.log("--------------Objects--------------");

// Literal Notation
console.log("--------------Literal Notation--------------");
let pane = {
    firstName: "Panche", // key-value pair
    lastName: "Manaskov",
    age: 31,
    company: "DEPT",
    job: "Developer",
    canSing: false,

    saySomething: function(text) {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and works at ${this.company} as a ${this.job}. He says ${text}`;
    }
}

// Access a property in an object
console.log(pane);
let saySomething = pane.saySomething("Hello G7!");
console.log(saySomething);
console.log(pane.firstName);
console.log(pane.age);

// Changing a property in an object
pane.job = "Software Developer";
console.log(pane.job);

// Adding a new property
pane.hobby = "Reading books";
console.log(pane.hobby);
console.log(pane);

// Deleting a property
delete pane.hobby;

let aleksandar = {}; // Can create an empty object
aleksandar.firstName = "Aleksandar";
console.log(aleksandar);
console.log(aleksandar.firstName);

// Dot Notation
console.log("-------------Dot Notation--------------");

let dog = new Object();
dog.name = "Bobo";
dog.age = 3;
dog.color = "brown";
dog.bark = function() {
    return "Woof! Woof!";
}
console.log(dog);
console.log(dog.bark());

// Constructor Notation
console.log("-------------Constructor Notation--------------");

function Dogs(nameFromUser, ageFromUser, colorFromUser, isLazy) {
    this.name = nameFromUser;
    this.age = ageFromUser;
    this.color = colorFromUser;
    this.isLazy = isLazy;

    this.bark = function() {
        return "Woof! Woof! Woof!";
    }
}

let dog1 = new Dogs("Bobo", 3, "brown", true);
let dog2 = new Dogs("Rex", 5, "black", false);
console.log(dog1);
console.log(dog2);

dog2.name = "Rexy";
console.log(dog2);
dog2.isLazy = true;
console.log(dog2);

delete dog2.color;
console.log(dog2);

// Value and reference type
console.log("-------------Value and reference type--------------");
let a = 5;
let b = 10;
b = a;
a = 20;

console.log("A:", a);
console.log("B:", b);

let obj1 = {
    fName: "Matej"
}
let obj2 = {
    fName: "Ivan"
}

// obj2 = obj1;
obj2 = {...obj1}; // Spread operator

obj1.fName = "Petar";
obj2.fName = "Stefan";

console.log(obj1.fName);
console.log(obj2.fName);