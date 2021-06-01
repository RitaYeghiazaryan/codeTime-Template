window.addEventListener('load', () => {
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');

    mobileMenuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
    });
});