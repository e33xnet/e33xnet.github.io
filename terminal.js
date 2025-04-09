let attempts = 0;
let timeout = 1;

// Обробка натискання клавіші Enter
document.getElementById('codeInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const codeInput = document.getElementById('codeInput').value;
        const serverOutput = document.getElementById('serverOutput');
        
        // Показати повідомлення про початок роботи сервера
        if (serverOutput.innerHTML === "") {
            serverOutput.innerHTML += "<span style='color: red; text-decoration: underline;'>Server:</span> Starting...\n";
            setTimeout(() => {
                serverOutput.innerHTML += "<span style='color: red; text-decoration: underline;'>Server:</span> Identifying user...\n";
                setTimeout(() => {
                    serverOutput.innerHTML += "<span style='color: red; text-decoration: underline;'>Server:</span> Error, enter code:\n";
                }, 1000);
            }, 1000);
        }
        
        // Перевірка коду
        if (codeInput === '3307' && attempts < 3) {
            serverOutput.innerHTML += "<span style='color: red;'>Server: Access granted</span><br>";
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

        // Очищення поля вводу після натискання Enter
        document.getElementById('codeInput').value = '';
    }
});
