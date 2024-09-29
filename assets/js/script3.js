//Problema N°3

function verificarClave() {
    // Extraer valores de cada casillero
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var num3 = document.getElementById("numero3").value;

    var clave = num1 + num2 + num3;

    var resultado = "";

    // Verificar si clave ingresada es 911 y 714
    if (clave === "911") {
        resultado = "Password 1: CORRECTA";
    } 
    else if (clave === "714") {
        resultado = "Password 2: CORRECTA";
    } 
    else {
        resultado = "Password ingresada es INCORRECTA";
    }

    // Mostrar si clave coincide o no
    document.getElementById("resultado").textContent = resultado;
}