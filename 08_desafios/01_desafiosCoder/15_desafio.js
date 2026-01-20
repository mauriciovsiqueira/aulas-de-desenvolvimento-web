function receberSomenteOsParesDeIndicesPares(indicePar) {
  let resultado = [];

  for (let i = 0; i < indicePar.length; i++) {
    if (i % 2 === 0 && indicePar[i] % 2 === 0) {
      resultado.push(indicePar[i]);
    }
  }
  return resultado;
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

// Forma simplificada
function receberSomenteOsParesDeIndicesPares2(array) {
  return array.filter((valor, indice) => indice % 2 === 0 && valor % 2 === 0); // Valor primeiro, indice em segundo e o array original (raramente usasdo.)
}

console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43]));
