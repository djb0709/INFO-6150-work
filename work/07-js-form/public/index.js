"use strict";
(function () {
    const nameEl = document.querySelector('#name');
    const emailEl = document.querySelector('#email');
    const confirmEmailEl = document.querySelector('#confirmEmail');
    const sendAnnoy = document.querySelector('#sendAnnoy');
    const formEL = document.querySelector('.register-form');

    const state = {
        name: nameEl.value,
        email: emailEl.value,
        confirmEmail: confirmEmailEl.value,
        nameErr: false,
        emailErr: false,
        confirmEmailErr: false,
    };


    nameEl.addEventListener('input', e => {
        state.name = e.target.value
        state.nameErr = !isNameValid(state);
        render(state);
    });
    emailEl.addEventListener('input', e => {
        state.email = e.target.value;
        state.emailErr = !isEmailValid(state);
        render(state);
    });
    confirmEmailEl.addEventListener('input', e => {
        state.confirmEmail = e.target.value;
        state.confirmEmailErr = !isConfirmEmailValid(state);
        render(state);
    });
    formEL.addEventListener('submit', e => {
        if (!isFormValid(state)) {
            e.preventDefault();
            state.nameErr = !isNameValid(state);
            state.emailErr = !isEmailValid(state);
            state.confirmEmailErr = !isConfirmEmailValid(state);
            render(state);
        }
    });

    function isNameValid(state) {
        return state.name !== '';
    }

    function isEmailValid(state) {
        return state.email !== '';
    }
    function isConfirmEmailValid(state) {
        return state.confirmEmail === state.email;
    }
    function isFormValid(state) {
        return isNameValid(state) && isEmailValid(state) && isConfirmEmailValid(state);
    }

    function render(state) {
        const nameErrEl = document.querySelector('.signup-error-name');
        const emailErrEl = document.querySelector('.signup-error-email');
        const confirmEmailErrEl = document.querySelector('.signup-error-confirm');

        nameErrEl.innerText = state.nameErr ? 'name is required' : '';
        nameErrEl.classList.toggle('signup-error-visible', state.nameErr);

        emailErrEl.innerText = state.emailErr ? 'Email is required' : '';
        emailErrEl.classList.toggle('signup-error-visible', state.emailErr);

        confirmEmailErrEl.innerText = state.confirmEmailErr ? 'Email do not match' : '';
        confirmEmailErrEl.classList.toggle('signup-error-visible', state.confirmEmailErr);
    }
})();
