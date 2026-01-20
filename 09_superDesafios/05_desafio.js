function maiorNumero5(numeros1, numeros2) {
  if (!Array.isArray(numeros1) || !Array.isArray(numeros2)) {
    return {
      erro: true,
      mensagem: "Não é do tipo array, favor colocar o tipo correto",
    };
  }

  const tudoJunto = numeros1.concat(numeros2);

  if (tudoJunto.length === 0) {
    return {
      erro: true,
      mensagem: "Valor vázio, favor colocar números",
    };
  } else if (tudoJunto.some((n) => typeof n !== "number")) {
    return {
      erro: true,
      mensagem: "Valor inválido encontrado",
    };
  }

  const numeros = tudoJunto;

  const unicos = tudoJunto.filter(
    (item, index, array) => array.indexOf(item) === index
  );
  const maior = Math.max(...unicos);
  const menor = Math.min(...unicos);
  const soma = unicos.reduce((a, b) => a + b);
  const media = (soma / unicos.length).toFixed(2);
  const pares = unicos.filter((n) => n % 2 === 0).length;
  const impares = unicos.filter((n) => n % 2 !== 0).length;
  const positivos = unicos.filter((n) => n > 0).length;
  const negativos = unicos.filter((n) => n < 0).length;

  return {
    numeros,
    unicos,
    maior,
    menor,
    soma,
    media,
    pares,
    impares,
    positivos,
    negativos,
  };
}
console.log(maiorNumero5([10, -3, 5, 0, 2], [5, 9, -8, 0]));
console.log(maiorNumero5([-5, -2, -7]));
console.log(maiorNumero5([9, 9, 9], [1, 1, 1]));
console.log(maiorNumero5([5, "a", 9], ["b", "y"]));
console.log(maiorNumero5([], []));
console.log(maiorNumero5([1], "texto"));
