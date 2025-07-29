// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    
    // Obtener el elemento input
    const inputAmigo = document.getElementById('amigo');

    // Obtener el valor del input y eliminar espacios en blanco
    const nombreAmigo = inputAmigo.value.trim();
    
    // Obtener la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Crear un elemento li para mostrar el nombre
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nombreAmigo;
    
    // Agregar el elemento a la lista
    listaAmigos.appendChild(elementoLista);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
}
