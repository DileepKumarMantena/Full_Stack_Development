// // let a=[1,3,4,5,6,7,8,9,10]

// // console.log(a[0])

// // for (let i =0; i<a.length;i++)

// // {
// //     console.log(a[i])
// //     if (a[i]%2==0){

// //         console.log('Even Number');
// //         break;
    
// //     }
// //     else {
// //         console.log('Odd Number')
// //     }
// // }

// // // let count = 0;

// // // while (count < 3) {
// // //     console.log("Count:", count);
// // //     count++;
// // // }

// // // let x = 500;

// // // do {
// // //     console.log("Value of x:", x);
// // //     x--;
// // // } while (x > 0);



// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue;
//     }
//     console.log("Value of i:", i);
// }

// let day = "";

// switch (day) {
//     case "Monday":
//         console.log("It's the start of the week.");
//         break;
//     case "Friday":
//         console.log("It's almost the weekend!");
//         break;
//     default:
//         console.log("It's a regular day.");
// }


// function addNumbers(a, b) {
//     c=a+b
//     return c;
// }

// let result = addNumbers(3, 4);
// console.log("Sum:", result);


const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
const addNumbers= (a=10,b=10)=>{
    console.log(a+b)
}
