const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

export default function contarOvejas(ovejas) {
  // aquí tu magia
  
  let listado = [];
  for (let i = 0; i <= ovejas.length-1; i++) {
    
    if (ovejas[i].color == "rojo") {
      const name = ovejas[i].name.toUpperCase();
      
      if (name.includes("N") && name.includes("A")) {
        listado.push(ovejas[i]);
      }
      
    }
  }
  return listado
}