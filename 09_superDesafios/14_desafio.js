// Fácil
function adicionarNoFinal(array, valor) {
  array.push(valor);

  return array;
}

// console.log(adicionarNoFinal([4], 5));

// Médio
function adicionarNoFinalMedio(array, elemento, elemento2) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  array.push(elemento, elemento2);

  return array;
}

// console.log(adicionarNoFinalMedio([5], 5, 5));

// Insano
function adicionarNoFinalInsano(arrayRaiz, ...valor) {
  if (!Array.isArray(arrayRaiz)) {
    return "Estrutura inválida: o primeiro parâmetro deve ser um array";
  }

  const resultado = [...arrayRaiz]; // mantém estrutura raiz SEM alterar

  function processar(item) {
    // NÚMEROS → adiciona direto
    if (typeof item === "number" && !Number.isNaN(item)) {
      resultado.push(item);
      return;
    }

    // STRINGS → adiciona a string original
    if (typeof item === "string") {
      resultado.push(item);
      return;
    }

    // FUNÇÕES → converte para string
    if (typeof item === "function") {
      resultado.push(item.toString());
      return;
    }

    // OBJETOS → deep copy
    if (item && typeof item === "object" && !Array.isArray(item)) {
      const copia = JSON.parse(JSON.stringify(item));
      resultado.push(copia);
      return;
    }

    // ARRAYS → extrair SOMENTE primitivos
    if (Array.isArray(item)) {
      for (let el of item) {
        if (
          typeof el === "number" ||
          typeof el === "string" ||
          typeof el === "boolean"
        ) {
          resultado.push(el);
        }
      }
      return;
    }

    // null, undefined, NaN → "valor inválido"
    resultado.push("valor inválido");
  }

  for (let itens of valor) {
    processar(itens);
  }

  return resultado;
}
// Strutured clone
function adicionarNoFinalInsano2(arrayRaiz, ...valor) {
  if (!Array.isArray(arrayRaiz)) {
    return "Estrutura inválida: o primeiro parâmetro deve ser um array";
  }

  // Deep copy moderno (não altera o original)
  const array = structuredClone(arrayRaiz);

  // Função para percorrer tudo profundamente
  function processar(item) {
    if (typeof item === "number") {
      array.push(item);
    } else if (Array.isArray(item)) {
      for (let sub of item) processar(sub);
    } else if (item && typeof item === "object" && "valor" in item) {
      const convertido = Number.parseFloat(item.valor);
      if (!Number.isNaN(convertido)) array.push(convertido);
    } else if (typeof item === "string") {
      const convertido = Number.parseFloat(item);
      if (!Number.isNaN(convertido)) array.push(convertido);
    }
  }

  for (let v of valor) processar(v);

  return array;
}
