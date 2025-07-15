// Cargar tareas al inicio
window.onload = cargarTareas;

function agregartarea() {
    const input = document.getElementById("nuevatarea");
    const textoTarea = input.value.trim();

    if (textoTarea === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    crearElementoTarea(textoTarea);
    input.value = "";
    guardarTareas();
}

function crearElementoTarea(texto) {
    const li = document.createElement("li");
    li.textContent = texto;

    // Botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "✖";
    botonEliminar.classList.add("eliminar-btn");

    // Eliminar al hacer clic
    botonEliminar.onclick = function (e) {
        e.stopPropagation();
        li.remove();
        guardarTareas();
    };

    li.appendChild(botonEliminar);
    document.getElementById("listatareas").appendChild(li);
}

// Guardar tareas en localStorage
function guardarTareas() {
    const tareas = [];
    const lista = document.getElementById("listatareas").children;
    for (let i = 0; i < lista.length; i++) {
        const texto = lista[i].firstChild.textContent; // Solo el texto, no el botón
        tareas.push(texto);
    }
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Cargar tareas desde localStorage
function cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas.forEach(texto => crearElementoTarea(texto));
}






