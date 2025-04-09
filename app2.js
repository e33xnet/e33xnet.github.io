const audioInput = document.getElementById('audioInput');
const audioPlayer = document.getElementById('audioPlayer');
audioInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.play();
    }
});

const videoInput = document.getElementById('videoInput');
const videoPlayer = document.getElementById('videoPlayer');
videoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
        videoPlayer.play();
    }
});
