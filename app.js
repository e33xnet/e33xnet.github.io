document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'U5ERDV' && password === 'xnet.33:(') {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.textContent = 'Login failed';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
