function filtrarMaioresQueCinco(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  if (array.length === 0) {
    return "Informe um array não vázio";
  }

  const resultado = [];

  for (let n of array) {
    if (typeof n !== "number") {
      return "Informe um array de números";
    }

    if (n > 5) {
      resultado.push(n);
    }
  }

  return resultado;
}

// console.log(filtrarMaioresQueCinco(2, 4, 8, 9));
// console.log(filtrarMaioresQueCinco([2, 4, 8, 9]));
// console.log(filtrarMaioresQueCinco([]));

// Versão Otimizada
const filtrarMaioresQueCinco2 = (array) => {
  if (!Array.isArray(array)) return "Informe um array válido";

  // O método filter já lida com arrays vazios e retorna um novo array
  return array.filter((n) => typeof n === "number" && n > 5);
};

// console.log(filtrarMaioresQueCinco2([2, 4, 8, 9])); // [8, 9]

function mineradorUltraInsano(obj) {
  if (!obj || typeof obj !== "object") return "Informe um objeto válido";

  const resultado = [];

  function explorar(item) {
    if (typeof item === "number") {
      resultado.push(item);
    } else if (Array.isArray(item)) {
      for (let valor of item) explorar(valor);
    } else if (item && typeof item === "object") {
      for (let chave in item) explorar(item[chave]);
    }
  }

  for (let chave in obj) {
    explorar(obj[chave]);
  }

  // Filtragem e Ordenação
  const filtrados = resultado
    .filter((n) => typeof n === "number" && n > 5)
    .sort((a, b) => b - a);

  // Correção da duplicata: Verifica se a posição atual é a primeira ocorrência do valor
  const semDuplicatas = filtrados.filter((valor, index) => {
    return filtrados.indexOf(valor) === index;
  });

  if (semDuplicatas.length === 0) {
    return { status: "vazio", data: [] };
  }

  // Soma usando o que você estudou
  const somaTotal = semDuplicatas.reduce((acc, curr) => acc + curr, 0);

  return {
    status: "sucesso",
    data: semDuplicatas,
    total: somaTotal,
  };
}

console.log(
  mineradorUltraInsano({
    setorA: [2, 8, 8, 10, "15", 3],
    setorB: {
      internos: [1, 6, 40, 6],
      extras: [5, 5.5, 90],
    },
    setorC: "ignorar",
    setorD: [12, null, 12, 7],
  })
);

// Otimizado
function mineradorUltraInsano2(obj) {
  if (!obj || typeof obj !== "object") return { status: "erro", data: [] };

  // Extração inicial combinando os valores das chaves em um único array plano
  const extrairValores = (alvo) => {
    return Object.values(alvo).flatMap((valor) => {
      if (Array.isArray(valor)) return valor;
      if (valor && typeof valor === "object")
        return Object.values(valor).flat();
      return [];
    });
  };

  const brutos = extrairValores(obj);

  // Processamento encadeado
  const processados = brutos
    .filter(
      (n, i, self) => typeof n === "number" && n > 5 && self.indexOf(n) === i
    )
    .sort((a, b) => b - a);

  if (processados.length === 0) return { status: "vazio", data: [] };

  return {
    status: "sucesso",
    data: processados,
    total: processados.reduce((acc, n) => acc + n, 0),
  };
}

console.log(
  mineradorUltraInsano2({
    setorA: [2, 8, 8, 10, "15", 3],
    setorB: {
      internos: [1, 6, 40, 6],
      extras: [5, 5.5, 90],
    },
    setorC: "ignorar",
    setorD: [12, null, 12, 7],
  })
);
