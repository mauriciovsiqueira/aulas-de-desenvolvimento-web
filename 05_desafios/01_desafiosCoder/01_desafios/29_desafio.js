function intervalo() {
  let noIntervalo = 0;
  let foraDoIntervalo = 0;
  let intervaloVetor = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  for (i = 0; i < intervaloVetor.length; i++) {
    if (intervaloVetor[i] >= 10 && intervaloVetor[i] <= 20) {
      noIntervalo++;
    } else {
      foraDoIntervalo++;
    }
  }

  console.log(
    `Tem ${noIntervalo} dentro do intervalo e ${foraDoIntervalo} fora do intervalo`
  );
}

intervalo();
