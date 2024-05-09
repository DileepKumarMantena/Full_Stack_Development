// // // class Person {
// // //     name: string;
// // //     age: number;

// // //     constructor(name: string, age: number) {
// // //         this.name = name;
// // //         this.age = age;
// // //     }

// // //     greet() {
// // //         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// // //     }
// // // }

// // // const person = new Person('John', 30);
// // // person.greet(); 

// // //inheritance

// // class Animal {
// //     name: string;

// //     constructor(name: string) {
// //         this.name = name;
// //     }

// //     makeSound() {
// //         console.log('Animal makes a sound');
// //     }
// // }

// // class Dog extends Animal {
// //     constructor(name: string) {
// //         super(name);
// //     }

// //     makeSound1() {
// //         console.log('Dog barks');
// //     }
// // }
// // class Cat extends Dog {
// //     constructor(name: string) {
// //         super(name);
// //     }

// //     makeSound2() {
// //         console.log('Cat barks');
// //     }
// // }
// // class Rat extends Dog {
// //     constructor(name: string) {
// //         super(name);
// //     }

// //     makeSound3() {
// //         console.log('Rat barks');
// //     }
// // }
// // class Mat extends Rat {
// //     constructor(name: string) {
// //         super(name);
// //     }

// //     makeSound4() {
// //         console.log('Mat barks');
// //     }
// // }

// // const dog = new Dog('Buddy');
// // dog.makeSound(); // Output: Dog barks


// // const cat= new Cat('Meow');
// // cat.makeSound();

// // const rat= new Rat('Meow');
// // cat.makeSound();


// class Car {
//     private speed: number;

//     constructor(speed: number) {
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;//60
//     }

//     getSpeed() {
//         return this.speed -=10;
//     }
// }

// class Mat extends Car {
//     constructor(speed: number) {
//         super(speed);
//     }

//     makeSound4() {
//         console.log('inside the mat',this.speed)
//     }
// }
// const car = new Car(50);
// car.accelerate();
// console.log(car.getSpeed()); 

// const rat= new Mat(25);
//console.log(rat.makeSound('hi'))
// console.log(rat.makeSound4());

class MathUtils {
    static PI: number = 3.14159;

    static calculateArea(radius: number): number {
        return MathUtils.PI * radius * radius;
    }
}

const radius = 5;
const area = MathUtils.calculateArea(radius);
console.log('Area of the circle:', area);

