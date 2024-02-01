let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h2');
function calculadora() {

let a = parseFloat(prompt('Introduzca su altura en m: ')); // prompt pide al usuario su altura por pantalla
let b = parseFloat(prompt('Introduzca su peso en kg: ')); // parseFloat convierte un texto a numerico (real)
let imc = b / (a*a); // let declara una variable y le asigna un valor con =
let d = ' ';


if (imc < 16) { //ejemplo de condicional anidado
d = 'Delgadez Severa';
} else if (16 <= imc && imc <= 16.99) { // && es un operador lógico equivalente a AND
d = 'Delgadez moderada'; // en d se almacena el resultado correspondiente
} else if (17 <= imc && imc <= 18.49) {
d = 'Delgadez aceptable';
} else if (18.50 <= imc && imc <= 24.99) {
d = 'Peso Normal';
} else if (25.00 <= imc && imc <= 29.99) {
d = 'Sobrepeso';
} else if (30.00 <= imc && imc <= 34.99) {
d = 'Obeso: Tipo I';
} else if (35.00 <= imc && imc <= 40.00) {
d = 'Obeso: Tipo II';
} else if (imc > 40.00) {
d = 'Obeso: Tipo III';
}
miTitulo.textContent = 'Su indice de masa corporal es de '   + imc  +'  '     +'y su condicion corporal:' +' '    +         d;
}

miBoton.onclick = function() {   
calculadora();
}
