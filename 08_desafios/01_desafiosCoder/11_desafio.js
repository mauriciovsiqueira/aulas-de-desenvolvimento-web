function receberPriEUltimoElemento(elemento) {
  let indicePrimeiro = 0;
  let indiceUltimo = elemento.length - 1;
  let primeiroElemento = elemento[indicePrimeiro];
  let ultimoElemento = elemento[indiceUltimo];

  return [primeiroElemento, ultimoElemento];
}

console.log(receberPriEUltimoElemento([1, 4, 9, 7]));

function receberPriEUltimoElemento2(elemento) {
  let primeiroElemento = elemento.shift();
  let ultimoElemento = elemento.pop();

  return [primeiroElemento, ultimoElemento];
}

console.log(receberPriEUltimoElemento2([1, 4, 9, 7]));
