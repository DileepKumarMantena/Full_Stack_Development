function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 !== 0)
                return num1 / num2;
            else
                return "Division by zero error";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(3, 0, '/'));  // Output: Division by zero error
console.log(calculate(5,5,'*'))

// arthametic 
// logical 
//comparison
