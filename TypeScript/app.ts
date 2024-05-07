import { sum, multiply, Calculator } from './math';

const result1 = sum(5, 3);
console.log(result1); // Output: 8

const result2 = multiply(4, 2);
console.log(result2); // Output: 8

const calc = new Calculator();
const result3 = calc.add(10, 5);
console.log(result3); // Output: 15
