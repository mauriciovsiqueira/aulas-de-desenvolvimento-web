// Object.preventExtensions
const produto = Object.preventExtensions({
  // Previne extender o objeto, sem colocar mais atributos.
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});

console.log("Extensível", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha Escolar Branca"; // Não terá efeito.
delete produto.tag;

console.log(produto);

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa); // Sela o objeto sem poder adicionar ou excluir

console.log("Selado", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;

console.log(pessoa);

// Object.freeze = selado + valores constantes - Não pode ser modificado.
