let contador = 0;

let valorContador = document.getElementById('contador');
valorContador.innerHTML = contador;

function sumar() {
	contador += 1;
	valorContador.innerHTML = contador;
}

function restar() {
	contador -= 1;
	valorContador.innerHTML = contador;
}

function reset() {
	contador = 0;
	valorContador.innerHTML = contador;
}
