document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.headerMobileRight');
    const menuSection = document.querySelector('.heroRight');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    }

    const buttonIcon = document.querySelector('.headerButton');
    const buttonSection = document.querySelector('.pop-up');
    const body = document.querySelector('.bodytest');
    if (buttonIcon && buttonSection) {
        buttonIcon.addEventListener('click', function () {

            buttonSection.classList.toggle('active');
            body.classList.toggle('active');
       
        });
    }
});