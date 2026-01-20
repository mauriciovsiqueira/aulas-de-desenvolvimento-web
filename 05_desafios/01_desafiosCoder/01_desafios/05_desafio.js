function formatarValorDecimal(valorDecimal) {
  // Number converte valor para numero.
  let valorEmReais = Number(valorDecimal)
    // fixa casas depois do ponto e transforma em string.
    .toFixed(2)
    // Transforma em string.
    .toString()
    // Substitui os textos por outros
    .replace(".", ",");
  console.log("R$ " + valorEmReais);
}

formatarValorDecimal(0.1 + 0.2);
