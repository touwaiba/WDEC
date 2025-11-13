// main.js

document.addEventListener('DOMContentLoaded', () => {
  const contenido = document.getElementById('contenido');

  // Ejercicio 1 
  const btnAplicarCambios = document.getElementById('btnAplicarCambios');
  btnAplicarCambios.addEventListener('click', () => {
    const parrafos = contenido.querySelectorAll('p');

   });

  // Ejercicio 2 
  const btnAnadirParrafo = document.getElementById('btnAnadirParrafo');
  const btnEliminarUltimo = document.getElementById('btnEliminarUltimo');

  const attachHoverHandlers = (p) => {
    p.addEventListener('mouseenter', () => p.classList.add('hover-activo'));
    p.addEventListener('mouseleave', () => p.classList.remove('hover-activo'));
  };

  contenido.querySelectorAll('p').forEach(attachHoverHandlers);

  btnAnadirParrafo.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = 'Nuevo párrafo añadido';
    contenido.appendChild(p);

    // Ejercicio 3 
    attachHoverHandlers(p);
  });

  btnEliminarUltimo.addEventListener('click', () => {
    const parrafos = contenido.querySelectorAll('p');
    if (parrafos.length > 0) {
      parrafos[parrafos.length - 1].remove();
    }
  });

  // Ejercicio 4 
 
  const btnCambiarTexto = document.getElementById('btnCambiarTexto');
  const inputNuevoTexto = document.getElementById('nuevoTexto');
  const errorTexto = document.getElementById('errorTexto');

  btnCambiarTexto.addEventListener('click', () => {
    const valor = (inputNuevoTexto.value || '').trim();
    const primerParrafo = contenido.querySelector('p');

    if (!valor) {
      errorTexto.textContent = 'El campo está vacío';
      errorTexto.classList.add('mostrar');
      return;
    }

    if (primerParrafo) {
      primerParrafo.textContent = valor;
    }
    errorTexto.classList.remove('mostrar');
    inputNuevoTexto.focus();
    inputNuevoTexto.select();
  });

  // Ejercicio 5
  const inputTarea = document.getElementById('tareaInput');
  const btnAgregarTarea = document.getElementById('btnAgregarTarea');
  const btnBorrarCompletadas = document.getElementById('btnBorrarCompletadas');
  const listaTareas = document.getElementById('listaTareas');

  const agregarTarea = () => {
    const texto = (inputTarea.value || '').trim();
    if (!texto) {
      inputTarea.focus();
      return;
    }
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = texto;

    li.addEventListener('click', () => li.classList.toggle('completada'));

    listaTareas.appendChild(li);
    inputTarea.value = '';
    inputTarea.focus();
  };

  btnAgregarTarea.addEventListener('click', agregarTarea);
  inputTarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarTarea();
  });

  btnBorrarCompletadas.addEventListener('click', () => {
    const completadas = listaTareas.querySelectorAll('li.completada');
    completadas.forEach(li => li.remove());
  });
});
