document.addEventListener("DOMContentLoaded", function () {
    // Registration
    document.getElementById("registerForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value,
                age: document.getElementById("age").value
            })
        })
        .then(res => res.json())
        .then(data => document.getElementById("registerMessage").innerText = data.message || data.error);
    });

    // Login
    document.getElementById("loginForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("loginUsername").value,
                password: document.getElementById("loginPassword").value
            })
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById("loginMessage").innerText = data.message || data.error;
        });
    });
});
