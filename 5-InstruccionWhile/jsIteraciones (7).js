function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta = "";
	var numero;

	while (respuesta == "") {
		numero = parseInt(prompt("Ingrese un número."), 10);
		if (!(isNaN(numero))) {
			acumulador = acumulador + numero;
			contador += 1;
			console.log(numero);
			console.log("acumulador " + acumulador);
			console.log("contador " + contador);
		}
		else {
			alert("Ingrese sólo caracteres numéricos.");
		}
		respuesta = prompt("Quiere agregar otro número? Presione Enter para confirmar, cualquier otro valor para cancelar.")

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN