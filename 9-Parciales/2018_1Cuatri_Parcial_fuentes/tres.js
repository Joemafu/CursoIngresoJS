function mostrar() {
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese precio de lista.");
    descuento = prompt("Ingrese porcentaje de descuento");

    precioFinal = parseInt(precio, 10) * (100 - parseInt(descuento, 10)) / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
