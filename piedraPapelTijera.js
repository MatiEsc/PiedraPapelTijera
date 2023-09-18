// Declaro la clase elemento
class Elemento {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

//Declaro el array con las opciones de Piedra, Papel o Tijera
const opciones = [
    new Elemento("piedra", "imagenes/piedra.jpeg"),
    new Elemento("papel", "imagenes/papel.jpeg"),
    new Elemento("tijera", "imagenes/tijera.jpeg"),
];

// Funcion para la eleccion random de la PC
// Se declara la variable random que va a resultar de la funcion de JavaScript que devuelve aleatoriamente del 0 al 1
// Se multiplica por la longitud del array y se utiliza el Math.reund para redondear la eleccion
function opcionRandom() {
    const eleccionPc = Math.floor(Math.random() * opciones.length);
    return opciones[eleccionPc].nombre;
}

//Se determina la funcion para ver que opcion ganó
// Primero se declara si se empato
// luego otro if para ver si el jugador gano y si no se cumple, perdió
function ganador(eleccionJugador, eleccionPc) {
    if (eleccionJugador === eleccionPc) {
        return "Un empate! Vuelve a intentarlo!";
    }

    if (
        (eleccionJugador === "piedra" && eleccionPc === "tijera") ||
        (eleccionJugador === "papel" && eleccionPc === "piedra") ||
        (eleccionJugador === "tijera" && eleccionPc === "papel")
    ) {
        return "Felicitaciones!! Ganaste Rey!!!!";
    } else {
        return "Lo siento, Perdiste!! JAAAA!!!";
    }
}

//Se define las funciones de que la pc y el jugador elija la opcion de piedra, papel o tijera
function elegirOpcion(eleccionJugador) {
    // Llama a la función para generar la elección random de la PC
    const eleccionPc = opcionRandom();

    // Obtiene la instancia de Elemento correspondiente a la elección del jugador mediante una funcion regular
    const opcionJugador = opciones.find(function (opcion) {
        return opcion.nombre === eleccionJugador;
    });

    // Obtiene la instancia de Elemento correspondiente a la elección de la PC mediante una funcion flecha
    const opcionPc = opciones.find((opcion) => opcion.nombre === eleccionPc);

    // Muestra las imágenes en lugar de los nombres en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `
        <p>Elegiste:</p>
        <img src="${opcionJugador.imagen}" alt="${opcionJugador.nombre}">
        <p>La computadora eligió:</p>
        <img src="${opcionPc.imagen}" alt="${opcionPc.nombre}">
        <p>${ganador(eleccionJugador, eleccionPc)}</p>
    `;
    // Un condicional para mostrar una imagen al ganar la partida y otro para que desaparezca y seguir jugando
    if (
        ganador(eleccionJugador, eleccionPc) ===
        "Felicitaciones!! Ganaste Rey!!!!"
    ) {
        const ganadorImagen = document.getElementById("ganadorImagen");
        ganadorImagen.style.display = "flex";
    } else {
        document.getElementById("ganadorImagen").style.display = "none";
    }
}
