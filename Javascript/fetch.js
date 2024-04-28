function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Async data";
        resolve(data);
      }, 1000); // Simulating an asynchronous operation that takes 1 second
    });
  }
  
  // Using the Promise
  fetchData()
    .then((data) => {
      console.log("Data processed:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log("Fetching data..."); // This will be executed before the data is fetched
  