function calcularQuadrados(array) {
  if (!Array.isArray(array)) return "Informe um array válido";

  const aoQuadrado = array.map((valor) => valor ** 2);

  return aoQuadrado;
}

// console.log(calcularQuadrados([2, 8, 9, -5]));
// console.log(calcularQuadrados([]));

// Otmizado
const calcularQuadrados2 = (array) =>
  Array.isArray(array) ? array.map((n) => n ** 2) : [];

// console.log(calcularQuadrados2([2, 8, 9, -5]));

// Insano
function processadorDeMatrizesInsano(obj) {
  const numeros = [];

  function extracao(item) {
    if (typeof item === "number") {
      numeros.push(item);
    } else if (Array.isArray(item)) {
      for (let valor of item) extracao(valor);
    } else if (item && typeof item === "object") {
      if (item.hasOwnProperty("valor")) {
        extracao(item.valor);
      } else {
        for (let chave in item) extracao(item[chave]);
      }
    }
  }

  for (let chave in obj) extracao(obj[chave]);

  const resultadoParImpar = numeros.map((n) => (n % 2 === 0 ? n ** 2 : n ** 3));
  const filtrar = resultadoParImpar.filter((n) => n >= 10 && n <= 1000);
  const removerDuplicatas = filtrar
    .filter((n, i) => filtrar.indexOf(n) === i)
    .sort((a, b) => a - b);

  const total = removerDuplicatas.length;

  return {
    processados: removerDuplicatas,
    estatisticas: {
      totalItens: total,
      media:
        total > 0
          ? removerDuplicatas.reduce((ac, at) => ac + at, 0) / total
          : 0,
      maiorValor: total > 0 ? removerDuplicatas[total - 1] : 0,
    },
  };
}

console.log(
  processadorDeMatrizesInsano({
    caixaA: [2, 3, 4, 5, 2],
    caixaB: [
      { valor: 10 },
      { inf: { valor: 15 } },
      { valor: 7 },
      { idade: 31 },
    ],
    caixaC: "descartar",
    caixaD: [30, 1, 30],
  })
);

// Otimização
const processadorDeMatrizesInsano2 = (obj) => {
  const extrair = (item) => {
    if (typeof item === "number") return [item];
    if (Array.isArray(item)) return item.flatMap(extrair);
    if (item && typeof item === "object")
      return Object.values(item).flatMap(extrair);
    return [];
  };

  const brutos = extrair(obj);

  const processados = brutos
    .map((n) => (n % 2 === 0 ? n ** 2 : n ** 3))
    .filter((n, i, self) => n >= 10 && n <= 1000 && self.indexOf(n) === i)
    .sort((a, b) => a - b);

  const total = processados.length;
  const soma = processados.reduce((acc, n) => acc + n, 0);

  return {
    processados,
    estatisticas: {
      totalItens: total,
      media: total ? soma / total : 0,
      maiorValor: total ? processados[total - 1] : 0,
    },
  };
};
