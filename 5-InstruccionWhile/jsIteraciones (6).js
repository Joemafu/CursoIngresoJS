function mostrar() {

	var numero = 0
	var contador = 0;
	var acumulador = 0;

	while (contador < 5) {
		numero = parseInt(prompt("Ingrese un número (5 en total).", 10));
		if (!(isNaN(numero))) {
			acumulador = acumulador + numero;
			contador = contador + 1;
			console.log(numero);
			console.log("acumulador " + acumulador);
			console.log("contador " + contador);
		}
		else {
			alert("Ingrese sólo caracteres numéricos.");
		}

	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;
}
//FIN DE LA FUNCIÓN