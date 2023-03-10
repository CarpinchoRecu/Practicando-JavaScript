let botonCalcular = document.getElementById("btnCalcular");
botonCalcular.addEventListener("click", function() {
	let campoTotal = document.getElementById("total");
	let total = campoTotal.value;
	let porcentaje = 0.1; // porcentaje fijo establecido en el código JavaScript
	let totalCalculado = total * porcentaje;
	let columnaTotalCalculado = document.getElementById("totalCalculado");
	columnaTotalCalculado.textContent = totalCalculado;
});
