let btn = document.getElementById("submit");

// Add an event listener to the button
btn.addEventListener("click", function() {
// Get the input value from the input field
let inputYear = document.getElementById("year").value;

// Convert the input value to an integer
let birthYear = parseInt(inputYear);
let zodiac = (birthYear - 4) % 12;

// Target paragraph element to display result
let resultParagraph = document.getElementById("result");

if(zodiac == 0) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: RAT!");
} 
else if (zodiac == 1) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: OX!");
} 
else if (zodiac == 2) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: TIGER!");
} 
else if (zodiac == 3) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: RABBIT!");
} 
else if (zodiac == 4) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: DRAGON!");
} 
else if (zodiac == 5) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: SNAKE!");
} 
else if (zodiac == 6) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: HORSE!");
} 
else if (zodiac == 7) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: GOAT!");
} 
else if (zodiac == 8) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: MONKEY!");
} 
else if (zodiac == 9) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: ROOSTER!");
} 
else if (zodiac == 10) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: DOG!");
} 
else if (zodiac == 11) {
    resultParagraph.innerHTML = ("Your Chinese zodiac sign is: PIG!");
} 
else {
    resultParagraph.innerHTML = ("Sorry, you seem to have gotten an invalid result. Please input a valid birth year.");
}
});