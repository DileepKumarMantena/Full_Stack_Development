function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Usage
console.log(sum(1, 2, 3, 4, 5)); 


a=[1,2,3,4,5]