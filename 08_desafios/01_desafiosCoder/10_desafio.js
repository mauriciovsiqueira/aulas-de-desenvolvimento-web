function simboloMais(num) {
  let resultado = "";

  for (let i = 0; i < num; i++) {
    resultado += "+";
  }

  return resultado;
}

console.log(simboloMais(2));
console.log(simboloMais(20));

function simboloMais2(num) {
  return Array(num).fill("+").join(""); // .join("") - Junta tudo dentro de uma string
}

console.log(simboloMais2(2));
console.log(simboloMais2(20));

function simboloMais3(num) {
  return "+".repeat(num); // .repeat - repete uma string quantas vezes quiser
}

console.log(simboloMais3(2));
console.log(simboloMais3(20));
