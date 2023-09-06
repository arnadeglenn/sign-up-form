const password = document.querySelector("#password");
const verifyPassword = document.querySelector('#password-verify')

function passwordMatch() {
    let passwordInput = password.value;
    let passwordVerify = verifyPassword.value;
    if (passwordInput !== passwordVerify) {
        verifyPassword.setCustomValidity("Passwords don't match!")
    } else {
        verifyPassword.setCustomValidity('');
    }
};

password.addEventListener('input', passwordMatch);
verifyPassword.addEventListener('input', passwordMatch);