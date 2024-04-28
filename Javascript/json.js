var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
var jsonObject = JSON.parse(jsonString);

console.log(typeof(jsonObject));
console.log(Object.keys(jsonObject));
console.log(Object.values(jsonObject));
console.log(jsonObject.city)

a={"results":[{"gender":"male","name":{"title":"Mr","first":"Rogelio","last":"Candelaria"},"location":{"street":{"number":8420,"name":"Circuito Arroyo"},"city":"Moctezuma","state":"Tamaulipas","country":"Mexico","postcode":55836,"coordinates":{"latitude":"26.4102","longitude":"-58.0521"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"rogelio.candelaria@example.com","login":{"uuid":"d2cd58d8-a52a-44d0-b5ea-0da2969d9a09","username":"whitemouse113","password":"erin","salt":"MukPq1dU","md5":"e1420c96b79f4d0701d39ee137b33d2d","sha1":"610ef7287b272b03ed6df3b79d932f6e483bc86e","sha256":"65d137795d67f8f72d78985aa9196e7a74a91ecb6e950f44a1fb55f7dd1f1a6a"},"dob":{"date":"1992-07-30T08:49:20.548Z","age":31},"registered":{"date":"2014-12-23T11:52:06.107Z","age":9},"phone":"(664) 686 6069","cell":"(639) 825 2067","id":{"name":"NSS","value":"31 03 86 0774 1"},"picture":{"large":"https://randomuser.me/api/portraits/men/13.jpg","medium":"https://randomuser.me/api/portraits/med/men/13.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/13.jpg"},"nat":"MX"}],"info":{"seed":"91b4fac424045696","results":1,"page":1,"version":"1.4"}}

console.log(typeof(a))
// var person = { name: 'Alice', age: 25, city: 'London' };
// var jsonString = JSON.stringify(person);

// console.log(jsonString);

var j = {
    "name": "Bob",
    "age": 28,
    "address": {
        "street": "123 Main St",
        "city": "Anytown"
    }
};
console.log(j.address.city)

var k = '{"name": "John", "age": 30, "city": "New York"}';

var jsonArray = '[{"name": "Tom", "age": 35}, {"name": "Sara", "age": 28}]';
var arrayObject = JSON.parse(jsonArray);

console.log(arrayObject[0].name); 
console.log(arrayObject[1].name);  
