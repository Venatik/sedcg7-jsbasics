let bobSalary = 1000;
let rent = 375;
let bills = 250;

let totalExpenses = rent + bills;
let amountLeft = bobSalary - totalExpenses;

console.log("Amount Bob has left after expenses: " + amountLeft + " Euros");
console.log("Total amount of expenses: " + totalExpenses + " Euros");

// =========================================================
function calculateExpenses() {
    let salary = prompt("Enter your salary: ");
    let rent = prompt("Enter the rent amount: ");
    let bills = prompt("Enter the bills amount: ");

    salary = parseInt(salary);
    rent = parseInt(rent);
    bills = parseInt(bills);

    let totalExpenses = rent + bills;
    let amountLeft = salary - totalExpenses;

    console.log("Amount left after expenses: " + amountLeft + " Euros");
    console.log("Total amount of expenses: " + totalExpenses + " Euros");
}

calculateExpenses();