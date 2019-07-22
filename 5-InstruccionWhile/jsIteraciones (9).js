function mostrar() {

	var maximo = null;
	var minimo = maximo;
	var respuesta = "";
	var numero;

	while (respuesta == "") {
		numero = parseInt(prompt("Ingrese un número."));
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
		respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, cualquier otro valor para cancelar.");
	}

	if (maximo == null) {
		maximo = "No ingresó número válido.";
		minimo = "No ingresó número válido.";
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN