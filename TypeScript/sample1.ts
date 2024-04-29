// Define a class representing a Person
class Person {
    // Define properties
    firstName: string;
    lastName: string;
    age: number;

    // Constructor to initialize properties
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method to greet the person
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`);
    }
}

// Create an instance of the Person class
const person1 = new Person("John", "Doe", 30);

// Call the greet method
person1.greet();
