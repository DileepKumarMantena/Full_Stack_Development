// // // const person = {
// // //     firstName: 'John',
// // //     lastName: 'Doe',
// // //     age: 25,
// // // }  

// // //hetrogenus data type    bird
// // // console.log(person["age"])
// // // person['age']=85
// // // console.log(person)
// // // console.log(Object.keys(person))
// // // console.log(Object.values(person))

// // // const { firstName, lastName } = person;
// // // console.log(firstName, lastName);

// // // const currentDate = new Date();

// // // console.log(currentDate.getFullYear())

// // // function Car(make, model, year) {
// // //     this.make = make;
// // //     this.model = model;
// // //     this.year = year;
// // //     this.displayInfo = function() {
// // //       console.log(`${this.year} ${this.make} ${this.model}`);
// // //     };
// // //   }
// // // const myCar = new Car('Toyota', 'Camry', 2022);
// // // myCar.displayInfo(); 
  

// // let target = { a: 1 };
// // let source1 = { b: 2 };
// // let source2 = { c: 3, d: 4 };

// // Object.assign(source1, target, source2);
// // console.log(target);
// // console.log(source1)


// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj));
// console.log(Object.keys(obj))
// console.log(Object.values(obj))


// a=[1,2,3]
// let obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.b = 3; 
// console.log(obj.b);

// b={
//   "name":['Deepak',"JavaScript"]
// }

// for (let i = 97; i <= 122; i++) {
//   console.log(String.fromCharCode(i) + ": " + i);
// }

// Prompt the user to input a character
// const character = prompt("Enter a character:");

// // Get the ASCII value of the input character using charCodeAt()
// const asciiValue = character.charCodeAt(0);

// // Print the ASCII value
// console.log(`The ASCII value of '${character}' is: ${asciiValue}`);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];

// let max = numbers[0];
// let min = numbers[0];

// for (let number of numbers) {
//     if (number > max) {
//         max = number;
//     }
//     if (number < min) {
//         min = number;
//     }
// };

// console.log("Maximum number:", max);
// console.log("Minimum number:", min);


// const  obj={
//     "library": {
//       "name": "City Central Library",
//       "location": "Downtown",
//       "books": [
//         {
//           "title": "The Great Gatsby",
//           "author": {
//             "first_name": "F. Scott",
//             "last_name": "Fitzgerald"
//           },
//           "publication_year": 1925,
//           "genres": ["Novel", "Historical"],
//           "reviews": [
//             {
//               "reviewer": "Alice",
//               "rating": 5,
//               "comment": "A masterpiece of literature."
//             },
//             {
//               "reviewer": "Bob",
//               "rating": 4,
//               "comment": "Great writing and storytelling."
//             }
//           ]
//         },
//         {
//           "title": "To Kill a Mockingbird",
//           "author": {
//             "first_name": "Harper",
//             "last_name": "Lee"
//           },
//           "publication_year": 1960,
//           "genres": ["Novel", "Drama"],
//           "reviews": [
//             {
//               "reviewer": "Carol",
//               "rating": 5,
//               "comment": "A must-read for everyone."
//             },
//             {
//               "reviewer": "Dave",
//               "rating": 4,
//               "comment": "Very impactful and thought-provoking."
//             }
//           ]
//         }
//       ]
//     }
//   }

// // Object values
// const values = Object.values(obj);
// console.log("Object values:");
// console.log(values);

// // Object keys
// const keys = Object.keys(obj);
// console.log("Object keys:");
// console.log(keys);


function palindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    let rev = lowerCaseStr.split("").reverse().join("");
    if (rev == lowerCaseStr) {
        return "It is a palindrome"
    }
    else{
        return "It is not a Palindrome"
    }
}

let str ="maDam"
console.log(palindrome(str))

function performOperations(a, b) {
    var resultAdd;
    var resultMult;
    var resultSum;

    if (typeof a === 'number' && typeof b === 'number') {
        resultAdd = a + b;
        resultMult = a * b;
        resultSum = a - b;
        console.log("Addition result:", resultAdd);
        console.log("Multiplication result:", resultMult);
        console.log("subtraction  result:", resultSum);
    } else {
        console.log("Both a and b should be numbers for operations.");
    }
}


var a = 10;
var b = 20;
performOperations(a, b);



fetch('https://randomuser.me/api')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const firstName = data.results[0].name.first;
        const lastName = data.results[0].name.last;
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
    })
    .catch(error => {
        console.error('Error fetching data from API:', error);
    });

a={

    'name':'5555',
    'age':25,
    'city':'vizag'
}

console.log(a['name'])