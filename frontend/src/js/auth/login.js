let loginForm = document.getElementById('login-form');
let loginError = document.getElementById('login-error');
import http from '../utils/http.js';

function validateLoginForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    } else if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    return true;
}


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateLoginForm()) {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        http.post('/auth/login', {
            email: email,
            password: password
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            alert('Login successful');
            window.location.href = '/';
        }).catch((error) => {
            if(error?.response) {
                loginError.classList.remove('d-none');
                loginError.querySelector('span').innerText = error.response.data.message;
            }
        });
    }
});
