let burgerIcon = document.querySelector('.burger-icon');
let closeIcon = document.querySelector('.close-icon');
let navLinks = document.querySelector('.nav-links');
let navBackground = document.querySelector('.nav-background');

burgerIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    navLinks.classList.toggle('hide');
    navBackground.classList.toggle('hide');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    navLinks.classList.toggle('hide');
    navBackground.classList.toggle('hide');
});
