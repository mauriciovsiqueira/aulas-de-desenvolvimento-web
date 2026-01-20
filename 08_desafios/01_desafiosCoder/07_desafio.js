function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo && numero <= maximo;
  }

  return numero > minimo && numero < maximo;
}

console.log(estaEntre(10, 6, 15));
console.log(estaEntre(10, 10, 100));
console.log(estaEntre(10, 10, 100, true));
