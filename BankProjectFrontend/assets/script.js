// Signup Functionality
document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let newUsername = document.getElementById("newUsername").value;
            let newPassword = document.getElementById("newPassword").value;

            if (newUsername && newPassword) {
                localStorage.setItem("bankUser", JSON.stringify({ username: newUsername, password: newPassword }));
                alert("Signup Successful! Please login.");
                window.location.href = "login.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});

// Login Functionality
let loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let storedUser = JSON.parse(localStorage.getItem("bankUser"));

        if (storedUser && username === storedUser.username && password === storedUser.password) {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Credentials! Please check your username and password.");
        }
    });
}
