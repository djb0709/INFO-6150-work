"use strict";
(function () {
    const subscribeButtons = document.querySelectorAll(".subscribe");
    const modal = document.querySelector(".modal");

    const form = document.querySelector(".register-form");

    const emailField = document.querySelector("#email");
    const confirmEmailField = document.querySelector("#confirmEmail");

    const emailError = document.querySelector(".signup-error-email");
    const confirmEmailError = document.querySelector(".signup-error-confirm");

    const cancelButton = document.querySelector(".form-cancel");

    const state = {
        modalOpen: false,
        email: emailField.value,
        emailErr: false,
        // emailErrMessage: '',

        // confirmEmailErrMessage: '',
        confirmEmailErr: false,
        confirmEmail: confirmEmailField.value,
    }

    subscribeButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (state.modalOpen) {
                state.modalOpen = !state.modalOpen;

            }
            render(state);
        });
    });

    cancelButton.addEventListener("click", () => {
        if (!state.modalOpen) {
            state.modalOpen = !state.modalOpen;

        }
        render(state);


    });

    emailField.addEventListener('input', e => {
        state.email = e.target.value;
        state.emailErr = !isEmailValid(state);
        render(state);
    });
    confirmEmailField.addEventListener('input', e => {
        state.confirmEmail = e.target.value;
        state.confirmEmailErr = !isConfirmEmailValid(state);
        render(state);
    });

    form.addEventListener("submit", (e) => {


        if (!isFormValid(state)) {
            e.preventDefault();
            state.emailErr = !isEmailValid(state);
            state.confirmEmailErr = !isConfirmEmailValid(state);

            render(state);
        }
    });

    modal.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            state.modalOpen = !state.modalOpen;
            render(state);
        }
    });
    function isEmailValid(state) {
        if (!state.email) {
            //if null
            state.emailErrMessage = 'This field is required.';
            return false;
        } else if (!state.email.includes("@")) {
            //if have not @
            state.confirmEmailErrMessage = "Email must contain '@'.";
            return false;
        }
        return true;
    }
    function isConfirmEmailValid(state) {
        if (!state.confirmEmail) {
            //if null
            state.confirmEmailErrMessage = 'This field is required.';
            return false;
        } else if (state.confirmEmail !== state.email) {
            //if do not match
            state.confirmEmailErrMessage = 'Emails must match.';
            return false;
        }
        return true;
    }

    function isFormValid(state) {
        return isEmailValid(state) && isConfirmEmailValid(state);
    }
    function resetForm(state) {

        form.reset();
        state.email = "";
        state.confirmEmail = "";
        state.emailErr = false;
        state.confirmEmailErr = false;


        emailError.classList.remove('signup-error-visible');
        confirmEmailError.classList.remove('signup-error-visible');
        emailField.classList.remove("input-error");
        confirmEmailField.classList.remove("input-error");
        emailError.innerText = "";
        confirmEmailError.innerText = "";

    }

    // 按 ESC 键关闭模态框

    function render(state) {
        if (!state.modalOpen) {
            modal.showModal();

        } else {
            modal.close();
            resetForm(state);
        }
        //email
        if (state.emailErr) {
            //if error
            if (!state.email) {
                //if null
                emailError.innerText = "This field is required.";
            } else if (!state.email.includes("@")) {
                //if have not @
                emailError.innerText = "Email must contain '@'.";
            }
            emailError.classList.add('signup-error-visible');
            emailField.classList.add("input-error");

        } else {
            //if correct
            emailError.classList.remove('signup-error-visible');
            emailField.classList.remove("input-error");
        }

        if (state.confirmEmailErr) {
            //if error
            if (!state.confirmEmail) {
                //if null
                confirmEmailError.innerText = "This field is required.";
            } else if (state.confirmEmail !== state.email) {
                //if donot match
                confirmEmailError.innerText = "Emails must match.";
            }
            confirmEmailError.classList.add('signup-error-visible');
            confirmEmailField.classList.add("input-error");

        } else {
            //if correct
            confirmEmailError.classList.remove('signup-error-visible');
            confirmEmailField.classList.remove("input-error");
        }


    }
})();


