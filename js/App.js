// Menu responsive
const btnMenuOpen = document.getElementById('btnMenuOpen');
const btnMenuClose = document.getElementById('btnMenuClose');
const menuResponsive = document.getElementById('menuBar');
const enlaces = document.getElementById('enlaces'); 

btnMenuOpen.addEventListener('click', () => menuResponsive.classList.add('active'));
btnMenuClose.addEventListener('click', () => menuResponsive.classList.remove('active'));

enlaces.addEventListener('click', () => {
    setTimeout((menuResponsive.classList.remove('active'), 500));
});

// Slider de productos
const contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById('btn-izquierda'),
    btnDerecho = document.getElementById('btn-derecha');

btnDerecho.addEventListener('click', () => {
    contenedor.scrollLeft += contenedor.offsetWidth;
})

btnIzquierdo.addEventListener('click', () => {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

// Validacion de formulario

const formulario = document.getElementById('formulario');

const validar = (e) => {
    e.preventDefault();

    const inputNombre = document.getElementById('nombre').value;
    const inputEmail = document.getElementById('email').value;
    const inputComentarios = document.getElementById('comentarios').value;
    const alertSuccess = document.getElementById('alertSuccess');
    const alertError = document.getElementById('alertError');

    if (inputNombre == 0 || inputEmail == 0 || inputComentarios == 0) {
        alertError.classList.remove('hide');
        alertError.classList.add('show');
        setTimeout(() => {
            alertError.classList.remove('show');
            alertError.classList.add('hide');
        }, 3000)
    } else {
        alertSuccess.classList.remove('hide');
        alertSuccess.classList.add('show');
        setTimeout(() => {
            alertSuccess.classList.remove('show');
            alertSuccess.classList.add('hide');
        }, 3000)

        inputNombre = '';
        inputEmail = '';
        inputComentarios = '';
    }
}

formulario.addEventListener('submit', validar);

// boton scroll up
const btnTop = document.getElementById('btn-top');

// Detectar scroll
window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    const fullSize = document.documentElement.offsetHeight;
    const sizeVP = document.documentElement.clientHeight;

    if (scroll > 100) {
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }

    // Modificar elemento cuando llegue a final de pagina
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add('scrollFinal');
    } else {
        btnTop.classList.remove('scrollFinal');
    }
})

btnTop.addEventListener('click', () => window.scrollTo(0,0))

// Logo 
const logo = document.getElementById('logo');

logo.addEventListener('click', () => window.scrollTo(0,0));