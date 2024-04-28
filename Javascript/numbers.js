console.log(Number.isFinite(42)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

console.log(Number.isInteger(42)); // Output: true
console.log(Number.isInteger(42.5)); // Output: false

console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(42)); // Output: false

console.log(Number.isSafeInteger(42)); // Output: true
c=Math.pow(2, 53)
console.log(c)
console.log(Number.isSafeInteger(Math.pow(2, 53))); // Output: false

console.log(Number.parseFloat("42.5")); // Output: 42.5
console.log(Number.parseFloat("42.5abc")); // Output: 42.5
