"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.multiply = exports.sum = void 0;
var sum = function (a, b) {
    return a + b;
};
exports.sum = sum;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
