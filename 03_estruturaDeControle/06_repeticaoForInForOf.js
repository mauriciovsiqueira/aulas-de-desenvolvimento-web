// For in
// Percorre as chaves/propriedades enumeráveis de um objeto.

// Em objetos: percorre nomes das propriedades
// Em arrays: percorre índices (mas NÃO é recomendado!)

// Sintaxe
for (let chave in objeto) {
  console.log(chave);
}

// Exemplos essenciais
// Com Objetos (uso ideal)
const pessoa = {
  nome: "Lucas",
  idade: 30,
};

for (let prop in pessoa) {
  console.log(prop, pessoa[prop]);
}

// Com Arrays (funciona, mas não recomendado)
const frutas = ["maçã", "banana", "uva"];

for (let i in frutas) {
  console.log(i, frutas[i]);
}

// 🛑 Problema: for...in pode iterar propriedades do prototype → pode dar erro indesejado.
// ➡️ Melhor usar for...of ou forEach para arrays.

// Onde NÃO usar
// Iterando strings
const texto1 = "Oi";
for (let t in texto1) console.log(texto1[t]);
// funciona mas não é indicado

// ❌ Quando precisar de ordem garantida
// Objetos não garantem ordem das chaves.

// | Estrutura           | O que retorna                            |
// | ------------------- | ---------------------------------------- |
// | Objeto              | Nome das propriedades enumeráveis        |
// | Array               | Índices como strings (`"0"`, `"1"`, ...) |
// | Prototype de objeto | Se enumerável, também retorna!           |

// Pode usar break e continue
for (let chave in pessoa) {
  if (chave === "idade") continue;
  console.log(chave);
}

// For of
// Percorre valores de iteráveis de forma simples.
// Iteráveis: Arrays, Strings, Maps, Sets, NodeList, argumentos de função e outros tipos que implementam [Symbol.iterator].

// Sintaxe
for (let valor of iterable) {
  console.log(valor);
}

// Exemplos práticos
// Com Arrays
const frutas1 = ["maçã", "banana", "uva"];

for (let fruta of frutas1) {
  console.log(fruta);
}

// Com Strings
const texto = "Oi!";

for (let letra of texto) {
  console.log(letra);
}

// Com Sets (não permite valores duplicados)
const numeros = new Set([1, 2, 2, 3]);

for (let n of numeros) {
  console.log(n);
}

// Com Maps (valores)
const mapa = new Map([
  ["nome", "Ana"],
  ["idade", 25],
]);

for (let valor of mapa) {
  console.log(valor);
}

// Se quiser chave e valor separado:
for (let [chave, valor] of mapa) {
  console.log(chave, valor);
}

// 🚫 Onde não usar for...of
// ❌ Em Objetos simples
const pessoa1 = { nome: "João" };

for (let item of pessoa1) {
} // ERRO

// Para objetos → use for...in, Object.keys(), Object.values(), Object.entries()

// | Estrutura  | Itera sobre                       | Ideal para                  |
// | ---------- | --------------------------------- | --------------------------- |
// | `for...of` | **Valores**                       | Arrays, Strings, Maps, Sets |
// | `for...in` | **Chaves/Índices**                | Objetos                     |
// | `forEach`  | **Valores do array** via callback | Programação funcional       |

// Pode usar break e continue
for (let n of [1, 2, 3, 4, 5]) {
  if (n === 3) break;
  console.log(n);
}

// Comparação rápida em uma frase
// for...of = quando você quer os valores
// for...in = quando você quer as chaves/índices
