function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(num => num * 2);
    callback(result);
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
multiplyWithCallback(numbersArray, (result) => {
    console.log('Result after multiplication:', result);
});