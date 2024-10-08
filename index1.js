function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        const result = num1 + num2;
        callback(result);
    }, 1000);
}

// Example usage:
sumAsync(5, 10, (result) => {
    console.log('The sum is:', result);
});