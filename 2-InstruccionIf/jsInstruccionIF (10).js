function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		
	var aleatorio;

	aleatorio=Math.floor(Math.random()*10)+1;

	if(aleatorio<4)
	{
		alert("Su nota es "+aleatorio+", vamos, la próxima se puede.");
	}

	if(aleatorio>8)
	{
		alert("Su nota es "+aleatorio+", EXCELENTE.");
	}

	if(aleatorio>3&&aleatorio<9)
	{
		alert("Su nota es "+aleatorio+", APROBÓ.");
	}

}//FIN DE LA FUNCIÓN