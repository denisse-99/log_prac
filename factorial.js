const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Calcular factorial.
function calculateFactorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        return x * calculateFactorial(x - 1);
    }
}

//Solicitar al usuario que ingrese el número. 
rl.question("Ingresa un número entero positivo para calcular su factorial: ", (number) => {
    const x = parseInt(number);

    if (isNaN(x) || x < 1) {
        console.log("Entrada inválida. Asegúrate de ingresar un número entero positivo válido.");
    } else {
        const factorial = calculateFactorial(x);
        console.log(`El factorial de ${x} es: ${factorial}`);
    }

    rl.close();
});

