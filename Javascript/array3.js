// Creating a typed array
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);

// Setting values in a typed array
int32View[0] = 42;
console.log(int32View); // Output: Int32Array [42, 0, 0, 0]

// Typed arrays are particularly useful for handling binary data
