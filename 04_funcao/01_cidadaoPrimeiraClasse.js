// Função em JS é First-Class Object (Citizens).
// Higher-order Function.

// Parametros e retornos é totalmente opcional.

// Criar de forma literal.
function fun1() {}

//Armazenar em uma variavel.
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](5, 4));

// Armazenar em um atributo de objeto.
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// Uma função pode retornar/conter uma função.
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(5, 9)(8);

// ==================================================================================

// Rest vs Spread
function soma(...numeros) {
  // <- REST: junta - Junta argumentos em um array
  return numeros.reduce((total, n) => total + n);
}

// Versão arrow
const valores = [1, 2, 3];
console.log(soma(...valores)); // <- SPREAD: espalha -> 6

// 🔍 Resumo visual:
// Símbolo	Nome	Onde aparece	Faz o quê	Exemplo
// ...	Rest	Na declaração da função	Junta vários valores em um array	function f(...args) {}
// ...	Spread	Na chamada da função / criação de objeto/array	Espalha os valores de um array/objeto	f(...array)

// 🧠 Analogia simples:
// Imagine que você tem uma sacola cheia de frutas 🍎🍌🍇
// REST → coloca todas as frutas dentro da sacola → [🍎, 🍌, 🍇]
// SPREAD → tira as frutas de dentro da sacola e espalha na mesa → 🍎, 🍌, 🍇
