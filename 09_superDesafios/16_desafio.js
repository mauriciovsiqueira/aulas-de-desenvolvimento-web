function tirarUltimoElemento(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  array.pop();

  return array;
}

console.log(tirarUltimoElemento(4, 5, 9));
console.log(tirarUltimoElemento([4, 5, 9]));

// Insano
function tirarUltimoElementoInsano(array) {
  if (!Array.isArray(array)) {
    return "Informe um array válido";
  }

  function recursivo(item) {
    if (!Array.isArray(item)) {
      return item;
    }

    const resultado = [];

    for (let i = 0; i < item.length; i++) {
      const atual = item[i];

      if (Array.isArray(atual)) {
        resultado.push(recursivo(atual));
      } else {
        resultado.push(atual);
      }
    }

    resultado.pop(); // remove o último elemento do nível atual
    return resultado;
  }

  return recursivo(array);
}

console.log(tirarUltimoElementoInsano([1, 5]));
