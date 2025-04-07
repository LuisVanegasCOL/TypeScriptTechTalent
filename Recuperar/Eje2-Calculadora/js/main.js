"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
const pantalla = document.getElementById("pantalla");
let currentInput = "0";
let operator = "";
let firstValue = null;
let secondValue = null;
function actualizarPantalla() {
    pantalla.innerText = currentInput;
}
function presionarBoton(num) {
    if (currentInput === "0") {
        currentInput = num;
    }
    else {
        currentInput += num;
    }
    actualizarPantalla();
}
function borrar() {
    currentInput = "0";
    actualizarPantalla();
}
function borrarUno() {
    currentInput = currentInput.length === 1 ? "0" : currentInput.slice(0, -1);
    actualizarPantalla();
}
function aplicarOperacion(oper) {
    firstValue = parseFloat(currentInput);
    operator = oper;
    currentInput = "0";
}
function calcular() {
    secondValue = parseFloat(currentInput);
    let result;
    switch (operator) {
        case "+":
            result = (firstValue !== null && firstValue !== void 0 ? firstValue : 0) + secondValue;
            break;
        case "-":
            result = (firstValue !== null && firstValue !== void 0 ? firstValue : 0) - secondValue;
            break;
        case "*":
            result = (firstValue !== null && firstValue !== void 0 ? firstValue : 0) * secondValue;
            break;
        case "/":
            result = (firstValue !== null && firstValue !== void 0 ? firstValue : 0) / secondValue;
            break;
        case "sqrt":
            result = Math.sqrt(firstValue !== null && firstValue !== void 0 ? firstValue : secondValue);
            break;
        default:
            result = secondValue;
    }
    currentInput = result.toString();
    actualizarPantalla();
}
// Asignación de eventos
for (let i = 0; i <= 9; i++) {
    (_a = document.getElementById(`btn-${i}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => presionarBoton(i.toString()));
}
(_b = document.getElementById("btn-dot")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => presionarBoton("."));
(_c = document.getElementById("btn-ce")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", borrar);
(_d = document.getElementById("btn-del")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", borrarUno);
(_e = document.getElementById("btn-add")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => aplicarOperacion("+"));
(_f = document.getElementById("btn-subtract")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => aplicarOperacion("-"));
(_g = document.getElementById("btn-multiply")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", () => aplicarOperacion("*"));
(_h = document.getElementById("btn-divide")) === null || _h === void 0 ? void 0 : _h.addEventListener("click", () => aplicarOperacion("/"));
(_j = document.getElementById("btn-raiz")) === null || _j === void 0 ? void 0 : _j.addEventListener("click", () => aplicarOperacion("sqrt"));
(_k = document.getElementById("btn-igual")) === null || _k === void 0 ? void 0 : _k.addEventListener("click", calcular);
