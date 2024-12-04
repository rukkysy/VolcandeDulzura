// Script para el menú desplegable en móviles
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');
const overlay = document.getElementById('overlay');

// Al hacer clic en el icono del menú, se muestra el menú y la capa de overlay
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Cerrar el menú cuando se hace clic fuera del menú o en la capa de overlay
overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});


