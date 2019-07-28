function mostrar() {
    var numUno;
    var numDos;
    var resultado;

    numUno = prompt("Ingrese un número.");
    numDos = prompt("Ingrese otro número.");

    if (numUno == numDos) {
        resultado = (numUno + numDos);
        alert(resultado);
    }
    if (parseInt(numUno, 10) > parseInt(numDos, 10)) {
        resultado = (parseInt(numUno, 10) - parseInt(numDos, 10));
        alert(resultado);
    }
    if (parseInt(numUno, 10) < parseInt(numDos, 10)) {
        resultado = (parseInt(numUno, 10) + parseInt(numDos, 10));
        alert(resultado);

        if (resultado > 10) {
            alert("La suma es " + resultado + " y superó el 10.");
        }

    }

}
