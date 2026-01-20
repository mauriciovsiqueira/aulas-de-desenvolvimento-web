// Object <- Coleção de {} e valor
const prod1 = {}; //* Objeto vázio (entre {})
prod1.nome = "Celular";
prod1.preco = 5000.9;
prod1["Desconto"] = 0.4; //* Pode usar [], evitar atributos com espaço
console.log(prod1);

// Forma literal, já colocando o valor
const prod2 = {
  nome: "Camisa",
  preco: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2,
    },
  },
};
console.log(prod2);

// Pode ter objeto dentro de objeto

