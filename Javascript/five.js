let numbers = [1, 2, 3, 4, 5];

// Using map() to double each number
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Using filter() to filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using reduce() to calculate sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:",sum)
