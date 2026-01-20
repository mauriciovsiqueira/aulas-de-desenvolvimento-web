function contarInteirosNegativos(vetor) {
  let numNegativos = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      numNegativos++;
    }
  }

  return numNegativos;
}
vetor = [-1, 2, -5, 0, 19, -5];
console.log(contarInteirosNegativos(vetor));
