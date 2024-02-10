document.addEventListener('DOMContentLoaded', function() {
  const abrirBtn = document.getElementById('abrir');
  const cerrarBtn = document.getElementById('cerrar');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay'); // Referencia al nuevo overlay


  abrirBtn.addEventListener('click', function() {
      nav.classList.add('visible');
    
      overlay.style.display = 'block'; // Muestra el overlay
  });

  cerrarBtn.addEventListener('click', function() {
      nav.classList.remove('visible');
      overlay.style.display = 'none'; // Oculta el overlay
  });

  // Manejador de eventos para el overlay que cierra el menú
  overlay.addEventListener('click', function() {
      nav.classList.remove('visible');
      overlay.style.display = 'none'; // Oculta el overlay
  });
});
