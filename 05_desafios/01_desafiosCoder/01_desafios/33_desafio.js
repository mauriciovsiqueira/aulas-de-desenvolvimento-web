function uniao() {
  let vetorInt = [1, 2, 3, 4];
  let vetorStr = ["Açaí", "Pão", "Salada", "Água"];
  let vetorDouble = [2.2, 3.9, 1.78, 5.689];
  let vetor = [];
  return vetor.concat(vetorInt, vetorStr, vetorDouble);
}
console.log(uniao());

let vetorInteiro = [1, 2, 3, 4];
let vetorString = ["Arthur", "Christian", "Yuri", "Galdino"];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

// ...args - recebe qualquer numero de array como argumento
function concatenar(...args) {
  resultado = [];
  for (let i = 0; i < args.length; i++) {
    resultado = resultado.concat(args[i]);
  }
  return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble, vetorString));
console.log(concatenar(vetorDouble, vetorString));
