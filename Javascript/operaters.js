let y = 5;
let x = y + 2;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x % y);

//Perform an program to perform all the operations in js


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
        case '==':
            if(num1 == num2)
                return "equal";
            else
                return "not equal"
        
        case '!=':
            if(num1 != num2)
                return "not equal";
            else
                return "equal"
                
        case '>':
            if(num1 > num2)
                return "num1 greater than num2";
            else
                return "num1 not greater than num2"
                        
        case '<':
            if(num1 < num2)
                return "num1 not greater than num2";
            else
                return "num1 greater than num2"
        
        case '>=':
            if(num1 >= num2)
                return "num1 greater than num2";
            else
                return "num1 not greater than num2"
                        
        case '<=':
            if(num1 <= num2)
                return "num1 not greater than num2";
            else
                return "num1 greater than num2"
        
        case '&&':
            if(num1>num2 && num2<num2)
                return "num1 not greater than num2";
            else
                return "num1 greater than num2"    
                    
        case '||':
            if(num1==num2 || num2==num1)
                return "num1 not greater than num2";
            else
                return "num1 greater than num2"   

        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, '+')); // Output: 8
console.log(calculate(10, 2, '/')); // Output: 5
console.log(calculate(3, 0, '/'));  // Output: Division by zero error
console.log(calculate(5,5,'*'))