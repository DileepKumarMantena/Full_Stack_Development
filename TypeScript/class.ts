// // class Car {
// //     // Properties
// //     brand: string;
// //     model: string;
// //     year: number;

// //     // Constructor
// //     constructor(brand: string, model: string, year: number) {
// //         this.brand = brand;
// //         this.model = model;
// //         this.year = year;
// //     }

// //     // Method to display car details
// //     displayDetails(): void {
// //         console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
// //     }
// // }

// // // Create an instance of Car
// // let myCar = new Car("Toyota", "Camry", 2020);

// // // Access properties and call method
// // myCar.displayDetails();

// class Person {
//     name: string;
//     age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  

// class Student extends Person {
//     studentId: number;
  
//     constructor(name: string, age: number, studentId: number) {
//       super(name, age);
//       this.studentId = studentId;
//     }
  
//     study() {
//       console.log(`${this.name} is studying.`);
//     }
//   }
  

// let myCar = new Student("Deepak",2,2);

// myCar.study();

// let New =new Person("deepak",2)

// New.greet();

class Car {
    private speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
    }
  }
  

class Student extends Car {
    studentId: number;
  
    constructor(speed:number, studentId: number) {
      super(speed);
      this.studentId = studentId;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
