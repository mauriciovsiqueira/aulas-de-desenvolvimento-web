// Retornar o primeiro elemento
function retornarPrimeiroElemento(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Array inválido";
  }

  return array[0];
}

console.log(retornarPrimeiroElemento([1, 2, 6, 7]));
console.log(retornarPrimeiroElemento("array"));

// Retornar o ultimo elemento
function retornarUltimoElemento(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return "Array inválido";
  }

  const somenteNumeros = array.every((item) => typeof item === "number");
  if (!somenteNumeros) {
    return "O array contém valores que não são numeros";
  }

  return array[array.length - 1];
}

console.log(retornarUltimoElemento([1, 2, 6, 7]));
console.log(retornarUltimoElemento(["array"]));
console.log(retornarUltimoElemento("array"));

// Filtrar números
function filtrarNumeros(numeros) {
  const numerosFiltrados = [];

  if (!Array.isArray(numeros)) {
    return `Nenhum array encontrado, favor fornecer um`;
  }

  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] === "number") {
      numerosFiltrados.push(numeros[i]);
    }
  }

  if (numerosFiltrados.length === 0) {
    return "Nenhum número encontrado";
  }

  return numerosFiltrados;

  //   return numerosFiltrados.every((e) => typeof e !== "number")
  //     ? `Nenhum número encontrado`
  //     : numerosFiltrados;
}

console.log(filtrarNumeros([1, 5, "a", true, "1", 10]));
console.log(filtrarNumeros(["a", true, "1"]));

function detalharArraysNumeros(...entradas) {
  const numerosExtraidos = [];

  function extrair(item) {
    if (typeof item === "number") {
      numerosExtraidos.push(item);
    } else if (Array.isArray(item)) {
      item.forEach((sub) => extrair(sub));
    }
  }

  entradas.forEach((valor) => extrair(valor));

  const todos = numerosExtraidos;
  const pares = todos.filter((e) => e % 2 === 0);
  const impares = todos.filter((e) => e % 2 !== 0);
  const positivos = todos.filter((e) => e > 0);
  const negativos = todos.filter((e) => e < 0);
  const soma = todos.reduce((a, b) => a + b, 0);
  const quantidade = todos.length;

  return {
    todos,
    pares,
    impares,
    positivos,
    negativos,
    soma,
    quantidade,
  };
}

console.log(detalharArraysNumeros(5, "a", [3, -2], { x: 10 }, [7, ["b", 0]]));
console.log(detalharArraysNumeros([1, 5, "a"], 1, 9, "w", [[1], "r"]));
