// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232
// parseInt is required

// ========Way 1========
// let start = parseInt(prompt('Enter the start of the interval:'));
// let end = parseInt(prompt('Enter the end of the interval:'));

// let palindromes = [];

// for (let num = Math.max(start, 0); num <= end && num <= 100000; num++) {
//     let reversedNum = 0;
//     let originalNum = num;
//     let currentNum = num;

//     while (currentNum > 0) {
//         let digit = currentNum % 10;
//         reversedNum = reversedNum * 10 + digit;
//         currentNum = Math.floor(currentNum / 10);
//     }

//     if (originalNum === reversedNum) {
//         palindromes.push(originalNum);
//     }
// }

// console.log('Palindromes:', palindromes);

// ========Way 2========
let startNumber = 100;
let endNumber = 2000;

// for (let i = startNumber; i <= endNumber; i++) {
//     let stringNumber = i.toString();
//     let reversedString = [...stringNumber].reverse().join("");

//     if (stringNumber === reversedString) {
//         console.log(`Palindrome: ${i}`);
//     }
// }

// ========Way 3========
for (let i = startNumber; i <= endNumber; i++) {
    let reversedNumber = 0;
    let helper = i;

    while (helper > 0) {
        let temp = helper % 10;
        reversedNumber = reversedNumber * 10 + temp;
        helper = parseInt(helper / 10);
    }

    if (i === reversedNumber) {
        console.log(`${i} is a Palindrome.`);
    }
}