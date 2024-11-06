"use strict";
(function () {
    // const menuBtn = document.querySelector('.header-menu-name');
    // const subMenu = document.querySelector('.hamburger-menu');

    // menuBtn.addEventListener('click', () => {
    //     const isOpen = subMenu.classList.toggle('open');
    //     console.log(isOpen);

    //     menuBtn.setAttribute('aria-expanded', isOpen);
    // });

    const state = {
        openNavTopic: null,
    };
    const bodyEl = document.querySelector('body')
    bodyEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('header-menu-name')) {
            if (state.openNavTopic === e.target) {
                state.openNavTopic = null;
            } else {
                state.openNavTopic = e.target;
            }
            render();
        } else {
            state.openNavTopic = null;
            render();
        }
    });

    function render() {
        const navEl = document.querySelector('.header-nav');
        const btnEl = navEl.querySelector('.header-menu-name');
        const subMenu = navEl.querySelector('.hamburger-menu');

        if (state.openNavTopic === btnEl) {
            subMenu.classList.add('open');
            btnEl.setAttribute('aria-expanded', 'true');
        } else {
            subMenu.classList.remove('open');
            btnEl.setAttribute('aria-expanded', 'false');
        }
    }
})();