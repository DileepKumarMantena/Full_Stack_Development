function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        return count;
    };
}

let counter = outerFunction();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
