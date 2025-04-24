document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('messageForm');
  const mensajesDiv = document.getElementById('mensajesGuardados');

  // Función para cargar mensajes desde localStorage
  function cargarMensajes() {
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || [];
    mensajesDiv.innerHTML = '';
    mensajesGuardados.forEach(msg => {
      const p = document.createElement('p');
      p.textContent = msg;
      mensajesDiv.appendChild(p);
    });
  }

  // Cargar mensajes al iniciar
  cargarMensajes();

  if (form && mensajesDiv) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;

      if (nombre && mensaje) {
        const nuevoMensaje = `${nombre} dice: ${mensaje}`;
        
        // Guardar en localStorage
        const mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
        mensajes.push(nuevoMensaje);
        localStorage.setItem('mensajes', JSON.stringify(mensajes));
        
        // Mostrar en la página
        const p = document.createElement('p');
        p.textContent = nuevoMensaje;
        mensajesDiv.appendChild(p);
        
        form.reset();
      }
    });
  }
});
