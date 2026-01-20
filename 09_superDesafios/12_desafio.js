// Fácil
function valorObjeto(objeto) {
  if (typeof objeto !== "object" || objeto === null) {
    return "Informe um objeto válido.";
  }

  if (!("nome" in objeto)) {
    return "A propriedade nome não existe no objeto.";
  }

  return objeto.nome;
}

// console.log(valorObjeto({ nome: "Maurício" }));
// console.log(valorObjeto("Maurício"));

// Médio
function valorObjetoIntermediario(obj = {}) {
  if (typeof obj !== "object" || obj === null) {
    return "Informar um objeto";
  }

  if (Object.keys(obj).length === 0) {
    return "Não informar um objeto vázio";
  }

  if (!Object.hasOwn(obj, "nome")) {
    return "Tem ter no objeto a propriedade nome";
  }

  if (typeof obj.nome !== "string") {
    return "A propriedade nome tem que ter uma string";
  }

  return obj.nome;
}

// console.log(valorObjetoIntermediario({}));
// console.log(valorObjetoIntermediario(1));
// console.log(valorObjetoIntermediario({ idade: 29 }));
// console.log(valorObjetoIntermediario({ nome: 29 }));
// console.log(valorObjetoIntermediario({ nome: "Maurício" }));

// Difícil
function valorObjetoDificil(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Informe um objeto válido!";
  }

  if (Object.keys(obj).length === 0) {
    return "Objeto não pode ser vázio!";
  }

  if (!Object.hasOwn(obj, "nome")) {
    return "Propriedade nome ausente";
  }

  if (typeof obj.nome !== "string" || obj.nome.trim() === "") {
    return "Nome inválido";
  }

  return obj.nome;
}

// console.log(valorObjetoDificil(1));
// console.log(valorObjetoDificil({}));
// console.log(valorObjetoDificil({ nome: " " }));
// console.log(valorObjetoDificil({ nome: 30 }));
// console.log(valorObjetoDificil({ idade: 30 }));
// console.log(valorObjetoDificil({ nome: "Maurício", idade: 30 }));

// Muito difícil
function valorObjetoSuperDificil(arrayDeObj) {
  if (!Array.isArray(arrayDeObj)) {
    return "Informe um array válido";
  }

  if (arrayDeObj.length === 0) {
    return "Array vazio";
  }

  const resultado = [];

  for (let array of arrayDeObj) {
    if (typeof array !== "object" || array === null) {
      continue;
    }

    if (!Object.hasOwn(array, "nome")) {
      continue;
    }

    if (typeof array.nome !== "string") {
      continue;
    }

    const nomeLimpo = array.nome.trim();
    if (!nomeLimpo) {
      continue;
    }

    resultado.push(nomeLimpo);
  }

  return resultado;
}

// console.log(valorObjetoSuperDificil(1));
// console.log(valorObjetoSuperDificil([1]));
// console.log(valorObjetoSuperDificil([{}]));
// console.log(valorObjetoSuperDificil([{ nome: 1 }]));
// console.log(valorObjetoSuperDificil([{ nome: " " }]));
// console.log(
//   valorObjetoSuperDificil([{ nome: "Maurício" }, { nome: "Lorena" }])
// );

// Insano
function valorObjetoSuperInsano(arrayDeObj) {
  if (!Array.isArray(arrayDeObj)) {
    return "Erro: O valor recebido não é um array";
  }

  if (arrayDeObj.length === 0) {
    return "Erro: O array está vazio";
  }

  const resultado = [];

  for (let itens of arrayDeObj) {
    if (typeof itens !== "object" || itens === null) {
      continue;
    } else if (!Object.hasOwn(itens, "nome")) {
      continue;
    } else if (typeof itens.nome !== "string") {
      continue;
    } else if (itens.nome.trim() === "") {
      continue;
    }

    resultado.push(itens.nome.trim());
  }

  return resultado;
}

console.log(valorObjetoSuperInsano([]));
console.log(valorObjetoSuperInsano([{}]));
console.log(valorObjetoSuperInsano([1]));
console.log(valorObjetoSuperInsano(1));
console.log(valorObjetoSuperInsano([{ idade: 29 }]));
console.log(valorObjetoSuperInsano([{ nome: "Maurício", idade: 29 }]));
console.log(
  valorObjetoSuperInsano([
    { nome: "Maurício", idade: 29 },
    { nome: "Lorena", idade: 27 },
  ])
);
console.log(
  valorObjetoSuperInsano([{ idade: 29 }, { nome: "Lorena", idade: 27 }])
);
