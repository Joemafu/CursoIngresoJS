/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

    var sueldo;

    var resultado;

    sueldo = document.getElementById("sueldo").value;

    resultado = parseInt(sueldo, 10) * 10 / 100 + parseInt(sueldo, 10);

    document.getElementById("resultado").value = resultado;

}
/* (NO FUNCIONARON):

    resultado = parseInt(sueldo, 10) * 1.1;

    resultado = parseInt(sueldo, 10) / 10 * 11;

*/