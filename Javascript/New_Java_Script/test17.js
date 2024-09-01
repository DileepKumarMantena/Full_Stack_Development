async function fetchPaginatedData(url) {
    let result = [];
    let nextPage = url;

    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        result = result.concat(data.results);
        nextPage = data.next; // Assuming the API returns a 'next' field for the next page URL
    }

    return result;
}

fetchPaginatedData('https://api.example.com/items?page=1')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
