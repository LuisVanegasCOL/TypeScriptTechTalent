
# Proyecto: To-Do List en TypeScript

Este proyecto es una aplicación sencilla para gestionar tareas. El objetivo es que puedas practicar TypeScript, trabajar con el DOM y manejar el almacenamiento persistente (usando `localStorage`).

## Pasos para crear la aplicación

### 1. Estructura de Archivos
Primero, organiza tu proyecto. La estructura de archivos debería verse así:

```
/ProyectoTS
  ├── index.html        # Interfaz de la aplicación (estructura HTML)
  ├── css/              # Carpeta con los estilos CSS
  │   └── styles.css    # Diseño y estilos visuales
  ├── ts/               # Carpeta con archivos TypeScript
  │   └── main.ts       # Lógica de la aplicación en TypeScript
  ├── js/               # Carpeta con archivos JavaScript generados
  │   └── main.js       # Archivo JavaScript compilado desde main.ts
  ├── tsconfig.json     # Configuración de TypeScript
  ├── assets/           # Recursos como imágenes (si las usas)
  └── README.md         # Explicación del proyecto

```
### 2. Configuración Inicial
Antes de empezar, necesitamos configurar el entorno:

1. **Inicia tu proyecto** con Node.js:
   ```
   npm init -y
   ```

2. **Instala TypeScript**:
   ```
   npm install typescript --save-dev
   ```

3. **Crea el archivo de configuración de TypeScript**:
   ```
   npx tsc --init
   ```
   Asegúrate de configurar `outDir` en `./dist` para que los archivos JavaScript se guarden allí.

### 3. Crear la Lógica en TypeScript
Ahora, nos vamos a centrar en la lógica interna de la aplicación. Vamos a crear una clase `Task` para representar las tareas.

**Estructura de la clase `Task`**:
- **`id`**: un identificador único para cada tarea (esto ayuda a no tener tareas duplicadas).
- **`title`**: el nombre de la tarea.
- **`completed`**: un estado que indica si la tarea está completada o no.

**Funciones a crear**:
1. **`addTask(task: Task)`**: Agrega una tarea nueva.
2. **`toggleTaskCompletion(id: number)`**: Marca una tarea como completada o no.
3. **`removeTask(id: number)`**: Elimina una tarea.
4. **`getTasks(filter: string)`**: Filtra las tareas para mostrar solo las completadas o las no completadas.
5. **`saveTasks()`**: Guarda las tareas en el `localStorage` (esto hará que las tareas no se pierdan al recargar la página).
6. **`loadTasks()`**: Carga las tareas desde el `localStorage` al cargar la página.

**Consejo**: Comienza primero con una sola función, como `addTask`, y luego ve añadiendo las demás.

### 4. Interacción con el Usuario (DOM)
En tu archivo `index.html`, crea la interfaz de la aplicación. Debes tener:

- Un campo de texto donde se escribirá la tarea.
- Un botón para agregar la tarea.
- Una lista (`<ul>`) donde se mostrarán las tareas.
- Botones para marcar tareas como completadas o eliminarlas.
- Un filtro para elegir qué tareas mostrar (todas, completadas, o pendientes).

### 5. Estilizar con CSS
En el archivo `style.css`, añade los siguientes estilos:

1. Estilos básicos para los elementos (input, botones, listas).
2. Un diseño limpio y simple, usando **Flexbox** o **Grid** para organizar los elementos.
3. Añade transiciones suaves para cuando se marcan tareas como completadas o se eliminan.

### 6. Funcionalidad de Guardado (localStorage)
Utiliza `localStorage` para que las tareas no desaparezcan cuando recargues la página. Cuando agregues, marques como completadas o elimines una tarea, guarda los cambios con `saveTasks()`.

**Pasos importantes**:
- Al cargar la página, usa `loadTasks()` para mostrar las tareas guardadas.
- Cuando el usuario realiza un cambio, guarda las tareas con `saveTasks()`.

## Recuerda los pasos importantes

1. **Divide el trabajo**: Si te sientes abrumado, divide cada tarea en partes pequeñas.
2. **Hazlo paso a paso**: Primero crea una función, prueba que funcione, luego pasa a la siguiente.
3. **No olvides guardar las tareas**: Asegúrate de guardar las tareas con `localStorage` para que persistan.
4. **Testea a menudo**: Después de cada cambio, asegúrate de probar que todo funcione.

## Consejos para mantenerte enfocado:

1. **Hazlo paso a paso**: No trates de hacerlo todo de una vez. Empieza con la creación de tareas, luego ve agregando más características.
2. **Tómate descansos**: Si te sientes atascado, toma un descanso corto. Luego, regresa y sigue adelante.
3. **Organiza tu tiempo**: Si te resulta útil, establece temporizadores (por ejemplo, 25 minutos trabajando, 5 minutos descansando).

## Posibles mejoras (si quieres más desafío):
- Añadir fechas de vencimiento para las tareas.
- Permitir que las tareas se puedan editar.
- Crear una interfaz más visual y atractiva (añadir imágenes, iconos, etc.).
