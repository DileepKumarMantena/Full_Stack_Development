// // // // // // let fruits = ['apple', 'banana', 'cherry'];

// // // // // // console.log(fruits)

// // // // // // fruits[1] = 'orange';

// // // // // // console.log(fruits); // ['apple', 'orange', 'cherry']


// // // // // // s=[1,2,3]

// // // // // // //mutable 

// // // // // // //immutable


// // // // // const person ={
// // // // //     'name':'deepak',
// // // // //     'age':25
// // // // //     }
    
// // // // console.log(person.getInfo());

    
// // // // // console.log(person['age'])

// // // // // const ages =[12,13,14]
    
// // // // // console.log(ages[1])

// // // // // ages[2]=18

// // // // // console.log(ages)

// // // // // person['age']=26

// // // // // console.log(person)

// // // // // ages.pop();

// // // // // console.log(ages)



    
    
// // // // let animals = ['cat', 'dog', 'elephant'];

// // // // for (let i = 0; i < animals.length; i++) {
// // // //   console.log(animals[i]);
// // // // }


// // // // let fruits = ['apple', 'banana', 'cherry'];

// // // // console.log(fruits.indexOf('banana')); // 1
// // // // console.log(fruits.includes('orange')); // false
// // // // console.log(fruits.includes('apple'))

// // // // // console.log(fruits.remove('cherry'))

// // // // console.log(fruits)
// // // // fruits.push('Strawberry');

// // // // console.log(fruits)


// // // // a=[1,7,8,5]

// // // // console.log(a.sort())

// // // // console.log(fruits.sort())


// // // let matrix = [
// // //     [1, 2, 3],
// // //     [4, 5, 6],
// // //     [7, 8, 9]
// // //   ];

// // // // for (let i = 0; i < matrix.length; i++) {
// // // //     for (let j = 0; j < matrix[i].length; j++) {
// // // //       console.log(matrix[i][j]);
// // // //     }
// // // //   }

  
// // // matrix.forEach(function (row) {
// // //     console.log(row)
// // //     row.forEach(function (element) {
// // //     console.log(element)
// // //       console.log(element);
// // //     });
// // //   });
  
// // const person = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     age: 25,
// //     getInfo: function() {
// //       return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
// //     }
// //   };
  
// // console.log(person.getInfo());

// // let a=[12,13,14]


// // const admin = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     age: 25
// // }
// // console.log(admin)

// const car = new Object();
// car.make = 'Toyota';
// car.model = 'Camry';
// car.year = 2022;

// console.log(car);


const currentDate = new Date();

console.log(currentDate.getFullYear()); // Output: Current year

let a=[12,13,14]

console.log(a.min())