body {
    margin: 0;
    background-color: black;
    color: white;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
}

.terminal {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding: 10px;
}

#serverOutput {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 10px;
}

#codeInput {
    width: 100%;
    max-width: 100%;
    padding: 15px;
    background: black;
    color: white;
    border: 1px solid white;
    font-size: 1.2em;
    margin-top: 10px;
    border-radius: 5px;
    position: relative;
    z-index: 1;
}

input[type="text"], input[type="password"] {
    background: black;
    color: white;
    border: 1px solid white;
    padding: 10px;
    margin: 10px 0;
    width: 250px;
    font-size: 1.2em;
}

button {
    background: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
}

button:hover {
    background: rgba(255, 255, 255, 0.1);
}

.error {
    color: red;
    margin-top: 10px;
        }
