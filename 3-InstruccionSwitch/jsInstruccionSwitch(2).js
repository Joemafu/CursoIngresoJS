function mostrar() {
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    switch (mes) {
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Estamos en " + mes + ", ya pasamos el frío, ahora el calor!");
            break

        case "Julio":
        case "Agosto":
            alert("Estamos en " + mes + ", abrigate que hace frío!");
            break

        default:
            alert("Estamos en " + mes + ", falta para el invierno");
    }




}//FIN DE LA FUNCIÓN