// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log(sum); // Output: 15

// //Immutable Arrays:

// const originalArray = [1, 2, 3];
// const modifiedArray = [...originalArray, 4]; // Creates a new array with the added element
// console.log(modifiedArray); // Output: [1, 2, 3, 4]

// // Asynchronous Array Operations:

// async function fetchData(urls) {
//     try {
//         const responses = await Promise.all(urls.map(url => fetch(url))); // Assuming fetch returns a promise
//         const data = await Promise.all(responses.map(response => response.json()));
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// // const urls = ['url1', 'url2', 'url3'];
// // fetchData(urls)
// //     .then(data => {
// //         // Process data
// //     })
// //     .catch(error => {
// //         // Handle errors
// //     });

// //Array Deep Copying and Cloning:

// const originalArray1 = [[1, 2], [3, 4], [5, 6]];
// const copiedArray = JSON.parse(JSON.stringify(originalArray1));


// //Array Data Structures:
// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(item) {
//         this.items.push(item);
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     peek() {
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue()); // Output: 1


