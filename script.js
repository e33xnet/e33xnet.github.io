function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Просте перевірка логіна і пароля (можна замінити на реальну базу даних)
    if (username === "admin" && password === "12345") {
        document.getElementById('statusMessage').textContent = "Login successful!";
        // Тут можна додати редірект на захищену сторінку
        window.location.href = "/protected.html"; // Переходить на захищену сторінку
    } else {
        document.getElementById('statusMessage').textContent = "Invalid username or password.";
    }
}
