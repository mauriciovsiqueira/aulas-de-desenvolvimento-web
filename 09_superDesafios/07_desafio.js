// Se é par
function ePar(numero) {
  if (typeof numero !== "number") {
    return "Número inválido";
  }

  if (numero === 0) {
    return `${numero} é neutro`;
  }

  if (numero % 2 === 0) {
    return `${numero} é par`;
  } else {
    numero % 2 !== 0;
    return `${numero} é impar`;
  }
}

console.log(ePar(2));
console.log(ePar(21));
console.log(ePar(0));
console.log(ePar("21"));

// É multiplo
function eMultiplo(numero, divisor) {
  if (typeof numero !== "number" || typeof divisor !== "number") {
    return `Favor colocar o número`;
  }

  if (divisor === 0) {
    return `Não é possivel dividir por zero`;
  }

  return numero % divisor === 0
    ? `${numero} é multiplo de ${divisor}`
    : `${numero} não é multiplo de ${divisor}`;
}

console.log(eMultiplo(2, 50));
console.log(eMultiplo(144, 6));
console.log(eMultiplo(2, "0"));
console.log(eMultiplo(2, 0));

// Informação do número
function infNumero(numero) {
  if (typeof numero !== "number") {
    return `Informe um número`;
  }

  return {
    valor: numero,
    par: numero % 2 === 0,
    multiploDe3: numero % 3 === 0,
    positivo: numero > 0,
  };
}

console.log(infNumero(5));
console.log(infNumero(15));
console.log(infNumero("a"));
console.log(infNumero(-20));

// Analizar valores
function analisarValores(...valores) {
  const numeros = [];

  function extrair(item) {
    if (typeof item === "number") {
      numeros.push(item);
    } else if (Array.isArray(item)) {
      for (let subItem of item) {
        extrair(subItem);
      }
    }
  }

  for (let valor of valores) {
    extrair(valor);
  }

  if (numeros.length === 0) {
    return "Nenhum número encontrado";
  }

  const pares = numeros.filter((n) => n % 2 === 0);
  const impares = numeros.filter((n) => n % 2 !== 0);
  const positivos = numeros.filter((n) => n > 0);
  const negativos = numeros.filter((n) => n < 0);

  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }

  return {
    todos: numeros,
    pares,
    impares,
    positivos,
    negativos,
    soma,
    quantidade: numeros.length,
  };
}

console.log(analisarValores(2, [3, "a"], -5, [7, [10]]));
console.log(analisarValores("x", ["y"]));
