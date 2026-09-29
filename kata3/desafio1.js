const PEON = 1, CABALLO = 3, ALFIL = 3, TORRE = 5, DAMA = 9;

const REY_BLANCO = "♔";
const PEON_NEGRO = "♟";


let puntosBlancas = 0;
let puntosNegras = 0;

let jugada = 15;

let ventaja = 0;

let turnoBlancas = true;

//blancas
puntosBlancas += ALFIL;
puntosBlancas += PEON;

//negras
puntosNegras += CABALLO;
puntosNegras += ALFIL;


console.log(`Puntos blancas: ${puntosBlancas} | Puntos negras: ${puntosNegras}\n`);

/*Leyendo la segunda parte del enunciado he deducido que en ese momento tendría que utilizar IF
* y no antes, no sé si estaría bien en este apartado utilizarlos, pero creo que queda más completo
* y he sido capaz de desarrollarlo sin mucha dificultad*/

//en el ajedrez siempre empiezan las blancas
if (jugada % 2 === 0){
  turnoBlancas = false;
}

//calcular ventaja y de quién es
ventaja = puntosBlancas - puntosNegras;

if (ventaja - 0){
  ventaja = puntosNegras - puntosBlancas;
  console.log(`Ventaja Material: ${ventaja} puntos, gana negras\n`);
} else {
  console.log(`Ventaja Material: ${ventaja} puntos, gana blancas\n`);

}


if (turnoBlancas){
  console.log(`Estado del Turno: Jugada ${jugada} (Mueve Blancas ${REY_BLANCO})\n`);
} else {
  console.log(`Estado del Turno: Jugada ${jugada} (Mueve Negras ${PEON_NEGRO})\n`);
}

//No especifica cuántos hay que poner ni cuales, por lo que pondré uno de cada (alguno más tipo number) para ver el resultado
console.log("PEÓN:", typeof PEON);
console.log("REY BLANCO:", typeof REY_BLANCO);
console.log("puntos Blancas:", typeof puntosBlancas);
console.log("turno Blancas:", typeof turnoBlancas);
console.log("ALFIL:", typeof ALFIL);
