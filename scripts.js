// scripts.js

// Demo credentials
const demoEmail = "demo@example.com";
const demoPassword = "password123";

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
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

// Checking login status
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

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Chart.js - Render a simple bar chart
const ctx = document.getElementById('myChart')?.getContext('2d');
if (ctx) {
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 2000, 30000],
                backgroundColor: 'rgba(52, 152, 219, 0.5)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close')[0];

if (openModalBtn && closeBtn && modal) {
    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.getElementById('addItemForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form submission logic here
        modal.style.display = 'none';
    });
}
