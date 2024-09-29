//Problema N°2

// Seleccionar elementos de input y línea de resultado
const sticker1 = document.getElementById('sticker1');
const sticker2 = document.getElementById('sticker2');
const sticker3 = document.getElementById('sticker3');

const resultado = document.getElementById('resultado');

const botonVerificar = document.getElementById('verificar');

// Función para verificar la cantidad de stickers seleccionados
botonVerificar.addEventListener('click', function() {
    // Convertir los valores a números enteros
    const total = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
    
    // Verificar si el total es menor o igual a 10
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers';
    }
});