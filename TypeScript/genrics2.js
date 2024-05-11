// function identity<T>(arg: T): T {
//     return arg;
// }
// // Example usage:
// let result1 = identity<string>("Hello");
// console.log(result1); // Output: Hello
// let result2 = identity<number>(42);
// console.log(result2); // Output: 42
function firstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
// Example usage:
var arr1 = [1, 2, 3, 4, 5];
var first1 = firstElement(arr1);
console.log(first1); // Output: 1
var arr2 = ["apple", "banana", "orange"];
var first2 = firstElement(arr2);
console.log(first2); // Output: apple
var arr3 = [];
var first3 = firstElement(arr3);
console.log(first3); // Output: undefined
