// Coleção dinãmico de pares chave/valor.
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 18,
    },
    {
      nome: "Ana",
      idade: 22,
    },
  ],
  calcularValorSeguro: function () {
    //...
  },
};

console.log(carro);

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Chigante";
console.log(carro);

delete carro.condutores;
console.log(carro);
