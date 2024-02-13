// let numbers = [1,2,3]

// console.log(numbers.indexOf(3))

// numbers.pop();

// console.log(numbers)

// numbers.push('united States')

// console.log(numbers)

// console.log(numbers.includes('States'))

// numbers = [7, 2, 1, 5, 12]

// console.log("sorted array",numbers.sort())

numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let numbers2 = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];
let addition = []

for (let i = 0; i < numbers.length; i++) {
  addition.push([]);
  console.log("******",addition)
  
  for (let j = 0; j < numbers2[i].length; j++) {
    console.log('-----',j)
    addition[i].push(numbers[i][j] + numbers2[i][j]);
    console.log(addition[i].push(numbers[i][j] + numbers2[i][j]))    
  }
}

console.log("numbers1",numbers)
console.log("numbers2",numbers2)
console.log("addition",addition)



let array=[1,2,4,6,7,8]

for (let i = 0; i < array.length; i++) {
    console.log('i value',i)
    for (let j = 0; j < array.length; j++) {
        console.log('j value ',j)

    }
}
