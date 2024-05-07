"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
var result1 = (0, math_1.sum)(5, 3);
console.log(result1); // Output: 8
var result2 = (0, math_1.multiply)(4, 2);
console.log(result2); // Output: 8
var calc = new math_1.Calculator();
var result3 = calc.add(10, 5);
console.log(result3); // Output: 15
