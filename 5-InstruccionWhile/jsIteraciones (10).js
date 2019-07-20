function mostrar() {
	var respuesta = "";
	var sumaNegativo = 0;
	var sumaPositivo = 0;
	var cuentaPositivo = 0;
	var cuentaNegativo = 0;
	var cuentaCero = 0;
	var cuentaPar = 0;
	var promedioPositivo
	var promedioNegativo

	while (respuesta == "") {
		numero = parseInt(prompt("Ingrese un número.", 10));
		console.log(numero);
		if (!isNaN(numero)) {
			if (numero % 2 == 0) {
				cuentaPar = cuentaPar + 1;
			}
			if (numero > 0) {
				sumaPositivo = sumaPositivo + numero;
				cuentaPositivo = cuentaPositivo + 1;
			} else if (numero < 0) {
				sumaNegativo = sumaNegativo + numero;
				cuentaNegativo = cuentaNegativo + 1;
			} else {
				cuentaCero = cuentaCero + 1;
			}

		} else {
			alert("Ingrese sólo caracteres numéricos.");
		}
		respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, ingrese cualquier valor para cancelar.");
	}

	promedioPositivo = sumaPositivo / cuentaPositivo //Lo expresé así, debido a que en caso de no ingresarse números positivos, la cuenta promedio devolvía NaN.
	promedioNegativo = sumaNegativo / cuentaNegativo //Lo expresé así, debido a que en caso de no ingresarse números negativos, la cuenta promedio devolvía NaN.

	if (isNaN(promedioPositivo)) { //Lo expresé así, debido a que en caso de no ingresarse números positivos, la cuenta promedio devolvía NaN.
		promedioPositivo = 0
	}
	if (isNaN(promedioNegativo)) { //Lo expresé así, debido a que en caso de no ingresarse números negativos, la cuenta promedio devolvía NaN.
		promedioNegativo = 0
	}
	console.log("1) La suma de los negativos es de " + sumaNegativo);
	console.log("2) La suma de los positivos es de " + sumaPositivo);
	console.log("3) La cantidad de positivos es de " + cuentaPositivo);
	console.log("4) La cantidad de negativos es de " + cuentaNegativo);
	console.log("5) La cantidad de ceros es de " + cuentaCero);
	console.log("6) La cantidad de números pares es de " + cuentaPar);
	console.log("7) El promedio de los números positivos es de " + (promedioPositivo));
	console.log("8) El promedio de los números negativos es de " + (promedioNegativo));
	console.log("9) La diferencia entre los números positivos y los negativos es de " + (sumaPositivo + sumaNegativo));
}//FIN DE LA FUNCIÓN