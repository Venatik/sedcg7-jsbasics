let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let phoneTable = document.getElementById("phoneTable");

function validateInput(firstName, lastName, phoneNumber) {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return false;
    }
    if (typeof phoneNumber !== "number" || isNaN(phoneNumber)) {
        return false;
    }
    return true;
}

function addContact() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let phoneNumber = Number(phoneNumberInput.value);

    if (validateInput(firstName, lastName, phoneNumber)) {
        let newRow = document.createElement("tr");
        let firstNameCell = document.createElement("td");
        let lastNameCell = document.createElement("td");
        let phoneNumberCell = document.createElement("td");
        let actionCell = document.createElement("td");

        firstNameCell.textContent = firstName;
        lastNameCell.textContent = lastName;
        phoneNumberCell.textContent = phoneNumber;

        firstNameCell.style.border = "1px solid black";
        lastNameCell.style.border = "1px solid black";
        phoneNumberCell.style.border = "1px solid black";

        let editButton = document.createElement("button");
        editButton.textContent = "EDIT";
        editButton.addEventListener("click", function () {
            let newFirstName = prompt("Enter new first name:", firstNameCell.textContent);
            let newLastName = prompt("Enter new last name:", lastNameCell.textContent);
            let newPhoneNumber = prompt("Enter new phone number:", phoneNumberCell.textContent);

            firstNameCell.textContent = newFirstName;
            lastNameCell.textContent = newLastName;
            phoneNumberCell.textContent = newPhoneNumber;
        });

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.addEventListener("click", function () {
            newRow.remove();
        });

        phoneTable.appendChild(newRow);

        newRow.appendChild(firstNameCell);
        newRow.appendChild(lastNameCell);
        newRow.appendChild(phoneNumberCell);
        newRow.appendChild(actionCell);

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

    } else {
        alert("Invalid input! Please enter a valid first name, last name, and phone number.");
    }

    firstNameInput.value = "";
    lastNameInput.value = "";
    phoneNumberInput.value = "";
}

let addContactButton = document.getElementById("addContact");
addContactButton.addEventListener("click", addContact);