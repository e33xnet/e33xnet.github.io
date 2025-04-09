document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Перевірка правильності введених даних
    if (username === 'U5ERDV' && password === 'xnet.33:(') {
        window.location.href = 'welcome.html'; // Перехід на сторінку після успішного входу
    } else {
        document.getElementById('error-msg').textContent = 'Login failed'; // Повідомлення про невдалий вхід
        document.getElementById('username').value = ''; // Очищення полів
        document.getElementById('password').value = '';
    }
});
