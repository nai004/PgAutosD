// Puedes agregar interactividad adicional aquí si lo deseas.
// Por ejemplo, podrías crear un efecto de desplazamiento suave para los enlaces de la barra de navegación:

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});