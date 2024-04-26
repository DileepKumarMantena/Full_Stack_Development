type MyString = string;
type Point = {
    x: number;
    y: number;
};


type Age=number;



let str: MyString = "Hello, type alias!"; 
let point: Point = { x: 10, y: 20 };

let user = { name: "Alice", age: 30 };
let { name, age } = user;
console.log(name); // "Alice"
console.log(age);  // 30
