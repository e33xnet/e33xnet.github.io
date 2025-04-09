document.getElementById('audioButton').addEventListener('click', function() {
    document.getElementById('audioUploadBtn').click(); // Відкриває діалог для вибору аудіофайлу
});

document.getElementById('audioUploadBtn').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const audioPlayer = document.getElementById('audioPlayer');

    if (file && file.type.startsWith('audio/')) {
        const audioURL = URL.createObjectURL(file);
        audioPlayer.src = audioURL;
        audioPlayer.style.display = 'block'; // Показати програвач після завантаження аудіо
    } else {
        alert('Будь ласка, виберіть аудіофайл.');
    }
});
