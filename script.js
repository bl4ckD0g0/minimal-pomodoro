
// Función para reproducir el sonido de alerta
function playAlert() {
    var source = 'https://freesound.org/data/previews/80/80921_1022651-lq.mp3';
	var audio = new Audio(source);
	changeBackgroundColor();
    audio.play();
}

// Función para activar la alerta cada X ms.
function activateAlert() {
    var activationTime = 1000;
	setInterval(playAlert, activationTime);
}

// Evento click del botón
document.getElementById("alert-btn").addEventListener("click", activateAlert);



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