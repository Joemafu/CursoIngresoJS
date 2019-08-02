function mostrar() {
    var numero = prompt("Ingrese un número.");
    var contador = 0;

    for (var i = 2; ;i++) {
        if (i % 2 == 1) {
            continue;
        }
        console.log(i);
        contador++;

        if (i == numero) {
            break;
        }
    }
    console.log ("Cantidad de números pares encontrados: "+contador+".");
}
//FIN DE LA FUNCIÓN