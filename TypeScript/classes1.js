// // class Person {
// //     name: string;
// //     age: number;
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //     greet() {
// //         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// //     }
// // }
// // const person = new Person('John', 30);
// // person.greet(); 
// //inheritance
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Animal makes a sound');
//     }
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     makeSound1() {
//         console.log('Dog barks');
//     }
// }
// class Cat extends Dog {
//     constructor(name: string) {
//         super(name);
//     }
//     makeSound2() {
//         console.log('Cat barks');
//     }
// }
// class Rat extends Dog {
//     constructor(name: string) {
//         super(name);
//     }
//     makeSound3() {
//         console.log('Rat barks');
//     }
// }
// class Mat extends Rat {
//     constructor(name: string) {
//         super(name);
//     }
//     makeSound4() {
//         console.log('Mat barks');
//     }
// }
// const dog = new Dog('Buddy');
// dog.makeSound(); // Output: Dog barks
// const cat= new Cat('Meow');
// cat.makeSound();
// const rat= new Rat('Meow');
// cat.makeSound();
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        this.speed += 10; //60
    };
    Car.prototype.getSpeed = function () {
        return this.speed -= 10;
    };
    return Car;
}());
var car = new Car(50);
car.accelerate();
console.log(car.getSpeed());
