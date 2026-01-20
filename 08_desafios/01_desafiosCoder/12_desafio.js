function removerPropriedade(obj, propriedade) {
  delete obj[propriedade];

  return obj;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));

// Moderna
function removerPropriedade2(obj, propriedade) {
  const copia = Object.assign({}, obj);

  delete copia[propriedade];

  return copia;
}

console.log(removerPropriedade2({ a: 1, b: 2 }, "a"));
// Moderna com spread ...
function removerPropriedade3(obj, propriedade) {
  const copia = { ...obj };

  delete copia[propriedade];

  return copia;
}

console.log(removerPropriedade3({ a: 1, b: 2 }, "a"));

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
