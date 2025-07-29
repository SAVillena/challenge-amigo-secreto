# 🎁 Amigo Secreto

Aplicación web para realizar sorteos de amigo secreto de manera aleatoria y divertida.

## 📋 Descripción

Este proyecto es parte del **Challenge** del programa **Oracle Next Education (ONE)**. El desafío consiste en desarrollar una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

## 🎯 Objetivo del Challenge

El principal objetivo de este desafío es fortalecer las habilidades en **lógica de programación** implementando las siguientes funcionalidades:

- Permitir agregar nombres mediante un campo de texto y botón "Adicionar"
- Mostrar los nombres ingresados en una lista visible en la página
- Validar que el campo de texto no esté vacío
- Realizar un sorteo aleatorio al hacer clic en "Sortear Amigo"
- Mostrar el resultado del sorteo en pantalla

## ✨ Funcionalidades Implementadas

- ✅ **Agregar nombres**: Los usuarios escriben el nombre de un amigo en un campo de texto y lo agregan a una lista visible al hacer clic en "Adicionar"
- ✅ **Validar entrada**: Si el campo de texto está vacío, el programa muestra una alerta pidiendo un nombre válido
- ✅ **Visualizar la lista**: Los nombres ingresados aparecen en una lista debajo del campo de entrada
- ✅ **Sorteo aleatorio**: Al hacer clic en el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en la página
- ✅ **Mejoras adicionales**: Validación de nombres duplicados y soporte para tecla Enter

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica (plantilla proporcionada por Oracle ONE)
- **CSS3**: Estilos y diseño responsivo (plantilla proporcionada por Oracle ONE)
- **JavaScript**: Lógica de programación implementada para el challenge

## 🚀 Cómo usar

1. **Agregar amigos**: 
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista debajo

2. **Realizar sorteo**:
   - Una vez que tengas al menos un amigo en la lista
   - Haz clic en "Sortear amigo"
   - El resultado aparecerá en pantalla

## 📁 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Estructura HTML (plantilla proporcionada)
├── style.css           # Estilos CSS (plantilla proporcionada)
├── app.js              # Lógica JavaScript (implementada para el challenge)
├── assets/             # Recursos gráficos (proporcionados)
└── README.md           # Documentación del proyecto
```

## 🔧 Instalación y Ejecución

1. Clona este repositorio:
```bash
git clone https://github.com/SAVillena/challenge-amigo-secreto
```

2. Navega al directorio del proyecto:
```bash
cd challenge-amigo-secreto
```

3. Abre el archivo `index.html` en tu navegador preferido.


## 📚 Desarrollo del Challenge

Durante el desarrollo de este challenge se implementaron los siguientes aspectos de programación:

- **Manipulación del DOM**: Obtención y modificación de elementos HTML
- **Validación de datos**: Verificación de campos vacíos y nombres duplicados
- **Arrays**: Almacenamiento y gestión de la lista de amigos
- **Funciones**: Organización del código en `agregarAmigo()` y `sortearAmigo()`
- **Eventos**: Manejo de clicks en botones y tecla Enter
- **Generación aleatoria**: Implementación de sorteo con `Math.random()`
- **Alertas**: Comunicación con el usuario mediante mensajes

**¡Gracias por visitar este proyecto! 🚀**