// Bucle exterior: filas del 8 al 1
const columnas = "abcdefgh";

// Variables declaradas fuera de los bucles
let fila;
let i;
let columnaLetra;
let lineaFila;

/*Puede que haya una forma más fácil de declarar los bucles, pero esta es la manera
* que más parecido tiene a java y por ahora, en javaScript, la que mejor puedo llegar a entender*/

for (fila = 8; fila >= 1; fila--) {
  lineaFila = ""; // Con esto pasaría a la siguiente fila

  for (i = 0; i < columnas.length; i++) {
    columnaLetra = columnas[i];
    /*Con el length "partiría" la palabra en caracteres e iría sumando 1 para pasar a la siguiente letre*/
    lineaFila += `${columnaLetra}${fila} `;
  }

  console.log(lineaFila); //Tablero final, siendo la fila 1 las negras y la 8 las blancas
}

console.log(`\n`)

fila = 4;
let col = 'h';
let casilla = "";

if (fila + col  % 2 === 0){
  casilla = "blanca";
} else {
  casilla = "negra";
}

console.log(`La casilla es de color ${casilla}\n`);

// Array con el historial de la partida (incluye jugadas, comentarios y el mate final)
const partida = [
  "1. e4",
  "1... e5",
  "Comentario: Apertura de Peón de Rey",
  "2. Ac4",
  "2... Sc6",
  "Comentario: Desarrollando piezas",
  "3. Dh5",
  "3... Nf6",
  "4. Dxf7#",
  "5. Ganaron las blancas"
];

let jugada;

for (jugada of partida) {

  //En caso de empezar por "Comentario" saltaría a la siguiente jugada
  if (jugada.startsWith("Comentario")) {
    continue;
  }

  console.log(`Jugada procesada: ${jugada}`);

  if (jugada.includes("#")) {
    console.log("¡Jaque Mate! Fin de la partida.");
    break;
  }
}