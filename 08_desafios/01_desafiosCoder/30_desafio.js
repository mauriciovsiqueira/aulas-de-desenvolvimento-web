function receberMelhroEstudante(
  notas = { ana: [8, 7.6, 8.9, 6], andre: [8, 7, 9, 7], anya: [5, 6, 8, 4] }
) {
  let melhorAluno = "";
  let melhorMedia = -Infinity;

  for (const [aluno, notasAluno] of Object.entries(notas)) {
    const soma = notasAluno.reduce((acc, n) => acc + n, 0);
    const media = soma / notasAluno.length;

    if (media > melhorMedia) {
      melhorMedia = media;
      melhorAluno = aluno;
    }
  }

  return { nome: melhorAluno, media: Number(melhorMedia.toFixed(2)) };
}
