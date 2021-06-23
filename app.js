let burgerIcon = document.querySelector('.burger-icon');
let closeIcon = document.querySelector('.close-icon');
let navBar = document.querySelector('.navbar');
let navLinks = document.querySelector('.nav-links');
let navBackground = document.querySelector('.nav-background');

burgerIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    // navBar.classList.toggle('fixed');
    navLinks.classList.toggle('hide');
    navBackground.classList.toggle('hide');
    // navBackground.classList.toggle('fixed');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    // navBar.classList.toggle('fixed');
    navLinks.classList.toggle('hide');
    navBackground.classList.toggle('hide');
    // navBackground.classList.toggle('fixed');
});
