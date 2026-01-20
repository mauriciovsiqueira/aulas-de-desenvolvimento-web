// // O .reduce() serve para reduzir (ou acumular) todos os valores de um array em um único resultado.
// Ele recebe uma função callback que é executada para cada elemento do array.
// O método reduce() é usado para reduzir um array a um único valor — pode ser um número, uma string, um objeto, outro array... qualquer coisa.
// Ele percorre todos os elementos do array e, a cada volta, acumula um resultado usando uma função de callback.
// Sem valor inicial
// Se você não passar um valor inicial, o reduce usa o primeiro item do array como acumulador automaticamente:
// A função recebe dois parâmetros principais:
// acumulador: o valor acumulado até o momento;
// atual: o elemento atual do array.
// Com valor inicial:

const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0);

console.log(soma); // 10

// O segundo parâmetro (valorInicial) é opcional, mas ele muda a forma como o reduce() começa a operação.

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  });

console.log(resultado);
