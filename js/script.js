
// let password = 'EN2JGER5';
let password = '12345678';
let tries = 3;
let wrong = document.getElementById('wrongPassword');
let passwordField = document.getElementById('password');



passwordField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let pass = document.getElementById('password').value;
        if (pass === password) {
            // form.action = 'home.html';
            window.location.replace('home.html');
        } else {
            tries--;
            wrong.innerHTML = 'The password is incorrect. You have' + tries + 'tries left.';
        }
    }
});









