function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10,2);
    console.log("Result is :",result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
finally {
    console.log("Finally block executed");
}



// async function fetchData() {
//     try {
//         const response = await fetch("https://example.com/api/data");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // console.error("An error occurred:", error.message);
//         console.log('Please try again after some time')
//     }
// }
// fetchData();
