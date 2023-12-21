let falsyArray = [1, 2, 4, NaN, undefined, "", null, 10, 20, 30, "hi", -100, true];
let truthyArray2 = [];

function validateArray(array) {
    let filteredArray = [];

    for (let element of array) {
        if (element !== null && element !== 0 && element !== "" && element !== undefined && element !== false && !Number.isNaN(element))
            filteredArray.push(element)
    }

    return filteredArray;
}

console.log(validateArray(falsyArray));

// console.log(isNaN("hello")); //true
// console.log(Number.isNaN("hello")); //false, doesn't just return the value of NaN


// =========Version 2 with === and continue, if the code encounters any of the === condition it keeps going============

function validateArray2(array) {
    let filteredArray = [];
    for (let element of array) {
        if (element === null || element === 0 || element === "" || element === undefined || element === false || Number.isNaN(element))
            continue;
        filteredArray.push(element)
    }

    return filteredArray;
}

console.log(validateArray2(falsyArray));

// ======================Version 3====================================

function validateArray3(array) {
    let filteredArray = [];

    for (let element of array) {
        if (element) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

console.log(validateArray3(falsyArray));