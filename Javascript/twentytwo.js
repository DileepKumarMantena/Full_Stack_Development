const matrixA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrixB = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

// Create a new matrix to store the result
const resultMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// Iterate over each row and column of the matrices, adding the corresponding elements
for (let i = 0; i < matrixA.length; i++) {
  for (let j = 0; j < matrixB.length; j++) {
    resultMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
  }
}

// Print the result matrix
console.log(resultMatrix);