let attempts = 0;

const serverOutput = document.getElementById('serverOutput');
const codeInput = document.getElementById('codeInput');

// Function to display server messages
function addServerMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    serverOutput.appendChild(messageElement);
    serverOutput.scrollTop = serverOutput.scrollHeight; // Auto-scroll
}

addServerMessage("Server: Starting...");
addServerMessage("Server: User identification...");

setTimeout(() => {
    addServerMessage("Server: Error, enter code:");
    codeInput.style.display = "block";
}, 3000);

codeInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const code = codeInput.value;
        if (code === "3307") {
            addServerMessage("Server: Code accepted.");
            setTimeout(() => {
                window.location.href = "success.html";
            }, 1000);
        } else {
            attempts++;
            addServerMessage("Server: Incorrect code.");
            codeInput.value = '';
            
            if (attempts >= 3) {
                addServerMessage("Server: Unknown user, access denied.");
                setTimeout(() => {
                    window.location.href = "access-denied.html";
                }, 4000);
            }
        }
    }
});
