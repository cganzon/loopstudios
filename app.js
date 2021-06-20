let burgerIcon = document.querySelector('.burger-icon');
let closeIcon = document.querySelector('.close-icon');
let navLinks = document.querySelector('.nav-links');

burgerIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    navLinks.classList.toggle('hide');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.toggle('hide');
    burgerIcon.classList.toggle('hide');
    navLinks.classList.toggle('hide');
});
