async function fetchMultipleData(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url));
        const responses = await Promise.all(fetchPromises);
        
        const data = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch from ${response.url}`);
            }
            return response.json();
        }));

        return data;
    } catch (error) {
        console.error(error);
    }
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1'
];

fetchMultipleData(urls).then(data => {
    console.log(data);
});