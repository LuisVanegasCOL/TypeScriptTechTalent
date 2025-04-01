
# Juego de Adivinanza de Números

## Enunciado

Crea un juego de adivinanza de números donde el usuario tiene que adivinar un número secreto generado aleatoriamente entre un rango específico. El juego debe dar pistas como "Demasiado alto" o "Demasiado bajo" para guiar al jugador. El objetivo es adivinar el número con la menor cantidad de intentos posible.

## Requisitos del Proyecto

### 1. Generación del Número Aleatorio
- El número secreto debe estar entre un rango definido (por ejemplo, de 1 a 100).

### 2. Interfaz de Usuario
- Un input para que el jugador ingrese su intento.
- Un botón para enviar el intento.
- Un área de texto que muestre las pistas ("Demasiado alto", "Demasiado bajo").
- Un contador que muestre cuántos intentos ha hecho el jugador.
- Un mensaje que indique si el jugador adivinó correctamente o si necesita seguir intentándolo.

### 3. Lógica de Juego
- Cada vez que el jugador haga un intento, debe compararse con el número secreto.
- Si el jugador adivina correctamente, mostrar un mensaje de victoria.
- Si el jugador supera un límite de intentos (por ejemplo, 10), mostrar un mensaje de derrota y el número secreto.

### 4. Estilos
- Diseño limpio y atractivo utilizando CSS.
- Los colores pueden cambiar dependiendo de si el jugador ha ganado o perdido.

## Estructura de Archivos

```
/project-folder
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js (generado al compilar el archivo main.ts)
├── ts/
│   └── main.ts
├── assets/
│   └── images (si decides agregar imágenes, como un ícono o fondo)
└── README.md (opcional, para documentación)
```

## Puntos Claves a Considerar

### 1. HTML
- Crear un formulario con un input para que el jugador ingrese su intento.
- Agregar un botón para enviar el intento.
- Crear áreas para mostrar las pistas, el contador de intentos y el resultado final.

### 2. CSS
- Estilos modernos con botones bien definidos, usando colores agradables.
- Diferenciar el estilo cuando el jugador acierta o cuando se queda sin intentos.
- Asegúrate de que la interfaz sea intuitiva y agradable.

### 3. TypeScript
- **Generar el número aleatorio**: Usa `Math.random()` para generar un número dentro del rango.
- **Controlar los intentos**: Asegúrate de mantener un contador de intentos.
- **Pistas de adivinanza**: Comparar el intento del jugador con el número secreto y proporcionar pistas.
- **Validación**: Asegúrate de que el jugador no ingrese valores fuera del rango o caracteres no válidos.

## Funcionalidad del Proyecto
- Al cargar la página, el número secreto es generado aleatoriamente.
- El jugador hace un intento introduciendo un número y presionando el botón.
- Si el número ingresado es mayor o menor que el secreto, se muestra un mensaje adecuado.
- Si el jugador adivina correctamente, el juego muestra un mensaje de victoria.
- Si se alcanzan 10 intentos sin adivinar, el juego muestra el número secreto y un mensaje de derrota.

## Ideas Adicionales
- **Dificultad Variable**: Puedes añadir un control para seleccionar el nivel de dificultad (fácil, medio, difícil), lo que cambia el rango del número secreto.
- **Historial de Intentos**: Puedes mantener un historial de los intentos realizados para mostrar al usuario cuántos intentos ha hecho y cuáles fueron.
- **Sonidos y Animaciones**: Agregar animaciones suaves o efectos de sonido cuando se adivine el número correctamente.

---

Este proyecto es una excelente práctica para dominar la interacción con el usuario en la web y practicar la lógica de programación en **TypeScript**.
