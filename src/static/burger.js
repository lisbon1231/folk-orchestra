window.addEventListener('DOMContentLoaded', () => {
    const burger = document.body.querySelector('.burger');
    const header = document.body.querySelector('.header');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        header.classList.toggle('header_active');
    });
});
