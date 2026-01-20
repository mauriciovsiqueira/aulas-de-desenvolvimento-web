// Fácil
function somarArray(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  const soma = array.reduce((at, ac) => at + ac, 0);

  return soma;
}

// console.log(somarArray([5, 7, 9, 8]));
// console.log(somarArray(8));

// Médio
function somarArrayMedio(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  const filtrarNumeros = array.filter((e) => typeof e === "number");
  const soma = filtrarNumeros.reduce((at, ac) => at + ac, 0);

  return soma;
}

// console.log(somarArrayMedio([1, 2, "3", true, 4]));
// console.log(somarArrayMedio([]));
// console.log(somarArrayMedio("não é array"));

// Difícil
function somarArrayDificil(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  const numeroFiltrado = [];

  for (let item of array) {
    if (typeof item === "number") {
      numeroFiltrado.push(item);
    } else if (typeof item === "string") {
      const convertido = parseFloat(item);
      if (!isNaN(convertido)) {
        numeroFiltrado.push(convertido);
      }
    }
  }

  const soma = numeroFiltrado.reduce((at, ac) => at + ac, 0);

  return soma;
}

// console.log(somarArrayDificil([1, 5, 9, 8]));
// console.log(somarArrayDificil([1, "5", 9, "8"]));
// console.log(somarArrayDificil([]));
// console.log(somarArrayDificil(1));

//Insano
function somarArrayInsano(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  const somado = [];

  function recursao(item) {
    if (typeof item === "number") {
      somado.push(item);
    } else if (typeof item === "string") {
      const convertido = Number.parseFloat(item);
      if (!Number.isNaN(convertido)) {
        somado.push(convertido);
      }
    } else if (item && typeof item === "object" && "valor" in item) {
      const convertido = Number.parseFloat(item.valor);
      if (!Number.isNaN(convertido)) {
        somado.push(convertido);
      }
    } else if (Array.isArray(item)) {
      for (let itens of item) {
        recursao(itens);
      }
    }
  }

  for (let v of array) {
    recursao(v);
  }

  return somado.reduce((at, ac) => at + ac, 0);
}

console.log(
  somarArrayInsano([
    1,
    [
      2,
      [
        3,
        [
          4,
          ["5", [6, ["7", [8, [9, [0, [[[[[[[10]], { valor: "50" }]]]]]]]]]]],
        ],
      ],
    ],
  ])
);
