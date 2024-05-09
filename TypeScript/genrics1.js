// // function identity<T>(arg: T): T {
// //     return arg;
// // }
// // let result = identity<number>(10);
// // let result1 = identity<string>("Hai");
// // console.log(result)
// // console.log(result1)
// class Box<T> {
//     private value: T;
//     constructor(value: T) {
//         this.value = value;
//     }
//     getValue(): T {
//         return this.value;
//     }
// }
// let box = new Box<string>("Hello");
// let box1 = new Box<number>(25);
// console.log(box.getValue());
// console.log(box1.getValue())
function printArray(arr) {
    arr.forEach(function (item) { return console.log(item); });
}
var result = printArray([1, 2, 3]);
var result1 = printArray(["a", "b", "c"]);
console.log(result);
console.log(result1);
