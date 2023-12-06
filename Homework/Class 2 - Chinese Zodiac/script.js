let inputDate = prompt("Please input your birth year:");
let birthYear = parseInt(inputDate);
let zodiac = (birthYear - 4) % 12;

if(zodiac == 0) {
    console.log("Your chinese zodiac sign is: RAT!");
}
else if(zodiac == 1) {
    console.log("Your chinese zodiac sign is: OX!");
}
else if(zodiac == 2) {
    console.log("Your chinese zodiac sign is: TIGER!");
}
else if(zodiac == 3) {
    console.log("Your chinese zodiac sign is: RABBIT");
}
else if(zodiac == 4) {
    console.log("Your chinese zodiac sign is: DRAGON!");
}
else if(zodiac == 5) {
    console.log("Your chinese zodiac sign is: SNAKE!");
}
else if(zodiac == 6) {
    console.log("Your chinese zodiac sign is: HORSE!");
}
else if(zodiac == 7) {
    console.log("Your chinese zodiac sign is: GOAT!");
}
else if(zodiac == 8) {
    console.log("Your chinese zodiac sign is: MONKEY!");
}
else if(zodiac == 9) {
    console.log("Your chinese zodiac sign is: ROOSTER!");
}
else if(zodiac == 10) {
    console.log("Your chinese zodiac sign is: DOG!");
}
else if(zodiac == 11) {
    console.log("Your chinese zodiac sign is: PIG!");
}
else {
    console.log("Sorry, you seem to have gotten an invalid result. Please input a valid birth year.");
}