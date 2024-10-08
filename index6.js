async function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    try {
        const userResponse = await fetch(userUrl);
        if (!userResponse.ok) {
            throw new Error('Failed to fetch user details');
        }
        const userData = await userResponse.json();

        const postsResponse = await fetch(postsUrl);
        if (!postsResponse.ok) {
            throw new Error('Failed to fetch user posts');
        }
        const postsData = await postsResponse.json();

        return {
            user: userData,
            posts: postsData
        };
    } catch (error) {
        console.error(error);
    }
}

// Example usage
fetchUserDataAndPosts(1).then(data => {
    console.log(data);
});