// filter()
// Objetivo: Criar um novo array filtrado, com apenas os elementos que passam no teste da callback.
// Retorno: Novo array (com menos itens, normalmente).
// Usa callback: Sim!
// O filter() mantém apenas os elementos para os quais a callback retorna true.
// Cria um novo array - pode ser reduzido - seleciona valores

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return false; // Mostra array vázio
  })
);

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

// Forma simplificada
function receberSomenteOsParesDeIndicesPares2(array) {
  return array.filter((valor, indice) => indice % 2 === 0 && valor % 2 === 0); // Valor primeiro, indice em segundo e o array original (raramente usasdo.)
}

const numsValidos = numeros.filter((n) => typeof n === "number");
