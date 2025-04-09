document.getElementById('loginBtn').addEventListener('click', function () {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  if (username === 'u5erdv' && password === 'xnet.33:(') {
    window.location.href = 'welcome.html';
  } else {
    document.getElementById('error-msg').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
});
