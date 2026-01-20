function impares(inicio, fim) {
  let numero = [];
  let impar = [];

  if (inicio > fim) {
    let temp = inicio;
    inicio = fim;
    fim = temp;
  }
  for (let i = inicio; i <= fim; i++) {
    numero.push(i);
  }

  for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 1) {
      impar.push(numero[i]);
    }
  }

  return impar;
}

console.log(impares(10, 20));
console.log(impares(0, 80));
console.log(impares(100, 20));
