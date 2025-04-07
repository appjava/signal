
// auth.js - Control de acceso por contraseña

/**
 * Verifica si el usuario ya está autenticado.
 * @returns {boolean} - True si el usuario está autenticado, false en caso contrario.
 */
function estaAutenticado() {
  return localStorage.getItem("autenticado") === "true";
}

/**
 * Autentica al usuario si la contraseña es correcta.
 * @param {string} password - Contraseña ingresada por el usuario.
 * @returns {boolean} - True si la contraseña es correcta, false en caso contrario.
 */
function autenticar(password) {
  if (password === migas) {
    localStorage.setItem("autenticado", "true");
    return true;
  }
  return false;
}

/**
 * Desautentica al usuario y limpia el estado de autenticación.
 */
function desautenticar() {
  localStorage.removeItem("autenticado");
}
const migas = "1984";
/**
 * Muestra el formulario de autenticación.
 * @param {HTMLElement} contenedor - Elemento HTML donde se mostrará el formulario.
 */
function mostrarFormularioAutenticacion(contenedor) {
  contenedor.innerHTML = `
    <div style="text-align: center; margin-top: 50px;">
      <h2>Acceso Restringido</h2>
      <p style="width: 80%; margin: 0 auto">Por favor, ingresa la contraseña para acceder al contenido:</p>
      <input type="password" id="password-input" placeholder="Contraseña" style="padding: 10px; margin: 3px auto; width: 50%; text-align: center" />
      <button id="login-btn" style="padding: 10px 20px; margin: 3px auto; width: 120px">Ingresar</button>
      <p id="error-message" style="color: red; display: none;">Contraseña incorrecta. Inténtalo nuevamente.</p>
    </div>
  `;

  const passwordInput = document.getElementById("password-input");
  const loginBtn = document.getElementById("login-btn");
  const errorMessage = document.getElementById("error-message");

  // Manejar el evento de inicio de sesión
  loginBtn.addEventListener("click", () => {
    const password = passwordInput.value.trim();
    if (autenticar(password)) {
      location.reload(); // Recargar la página para mostrar el contenido
    } else {
      errorMessage.style.display = "block"; // Mostrar mensaje de error
    }
  });
}


