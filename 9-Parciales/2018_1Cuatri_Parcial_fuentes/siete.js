function mostrar() {
    var nota;
    var sexo;
    var contador = 0;
    var acumulador = 0;
    var varonesAprobados = 0;
    var notaMenor = 10;
    var sexoMenorNota;

    while (contador < 5) {

        nota = (parseInt(prompt("Ingrese nota:")));
        while (isNaN(nota) || nota > 10 || nota < 0) {
            alert("Ingrese una nota válida entre 0 y 10.");
            nota = (parseInt(prompt("Ingrese nota:")));
        }
        console.log(nota);

        sexo = prompt("Ingrese f o m para sexo.");
        while (sexo != "f" && sexo != "m") {
            alert("Ingrese 'f' para femenino o 'm' para masculino.");
            sexo = prompt("Ingrese f o m para sexo.");
        }
        console.log(sexo);

        if (sexo == "m" && nota > 5) {
            varonesAprobados++;
        }
        if (nota < notaMenor) {
            notaMenor = nota;
            sexoMenorNota = sexo;
        }
        contador++;
        acumulador = acumulador + nota;
    }
    console.log("Promedio de notas: " + acumulador / contador);
    console.log("La nota más baja es un " + notaMenor + " y corresponde al sexo " + sexoMenorNota);
    console.log("Cantidad de varones con nota mayor a 6: " + varonesAprobados);

}
