fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log("THE DATA FROM THE API IS",data);
  })
  .catch(error => {
    console.error('Connection error:', error);
  });
