/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    var numero1;

    var numero2;

    var resultado;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    resultado = parseInt(numero1, 10) + parseInt(numero2, 10);

    alert("El resultado es " + resultado + ".");
}

function restar() {
    var numero1;

    var numero2;

    var resultado;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    resultado = parseInt(numero1, 10) - parseInt(numero2, 10);

    alert("El resultado es " + resultado + ".");
}

function multiplicar() {
    var numero1;

    var numero2;

    var resultado;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    resultado = parseInt(numero1, 10) * parseInt(numero2, 10);

    alert("El resultado es " + resultado + ".");
}

function dividir() {
    var numero1;

    var numero2;

    var resultado;

    numero1 = document.getElementById("numeroUno").value;

    numero2 = document.getElementById("numeroDos").value;

    resultado = parseInt(numero1, 10) / parseInt(numero2, 10);

    alert("El resultado es " + resultado + ".");
}

