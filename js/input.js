document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const emailConfirm = emailField.value;
    const passwordField = document.getElementById('password-input');
    const passwordConfirm = passwordField.value;
    if (emailConfirm == 'baperhotel@bap.com' && passwordConfirm == '54321') {
        window.location.href = 'banking.html'
    }

})