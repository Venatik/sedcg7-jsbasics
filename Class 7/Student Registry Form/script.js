// FIX THIS CODE

// let students = [];

// function Student(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// function showStudents(studentsArr, element) {
//     element.innerHTML = "";
//     for(let student of studentsArr) {
//         element.innerHTML += `<li><b>Student:</b<${student.firstName} ${student.lastName} - ${student.age} years old</li>`;
        
//     }

// let button = document.getElementById("addButton");
// let studentList = document.getElementById("studentList");

// button.addEventListener("click", function() {
//     event.preventDefault();
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let age = document.getElementById("age").value;
//     let newStudent = new Student(firstName.value, lastName.value, age).value;
//     students.push(newStudent);
//     // console.log(students);
//     showStudents(students, studentList);

//     firstName.value = "";
//     lastName.value = "";
//     age.value = "";
// })};


// Alternative solution:

let students = [];
function saveStudent() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    let student = {
        firstName,
        lastName,
        age
    };

    students.push(student);
    console.log(students);

    let studentList = document.getElementById("studentList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `<b>Student: </b>${firstName} ${lastName} - ${age} years old`;
    studentList.appendChild(listItem);
    console.log(listItem);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", saveStudent);