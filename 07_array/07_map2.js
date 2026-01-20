const carrinho = [
  '{"nome": "Borracha", "Preco": 3.14}',
  '{"nome": "Caderno", "Preco": 13.90}',
  '{"nome": "Kit de Lápis", "Preco": 41.22}',
  '{"nome": "Caneta", "Preco": 7.50}',
];

// Retornar um array apenas os preços
const paraObjeto = (json) => JSON.parse(json); // Transforma o JSON em objeto
const apenasPreco = (produto) => produto.Preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
