function mostrar() {
    var dia;

    var mensaje;

    dia = prompt("Ingrese un día de la semana (Sólo minúsculas y sin acento).");

    switch (dia) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = ("A trabajar!");
            break

        case "sabado":
        case "domingo":
            mensaje = ("Buen finde!");
            break

        default:
            mensaje = ("Este no es un día de la semana.")
            break
    }

    alert(mensaje);

}
