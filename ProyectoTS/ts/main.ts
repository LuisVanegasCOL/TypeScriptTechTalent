// Estructura de la clase Task:
/*
id: un identificador único para cada tarea (esto ayuda a no tener tareas duplicadas).
title: el nombre de la tarea.
completed: un estado que indica si la tarea está completada o no.
*/

// Definición de la clase Task que representa una tarea.
class Task {
    id: number;         // Propiedad para el identificador único de la tarea.
    title: string;      // Propiedad para el nombre de la tarea.
    completed: boolean; // Propiedad para saber si la tarea está completada o no.

    // Constructor que se utiliza para crear una nueva tarea con los valores pasados.
    constructor(id: number, title: string, completed: boolean) {
        this.id = id;            // Asigna el id de la tarea.
        this.title = title;      // Asigna el título de la tarea.
        this.completed = completed; // Asigna si la tarea está completada o no.
    }
}

// Definición de la clase TaskManager que gestiona las tareas.
class TaskManager {
    private tasks: Task[] = [];              // Array para almacenar todas las tareas.
    private taskListElement: HTMLUListElement | null; // Referencia al elemento HTML que contendrá las tareas.

    // Constructor de la clase que inicializa la lista de tareas y las muestra.
    constructor() {
        this.taskListElement = document.getElementById("taskList") as HTMLUListElement; // Encuentra el contenedor de tareas en el HTML.
        this.loadTasks(); // Carga las tareas desde localStorage.
        this.renderTasks(); // Muestra las tareas en la pantalla.
    }

    // Función que agrega una nueva tarea.
    addTask(title: string): void {
        const id = Date.now(); // Genera un id único usando la fecha actual en milisegundos.
        const newTask = new Task(id, title, false); // Crea una nueva tarea con el título y estado completado en falso.
        this.tasks.push(newTask); // Agrega la tarea al array de tareas.
        this.saveTasks(); // Guarda las tareas actualizadas en localStorage.
        this.renderTasks(); // Vuelve a mostrar las tareas.
    }

    // Función que cambia el estado de una tarea entre completada y no completada.
    toggleTaskCompletion(id: number): void {
        const task = this.tasks.find(task => task.id === id); // Busca la tarea por su id.
        if (task) { // Si la tarea se encuentra.
            task.completed = !task.completed; // Cambia su estado de completada.
            this.saveTasks(); // Guarda las tareas actualizadas en localStorage.
            this.renderTasks(); // Vuelve a mostrar las tareas.
        }
    }

    // Función que elimina una tarea.
    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id); // Filtra las tareas, eliminando la tarea con el id indicado.
        this.saveTasks(); // Guarda las tareas actualizadas en localStorage.
        this.renderTasks(); // Vuelve a mostrar las tareas.
    }

    // Función que obtiene las tareas filtradas por estado.
    getTasks(filter: string = "all"): Task[] {
        if (filter === "completed") { // Si se seleccionó el filtro 'completadas'.
            return this.tasks.filter(task => task.completed); // Devuelve solo las tareas completadas.
        } else if (filter === "pending") { // Si se seleccionó el filtro 'pendientes'.
            return this.tasks.filter(task => !task.completed); // Devuelve solo las tareas pendientes.
        }
        return this.tasks; // Si el filtro es 'all', devuelve todas las tareas.
    }

    // Función que guarda las tareas en el localStorage.
    saveTasks(): void {
        localStorage.setItem("tasks", JSON.stringify(this.tasks)); // Convierte las tareas a JSON y las guarda en el localStorage.
    }

    // Función que carga las tareas desde el localStorage al iniciar la página.
    loadTasks(): void {
        const storedTasks = localStorage.getItem("tasks"); // Obtiene las tareas guardadas del localStorage.
        if (storedTasks) { // Si hay tareas guardadas.
            this.tasks = JSON.parse(storedTasks); // Convierte el JSON a un array de objetos Task.
        }
    }

    // Función que renderiza las tareas en el HTML.
    renderTasks(filter: string = "all"): void {
        if (!this.taskListElement) return; // Si no se encuentra el contenedor de tareas, sale de la función.

        this.taskListElement.innerHTML = ""; // Limpia la lista actual de tareas en el HTML.

        const filteredTasks = this.getTasks(filter); // Filtra las tareas según el filtro seleccionado.

        filteredTasks.forEach(task => { // Itera sobre cada tarea filtrada.
            const li = document.createElement("li"); // Crea un elemento de lista para cada tarea.
            li.classList.add("task-item"); // Agrega una clase CSS para estilo.

            if (task.completed) li.classList.add("completed"); // Si la tarea está completada, agrega una clase de estilo.

            const taskText = document.createElement("span"); // Crea un elemento de texto para el título de la tarea.
            taskText.textContent = task.title; // Asigna el título de la tarea al texto.

            // Crea un botón para cambiar el estado de la tarea (completar/desmarcar).
            const toggleButton = document.createElement("button");
            toggleButton.textContent = task.completed ? "Desmarcar" : "Completar";
            toggleButton.onclick = () => this.toggleTaskCompletion(task.id); // Cambia el estado de la tarea cuando se hace clic.

            // Crea un botón para eliminar la tarea.
            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";
            removeButton.onclick = () => this.removeTask(task.id); // Elimina la tarea cuando se hace clic.

            // Agrega los elementos (texto, botones) al elemento de lista.
            li.appendChild(taskText);
            li.appendChild(toggleButton);
            li.appendChild(removeButton);

            if (this.taskListElement) {
                this.taskListElement.appendChild(li); // Agrega la tarea al contenedor de tareas en el HTML.
            }
        });
    }
}

// Crea una instancia de TaskManager al cargar la página.
const taskManager = new TaskManager();

// Agrega un evento para añadir una tarea cuando se hace clic en el botón de añadir tarea.
document.getElementById("addTaskButton")?.addEventListener("click", () => {
    const input = document.getElementById("taskTitle") as HTMLInputElement; // Obtiene el input del título de la tarea.
    if (input.value.trim()) { // Si el input no está vacío.
        taskManager.addTask(input.value.trim()); // Añade la tarea con el título.
        input.value = ""; // Limpia el input después de añadir la tarea.
    }
});

// Agrega un evento para filtrar las tareas cuando se hace clic en los botones de filtro.
document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", (event) => {
        const filter = (event.target as HTMLButtonElement).getAttribute("data-filter") || "all"; // Obtiene el filtro de la propiedad 'data-filter'.
        taskManager.renderTasks(filter); // Renderiza las tareas con el filtro seleccionado.
    });
});

// Renderiza las tareas al cargar la página.
document.addEventListener("DOMContentLoaded", () => {
    taskManager.renderTasks();
});
