function retornarIdade(pessoa) {
  if (typeof pessoa !== "object" || pessoa === null) {
    return "Informe um objeto válido";
  }

  if (!Object.hasOwn(pessoa, "idade")) {
    return "Objeto não contém a propriedade idade";
  }

  return pessoa.idade;
}

console.log(retornarIdade({ nome: "Mauŕicio", idade: 30 }));
console.log(retornarIdade({ nome: "Maurício" }));

// Insano
function retornarIdadeInsano(pessoa) {
  if (typeof pessoa !== "object" || pessoa === null) {
    return "Informe um objeto válido";
  }

  let idadeEncontrada;

  function recursao(item) {
    if (idadeEncontrada !== undefined) return;

    if (Array.isArray(item)) {
      for (let v of item) {
        recursao(v);
      }
      return;
    }

    if (item && typeof item === "object") {
      if (
        Object.hasOwn(item, "idade") &&
        typeof item.idade === "number" &&
        !Number.isNaN(item.idade)
      ) {
        idadeEncontrada = item.idade;
        return;
      }

      for (let chave in item) {
        recursao(item[chave]);
      }
    }
  }

  recursao(pessoa);

  return idadeEncontrada !== undefined
    ? idadeEncontrada
    : "Nenhuma idade válida encontrada";
}

console.log(retornarIdadeInsano({ nome: "Ana", idade: 30 }));
console.log(retornarIdadeInsano({ dados: { info: { idade: 25 } } }));
console.log(retornarIdadeInsano([{ nome: "João" }, { idade: 40 }]));
console.log(retornarIdadeInsano({ idade: "30" }));
