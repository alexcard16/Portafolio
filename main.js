const overlay = document.getElementById('overlay');
document.querySelectorAll('.proyectos .proyectos-section container .proyectos-grid .img').forEach((elemento)  => {
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
    console.log(ruta);

    elemento.addEventListener('click', () => {

        overlay.classList.add('activo');

    });

});
