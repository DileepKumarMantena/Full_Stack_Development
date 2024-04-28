// async function fetchData() {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
    
//     try {
//         // Fetch data from the URL
//         const response = await fetch(url);
        
//         // Check if the response status is OK (200)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         // Parse the response as JSON
//         const data = await response.json();
        
//         // Log the data
//         console.log('Data:', data);
//     } catch (error) {
//         // Handle errors
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the function
// fetchData();


// function add (a,b){
//     c=a+b
//     return c
//     }

    
// function sub(a,b){
//     c=a-b
//     d=add(2,3)
//     return c,d
// }
// console.log(sub(5,2))
// // console.log(add(3,2))


// async function postData() {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
    
//     // Define the data to post
//     const data = {
//         title: 'Java script',
//         body: 'Java script post api',
//         userId: 1525
//     };
    
//     try {
//         // Make a POST request with the data
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
        
//         // Parse the response as JSON
//         const responseData = await response.json();
        
//         // Log the response data
//         console.log('Response data:', responseData);
//     } catch (error) {
//         // Handle errors
//         console.error('Error posting data:', error);
//     }
// }

// // Call the function
// postData();

async function fetchMultipleData() {
    // URLs to fetch data from
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/posts/101',
        'https://jsonplaceholder.typicode.com/comments/1'
    ];

    try {
        // Use Promise.all to fetch data from all URLs concurrently
        const responses = await Promise.all(urls.map(url => fetch(url)));
        
        // Parse the responses as JSON
        const data = await Promise.all(responses.map(response => response.json()));
        
        // Log the data from each endpoint
        console.log('Data from endpoints:', data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
    }
}

// Call the function
fetchMultipleData();




