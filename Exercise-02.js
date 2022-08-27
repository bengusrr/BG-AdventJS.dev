const carta = 'bici coche balón _playstation bici coche peluche bici switch';

export default function listGifts(letter) {
  // ¡Tú puedes!
  let words = [];
  words = letter.split(" ");

  console.log(words)
  return {}
 }
 
 
 // 1- crear función que recorra la cadena de regalos y extráiga en un array cada uno de los regalos
 // 1.1- Hay que controlar si hay un solo espacio que separa los regalos, o un guión bajo
 
 // 2- crear objeto para almacenar el regalo y el número de veces que aparece
 
 const regalos = listGifts(carta);