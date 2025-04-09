let attempts = 0;

const serverOutput = document.getElementById('serverOutput');
const codeInput = document.getElementById('codeInput');

// Server messages
function addServerMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `Server: ${message}`;
    serverOutput.appendChild(messageDiv);
}

// Initial server output
addServerMessage('Server: Booting up...');
addServerMessage('Server: User identification...');

// Wait 2 seconds, then prompt for code
setTimeout(() => {
    addServerMessage('Server: Error, please enter the code:');
    codeInput.style.display = 'block';
}, 2000);

document.getElementById('codeInput').addEventListener('input', function() {
    if (this.value === '3307') {
        // Redirect to the page with audio and video players
        window.location.href = 'player.html'; // переход на сторінку плеєрів
    }
    if (this.value.length > 0) {
        if (this.value !== '3307' && attempts < 3) {
            attempts++;
            if (attempts === 3) {
                addServerMessage('Server: Unknown user, access denied...');
                setTimeout(() => {
                    window.location.href = 'privacy_error.html';
                }, 4000);
            }
        }
    }
});
