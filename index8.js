function racePromises(promises) {
    return Promise.race(promises)
        .then(result => {
            console.log("First promise resolved with:", result);
            return result; // Return the resolved value
        })
        .catch(error => {
            console.error("First promise rejected with:", error);
            return error; // Return the rejection reason
        });
}

// Example usage
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000); // Resolves after 1 second
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 2 rejected"), 500); // Rejects after 0.5 seconds
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 2000); // Resolves after 2 seconds
});

// Testing racePromises with the above promises
racePromises([promise1, promise2, promise3]).then(result => {
    console.log("Result from racePromises:", result);
});