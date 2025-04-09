function generateRandomName(ext) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let name = '';
  for (let i = 0; i < 10; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return name + '.' + ext;
}

document.getElementById('audioUpload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const audioPlayer = document.getElementById('audioPlayer');
  const randomName = generateRandomName(file.name.split('.').pop());

  const audio = document.createElement('audio');
  audio.controls = true;
  audio.src = url;
  audio.setAttribute('data-name', randomName);
  audioPlayer.innerHTML = '';
  audioPlayer.appendChild(audio);
});

document.getElementById('videoUpload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const videoPlayer = document.getElementById('videoPlayer');
  const randomName = generateRandomName(file.name.split('.').pop());

  const video = document.createElement('video');
  video.controls = true;
  video.src = url;
  video.setAttribute('data-name', randomName);
  videoPlayer.innerHTML = '';
  videoPlayer.appendChild(video);
});
