function triplo(...valores) {
  const numerosEncontrados = [];

  function extrairNumeros(item) {
    if (typeof item === "number") {
      numerosEncontrados.push(item);
    } else if (Array.isArray(item)) {
      for (let valor of item) {
        extrairNumeros(valor);
      }
    }
  }

  for (let item of valores) {
    extrairNumeros(item);
  }

  if (numerosEncontrados.length === 0) {
    return "Nenhum número válido encontrado.";
  }

  const numerosOriginais = numerosEncontrados;
  const triplos = numerosEncontrados.map((n) => n * 3);
  const quantidade = numerosEncontrados.length;
  const media = triplos
    .reduce((ac, at) => (ac + at, 0) / triplos.length)
    .toFixed(2);

  return {
    numerosOriginais,
    triplos,
    quantidade,
    media,
  };
}

console.log(triplo(3, [2, "a"], 4, [7, 1]));
console.log(triplo([5, 6, 3, 9, -1, 0], 1, "a", ["b"]));
console.log(triplo(["a", "b"]));
console.log(triplo(["a", "b", 1, 9]));
console.log(triplo("texto"));
console.log(triplo(7.9));
