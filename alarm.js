const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de segundos en la que se activará la alarma: ", function(segundos) {

    // El input debe ser un número positivo.
    if (isNaN(segundos) || parseInt(segundos) < 1) {
        console.log("Ingrese un número entero positivo.");
        rl.close();
        return;
    }

    // Mensaje que aparece después de haber transcurrido los segundos señalados. 
    setTimeout(function() {
        console.log(`Hora de acostarse después de ${segundos} segundos.`);
        rl.close();
    }, segundos * 1000);
}); 

