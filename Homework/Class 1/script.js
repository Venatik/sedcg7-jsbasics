var phones = 30;
var price = 119.95;
//Calculating tax per item
var tax = 5 / 100 * 119.5;
console.log(tax);
//Calculating price per phone
var pricePerPhone = (price + tax);
console.log(pricePerPhone);
//Calculating price per # of phones
var result = pricePerPhone * phones;
console.log(`The price for 30 phones is: $${result}.`);