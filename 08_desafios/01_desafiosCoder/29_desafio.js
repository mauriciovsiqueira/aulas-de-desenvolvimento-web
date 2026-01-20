function segundoMaior(numeros) {
  let maior = -Infinity;
  let segundo = -Infinity;

  for (const n of numeros) {
    if (n > maior) {
      segundo = maior;
      maior = n;
    } else if (n > segundo && n !== maior) {
      segundo = n;
    }
  }

  return segundo;
}

console.log(segundoMaior2([1, 5, 9, 56])); // 9

// Simples e prático
function segundoMaior2(numeros) {
  const ordenado = [...numeros].sort((a, b) => b - a);
  return ordenado[1];
}

console.log(segundoMaior2([1, 5, 9, 56])); // 9
