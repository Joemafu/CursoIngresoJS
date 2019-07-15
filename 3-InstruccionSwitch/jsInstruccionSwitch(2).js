function mostrar()
{
//tomo la edad  
    var mesDelAño=document.getElementById('mes').value;    

    if(mesDelAño=="Enero"||"Febrero"||"Marzo"||"Abril"||"Mayo"||"Junio")
    {
        alert("Estamos en "+mesDelAño+", falta para el invierno");
    }
    else

        if(mesDelAño=="Julio"||"Agosto")
        {
            alert("Estamos en "+mesDelAño+", abrigate que hace frío!");
        }
        else

            if(mesDelAño=="Septiembre"||"Octubre"||"Noviembre")
            {
                alert("Estamos en "+mesDelAño+", ya pasamos el frío, ahora el calor!");
            }




}//FIN DE LA FUNCIÓN