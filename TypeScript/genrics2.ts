// function identity<T>(arg: T): T {
//     return arg;
// }

// // Example usage:
// let result1 = identity<string>("Hello");
// console.log(result1); // Output: Hello

// let result2 = identity<number>(42);
// console.log(result2); // Output: 42


function firstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// Example usage:
let arr1: number[] = [1, 2, 3, 4, 5];
let first1 = firstElement(arr1);
console.log(first1); // Output: 1

let arr2: string[] = ["apple", "banana", "orange"];
let first2 = firstElement(arr2);
console.log(first2); // Output: apple

let arr3: boolean[] = [];
let first3 = firstElement(arr3);
console.log(first3); // Output: undefined
