function repetir(elementoARepetir, numeroDeRepeticao) {
  let resultado = [];

  for (let i = 1; i <= numeroDeRepeticao; i++) {
    resultado.push(elementoARepetir);
  }

  return resultado;
}

console.log(repetir(1, 10));
console.log(repetir("Açaí", 20));

function repetir2(item, quantidade) {
  // Array(quantidade) → cria um array vazio com o tamanho especificado.
  // .fill(item) → preenche todas as posições com o mesmo valor.
  return Array(quantidade).fill(item);
}

console.log(repetir2(1, 10));
console.log(repetir2("Açaíndo", 20));

const repetir3 = (item, quantidade) => Array(quantidade).fill(item);

console.log(repetir3(1, 10));
console.log(repetir3("Açaí", 20));
