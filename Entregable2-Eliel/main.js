const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Inicializa localStorage solo si no hay usuarios
if (!localStorage.getItem("usuarios")) {
    const usuariosIniciales = [
      {
        username: "admin",
        password: "1234",
        nombre: "Administrador QrossPass",
        email: "admin@qrosspass.com"
      },
      {
        username: "cliente",
        password: "abcd",
        nombre: "Cliente Ejemplo",
        email: "cliente@ejemplo.com"
      }
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
  }
  

// Función para mostrar mensajes en el DOM
function mostrarMensaje(texto, tipo) {
  const mensajeExistente = document.querySelector(".mensaje-login");
  if (mensajeExistente) mensajeExistente.remove();

  const mensaje = document.createElement("div");
  mensaje.className = `alert alert-${tipo} mt-3 mensaje-login`;
  mensaje.textContent = texto;
  form.appendChild(mensaje);

  setTimeout(() => mensaje.remove(), 3000);
}

// Función principal del login
function validarLogin(event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    mostrarMensaje("Completa todos los campos.", "warning");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const usuarioEncontrado = usuarios.find(
    (user) => user.username === username && user.password === password
  );

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));
    window.location.href = "/pages/principalUsuario.html";
  }
   else {
    mostrarMensaje("Usuario o contraseña incorrectos.", "danger");
  }
}

// Evento submit del formulario
form.addEventListener("submit", validarLogin);
