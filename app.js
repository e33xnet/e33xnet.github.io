document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'u5erdv' && password === 'xnet.33:(') {
        document.getElementById('loginForm').style.display = 'none'; // Приховуємо форму входу
        document.getElementById('mediaSection').style.display = 'block'; // Показуємо медіа секцію
    } else {
        errorMessage.textContent = "Login failed"; // Показуємо повідомлення про помилку
    }
});

// Управління програвачами
document.getElementById('audioBtn').addEventListener('click', function() {
    document.getElementById('videoPlayer').style.display = 'none';
    document.getElementById('audioPlayer').style.display = 'block';
    document.getElementById('videoBtn').style.display = 'none'; // Приховуємо кнопку відео
});

document.getElementById('videoBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').style.display = 'none';
    document.getElementById('videoPlayer').style.display = 'block';
    document.getElementById('audioBtn').style.display = 'none'; // Приховуємо кнопку аудіо
});

// Завантаження аудіо
document.getElementById('audioUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        document.getElementById('audioSource').src = url;
    }
});

// Завантаження відео
document.getElementById('videoUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        document.getElementById('videoSource').src = url;
    }
});
