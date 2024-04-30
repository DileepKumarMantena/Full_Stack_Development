let fruits: string[] = ['apple', 'banana', 'cherry', 'date'];

// Remove elements from the array
fruits.splice(1, 2); // Removes 2 elements starting from index 1

console.log(fruits); // Output: ['apple', 'date']

// Add elements to the array
fruits.splice(1, 'grape', 'kiwi'); // Insert 'grape' and 'kiwi' at index 1

console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'date']

// Replace elements in the array
fruits.splice(2, 'orange', 'peach'); // Replace 1 element at index 2 with 'orange' and 'peach'

console.log(fruits); // Output: ['apple', 'grape', 'orange', 'peach', 'date']
