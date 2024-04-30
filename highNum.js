const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para encontrar el número más grande entre dos números
function findHighest(a, b) {
    return a > b ? a : b;
}

rl.question("Ingrese el primer número: ", function(numero1) {
    let mayor = parseFloat(numero1);

    // Solicitar los otros 9 números y encontrar el más grande.
    let contador = 1;
    function requestNumber() {
        rl.question(`Ingrese el número ${contador + 1}: `, function(numero) {
            const num = parseFloat(numero);
            if (!isNaN(num)) {
                mayor = findHighest(mayor, num);
                contador++;
                if (contador < 10) {
                    requestNumber();
                } else {
                    // Una vez que se ingresaron los 10 números, se mostrará el mayor.
                    console.log(`El número más grande es: ${mayor}`);
                    rl.close();
                }
            } else {
                console.log("Ingresa un número válido.");
                requestNumber();
            }
        });
    }

    requestNumber();
});




