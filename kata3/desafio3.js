/**
* @file desafio3.js
* @description Generador algorítmico de tablero de ajedrez 8x8 y procesador de historial de jugadas en formato algebraic notation.
* @author [Marco de  la Torre Sánchez]
* @coauthor [Julia Szmolarik Sánchez]
* @version 1.0.0
* @date 2026-11-10
*/
// Bucle exterior: filas del 8 al 1
/**
 * Representa las letras de las columnas del tablero de ajedrez
 * @type {string}
 */
const columnas = "abcdefgh";

/* Comentario MARCO: Declarar variables fuera de los for es muy estilo Java,
en js se suele declarar con `let` dentro del propio for.
Sobre todo para que la variable se destruya al salir del for y no consuma memoria*/
//Comentario JULIA:

// Variables declaradas fuera de los bucles
let fila;
let i;
let columnaLetra;
let lineaFila;

/*Puede que haya una forma más fácil de declarar los bucles, pero esta es la manera
que más parecido tiene a java y por ahora, en javaScript, la que mejor puedo llegar a entender*/

/**
 * For que genera y muestra en consola las coordenadas del tablero, fila 8(blancas) - 1(negras)
 */

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

/* Comentario MARCO : El código funciona y no da error porque js es muy permisivo, ese es el problema,
 al hacer 'col % 2' (letra / número), js internamente devuelve el valor 'NaN' (Not a Number).
 'NaN === 0' es falso, siempre te dira que es "negra", entrando en el else*/
//Comentario JULIA

fila = 4;
let col = 'h';
let casilla = "";

/**
 * Calcular si una casilla es par para determinar su color.
 */

if (fila + col  % 2 === 0){
  casilla = "blanca";
} else {
  casilla = "negra";
}

console.log(`La casilla es de color ${casilla}\n`);

// Array con el historial de la partida (incluye jugadas, comentarios y el mate final)

/**
 * Historial simulado de una partida de ajedrez
 *  * @type {string[]}
 * @type {string[]}
 */

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

/*Comentario MARCO: usar 'continue' para saltar los comentarios y 'break'
 para detenerse por completo tras detectar el jaque mate es perfecto */
//Comentario JULIA

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
