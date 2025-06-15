const video = document.getElementById('my-video');

const button = document.getElementById('play-pause-btn');

button.addEventListener('click', () => {
	if (video.paused) {
		video.play();
		button.textContent = 'Pausa';
	} else {
		video.pause();
		button.textContent = 'Play';
	}
});
