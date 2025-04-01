"use strict";
let numerosecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxintentos = 10;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const resetGame = document.getElementById("resetGame");
submitGuess.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    // Validar si el valor ingresado es un número válido
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }
    intentos++;
    attemptsDisplay.textContent = intentos.toString();
    // Comprobar si el número es correcto o no
    if (userGuess === numerosecreto) {
        message.textContent = "¡Felicidades! Adivinaste el número " + numerosecreto;
    }
    else if (intentos >= maxintentos) {
        message.textContent = "Has perdido. El número secreto era " + numerosecreto;
    }
    else if (userGuess > numerosecreto) {
        message.textContent = "Demasiado alto. Intenta de nuevo.";
    }
    else {
        message.textContent = "Demasiado bajo. Intenta de nuevo.";
    }
});
resetGame.addEventListener("click", () => {
    numerosecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    attemptsDisplay.textContent = "0";
    message.textContent = "";
    guessInput.value = "";
});
