// Ruta del archivo txt predefinido
const rutaArchivo = 'cartas.txt';

// Función para leer el archivo y guardar las líneas en un array
async function getCarta() {
    try {
        const response = await fetch(rutaArchivo);
        if (!response.ok) {
            throw new Error('Error al leer el archivo');
        }
        const contenido = await response.text();
        const lineas = contenido.split('\n'); // Separar el contenido por líneas
        //console.log('Contenido del archivo:', lineas);

        // Obtener un índice aleatorio dentro del rango de la longitud del array
        let indiceAleatorio = Math.floor(Math.random() * lineas.length);

        // Obtener el valor aleatorio utilizando el índice aleatorio generado
        let valorAleatorio = lineas[indiceAleatorio];
        lineas.splice(indiceAleatorio, 1)
        console.log(lineas)

        console.log('Valor aleatorio 1:', valorAleatorio);
        document.getElementById("carta1").textContent = valorAleatorio;

        valorAleatorio = lineas[indiceAleatorio];
        lineas.splice(indiceAleatorio, 1)
        console.log(lineas)

        console.log('Valor aleatorio 2:', valorAleatorio);
        document.getElementById("carta2").textContent = valorAleatorio;

    } catch (error) {
        console.error('Error:', error);
    }
}

function sorteo(miArray){
}