document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("terminal");
  const input = document.getElementById("terminal-input");

  const appendOutput = (text) => {
    const output = document.createElement("div");
    output.textContent = text;
    terminal.appendChild(output);
  };

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = input.value;
      appendOutput("> " + command);
      if (command === "help") {
        appendOutput("Available commands: help, about, clear");
      } else if (command === "about") {
        appendOutput("Secure Terminal v1.0");
      } else if (command === "clear") {
        terminal.innerHTML = "";
      } else {
        appendOutput("Command not recognized.");
      }
      input.value = "";
    }
  });
});
