window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 123, 255, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
