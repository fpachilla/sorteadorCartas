// Ruta del archivo txt predefinido
const rutaArchivo = 'cartas.txt';

var cartas = [];

// Función para leer el archivo y guardar las líneas en un array
async function getCarta() {
    try {
        const response = await fetch(rutaArchivo);
        if (!response.ok) {
            throw new Error('Error al leer el archivo');
        }
        const contenido = await response.text();
        cartas = contenido.split('\n'); // Separar el contenido por líneas

        /// Obtener un índice aleatorio dentro del rango de la longitud del array
        // let indiceAleatorio = Math.floor(Math.random() * cartas.length);

        /// Obtener el valor aleatorio utilizando el índice aleatorio generado
        // let valorAleatorio = cartas[indiceAleatorio];
        // cartas.splice(indiceAleatorio, 1)
        // console.log(cartas)

        // console.log('Valor aleatorio 1:', valorAleatorio);
        document.getElementById("carta1").textContent = getValorRandom();

        indiceAleatorio = Math.floor(Math.random() * cartas.length);

        valorAleatorio = cartas[indiceAleatorio];
        cartas.splice(indiceAleatorio, 1)
        console.log(cartas)

        console.log('Valor aleatorio 2:', valorAleatorio);
        document.getElementById("carta2").textContent = valorAleatorio;

        indiceAleatorio = Math.floor(Math.random() * cartas.length);

        valorAleatorio = cartas[indiceAleatorio];
        cartas.splice(indiceAleatorio, 1)
        console.log(cartas)

        console.log('Valor aleatorio 3:', valorAleatorio);
        document.getElementById("carta3").textContent = valorAleatorio;

        // Obtener todos los elementos con la clase "carta"
        var cartas = document.querySelectorAll(".carta");

        // Iterar sobre cada elemento y agregar la clase "mostrar"
        cartas.forEach(function(carta) {
            carta.classList.add("mostrar");
        });

        // Esperar un breve momento para permitir que las cartas se muestren completamente
        setTimeout(function() {
            // Agregar la clase 'blur' al body para aplicar el efecto de desenfoque
            //document.getElementById("container").className = "difuminado";
        }, 10); // Ajusta el tiempo según sea necesario

    } catch (error) {
        console.error('Error:', error);
    }
}

function getValorRandom(){
    // Obtener un índice aleatorio dentro del rango de la longitud del array
    let indiceAleatorio = Math.floor(Math.random() * cartas.length);

    // Obtener el valor aleatorio utilizando el índice aleatorio generado
    let valorAleatorio = cartas[indiceAleatorio];
    cartas.splice(indiceAleatorio, 1)
    console.log(cartas)

    // Muestra en pantalla el valor obtenido
    console.log('Valor aleatorio:', valorAleatorio);

    return valorAleatorio;
}