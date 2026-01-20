function reverter(obj) {
  const paresDeChaveValorInvertidos = Object.entries(obj).map((parChaveValor) =>
    parChaveValor.reverse()
  );

  return Object.fromEntries(paresDeChaveValorInvertidos);
}

console.log(reverter({ a: 1, b: 2, c: 3 }));
