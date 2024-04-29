// Define a class representing a Person
var Person = /** @class */ (function () {
    // Constructor to initialize properties
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Method to greet the person
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
// Create an instance of the Person class
var person1 = new Person("John", "Doe", 30);
// Call the greet method
person1.greet();
