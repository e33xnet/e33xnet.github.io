const output = document.getElementById("serverOutput");
const input = document.getElementById("codeInput");

let stage = 0;
let attempts = 0;
let blocked = false;
let blockTime = 0;

const correctCode = "3307";

function serverMessage(text, delay = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            output.innerHTML += `Server: ${text}_\n`;
            resolve();
        }, delay);
    });
}

async function startSequence() {
    await serverMessage("Initializing...");
    await serverMessage("User identification...");
    await serverMessage("Error. Enter code:");
}

startSequence();

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !blocked) {
        const value = input.value.trim();
        input.value = "";

        if (value === correctCode) {
            output.innerHTML += "Server: Access granted_\n";
            // Тут можна вставити перехід до реального контенту
        } else {
            attempts++;
            output.innerHTML += "Server: Invalid code_\n";
            if (attempts >= 3) {
                if (blockTime === 0) blockTime = 60;
                else blockTime = 3600;

                blocked = true;
                output.innerHTML += "Server: Unauthorized user. Access error_\n";

                setTimeout(() => {
                    window.location.href = "error.html";
                }, 4000);
            }
        }
    }
});
