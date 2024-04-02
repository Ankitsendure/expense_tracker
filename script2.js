document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Example: Check hardcoded credentials
        if (username === "ankitsendure2001@gmail.com" && password === "yezdi") {
            alert("Login successful!");
            // Redirect to the main page or dashboard
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password");
        }
    });
});
