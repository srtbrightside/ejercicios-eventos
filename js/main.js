window.onload = function(){
	alert("La página se ha cargado completamente");
}

var hola = document.getElementById("demo");
	hola.addEventListener("click", function(){
		alert("¡Hola mundo!")
	})

var sobre = document.getElementById("sobre-mi");
	sobre.addEventListener("mouseover", function(){
		alert("Estás sobre mi.")
	})

var fuera = document.getElementById("fuera-de-mi");
	fuera.addEventListener("mouseout", function(){
		alert("No estás sobre mi.")
	})
