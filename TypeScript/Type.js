function getFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
// Later in the codebase...
var fullName1 = getFullName("John", "Doe");
console.log(fullName1);
// After refactoring, changing the function signature
// Error: Expected 2 arguments, but got 1.
var fullName2 = getFullName("John");
console.log(fullName2);

// Later in the codebase...
var fullName3 = getFullName("Deepak", "Kumar");
console.log(fullName3);

