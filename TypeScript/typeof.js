var maybeString = "Hello";
if (typeof maybeString === "string") {
    // In this block, maybeString is treated as a string
    console.log(maybeString.toUpperCase());
}
var definitelyNumber = "42";
var parsedNumber = parseInt(definitelyNumber);
console.log('TypeofHello', typeof (maybeString));
