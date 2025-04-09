document.getElementById('loginBtn').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (username === 'u5erdv' && password === 'xnet.33:(') {
        document.querySelector('.login-container').style.display = 'none';
        window.location.href = 'welcome.html';
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
