let alertInterval;
document.getElementById("alert-button").addEventListener("click", function() {
    if (alertInterval) {
        clearInterval(alertInterval);
    }
    alertInterval = setInterval(function() {
        document.getElementById("alert-sound").play();
        changeBackgroundColor();
    }, 1000);
});

// Función para generar un color RGB aleatorio
function generateRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Función para cambiar el color de fondo
function changeBackgroundColor() {
	var randomColor = generateRandomColor();
	document.body.style.backgroundColor = randomColor;
}