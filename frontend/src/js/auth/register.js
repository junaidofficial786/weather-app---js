
let registerForm = document.getElementById('register-form');
let registerError = document.getElementById('register-error');
import http from '../utils/http.js';


function validateRegisterForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
        return false;
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    return true;
}


registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateRegisterForm()) {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        http.post('/auth/register', {
            email: email,
            password: password
        }).then((response) => {
            registerError.classList.add('d-none');
            alert('User created successfully');
            window.location.href = '/login.html';
        }).catch((error) => {
            // alert('An error occurred');
            if(error?.response) {
                registerError.classList.remove('d-none');
                registerError.querySelector('span').innerText = error.response.data.message;
            }
        });
    }
});