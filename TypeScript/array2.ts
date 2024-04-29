let numbers: number[] = [1, 2, 3, 4, 5];

// Add an element to the end of the array
console.log(numbers.push(6));


// Remove and return the last element of the array
let lastElement = numbers.pop();
console.log(lastElement)

// Remove and return the first element of the array
let firstElement = numbers.shift();
console.log(firstElement)

// Add an element to the beginning of the array
console.log(numbers.unshift(0));


// Remove elements from the array and/or insert new elements
console.log(numbers.splice(2, 1)); // Removes one element at index 2
