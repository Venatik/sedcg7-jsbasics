var phones = 30;
var price = 119.95;
var tax = 5 / 100 * 119.5
console.log(tax)
var pricePerPhone = (price + tax);
console.log(pricePerPhone)

var result = pricePerPhone * phones
console.log(`The price for 30 phones is: $${result}.`);