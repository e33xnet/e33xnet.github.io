const output = document.getElementById('serverOutput');
const input = document.getElementById('codeInput');
let attempts = 0;
let lockedUntil = null;

const messages = [
    "Server: Starting up...",
    "Server: Identifying user...",
    "Server: Error, enter code:"
];

let index = 0;

function printNextMessage() {
    if (index < messages.length) {
        output.innerText += messages[index] + "\n";
        index++;
        setTimeout(printNextMessage, 1000);
    }
}
printNextMessage();

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (lockedUntil && Date.now() < lockedUntil) return;

        if (input.value === "3307") {
            window.location.href = "granted.html"; // або інша сторінка доступу
        } else {
            attempts++;
            input.value = "";
            output.innerText += "Server: Incorrect code\n";

            if (attempts === 3) {
                output.innerText += "Server: Unknown user, access denied\n";
                setTimeout(() => {
                    window.location.href = "error.html";
                }, 4000);
            }
        }
    }
});
