function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// Later in the codebase...
let fullName1: string = getFullName("John", "Doe");

// After refactoring, changing the function signature
// Error: Expected 2 arguments, but got 1.
let fullName2: string= getFullName("John");

// Later in the codebase...
let fullName3: string = getFullName("Deepak", "Kumar");
