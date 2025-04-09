document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'U5ERDV' && password === 'xnet.33:(') {
        window.location.href = 'terminal.html';
    } else {
        document.getElementById('error').textContent = 'Login failed';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
