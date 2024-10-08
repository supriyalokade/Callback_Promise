async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
fetchData().then((data) => {
    console.log('Fetched data:', data);
});