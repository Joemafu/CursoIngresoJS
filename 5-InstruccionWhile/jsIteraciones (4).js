function mostrar() {

	var numero;
	numero = prompt("Ingrese un número entre 0 y 9.");

	while ((numero > 9) || (numero < 0) || (isNaN(numero))) {
		numero = prompt("El valor ingresado no pertenece al rango especificado. Ingrese un número entre 0 y 9.");
	}

	document.getElementById("Numero").value = ("Usted ingresó " + numero + ". Felicidades, " + numero + " es un número entre 0 y 9.")

}

//FIN DE LA FUNCIÓN