function mostrar() {
	var positivo = 0;
	var negativo = 1;
	var contNeg = 0
	var respuesta = "";

	while (respuesta == "") {
		numero = parseInt(prompt("Ingrese un número."), 10);
		if (!isNaN(numero)) {
			if (numero >= 0) {
				positivo = positivo + numero;
			}
			if (numero < 0) {
				negativo = negativo * numero;
				contNeg ++;
			}
		}
		else {
			alert("Ingrese sólo caracteres numéricos.");
		}
		respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, cualquier otro valor para cancelar.")
	}
	if(contNeg == 0){
		negativo = 0;
	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN