// scripts.js

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.sidebar ul li a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

// Chart.js - Render a simple bar chart
const ctx = document.getElementById('myChart').getContext('2d');
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

// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event