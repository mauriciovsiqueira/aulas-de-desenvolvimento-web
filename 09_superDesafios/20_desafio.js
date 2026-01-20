function retornoSemOPrimeiro(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  if (array.length === 0) {
    return "Array não pode ser vázio";
  }

  return array.slice(1);
}

// console.log(retornoSemOPrimeiro(1));
// console.log(retornoSemOPrimeiro([]));
// console.log(retornoSemOPrimeiro([1, 2, 3, 4]));

// Insano
function retornoSemOPrimeiroInsano(entrada) {
  let arrayEncontrado;

  function busca(item) {
    if (arrayEncontrado) return;

    if (Array.isArray(item)) {
      if (item.length === 0) {
        arrayEncontrado = "Array não pode ser vazio";
        return;
      }

      // Se o array contém apenas outro array, continua descendo
      if (item.length === 1 && Array.isArray(item[0])) {
        busca(item[0]);
        return;
      }

      arrayEncontrado = item.slice(1);
      return;
    }

    if (item && typeof item === "object") {
      for (let chave in item) {
        busca(item[chave]);
      }
    }
  }

  busca(entrada);

  return arrayEncontrado ?? "Nenhum array encontrado";
}

console.log(
  retornoSemOPrimeiroInsano([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log(retornoSemOPrimeiroInsano([[[[2, 3]]]]));
