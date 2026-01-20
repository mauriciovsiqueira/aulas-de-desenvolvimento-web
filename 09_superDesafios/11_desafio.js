// Nível fácil
function numeroEmDobro(numero) {
  if (typeof numero !== "number") {
    return "Informe um numero";
  }

  return numero * 2;
}

console.log(numeroEmDobro(4));
console.log(numeroEmDobro("texto"));

// Nível intermediário
function numeroEmDobroIntermediario(numeroArray) {
  if (!Array.isArray(numeroArray)) {
    return "Informe um array";
  }

  for (let numero of numeroArray) {
    if (typeof numero !== "number") {
      return "Informe um array de numeros";
    }
  }

  const dobro = numeroArray.map((n) => n * 2);

  return dobro;
}

console.log(numeroEmDobroIntermediario([4, 5, 9, 7]));
console.log(numeroEmDobroIntermediario(4));
console.log(numeroEmDobroIntermediario(["4"]));

// Nível difícil
function arrayDeObjetos(array) {
  if (!Array.isArray(array)) {
    return "Informe um array.";
  }

  for (let item of array) {
    if (typeof item !== "object" || item === null) {
      return "Informe objetos válidos dentro do array.";
    }
  }

  for (let obj of array) {
    if (typeof obj.nome !== "string" || typeof obj.preco !== "number") {
      return "Cada objeto deve ter propriedades nome (string) e preco (number).";
    }
  }

  const resultado = [];

  for (let obj of array) {
    if (obj.preco > 50) {
      resultado.push(obj.nome);
    }
  }

  return resultado;
}

console.log(
  arrayDeObjetos([
    { nome: "Celular", preco: 1700 },
    { nome: "Notebook", preco: 2500 },
    { nome: "Caneta", preco: 1.5 },
  ])
);
console.log(arrayDeObjetos(1));
console.log(arrayDeObjetos([1]));

// Reforço
function arrayDeObjetosReforco(array) {
  if (!Array.isArray(array)) {
    return "Favor informar um array!";
  }

  for (let objValido of array) {
    if (typeof objValido !== "object" || objValido === null) {
      return "Favor informar array de objetos!";
    }
  }

  for (let obj of array) {
    if (typeof obj.nome !== "string" || typeof obj.idade !== "number") {
      return `Favor informar um texto no nome ou numero na idade`;
    }
  }

  const resultado = [];

  for (let obj of array) {
    if (obj.idade > 18) {
      resultado.push(obj.nome);
    }
  }
  return resultado;
}

console.log(
  arrayDeObjetosReforco([
    { nome: "Maurício", idade: 30 },
    { nome: "Lorena", idade: 27 },
    { nome: "Nicole", idade: 11 },
  ])
);
console.log(arrayDeObjetosReforco(1));
console.log(arrayDeObjetosReforco([1]));
console.log(arrayDeObjetosReforco([{ nome: 1, idade: 1 }]));
