function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Usage
  const unsortedArray = [5, 3, 7, 2, 8, 4, 1, 9, 6];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  