// scripts.js

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.sidebar ul li a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});