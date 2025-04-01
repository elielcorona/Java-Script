// Verificar si hay un usuario activo
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

if (!usuarioActivo) {
  // Si no hay sesión activa, redirigir al login
  window.location.href = "../index.html";
} else {
  // Mostrar nombre en el h1
  const titulo = document.querySelector(".brand");
  titulo.textContent = `Bienvenido, ${usuarioActivo.username}`;
  // Mostrar datos en los campos en Mi Perfil
  const campos = document.querySelectorAll(".form-control");

  campos[0].value = usuarioActivo.nombre;
  campos[1].value = usuarioActivo.email;
  campos[2].value = usuarioActivo.username;
}

// Evento para cerrar sesión
const btnCerrarSesion = document.getElementById("cerrarSesion");

btnCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("usuarioActivo"); // Eliminamos la sesión
  window.location.href = "../../index.html"; // Redirigimos al login
});

