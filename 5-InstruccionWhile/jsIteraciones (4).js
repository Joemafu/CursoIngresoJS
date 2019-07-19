function mostrar() {

	var numero;
	numero = prompt("Ingrese un número entre 0 y 9.");

	while (numero > 9) {
		numero = prompt("El número ingresado no pertenece al rango especificado. Ingrese un número entre 0 y 9.");
	}

	while (numero < 10) {
		document.getElementById("Numero").value = ("Usted ingresó " + numero + ". Felicidades, " + numero + " es un número entre 0 y 9.")
		break
	}




}//FIN DE LA FUNCIÓN