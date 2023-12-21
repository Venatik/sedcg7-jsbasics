let input1 = parseInt(prompt("Enter the first number:"));
let input2 = parseInt(prompt("Enter the second number:"));

function closerTo100(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert("Please insert positive numbers only.");
    } else if (num1 > 100 || num2 > 100) {
        alert("Please insert numbers lower than or equal to 100.");
    } else {
        if (100 - num1 < 100 - num2) {
            alert(`${num1} is closer to 100.`);
        } else if (100 - num2 < 100 - num1) {
            alert(`${num2} is closer to 100.`);
        } else {
            alert("Both numbers are equally close to 100.");
        }
    }
}


closerTo100(input1, input2);

// Using Math.abs

// let number1 = parseInt(prompt("Gimme a number"));
// let number2 = parseInt(prompt("Gimme another number"));
 
// function checkNumbers(firstNumber, secondNumber) {
//     let firstResult = Math.abs(100 - firstNumber);
//     let secondResult  = Math.abs(100 - secondNumber);
//     if(firstNumber < 0 || secondNumber < 0) {
//         alert("Negative number!!!");
//     } else if(firstResult < secondResult) {
//         alert(`${firstNumber} is closer to 100`);
//     } else if(firstResult == secondResult) {
//         lert("Both numbers are equaly close");
//     } else {
//         alert(`${secondNumber} is closer to 100`);
//     }
// }
 
// checkNumbers(number1, number2);