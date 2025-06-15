const modal = document.getElementById('modal-container');

function showModal() {
	modal.classList.add('show-modal');
	modal.classList.remove('modal-hiden');
}

function hideModal() {
	modal.classList.add('modal-hiden');
	modal.classList.remove('show-modal');
}
