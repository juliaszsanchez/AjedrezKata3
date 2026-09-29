let reyMovido = false;
let torreMovida = false;
let enJaque = true;

/*Declaro diferentes variables posibles para hacer pruebas y comprobar que funcione como deberia*/


//let pieza = "PEON";
//let pieza = "CABALLO";
//let pieza = "ALFIL";
//let pieza = "TORRE";
//let pieza = "DAMA";
//let pieza = "REY";

let pieza = "REINA";

/*let filaPeonNegro = 8; //en este caso seria reina
let filaPeonBlanco = 4; //en este caso seria peon
let peonNegroEsReina = false;
let peonBlancoEsReina = false;*/

if (reyMovido || torreMovida || enJaque) {
  console.log("NO ENROQUE \n")
} else {
  console.log("ENROQUE \n")
}

/*en mi caso PIEZA la he declarado en mayúscula, por lo que digo que me lo ponga en
minúscula por si un futuro esa variable cambia, para que no me dé error*/
switch (pieza.toLowerCase()) {
  case 'peon':
    console.log("Peón: avanza 1 casilla hacia adelante (o 2 en caso de ser su primer movimiento) y en diagonal 1 casilla (en caso de comerse alguna pieza del rival).\n");
    break;

  case 'caballo':
    console.log("Caballo: se mueve en forma de 'L' en cualquier dirección y puede saltar otras piezas.\n");
    break;

  case 'alfil':
    console.log("Alfil: se mueve en diagonal todas las casillas que quiera en cualquier dirección.\n");
    break;

  case 'torre':
    console.log("Torre: se mueve en horizontal o vertical todas las casillas que quiera.\n");
    break;

  case 'dama':
    console.log("Dama: se mueve en cualquier dirección (horizontal, vertical o diagonal).\n");
    break;

  case 'rey':
    console.log("Rey: se mueve 1 casilla en cualquier dirección.\n");
    break;

  default:
    //Para todas aquellas casillas vacías o entradas inválidas
    console.log("Casilla vacía o pieza no válida introducida.\n");
    break;
}

/*He esto esto para diferenciar las filas y el color de los peones, pero como pide
* utilizar operador ternario lo voy a cambiar, igualmente lo dejo comentado
*
if (filaPeonNegro === 8){
  peonNegroEsReina = true;
} else if (filaPeonBlanco === 1){
  peonBlancoEsReina = false;
}*/

const destino = 2;

const figura = (destino === 8 || destino === 1) ? 'Dama' : 'Peón';

console.log(`La pieza en la fila ${destino} es: ${figura}`);

/*console.log(`¿El peón Blanco es Reina? ${peonBlancoEsReina}\n`);
console.log(`¿El peón Negro es Reina? ${peonNegroEsReina}`)*/