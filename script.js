document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Простий перевірка логіну і пароля
    if (username === 'u5erdv' && password === 'xnet.33:()') {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('hiddenContent').style.display = 'block';
    } else {
        alert('Login error');
    }
});
