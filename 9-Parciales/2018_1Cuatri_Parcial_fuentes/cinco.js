function mostrar() {
    var planeta;
    var mensaje;

    planeta = prompt("Ingrese un planeta del sistema solar (sólo minúsculas y sin acento).");

    switch (planeta) {
        case "venus":
        case "mercurio":
            mensaje = ("Acá hace más calor.");
            break

        case "tierra":
            mensaje = ("Acá vivimos.");
            break
            
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = ("Aca hace más frío.");
            break

        default:
            mensaje = ("Este no es un planeta del sistema solar.");
            break
    }

    alert(mensaje);

}
