/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;

    var numero2;

    var resultado;

    numero1=document.getElementById("numeroUno").value;

    numero2=document.getElementById("numeroDos").value;

    resultado=parseInt(numero1,10)+parseInt(numero2,10);

    alert("El resultado es "+resultado+".");
}

