// script.js

// Lista de usuarios registrados
const usuarios = [];

// Función para generar un código único alfanumérico
function generarCodigoUnico() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 12; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return codigo;
}

// Función para registrar un usuario
function registrarUsuario() {
    let nombre = prompt('Ingrese su nombre:');
    let email = prompt('Ingrese su correo electrónico:');
    let codigo = generarCodigoUnico();
    
    let usuario = { 
        codigo,
        nombre,
        email,
    };

    usuarios.push(usuario);
    
    alert('Registro exitoso. Tu código es: ' + codigo);
    mostrarCodigo(usuario);
}

// Función para mostrar el código en pantalla
function mostrarCodigo(usuario) {
    document.getElementById('codigo').innerText = 'Código de acceso: ' + usuario.codigo;
}
