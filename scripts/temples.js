// 1. Dinamyc dates for the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// 2. Hamburguer button logic
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
    
    navMenu.classList.toggle('open');
    
    
    if (navMenu.classList.contains('open')) {
        menuButton.innerHTML = '&#10005;'; // 'X' symbol
    } else {
        menuButton.innerHTML = '&#9776;'; //Hamburguer symbol
    }
});