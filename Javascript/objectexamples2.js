// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); 



// // let a=[1,3]
// // let b=[2,4]

// // // 1 2 3 4

// // console.log(a+b)

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("An error occurred:");
}
