

// // // // function checkeveorodd(numbers){
// // // //     for (let i=0;i <numbers.length;i++){
// // // //         let number=numbers[i];
// // // //         if (number%2==0){
// // // //             console.log('Even ')

// // // //         }
// // // //         else {
// // // //             console.log('Odd')
// // // //         }

// // // // }
// // // // }
// // // // let a = [1, 2, 3];
// // // // checkeveorodd(a)

// // // // a=[1,2,3]
// // // // a[3]=5
// // // // console.log(a)
// // // // a.push(6,7,8)
// // // // console.log(a)

// // // original=[1,2,3,4,5]
// // // even=[]
// // // odd=[]

// // // for (let i=0;i<original.length;i++)
// // // {
// // //     let number=original[i];
// // //     if (number%2==0){
// // //                     even.push(number)
        
// // //                 }
// // //     else {
// // //                     odd.push(number)
// // //     }
// // // }
// // // console.log(even)
// // // console.log(odd)

// // // let colors = ['red', 'green', 'blue'];

// // // colors.pop();

// // // console.log(colors)


// // let fruits = ['apple', 'banana', 'cherry'];

// // console.log(fruits.indexOf('banana')); 
// // console.log(fruits.includes('orange'));

// // console.log(fruits[1])


// // array=[1,2,3,4,5,6,7,4,8,9]

// // console.log(Math.max(...array))
// // console.log(Math.min(...array))
// // console.log(Math.sqrt(4))
// // console.log(Math.pow(2,2))


// let numbers = [1,2,3,4,5,6,7,4,8,9]
// numbers.forEach(function (number) {
//     console.log(number);
//   });

// let numbers = [2, 5, 8, 10, 15, 20];

// let evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// let squaredNumbers = numbers.map(function (number) {
//     return number * number;
// });

// let a = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//       let number=a[i][j];
//      if (number%2==0){
//         console.log("even")
//      } 
//      else {
//         console.log('Odd')
//      }
//     }
//   }
  

let numbers = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];

let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Maximum number:", max);
console.log("Minimum number:", min);