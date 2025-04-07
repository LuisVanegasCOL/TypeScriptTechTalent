const pantalla = document.getElementById("pantalla") as HTMLElement;

let currentInput: string = "0";
let operator: string = "";
let firstValue: number | null = null;
let secondValue: number | null = null;

function actualizarPantalla(): void {
  pantalla.innerText = currentInput;
}

function presionarBoton(num: string): void {
  if (currentInput === "0") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  actualizarPantalla();
}

function borrar(): void {
  currentInput = "0";
  actualizarPantalla();
}

function borrarUno(): void {
  currentInput = currentInput.length === 1 ? "0" : currentInput.slice(0, -1);
  actualizarPantalla();
}

function aplicarOperacion(oper: string): void {
  firstValue = parseFloat(currentInput);
  operator = oper;
  currentInput = "0";
}

function calcular(): void {
  secondValue = parseFloat(currentInput);
  let result: number;

  switch (operator) {
    case "+":
      result = (firstValue ?? 0) + secondValue;
      break;
    case "-":
      result = (firstValue ?? 0) - secondValue;
      break;
    case "*":
      result = (firstValue ?? 0) * secondValue;
      break;
    case "/":
      result = (firstValue ?? 0) / secondValue;
      break;
    case "sqrt":
      result = Math.sqrt(firstValue ?? secondValue);
      break;
    default:
      result = secondValue;
  }

  currentInput = result.toString();
  actualizarPantalla();
}

// Asignación de eventos
for (let i = 0; i <= 9; i++) {
  document.getElementById(`btn-${i}`)?.addEventListener("click", () => presionarBoton(i.toString()));
}

document.getElementById("btn-dot")?.addEventListener("click", () => presionarBoton("."));
document.getElementById("btn-ce")?.addEventListener("click", borrar);
document.getElementById("btn-del")?.addEventListener("click", borrarUno);
document.getElementById("btn-add")?.addEventListener("click", () => aplicarOperacion("+"));
document.getElementById("btn-subtract")?.addEventListener("click", () => aplicarOperacion("-"));
document.getElementById("btn-multiply")?.addEventListener("click", () => aplicarOperacion("*"));
document.getElementById("btn-divide")?.addEventListener("click", () => aplicarOperacion("/"));
document.getElementById("btn-raiz")?.addEventListener("click", () => aplicarOperacion("sqrt"));
document.getElementById("btn-igual")?.addEventListener("click", calcular);
