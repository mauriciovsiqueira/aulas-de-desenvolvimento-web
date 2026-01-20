const pessoa = {
  nome: "Ana",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); // Chave
console.log(Object.values(pessoa)); // Valores
console.log(Object.entries(pessoa)); // Transforma em array

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // Pode ser usado em loops e etc..., deixa visível
  writable: false, // Torna imutável
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign - ECMAScript 2015
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // Assimila, concatenar, vai substituir os atributos

console.log(obj);
