Array.prototype.map2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)); // Executa o callback, passando 3 parâmetros: this[i] → o elemento atual, i → o índice do elemento, this → o próprio array original
  }

  return newArray;
};

const carrinho = [
  '{"nome": "Borracha", "Preco": 3.14}',
  '{"nome": "Caderno", "Preco": 13.90}',
  '{"nome": "Kit de Lápis", "Preco": 41.22}',
  '{"nome": "Caneta", "Preco": 7.50}',
];

// Retornar um array apenas os preços
const paraObjeto = (json) => JSON.parse(json); // Transforma o JSON em objeto
const apenasPreco = (produto) => produto.Preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
