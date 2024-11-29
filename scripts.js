// Smooth Scroll Functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust for header height
            behavior: 'smooth'
        });
    });
});

// Dynamic Content on Button Click
document.getElementById('ctaButton').addEventListener('click', function () {
    alert('Thank you for showing interest! Let’s make a difference together!');
});
