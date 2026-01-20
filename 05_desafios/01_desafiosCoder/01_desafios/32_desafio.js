function mediaAritmetica() {
  let vetor = [1, 3];
  let numSomado = 0;

  for (i = 0; i < vetor.length; i++) {
    numSomado += vetor[i];
  }

  return numSomado / vetor.length;
}

console.log(mediaAritmetica());
