// Com keys
function objetoParaArray(objeto) {
  const chaves = Object.keys(objeto);
  const resultado = chaves.map((chave) => [chave, objeto[chave]]);
  return resultado;
}

console.log(objetoParaArray({ nome: "Maurício", cargo: "TI" }));
// Com values
function objetoParaArrayValores2(objeto) {
  return Object.values(objeto);
}

console.log(objetoParaArrayValores2({ nome: "Maurício", cargo: "TI" }));

// Com os dois
function objetoParaArrayComValues3(objeto) {
  const chaves = Object.keys(objeto);
  const valores = Object.values(objeto);

  const resultado = valores.map((valor, i) => [chaves[i], valor]);

  return resultado;
}

console.log(objetoParaArrayComValues3({ nome: "Maurício", cargo: "TI" }));

// Simplificado e moderno
function objetoParaArray4(objeto) {
  return Object.entries(objeto);
}

console.log(objetoParaArray4({ nome: "Maurício", cargo: "TI" }));

// Object.keys(pessoa)

// Retorna um array com os nomes das propriedades (as chaves) do objeto.

// ["nome", "idade", "peso"]

// Object.values(pessoa)

// Retorna um array com os valores correspondentes a cada chave.

// ["Ana", 2, 13]

// Object.entries(pessoa)

// Retorna um array de arrays, onde cada subarray tem a forma [chave, valor].

// [
//   ["nome", "Ana"],
//   ["idade", 2],
//   ["peso", 13]
// ]
