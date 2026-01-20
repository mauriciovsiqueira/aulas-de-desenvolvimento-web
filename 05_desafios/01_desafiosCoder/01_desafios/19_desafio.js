function cardapio(codigoProd, qtdProd) {
  switch (codigoProd) {
    case 100:
      return qtdProd * 3.0;
    case 200:
      return qtdProd * 4.0;
    case 300:
      return qtdProd * 5.5;
    case 400:
      return qtdProd * 7.5;
    case 500:
      return qtdProd * 3.5;
    case 600:
      return qtdProd * 2.8;
    default:
      return "Não tem item";
  }
}

console.log(cardapio(100, 5));
console.log(cardapio(200, 6));
console.log(cardapio(300, 2));
console.log(cardapio(400, 1));
console.log(cardapio(500, 9));
console.log(cardapio(600, 4));
console.log(cardapio(800, 5));
