function mostrar()
{
//tomo la edad  
    var mesDelAño=document.getElementById("mes").value;    

    switch(mesDelAño)
    {
        case("Septiembre"):
        case("Octubre"):
        case("Noviembre"):
        case("Diciembre"):
            alert("Estamos en "+mesDelAño+", ya pasamos el frío, ahora el calor!");
            break

        case("Julio"):
        case("Agosto"):
            alert("Estamos en "+mesDelAño+", abrigate que hace frío!");
            break

        default:
            alert("Estamos en "+mesDelAño+", falta para el invierno"); 
    }




}//FIN DE LA FUNCIÓN