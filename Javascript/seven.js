const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your name:", function(userInput) {
  console.log("Hello, " + userInput);
  rl.close();
});
