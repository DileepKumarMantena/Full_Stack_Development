interface Person {
    name: string;
    age: number;
}


let people:Person [] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];


console.log(people[2]['age'])