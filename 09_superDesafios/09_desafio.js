// Contar elementos
function quantidadeDeElementos(array) {
  if (!Array.isArray(array)) {
    return "Erro: informe um array válido!";
  }

  return `O array contém ${array.length} elemento(s)`;
}

console.log(quantidadeDeElementos([1, 6, 7, 8]));
console.log(quantidadeDeElementos([1, 9]));
console.log(quantidadeDeElementos("texto"));
console.log(quantidadeDeElementos([]));

// Contar elementos - receber varios tipos de dados e retornar varios arrays em varios niveis
function contarArrays(...valores) {
  let quantidade = 0;

  function verificar(item) {
    if (Array.isArray(item)) {
      quantidade++;
      for (let valor of item) {
        verificar(valor);
      }
    }
  }

  for (let v of valores) {
    verificar(v);
  }

  return quantidade;
}

console.log(contarArrays([1, 9], 1, ["a", 2], {}, [1, [2, 3, [1]], 5]));
console.log(contarArrays([[[[[]]]]]));
console.log(contarArrays("texto", 5, {}, true));

// Contar elementos iguais entre dois arrays
function contarElementosIguais(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return `Erro: Favor informar arrays`;
  }

  const juntarValores = array1.concat(array2);
  const valoresExtraidos = [];

  function extrairNumeros(item) {
    if (typeof item === "number") {
      valoresExtraidos.push(item);
    } else if (Array.isArray(item)) {
      for (let valor of item) {
        extrairNumeros(valor);
      }
    }
  }

  for (let v of juntarValores) {
    extrairNumeros(v);
  }

  const contador = {};

  for (let numero of valoresExtraidos) {
    contador[numero] = (contador[numero] || 0) + 1;
  }

  const valores = Object.entries(contador)
    .filter(([_, qtd]) => qtd > 1)
    .map(([num]) => Number(num));

  const totalIguais = valores.length;

  return { totalIguais, valores };
}

console.log(contarElementosIguais([1, 2, 3, 4, "a"], [2, 4, 8, 9, "a"]));
console.log(
  contarElementosIguais([1, 2, [2, 4, "a", [4, 5]]], [[1, [5, "a"]]])
);
console.log(contarElementosIguais([1, 2, [2, 4, "a", [4, 5]]], 1));

// Crie uma função que receba dois arrays, com qualquer tipo de dado permitido
function contarEmDoisArrays(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return `Erro: Somente arrays`;
  }

  const lista1 = [];
  const lista2 = [];
  let erroEncontrado = false;

  function extrairNumeros(item, destino) {
    if (typeof item === "number") {
      destino.push(item);
    } else if (typeof item === "string") {
      erroEncontrado = true;
    } else if (Array.isArray(item)) {
      for (let valor of item) {
        extrairNumeros(valor, destino);
      }
    }
  }

  for (let v1 of array1) {
    extrairNumeros(v1, lista1);
  }

  for (let v2 of array2) {
    extrairNumeros(v2, lista2);
  }

  if (erroEncontrado) {
    return "Erro: Somente números são permitidos";
  }

  const valores = lista1.filter((num) => lista2.includes(num));
  const totaisIguais = valores.length;

  return {
    totaisIguais,
    valores,
  };
}

console.log(contarEmDoisArrays([1, 2, [2, 4, [4, 5]]], [[1, [5]]]));
console.log(contarEmDoisArrays(["1", "2", ["2", "4", "a", ["4", "5"]]], ["1"]));
console.log(contarEmDoisArrays(["1", "2", ["2", "4", "a", ["4", "5"]]], "1"));
console.log(contarEmDoisArrays([[[[[[[1]]]]]]], [[[[[[1, [[]]], 2]]]]]));
