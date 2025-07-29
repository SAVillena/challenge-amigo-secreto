// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {

    // Obtener el elemento input
    const inputAmigo = document.getElementById('amigo');

    // Obtener el valor del input y eliminar espacios en blanco
    const nombreAmigo = inputAmigo.value.trim();
    
     // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        inputAmigo.focus();
        return;
    }

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
    inputAmigo.focus();

}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que hay amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSeleccionado}</li>`;
}

// Agregar evento para la tecla Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el input al cargar la página
    inputAmigo.focus();
}
);