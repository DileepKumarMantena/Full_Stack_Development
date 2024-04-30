
let numbers: number[] = [1, 2, 3];
let doubledNumbers = numbers.map(num => num * 2); // doubledNumbers is [2, 4, 6]



let numbers1: number[] = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(num => num % 2 === 0); // evenNumbers is [2, 4]

let numbers2: number[] = [1, 2, 3, 4, 5];
let sum = numbers2.reduce((acc, curr) => acc + curr, 0); // sum is 15
