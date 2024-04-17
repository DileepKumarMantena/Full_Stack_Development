
const numbers = [358, 153, 741, 874, 120, 1, 47, 85];
const armstrongNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let j = 0; j < numDigits; j++) {
        sum += Math.pow(parseInt(numStr[j]), numDigits);
    }

    if (sum === num) {
        armstrongNumbers.push(num);
    }
}

console.log("Armstrong numbers in the list:", armstrongNumbers);
