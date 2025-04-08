document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Перевірка правильності введеного логіну та пароля
    if (username === 'u5erdv' && password === 'xnet.33:()') {
        // Якщо логін і пароль правильні, приховуємо форму входу та показуємо вміст
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('hiddenContent').style.display = 'block';
    } else {
        alert('Login error');
    }
});
