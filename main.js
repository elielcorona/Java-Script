// Variables y constantes
const usuarios = [];
let usuarioActual = null;

// Función para registrar un usuario
function registrarUsuario() {
    let nombre = prompt("Ingresa tu nombre:");
    let email = prompt("Ingresa tu correo electrónico:");

    if (nombre && email) {
        let nuevoUsuario = { nombre, email, visitas: 0 };
        usuarios.push(nuevoUsuario);
        alert(`Usuario ${nombre} registrado con éxito.`);
    } else {
        alert("Debes ingresar datos válidos.");
    }
}

// Función para seleccionar un usuario
function seleccionarUsuario() {
    if (usuarios.length === 0) {
        alert("No hay usuarios registrados.");
        return;
    }

    let listaUsuarios = "Selecciona un usuario:\n";
    usuarios.forEach((usuario, index) => {
        listaUsuarios += `${index + 1}. ${usuario.nombre} (${usuario.email})\n`;
    });

    let opcion = prompt(listaUsuarios);
    let indice = parseInt(opcion) - 1;

    if (indice >= 0 && indice < usuarios.length) {
        usuarioActual = usuarios[indice];
        alert(`Usuario seleccionado: ${usuarioActual.nombre}`);
    } else {
        alert("Opción no válida.");
    }
}

// Función para generar un código QR (simulado con un string)
function generarQR() {
    if (!usuarioActual) {
        alert("Debes seleccionar un usuario antes de generar un QR.");
        return;
    }

    usuarioActual.visitas++;
    let qrCode = `QR-${usuarioActual.nombre}-${Date.now()}`;
    alert(`Código QR generado: ${qrCode}\nVisita número: ${usuarioActual.visitas}`);
}

// Función para mostrar los usuarios registrados en la consola
function mostrarUsuarios() {
    console.log("Usuarios registrados:", usuarios);
}
