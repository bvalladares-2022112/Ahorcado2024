const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const palbras = ['PEZ', 'GIMNASIO', 'PERRO', 'FLOR', 'BICICLETA', 'BALON', 'MARIPOSA', 'CUADRO', 'MONTAÑA', 'TEATRO', 'TELEVISION', 'CASCADA', 'CALENDARIO', 'VENTANA', 'LLUVIA'];
const palabraElejida = words[Math.floor(Math.random() * words.length)];
const palabraDisplay = document.getElementById('wordDisplay');
const guessesDisplay = document.getElementById('guessesDisplay');
const botonesLetrasDiv = document.getElementById('botonesLetras');
const mensajeDiv = document.getElementById('mensaje');
const intentosRestantesDiv = document.getElementById('intentosRestantes');
let palabrasDadas = [];
let intentosIncorrectos = 0;
let letrasUsadas = {};
let intentosRestantes = 7;
let juegoFinalizado = false;

function actualizarBotonesLetras() {
        botonesLetrasDiv.innerHTML = ''; 
        const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        for (const letter of alphabet) {
                const button = document.createElement('button');
                button.textContent = letter;
                button.addEventListener('click', () => guessLetter(letter));
                if (letrasUsadas[letter] || juegoFinalizado) {
                        button.disabled = true; 
                }
                botonesLetrasDiv.appendChild(button);
        }
}

function mostrasResultadosMensaje(isWin) {
        juegoFinalizado = true; 
        mensajeDiv.style.display = 'block'; 
        mensajeDiv.textContent = isWin ? '¡GANASTE!' : '¡PERDISTE! La palabra era: ' + palabraElejida;
        mensajeDiv.className = isWin ? '' : 'lose'; 
    }