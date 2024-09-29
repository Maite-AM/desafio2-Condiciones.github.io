//Problema N°1

//Definición de variable para acceder al elemento
const imagen = document.getElementById('imagenNaturaleza');

//Click a la imagen + validación si tiene borde
imagen.addEventListener('click', function() 
{
    if (imagen.style.border) {
            imagen.style.border = '';
        } 
    else 
    {
        imagen.style.border = '2px solid red';
    }
});