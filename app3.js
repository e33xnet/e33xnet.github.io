document.getElementById('videoButton').addEventListener('click', function() {
    document.getElementById('videoUploadBtn').click(); // Відкриває діалог для вибору відео
});

document.getElementById('videoUploadBtn').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPlayer = document.getElementById('videoPlayer');

    if (file && file.type.startsWith('video/')) {
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        videoPlayer.style.display = 'block'; // Показати програвач після завантаження відео
    } else {
        alert('Будь ласка, виберіть відеофайл.');
    }
});
