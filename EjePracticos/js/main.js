"use strict";
// 1. Variables y Tipos de Datos
// Declara tres variables de diferentes tipos (string, number, boolean) y muestra sus tipos en la consola.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nombre = "Luis";
console.log(nombre);
let edad = 27;
console.log(edad);
let esEstudiante = true;
console.log(esEstudiante);
// 2. Funciones con Tipado
// Crea una función que reciba dos números y devuelva su multiplicación.
function multiplicacion(a = 2, b = 3) {
    return a * b;
}
console.log(multiplicacion(2, 3));
// 3. Funciones con Parámetros Opcionales y Predeterminados
// Crea una función que reciba un nombre y un saludo opcional.
// Si no se proporciona el saludo, debe usar 'Hola'.
function saludar(nombre, saludo = "hola") {
    return `${saludo}, ${nombre}`;
}
console.log(saludar("Luis")); // Saludo por defecto
console.log(saludar("Luis", "buenas tardes")); // Saludo personalizado
const objecto = {
    marca: "Toyota",
    modelo: 2020,
    year: 2021
};
console.log(objecto); // Imprime el objeto Auto en la consola
// 5. Arreglos y Métodos de Arreglo
// Crea un array de números y usa 'map()' para duplicar cada número.
const arreglo = [1, 2, 3, 4, 5];
const duplicarArreglo = arreglo.map((num) => num * 2);
console.log(duplicarArreglo); // Imprime el arreglo duplicado en la consola
// 6. Tipos Personalizados y Unión de Tipos
// Define un tipo 'Estado' que pueda ser 'activo', 'inactivo' o 'pendiente'.
// Luego, crea una variable con este tipo.   
class Persona {
    constructor(params) {
        this.nombre = params.nombre;
        this.edad = params.edad;
        this.estado = params.estado;
    }
    presenta() {
        return "Hola mi nombre es " + this.nombre + "y tengo " + this.edad + "años. Mi estado es" + this.estado + ".";
    }
}
const personanew = new Persona({ nombre: "Ximena", edad: 26, estado: "activo" });
console.log(personanew.presenta()); // Imprime la presentación de la persona en la consola
// 7. Clases y Programación Orientada a Objetos
// Crea una clase 'Persona' con 'nombre' y 'edad'.
// Agrega un método que devuelva una presentación del objeto.
class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presenta() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
// 8. Generics (Genéricos)
// Crea una función genérica que reciba un array de cualquier tipo y devuelva el primer elemento.
function obtenerPrimerElemento(arreglo) {
    return arreglo[0];
}
// 9. Promesas y Async/Await
// Crea una función asíncrona que simule una petición a un servidor con 'setTimeout'.
function obtenerDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Datos obtenidos");
            }, 2000);
        });
    });
}
// 10. Decoradores en Clases
// Crea un decorador que imprima en la consola cada vez que se instancia una clase.
function logClass(target) {
    console.log(`Clase ${target.name} instanciada`);
}
class Torre {
    constructor(procesador, ram, motherboard, estanuevo) {
        this.procesador = procesador;
        this.ram = ram;
        this.motherboard = motherboard;
        this.estanuevo = estanuevo;
    }
}
const pc1 = new Torre("Intel i7", 16, "Asus", "nuevo");
const pc2 = new Torre("AMD Ryzen 5", 32, "Gigabyte", "usado");
console.log(pc1); // Imprime el objeto PC1 en la consola
console.log(pc2); // Imprime el objeto PC2 en la consola    
const pc3 = new Torre("Xeon", 32, "China", "reparado");
console.log(pc3);
