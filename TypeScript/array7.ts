
let numbers1: number[] = [1, 2, 3, 4, 5];
let evenNumber = numbers1.find(num => num % 2 === 0); // evenNumber is 2
console.log(evenNumber)

let numbers2: number[] = [1, 2, 3, 4, 5];
let indexOfFirstEvenNumber = numbers2.findIndex(num => num % 2 === 0); // indexOfFirstEvenNumber is 1
console.log(indexOfFirstEvenNumber)


let numbers3: number[] = [1, 2, 3, 4, 5];
let includesThree = numbers3.includes(3); // true
console.log(includesThree)

let numbers4: number[] = [1, 2, 3, 4, 5];
numbers4.reverse(); // numbers is now [5, 4, 3, 2, 1]

let numbers5: number[] = [3, 1, 2, 5, 4];  
numbers5.sort(); // numbers is now [1, 2, 3, 4, 5]

//12345
//54321

//54321





let a: number[] = [1,3,5];

let b: number[] = [2,4,6];

var concatenatedArray = a.concat(b); 

console.log(concatenatedArray.sort())
