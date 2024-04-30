const readline = require('readline');

function palindrome(texto) {
    // Convertir el texto a minúsculas, eliminando espacios y puntuación.
    texto = texto.toLowerCase().replace(/[\W_]/g, '');

    // Comparar el texto original con su reverso para determinar si es un palíndromo
    return texto === texto.split('').reverse().join('');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa una palabra u oración para verificar si es un palíndromo: ", function(input) {
    // Verificar si el texto ingresado es un palíndromo e imprimir el resultado
    if (palindrome(input)) {
        console.log("El texto ingresado es un palíndromo.");
    } else {
        console.log("El texto ingresado no es un palíndromo.");
    }

    rl.close();
});
