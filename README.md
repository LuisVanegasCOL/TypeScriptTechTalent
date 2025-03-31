# Proyecto TypeScript - Ejercicios Prácticos

Este proyecto contiene una serie de ejercicios prácticos en TypeScript que cubren conceptos fundamentales del lenguaje, desde tipos básicos hasta programación orientada a objetos y genéricos.

## Contenido del Archivo `main.ts`

### 1. Variables y Tipos de Datos
Se declaran tres variables de diferentes tipos (`string`, `number`, `boolean`) y se imprimen sus valores en la consola.

### 2. Funciones con Tipado
Se crea una función que recibe dos números y devuelve su multiplicación.

### 3. Funciones con Parámetros Opcionales y Predeterminados
Se implementa una función que recibe un nombre y un saludo opcional. Si no se proporciona el saludo, se utiliza un valor predeterminado.

### 4. Objetos e Interfaces
Se define una interfaz `Auto` con las propiedades `marca`, `modelo` y `año`. Luego, se crea un objeto que implementa esta interfaz.

### 5. Arreglos y Métodos de Arreglo
Se utiliza un arreglo de números y el método `map()` para duplicar cada número.

### 6. Tipos Personalizados y Unión de Tipos
Se define un tipo personalizado `Estado` con valores posibles: `activo`, `inactivo` o `pendiente`. Además, se crea una clase `Persona` que utiliza este tipo.

### 7. Clases y Programación Orientada a Objetos
Se implementa una clase `Persona` con propiedades `nombre` y `edad`, y un método que devuelve una presentación del objeto.

### 8. Generics (Genéricos)
Se crea una función genérica que recibe un arreglo de cualquier tipo y devuelve el primer elemento.

### 9. Promesas y Async/Await
Se implementa una función asíncrona que simula una petición a un servidor utilizando `setTimeout`.

### 10. Decoradores en Clases
Se crea un decorador que imprime en la consola cada vez que se instancia una clase.

### 11. Interfaz `PC` y Clases que la Implementan
Se define una interfaz `PC` con propiedades como `procesador`, `ram`, `motherboard` y `estanuevo`. Luego, se crea una clase `Torre` que implementa esta interfaz y se instancian varios objetos.

## Ejecución
Para ejecutar este archivo, asegúrate de tener instalado TypeScript y compila el archivo con el siguiente comando:

```bash
tsc main.ts
```

Luego, ejecuta el archivo JavaScript generado:

```bash
node main.js
```

## Autor
Luis Vanegas
