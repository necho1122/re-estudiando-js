import { data } from './data.js';

let userId = 0;

const fullName = document.getElementById('nombre');
const imagen = document.getElementById('image');
const profesion = document.getElementById('profesion');
const jobDescription = document.getElementById('descripcion-cargo');

function showUser(id) {
	const user = data.results[id];
	const users = {
		fullName: user.name.first + ' ' + user.name.last,
		image: user.picture.large,
		profesion: user.profession,
		job: user.job_description,
	};

	fullName.innerHTML = users.fullName;

	imagen.setAttribute('src', users.image);

	profesion.innerHTML = users.profesion;

	jobDescription.innerHTML = users.job;
}

document.getElementById('next').addEventListener('click', () => {
	userId = (userId + 1) % data.results.length;
	showUser(userId);
});

document.getElementById('prev').addEventListener('click', () => {
	userId = (userId - 1 + data.results.length) % data.results.length;
	showUser(userId);
});

showUser(userId);
