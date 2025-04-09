document.getElementById('audioUpload').addEventListener('change', function(event) {
    const audio = document.querySelector('audio');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            audio.src = e.target.result;
            audio.play();
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('videoUpload').addEventListener('change', function(event) {
    const video = document.querySelector('video');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            video.src = e.target.result;
            video.play();
        };
        reader.readAsDataURL(file);
    }
});
