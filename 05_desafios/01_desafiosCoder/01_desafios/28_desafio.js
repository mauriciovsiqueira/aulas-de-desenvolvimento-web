function paresImpares(vetorNumeros) {
  let qtdPares = 0;
  let qtdImpares = 0;
  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 == 0) {
      qtdPares++;
    } else {
      qtdImpares++;
    }
  }
  console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`);
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
paresImpares(vetor);

// Versão melhorada
function paresImpares(qtdElementos) {
  let vetor = [];

  // gera os números de 1 até qtdElementos
  for (let i = 1; i <= qtdElementos; i++) {
    // Push coloca no vetor
    vetor.push(i);
  }

  let qtdPares = 0;
  let qtdImpares = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      qtdPares++;
    } else {
      qtdImpares++;
    }
  }
  console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`);
}

paresImpares(150); // agora gera 100 elementos (1 a 100)
