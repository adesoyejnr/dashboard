// scripts.js

// Add this to the existing JavaScript

// Demo credentials
const demoEmail = "demo@example.com";
const demoPassword = "password123";

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email === demoEmail && password === demoPassword) {
        // Save login status to local storage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the dashboard page
        window.location.href = 'index.html';
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid email or password.';
    }
});

// Check login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Call checkLoginStatus on dashboard page load
if (window.location.pathname.endsWith('index.html')) {
    checkLoginStatus();
}
