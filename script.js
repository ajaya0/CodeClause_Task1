const audioPlayer = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songs = [
    './songs/song3.mp3','./songs/song12.mp3','./songs/song1.mp3','./songs/song4.mp3','./songs/song5.mp3',
    './songs/song7.mp3','./songs/song8.mp3',
];

let currentSidx = 0;
function loadSong(index) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
    playPauseButton.textContent = 'Play';
    currentSidx = index;
}
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});
nextButton.addEventListener('click', () => {
    currentSidx = (currentSidx + 1) % songs.length;
    loadSong(currentSidx);
});
prevButton.addEventListener('click', () => {
    currentSidx = (currentSidx - 1 + songs.length) % songs.length;
    loadSong(currentSidx);
});
loadSong(currentSidx);
