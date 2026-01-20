let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function avaliaPontuacoes(stringPontuacoes) {
  // Split(separador) transforma string em array.
  let pontuacoes = stringPontuacoes.split(", ");
  let qtdQuebraDeRecords = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacoes[0];
  let menorPontuacao = pontuacoes[0];

  // lenght - conta quantos tem no total do array ou total de caracteres
  for (let i = 1; i < pontuacoes.length; i++) {
    // Parseint - transforma string ou valor em inteiro
    if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
      maiorPontuacao = pontuacoes[i];
      qtdQuebraDeRecords++;
    } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
      menorPontuacao = pontuacoes[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraDeRecords, piorJogo];
}

console.log(avaliaPontuacoes(stringPontuacoes));
