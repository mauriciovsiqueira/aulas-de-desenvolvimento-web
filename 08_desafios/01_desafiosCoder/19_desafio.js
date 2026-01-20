function calcularMedia(numeros) {
  const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
  const media = soma / numeros.length;
  console.log(media);
}

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);

//Compacto
const calcularMedia2 = (numeros) =>
  numeros.reduce((a, b) => a + b, 0) / numeros.length;

console.log(calcularMedia2([0, 10]));
console.log(calcularMedia2([1, 2, 3, 4, 5]));
