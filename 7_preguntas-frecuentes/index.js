const botones = document.querySelectorAll('.show-btn');
const answers = document.querySelectorAll('.answer');

botones.forEach((boton, index) => {
	boton.addEventListener('click', () => {
		const answer = answers[index];
		const isVisible = answer.classList.contains('show');

		answers.forEach((ans) => ans.classList.remove('show'));
		botones.forEach((btn) => (btn.textContent = '+'));

		if (!isVisible) {
			answer.classList.add('show');
			boton.textContent = '−';
		}
	});
});
