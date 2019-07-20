function mostrar() {

	var maximo = parseInt(prompt("Ingrese un número.", 10));
	var minimo = maximo
	var respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, cualquier otro valor para cancelar.")
	var numero

	while (respuesta == "") {
		numero = parseInt(prompt("Ingrese un número.", 10));
		if (!isNaN(numero)) {

			if (numero > maximo) {
				maximo = numero;
			}
			if (numero < minimo) {
				minimo = numero;
			}
		}
		else {
			alert("Ingrese sólo caracteres numéricos.");
		}
		respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, cualquier otro valor para cancelar.")
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
	// declarar variables

}//FIN DE LA FUNCIÓN