"use strict";
(function () {
    const menuBtn = document.querySelector('.header-menu-name');
    const subMenu = document.querySelector('.header-submenu');

    menuBtn.addEventListener('click', () => {
        subMenu.classList.toggle('open');
    });



})();