function filtrarPorNumeroDeDigitos(num, numDigito) {
  return num.filter((numeros) => {
    const quantidadeDeDigitos = String(numeros).length;

    return quantidadeDeDigitos === numDigito;
  });
}

console.log(filtrarPorNumeroDeDigitos([38, 2, 654, 89], 2));
console.log(filtrarPorNumeroDeDigitos([38, 2, 654, 89], 1));

function filtrarPorNumeroDeDigitos2(num, numDigito) {
  let resultado = [];

  for (numero of num) {
    const quantidadeDeDigitos = String(numero).length;

    if (quantidadeDeDigitos === numDigito) {
      resultado.push(numero);
    }
  }

  return resultado;
}

console.log(filtrarPorNumeroDeDigitos2([38, 2, 654, 89], 2));
console.log(filtrarPorNumeroDeDigitos2([38, 2, 654, 89], 1));
