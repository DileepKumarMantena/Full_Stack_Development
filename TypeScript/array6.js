var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(function (num) { return num * 2; }); // doubledNumbers is [2, 4, 6]
console.log(doubledNumbers)
var numbers1 = [1, 2, 3, 4, 5];
var evenNumbers = numbers1.filter(function (num) { return num % 2 === 0; }); // evenNumbers is [2, 4]
console.log(evenNumbers)
var numbers2 = [1, 2, 3, 4, 5];
var sum = numbers2.reduce(function (acc, curr) { return acc + curr; }, 0); // sum is 15
console.log(sum)


