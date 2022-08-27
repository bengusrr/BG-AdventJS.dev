const carta = ' bici coche  balón _playstation bici coche peluche bici switch ';

//export default 
function listGifts(letter) {

  const letterObjects = letter.trim().split(' ');
  const count = {};
  const resultado = letterObjects.filter( letterObjects => !letterObjects.includes('_') );

  resultado.forEach( i => {
    count[i] = ( count[i] || 0 ) + 1;
  });
 
  console.log(count);
  return count;
}
  
const regalos = listGifts(carta);
 