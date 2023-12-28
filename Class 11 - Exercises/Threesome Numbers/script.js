// Write a program in programming language JS that will print in
// console all threesome numbers in given interval for which the Pythagorean condition is met.
// a*a + b*b = c*c

// ========Way 1========
// function Pythagoras(x) {
//     for(let a = 1; a < x-1; a++) {
//         for(let b = a; b < x; b++) {
//             c = (a**2+b**2)**0.5;
//             if(c%1 === 0){
//                 console.log(a,b,c)
//             }
//         }
//     }

// }

// Pythagoras(20)

// ========Way 2========

let start = 1;
let end = 20;

for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
        for (let c = start; c <= end; c++) {
            if (a * a + b * b === c * c) {
                console.log(`The condition is met for: ${a}, ${b} and ${c}`)
            }
        }
    }
}

// ========Way 3========
// function isPerfectSquare(num) {
//     let sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
// }

// function findThreesomeNumbers(start, end) {
//     for (let a = start; a <= end; a++) {
//         for (let b = start; b <= end; b++) {
//             let cSquare = a * a + b * b;
//             if (isPerfectSquare(cSquare)) {
//                 let c = Math.sqrt(cSquare);
//                 console.log(`The condition is met for: ${a}, ${b} and ${c}`);
//             }
//         }
//     }
// }

// findThreesomeNumbers(1, 20);