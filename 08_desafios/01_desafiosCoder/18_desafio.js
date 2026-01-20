function despesasTotais(produtos) {
  const despesas = (acumulador, atual) => acumulador + atual;
  const total = produtos.map((p) => p.preco).reduce(despesas); // produtos.map(({ preco }) => preco); || produtos.map((p) => {return p.preco});

  return total;
}

console.log(
  despesasTotais([
    { nome: "Iphone 11", preco: 8.0 },
    { nome: "Açucar", preco: 20.0 },
  ])
);

// Versão minimizada
function despesasTotais2(produtos) {
  return produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco,
    0
  );
}

console.log(
  despesasTotais2([
    { nome: "Iphone 11", preco: 8.0 },
    { nome: "Açúcar", preco: 20.0 },
  ])
);

function despesasTotais3(produtos) {
  return produtos.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.preco,
    0
  );
}
console.log(
  despesasTotais3([
    { nome: "Iphone 11", preco: 8.0 },
    { nome: "Açúcar", preco: 20.0 },
  ])
);
