function buscarPalavrasSemelhantes(inicio, conjDePalavras) {
  return conjDePalavras.filter((palavra) => palavra.includes(inicio));
}

console.log(
  buscarPalavrasSemelhantes("açucar", ["açucar", "açucarisso", "açaí"])
);

function buscarPalavrasSemelhantes2(inicio, conjDePalavras) {
  const resultado = [];

  for (let palavra in conjDePalavras) {
    if (palavra.includes(inicio)) {
      resultado.push(palavra);
    }
  }
}

console.log(
  buscarPalavrasSemelhantes("açucar", ["açucar", "açucarisso", "açaí"])
);
