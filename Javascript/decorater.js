// function logExecution(target, key, descriptor) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (...args) {
//         console.log(`Executing ${key} with arguments:`, args);
//         const result = originalMethod.apply(this, args);
//         console.log(`Result of ${key}:`, result);
//         return result;
//     };

//     return descriptor;
// }

// class Calculator {
//     @logExecution
//     add(a, b) {
//         return a + b;
//     }
// }

// const calculator = new Calculator();

// calculator.add(2, 3); // Logs execution details

a=[1,5,6,8]

for (i=0;i<=a.length;i++){
    console.log(i)
}

function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num;
        num += 1;
    }
}

const generator = numberGenerator();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: 3

