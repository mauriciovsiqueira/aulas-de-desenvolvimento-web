function multiplicar(num1, num2) {
  let resultado = 0;

  if (num1 >= 0 && num2 >= 0) {
    for (let i = 0; i < num2; i++) {
      resultado += num1;
    }
    return resultado;
  } else {
    return `Esse numero é negativo`;
  }
}

console.log(multiplicar(1, 2));
console.log(multiplicar(4, 2));
console.log(multiplicar(5, 5));
console.log(multiplicar(-1, 2));
