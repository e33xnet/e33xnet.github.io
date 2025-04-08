document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'u5erdv' && password === 'xnet.33:(') {
        
        window.location.href = 'welcome.html';
    } else {
        alert('Login error');
    }
});
