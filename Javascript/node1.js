// Check if two command line arguments are provided
if (process.argv.length !== 4) {
    console.error('Usage: node add.js <number1> <number2>');
    process.exit(1);
  }
  
  // Extract the two numbers from command line arguments
  const num1 = parseFloat(process.argv[2]);
  const num2 = parseFloat(process.argv[3]);
  
  // Check if the provided arguments are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error('Invalid input. Please provide valid numbers.');
    process.exit(1);
  }
  
  // Perform addition
  const sum = num1 + num2;
  const sub= num1+num2;
  
  
  // Output the result
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
  