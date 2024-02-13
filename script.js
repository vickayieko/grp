document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy validation - you should perform more robust validation
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect or perform other actions upon successful login
    } else {
        alert("Invalid username or password!");
    }
});
