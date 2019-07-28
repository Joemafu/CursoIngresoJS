//Para este creo que sería conveniente ver array

function mostrar() {
    var nota;
    var sexo;
    var contador;
    contador = 0;

    while (contador < 5) {
        nota = (parseInt(prompt("Ingrese nota:")),10);

        while (isNaN(nota) || nota > 10 || nota < 0) {
            alert("Ingrese una nota válida entre 0 y 10.");
            break
        }

        sexo = prompt("Ingrese f o m para sexo.");
        while (sexo != "f" || "m") {
            alert("Ingrese 'f' para femenino o 'm' para masculino.")
            break
        }

        contador = contador + 1
    }
    alert ("Hola mundo.")

}
