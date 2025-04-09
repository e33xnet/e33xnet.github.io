document.getElementById('audioFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Отримуємо вибраний файл
    const audioPlayer = document.getElementById('audioPlayer');

    // Якщо файл існує, додаємо його до програвача
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            audioPlayer.src = e.target.result; // Встановлюємо аудіофайл для програвача
        };
        reader.readAsDataURL(file); // Читаємо файл
    }
});
