document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const error = document.getElementById('error');

    if (username.value === 'U5ERDV' && password.value === 'xnet.33:(') {
        window.location.href = 'main.html';
    } else {
        error.textContent = 'Login failed';
        username.value = '';
        password.value = '';
    }
});
