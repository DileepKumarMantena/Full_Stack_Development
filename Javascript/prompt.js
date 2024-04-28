// // Import the readline module
// const readline = require('readline');

// // Create a readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Function to prompt the user for a number and evaluate whether it is even or odd
// function promptAndCheckNumber() {
//     rl.question("Enter a number: ", (input) => {
//         const number = parseInt(input, 10);
        
//         // Check if the parsed number is a valid integer
//         if (!isNaN(number)) {
//             // Check if the number is even or odd
//             if (number % 2 === 0) {
//                 console.log(`${number} is even.`);
//             } else {
//                 console.log(`${number} is odd.`);
//             }
//         } else {
//             console.log("Invalid input. Please enter a valid number.");
//         }
        
//         // Close the readline interface
//         rl.close();
//     });
// }

// // Call the function to prompt the user and check the number
// promptAndCheckNumber();

// Code to check wheter number is amstrong or not

// Import the readline module
const readline = require('readline');

// Create a readline interface for standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to take user input and return a promise
function getUserInput(promptMessage) {
    return new Promise((resolve) => {
        rl.question(promptMessage, (input) => {
            resolve(input);
        });
    });
}

// Function to check if a number is an Armstrong number
function isArmstrongNumber(number) {
    // Convert the number to a string to iterate through its digits
    const numStr = number.toString();
    const numDigits = numStr.length; // Calculate the number of digits
    let sum = 0;
    
    // Iterate through each digit and calculate the sum of its powers
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i], 10);
        sum += Math.pow(digit, numDigits);
    }
    
    // Check if the calculated sum is equal to the original number
    return sum === number;
}

// Main function
async function main() {
    // Prompt the user for a number
    const userInput = await getUserInput("Enter a number: ");
    
    // Convert the user input to a number
    const number = parseInt(userInput, 10);
    
    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        // Check if the number is an Armstrong number
        if (isArmstrongNumber(number)) {
            console.log(`${number} is an Armstrong number.`);
        } else {
            console.log(`${number} is not an Armstrong number.`);
        }
    }
    
    // Close the readline interface
    rl.close();
}

// Run the main function
main();
