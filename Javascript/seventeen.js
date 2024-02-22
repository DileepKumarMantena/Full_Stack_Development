// // let a=[1,3,4,5,6,7,8,9,10]


// // for (let i =0; i<a.length;i++)

// // {
// //     if (a[i]%2==0){

// //         console.log('Even Number',i);
// //         continue;
    
// //     }
// //     else {
// //         console.log('Odd Number',i)
// //     }
// // }

// // let count = 0;

// // while (count < 3) {
// //     console.log("Count:", count);
// //     count--;
// // }

// // let x = 5;

// // do {
// //     console.log("Value of x:", x);
// //     x--;
// // } while (x > 0);



// // for (let i = 0; i < 5; i++) {
// //     if (i === 2) {
// //         continue;
// //     }
// //     console.log("Value of i:", i);
// // }

// // let day = "";

// // switch (day) {
// //     case "Monday":
// //         console.log("It's the start of the week.");
// //         break;
// //     case "Friday":
// //         console.log("It's almost the weekend!");
// //         break;
// //     default:
// //         console.log("It's a regular day.");
// // }


// // function addNumbers(a, b) {
// //     c=a+b
// //     return c;
// // }

// // let result = addNumbers(3, 4);
// // console.log("Sum:", result);


// // const greet = (name) => {
// //     console.log(`Hello, ${name}!`);
// //   };
  
// // const addNumbers= (a=10,b=10)=>{
// //     console.log(a+b)
// // }




// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Function Invocation
// greet("John"); // Output: Hello, John!

// const greet = (name) => {
//   console.log(`Hello, ${name}!`);
// };

// // Function Invocation
// greet("Alice"); // Output: Hello, Alice!

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function Invocation
const total = sum(1, 2, 3, 4, 5);
console.log(total);
