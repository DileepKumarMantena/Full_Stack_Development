async function getUserData() {
    try {
        let usersResponse = await fetch('https://api.example.com/users');
        let users = await usersResponse.json();

        let userDetailsResponse = await fetch(`https://api.example.com/users/${users[0].id}`);
        let userDetails = await userDetailsResponse.json();

        console.log(users);
        console.log(userDetails);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUserData();
