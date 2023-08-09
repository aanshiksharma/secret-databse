
const password = 'EN2JGER5';
// const password = '12345678';
const wrongPassword = document.getElementById('wrongPassword');
const form = document.querySelector('.login>div');
let submitButton = document.getElementById('button');
let tries = 3;

submitButton.addEventListener('click', (e) => {
    let inputPassword = document.getElementById('password').value;
    if (inputPassword == password) {
        window.location.pathname = '/home.html';
    } else {
        tries--;
        let checktrial = checktrials(tries);
        if (checktrial !== false) {
            wrongPassword.innerHTML = 'INCORRECT PASSWORD! You have ' + tries + ' tries left.';
        }
    }
    e.preventDefault();
});

function checktrials(tries) {
    if (tries <= 0) {
        wrongPassword.innerHTML = 'You have succeeded your trial limit. Reload the page to retry.';
        document.getElementById('password').type = 'disabled';
        document.getElementById('password').value = ' ';
        return false;
    }
}