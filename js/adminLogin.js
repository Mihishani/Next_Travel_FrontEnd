function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Check if username and password are correct (replace these with your actual admin credentials)
    var adminUsername = "admin";
    var adminPassword = "admin123";

    if (username === adminUsername && password === adminPassword) {
        // Redirect to the admin panel or any other admin-related page
        window.location.href = "admin-panel.php";
    } else {
        // Display an error message for invalid login attempts
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
        // Clear the password field
        document.getElementById("password").value = "";
    }
}
