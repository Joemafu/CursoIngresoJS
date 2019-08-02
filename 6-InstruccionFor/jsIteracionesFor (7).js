function mostrar()
{   
    var numero = prompt("Ingrese un número.");
    var contador = 0;

    for (var i = 0; ;i++) {
        if (numero % i != 0) {
            continue;
        }
        console.log(i);
        contador++;

        if (i == numero) {
            break;
        }
    }
    console.log ("Cantidad de divisores encontrados: "+contador+".");
    if (contador == 2){
        console.log ("El "+numero+" es un número primo.");
    }

}//FIN DE LA FUNCIÓN