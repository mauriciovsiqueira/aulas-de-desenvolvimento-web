// forEach()
// Objetivo: Executar uma função para cada elemento do array.
// Retorno: undefined (não cria um novo array).
// Usa callback: Sim!
// O forEach só serve para percorrer o array.
// Não altera o array original, e não retorna nada (só executa a função).

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Percorre o indice, laço for - não gera um novo array - precisa criar um e colocar manualmente - usar o push
// callback(elemento, indice, array) - array opcional. - função que é passada como parametro por outra função
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);

numeros.forEach((n) => {
  if (typeof n !== "number") {
    invalido = true;
  }
});

// Foreach não para no meio
