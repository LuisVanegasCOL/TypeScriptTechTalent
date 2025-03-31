// 1. Variables y Tipos de Datos
// Declara tres variables de diferentes tipos (string, number, boolean) y muestra sus tipos en la consola.

let nombre: string = "Luis";
console.log(nombre); 

let edad: number =27;
console.log(edad);

let esEstudiante: boolean = true;
console.log(esEstudiante);

// 2. Funciones con Tipado
// Crea una función que reciba dos números y devuelva su multiplicación.

function multiplicacion(a:number =2, b:number=3):number {
    return a*b;
}

console.log(multiplicacion(2,3)); 

// 3. Funciones con Parámetros Opcionales y Predeterminados
// Crea una función que reciba un nombre y un saludo opcional.
// Si no se proporciona el saludo, debe usar 'Hola'.

function saludar(nombre:string, saludo:string= "hola"):string {
    return `${saludo}, ${nombre}`;
}
console.log(saludar("Luis")); // Saludo por defecto
console.log(saludar("Luis", "buenas tardes")); // Saludo personalizado


// 4. Objetos e Interfaces
// Define una interfaz Auto con 'marca', 'modelo' y 'año'.
// Luego, crea un objeto que implemente esta interfaz.

interface Auto{

    marca:string;
    modelo:number;
    year:number;
}
const objecto: Auto = {
    marca: "Toyota",
    modelo: 2020,
    year: 2021
};
console.log(objecto); // Imprime el objeto Auto en la consola



// 5. Arreglos y Métodos de Arreglo
// Crea un array de números y usa 'map()' para duplicar cada número.

const arreglo: number[] = [1,2,3,4,5];
const duplicarArreglo = arreglo.map((num) => num * 2);  
console.log(duplicarArreglo); // Imprime el arreglo duplicado en la consola


// 6. Tipos Personalizados y Unión de Tipos
// Define un tipo 'Estado' que pueda ser 'activo', 'inactivo' o 'pendiente'.
// Luego, crea una variable con este tipo.   

class Persona {
    nombre: string;
    edad: number;
    estado: "activo" | "inactivo" | "pendiente";

    constructor(params: { nombre: string; edad: number; estado: "activo" | "inactivo" | "pendiente" }) {
        this.nombre = params.nombre;
        this.edad = params.edad;
        this.estado = params.estado;
    }

    presenta():string{
    return "Hola mi nombre es "+ this.nombre + "y tengo " + this.edad + "años. Mi estado es" + this.estado + ".";
    }
}
        const personanew = new Persona ({nombre: "Ximena", edad: 26, estado : "activo"});
        console.log(personanew.presenta()); // Imprime la presentación de la persona en la consola
        
// 7. Clases y Programación Orientada a Objetos
// Crea una clase 'Persona' con 'nombre' y 'edad'.
// Agrega un método que devuelva una presentación del objeto.

class Persona2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presenta(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}   

// 8. Generics (Genéricos)
// Crea una función genérica que reciba un array de cualquier tipo y devuelva el primer elemento.

function obtenerPrimerElemento<T>(arreglo: T[]): T | undefined {
        return arreglo[0];
}



// 9. Promesas y Async/Await
// Crea una función asíncrona que simule una petición a un servidor con 'setTimeout'.
    
async function obtenerDatos(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Datos obtenidos");
            }, 2000);
        });
    }

// 10. Decoradores en Clases
// Crea un decorador que imprima en la consola cada vez que se instancia una clase.

function logClass(target: any) {
    console.log(`Clase ${target.name} instanciada`);
}



/// crear una interface PC y crea 2 objetos que implementen la interface
interface PC{

    procesador: string;
    ram : number;
    motherboard: string;
    estanuevo: "nuevo" | "usado" | "reparado";
}
class Torre implements PC{
    procesador: string;
    ram: number;
    motherboard: string;
    estanuevo: "nuevo" | "usado" | "reparado";
    constructor(procesador: string, ram: number, motherboard: string, estanuevo: "nuevo" | "usado" | "reparado") {
        this.procesador = procesador;
        this.ram = ram;
        this.motherboard = motherboard;
        this.estanuevo = estanuevo;
    }  }
const pc1 = new Torre("Intel i7", 16, "Asus", "nuevo");
const pc2 = new Torre("AMD Ryzen 5", 32, "Gigabyte", "usado");
console.log(pc1); // Imprime el objeto PC1 en la consola
console.log(pc2); // Imprime el objeto PC2 en la consola    
const pc3 = new Torre("Xeon", 32,"China","reparado");
console.log(pc3);