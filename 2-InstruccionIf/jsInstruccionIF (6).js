function mostrar()
{
//tomo la edad  

    var edad;

    edad=document.getElementById("edad").value;

    if (edad<13)
    {
        alert("Usted es un niño");
    }
    else

        if (edad>12&&edad<18)
        {
            alert("Usted es un adolescente");
        }
        else

        {
            alert("Usted es mayor de edad");
        }

}//FIN DE LA FUNCIÓN