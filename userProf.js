// Solicita al usuario sus datos.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese su nombre de usuario: ', (username) => {
  rl.question('Ingrese su edad: ', (age) => {

    // Crea un array para almacenar sus películas favoritas.
    let favoriteMovies = [];

    // Solicita al usuario sus películas preferidas.
    const askForMovies = () => {
      rl.question('Ingrese una de sus películas favoritas. O escriba "fin" para terminar: ', (movie) => {
        if (movie.toLowerCase() === 'fin') {

          // Muestra los datos ingresados por el usuario.
          // \n es para dar un salto de línea.
          console.log('\nPerfil del usuario:');
          console.log(`Nombre: ${username}`);
          console.log(`Edad: ${age}`);
          console.log('Películas favoritas:');
          favoriteMovies.forEach((movie) => {
            console.log(`La película ${movie} es una de mis favoritas.`);
          });
          rl.close();
        } else {
          favoriteMovies.push(movie);
          askForMovies();
        }
      });
    };

    // Proceso de solicitar películas favoritas
    askForMovies();
  });
}); 

