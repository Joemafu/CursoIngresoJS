function mostrar() {

    var sexo
    sexo = prompt("Ingrese f para Femenino, ó m para Masculino.");

    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Usted ingresó un carácter no válido. Ingrese f para Femenino, ó m para Masculino.");
    }
    while (sexo == "f") {
        document.getElementById("Sexo").value = ("Usted ingresó sexo Femenino.");
        break
    }
    while (sexo == "m") {
        document.getElementById("Sexo").value = ("Usted ingresó sexo Masculino.")
        break
    }
}//FIN DE LA FUNCIÓN