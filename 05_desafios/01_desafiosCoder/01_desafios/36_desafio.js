// Metodo moderno
let vetor = [1, 2, 3, 4, 5];

function multiplicaVetor(vetor, multiplicador) {
  let vetorResultado1 = [];
  vetor.forEach((elemento) => {
    vetorResultado1.push(elemento * multiplicador);
  });

  return vetorResultado1;
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador) {
  let vetorResultado2 = [];
  if (multiplicador < 5) return;
  vetor.forEach((elemento) => {
    vetorResultado2.push(elemento * multiplicador);
  });

  return vetorResultado2;
}

console.log(multiplicaVetor(vetor, 3));
console.log(multiplicaVetorSeMaiorQue5(vetor, 11));

// Meu exercício
function vetorCalculo(vetorNumericos, numeroInteiro) {
  let calculoVetor = [];

  for (let i = 0; i < vetorNumericos.length; i++) {
    calculoVetor.push(vetorNumericos[i] * numeroInteiro);
  }

  return calculoVetor;
}

function vetorCalculoMaior5(vetorNumericos, numeroInteiro) {
  let calculoVetor = [];

  if (numeroInteiro > 5) {
    for (let i = 0; i < vetorNumericos.length; i++) {
      calculoVetor.push(vetorNumericos[i] * numeroInteiro);
    }
  }

  return calculoVetor;
}

console.log(vetorCalculo([1, 5, 9, 7], 6));
console.log(vetorCalculoMaior5([1, 5, 9, 7], 8));
console.log(vetorCalculoMaior5([1, 5, 9, 7], 4));
