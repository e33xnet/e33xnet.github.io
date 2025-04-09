let attempts = 0;
let timeout = null;

document.getElementById('codeInput').addEventListener('input', function() {
    const codeInput = document.getElementById('codeInput').value;
    const serverOutput = document.getElementById('serverOutput');

    if (codeInput === '3307' && attempts < 3) {
        serverOutput.innerHTML += "<span style='color: red;'>Server: Access granted</span><br>";
        // Redirect to another page if necessary, or show success message
        setTimeout(function() {
            window.location.href = 'welcome.html';
        }, 1000);
    } else if (attempts >= 3) {
        serverOutput.innerHTML += "<span style='color: red;'>Server: Too many failed attempts. Try again later.</span><br>";
        setTimeout(function() {
            window.location.href = 'error.html'; // Error page
        }, 3000);
    } else {
        if (codeInput !== '3307') {
            attempts++;
            serverOutput.innerHTML += "<span style='color: red;'>Server: Invalid code, try again...</span><br>";
        }
    }
});
