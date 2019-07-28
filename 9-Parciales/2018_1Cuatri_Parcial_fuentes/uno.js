function mostrar() {
    var largo;
    var ancho;
    var perimetro;

    largo = prompt("Ingrese el largo del rectángulo.");
    ancho = prompt("Ingrese el ancho del rectángulo.");

    perimetro = (parseInt(largo, 10) + parseInt(ancho, 10)) * 2;

    alert("El perímetro del rectángulo es de " + perimetro + ".");

}
