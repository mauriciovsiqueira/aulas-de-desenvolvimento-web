function aoQuadrado(valor) {
  if (typeof valor !== "number") {
    return "Informe um valor válido";
  }

  return valor ** 2;
}

console.log(aoQuadrado(4));
console.log(aoQuadrado(10));

// Insano
function aoQuadradoInsano(...valor) {
  const valoresEncontrados = [];

  function recursao(item) {
    if (typeof item === "number") {
      valoresEncontrados.push(item);
      return;
    }

    if (typeof item === "string") {
      const n = Number.parseFloat(item);
      if (!Number.isNaN(n)) {
        valoresEncontrados.push(n);
      }
      return;
    }

    if (item && typeof item === "object") {
      if (Object.hasOwn(item, "valor")) {
        recursao(item.valor);
        return;
      }

      for (let chave in item) {
        recursao(item[chave]);
      }
    }
  }

  for (let v of valor) {
    recursao(v);
  }

  //   return valoresEncontrados.reduce((soma, n) => soma + n ** 2, 0); - Soma tudo e da um valor
  return valoresEncontrados.map((n) => n ** 2, 0);
}

console.log(aoQuadradoInsano(2, [[4]], { valor: 10 }));
