const headerBtn = document.querySelectorAll('.header-btn');
const card = document.getElementById('card');

const content = {
	history:
		'Nacimos de una idea simple: transformar la pasión por la tecnología en soluciones reales para personas y empresas. Desde nuestros inicios como un pequeño proyecto independiente, hemos evolucionado constantemente, aprendiendo de cada desafío. Hoy, seguimos construyendo con la misma energía que nos impulsó al comenzar, pero con una visión más clara y una comunidad más fuerte.',
	mision:
		'Nuestra misión es brindar soluciones digitales eficientes, accesibles y personalizadas que generen un impacto positivo en la vida de nuestros clientes. Creemos en la tecnología como herramienta para el crecimiento y la transformación, por eso trabajamos con compromiso, creatividad y ética, adaptándonos a cada necesidad con un enfoque centrado en el usuario.',
	goals:
		'Buscamos posicionarnos como una referencia en el desarrollo web a través de innovación constante y un servicio cercano y de calidad. Nuestros objetivos incluyen ampliar nuestra cartera de clientes, fomentar relaciones duraderas, ofrecer productos escalables, y construir una marca sólida basada en la confianza, el conocimiento técnico y la mejora continua.',
};

headerBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.classList.contains('active')) return;
		headerBtn.forEach((b) => b.classList.remove('active'));
		btn.classList.add('active');
		const cardAtribute = btn.getAttribute('data-tab');
		card.textContent = content[cardAtribute];
	});
});
