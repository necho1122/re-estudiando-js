const addClassToUl = document.getElementById('menu-list');
const hideBtn = document.getElementById('show-menu-btn');

function showMenu() {
	addClassToUl.classList.add('activo', 'menu-list');
	//hideBtn.classList.add('btn-hide', 'bton-disable');
}

function hideMenu() {
	addClassToUl.classList.remove('activo', 'menu-list');
	hideBtn.classList.remove('btn-hide', 'bton-disable');
}
