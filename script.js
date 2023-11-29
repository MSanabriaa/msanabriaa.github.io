let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

window.addEventListener('load', init);

function init() {
    console.log('La página ha cargado correctamente');
    const button = document.getElementById("guess-button");
    button.addEventListener("click", intentar);
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function intentar() {
    const INTENTO = leerIntento();

    if (INTENTO === palabra) {
        terminarJuego("<h1>¡GANASTE!😀</h1>");
        return;
    }

    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851'; // Verde
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'; // Amarillo
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4'; // Gris
        }

        ROW.appendChild(SPAN);
    }

    document.getElementById("grid").appendChild(ROW);

    intentos--;

    if (intentos === 0) {
        terminarJuego("<h1>¡PERDISTE!😖</h1>");
    }
}

function terminarJuego(mensaje) {
    const input = document.getElementById("guess-input");
    const button = document.getElementById("guess-button");

    input.disabled = true;
    button.disabled = true;

    const contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
