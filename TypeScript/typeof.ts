let maybeString: unknown = "Hello";
if (typeof maybeString === "string") {
    // In this block, maybeString is treated as a string
    console.log(maybeString.toUpperCase());
}

let definitelyNumber: any = "42";
let parsedNumber: number = parseInt(definitelyNumber);

console.log('TypeofHello',typeof(maybeString))


