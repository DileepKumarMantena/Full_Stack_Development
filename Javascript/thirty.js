function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let min = arr[0]; // Assume the first element is the minimum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }
    
    return min;
}

function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    let max = arr[0]; // Assume the first element is the maximum
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is larger
        }
    }
    
    return max;
}

// Example usage:
const numbers = [5, 3, 9, 1, 7];
console.log("Minimum:", findMin(numbers)); // Output: 1
console.log("Maximum:", findMax(numbers)); // Output: 9
