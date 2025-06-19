const sections = [
	'home',
	'services',
	'products',
	'about-us',
	'contact-section',
];

const links = [
	'home-link',
	'services-link',
	'products-link',
	'about-link',
	'contact-link',
];

document.addEventListener('click', function (event) {
	const idElemento = event.target.id;

	const index = links.indexOf(idElemento);

	if (index !== -1) {
		const sectionId = sections[index];
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
});

const topBtn = document.getElementById('top-btn');

topBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
