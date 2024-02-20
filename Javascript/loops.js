// // // let a=2

// // // if (a%2==0){
// // //     console.log('A is even')
// // // }
// // // else {
// // //     console.log('A is Odd')
// // // }

// let b=[1,2,7,8]

// for (let i=0 ; i < b.length; i++) {
//     if (b[i] %2==0){
//         console.log('i is even',i)
//     }
//     else {
//         console.log('i is odd',i)
//     }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  } else {
    oddNumbers.push(numbers[i]);
  }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);