// const person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
//   };
// console.log(typeof(person))
// const jsonString = JSON.stringify(person);
// console.log(typeof(jsonString))
// console.log(jsonString);

// const t = '{"name":"John Doe","age":30,"city":"New York"}';
// console.log(typeof(t))
// const t1 = JSON.parse(t);
// console.log(t1);
// console.log(typeof(t1))


// const fruitsJson = '["apple", "banana", "   orange"]';
// const fruitsArray = JSON.parse(fruitsJson);
// console.log(fruitsArray);

const nestedJson = '{"name":"John Doe","age":30,"address":{"city":"New York","zip":"10001"}}';
const nestedObject = JSON.parse(nestedJson);
console.log(nestedObject);
