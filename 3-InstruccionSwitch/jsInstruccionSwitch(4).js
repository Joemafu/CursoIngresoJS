function mostrar() {
    //tomo la edad  
    var mes = document.getElementById("mes").value;

    switch (mes) {
        case ("Abril"):
        case ("Junio"):
        case ("Septiembre"):
        case ("Noviembre"):
            alert("Este mes tiene 30 días.");
            break

        case ("Febrero"):
            alert("Este mes tiene 28 días.");
            break

        default:
            alert("Este mes tiene 31 días.");
    }

    //alert (mesDelAño);





}//FIN DE LA FUNCIÓN