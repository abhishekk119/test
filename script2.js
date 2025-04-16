const toggle = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

