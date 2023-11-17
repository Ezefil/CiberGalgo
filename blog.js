
//Cambiar cartas

const secciones = document.querySelectorAll('.seccion');

secciones.forEach((seccion) => {
    seccion.addEventListener('click', () => {
        seccion.classList.toggle('volteada');
    });
});