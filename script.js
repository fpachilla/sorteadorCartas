// Ruta del archivo txt predefinido
const rutaArchivo = 'cartas.txt';

var cartas = [];

var cartasAdicionales = false;

// Función para leer el archivo y guardar las líneas en un array
async function getCarta() {
    try {
        const response = await fetch(rutaArchivo);
        if (!response.ok) {
            throw new Error('Error al leer el archivo');
        }
        const contenido = await response.text();
        cartas = contenido.split('\n'); // Separar el contenido por líneas

        // Llamamos a getValorRandom() después de que cartas se haya inicializado
        const valorRandom = await getValorRandom();
        document.getElementById("carta1").textContent = valorRandom;

        // Continuamos con el resto de las operaciones después de obtener la primera carta

        // Obtener todos los elementos con la clase "carta"
        // var cartasHTML = document.querySelectorAll(".carta");

        // Iterar sobre cada elemento y agregar la clase "mostrar"
        //cartasHTML.forEach(function(carta) {
        //    carta.classList.add("mostrar");
        //});

        document.getElementById("carta1").classList.add("mostrar")
        document.getElementById("boton1").style.display = 'none';
        document.getElementById('boton2').style.display = 'block';


        // Esperar un breve momento para permitir que las cartas se muestren completamente
        setTimeout(function() {
            // Agregar la clase 'blur' al body para aplicar el efecto de desenfoque
            // document.getElementById("container").className = "difuminado";
        }, 10); // Ajusta el tiempo según sea necesario

    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('boton2').addEventListener('click', getNuevaCarta)
document.getElementById('boton3').addEventListener('click', getNuevaCarta)
document.getElementById('boton4').addEventListener('click', getNuevaCarta)
document.getElementById('boton5').addEventListener('click', getNuevaCarta)


async function getNuevaCarta(event) {
    try {
        if(event.target.id == 'boton2'){
            const valorRandom = await getValorRandom();

            document.getElementById("carta2").textContent = valorRandom;
            document.getElementById("carta2").classList.add("mostrar")

            document.getElementById("boton2").style.display = 'none';
            document.getElementById('boton3').style.display = 'block';
        }
        if(event.target.id == 'boton3'){
            const valorRandom = await getValorRandom();

            document.getElementById("carta3").textContent = valorRandom;
            document.getElementById("carta3").classList.add("mostrar")

            document.getElementById("boton3").style.display = 'none';
            if(cartasAdicionales){
                document.getElementById("boton4").style.display = 'block';
            }
        }
        if(event.target.id == 'boton4'){
            const valorRandom = await getValorRandom();

            document.getElementById("carta4").textContent = valorRandom;
            document.getElementById("carta4").classList.add("mostrar")

            document.getElementById("boton4").style.display = 'none';
            document.getElementById('boton5').style.display = 'block';
        }
        if(event.target.id == 'boton5'){
            const valorRandom = await getValorRandom();

            document.getElementById("carta5").textContent = valorRandom;
            document.getElementById("carta5").classList.add("mostrar")

            document.getElementById("boton5").style.display = 'none';
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

function getValorRandom(){
    return new Promise((resolve, reject) => {
        // Esperamos un breve momento para simular la lectura del archivo
        setTimeout(() => {
            if (cartas.length > 0) {
                let indiceAleatorio = Math.floor(Math.random() * cartas.length);
                let valorAleatorio = cartas[indiceAleatorio];
                if (valorAleatorio == "Elegí dos cartas más."){
                    cartasAdicionales = true;
                }
                cartas.splice(indiceAleatorio, 1);
                console.log(cartas);
                console.log('Valor aleatorio:', valorAleatorio);
                resolve(valorAleatorio);
            } else {
                reject(new Error('No hay cartas disponibles'));
            }
        }, 1000); // Simula la lectura del archivo durante 1 segundo
    });
}

