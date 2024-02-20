// // try {
// //     let result =
// //     console.log(result);
// // } catch (error) {
// //     // console.error("An error occurred:", error.message);
// //     console.log('This is error ')
// // }
// // finally{
// //     console.log('This is Finally ')
// // }


// // // try{
// // //     a= "eighteen"
// // //     if (a>=18){
// // //     console.log("You are eligible to vote ")
// // //     }
// // //     else {
// // //     console.log('You are not eligible')
// // //     }

// // // }
// // // catch (error){
// // //     console.log('in catch block')
// // // }


// async function fetchData() {
//     throw new Error("Failed to fetch data");
// }

// (async () => {
//     try {
//         let result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.error("An error occurred:", error.message);
//     }
// })();


function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
