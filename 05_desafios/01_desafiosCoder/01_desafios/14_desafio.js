function vendaDeFruta(fruta) {
  switch (fruta) {
    case "maçã":
      console.log("Não vendemos essa fruta aqui");
      break;
    case "kiwi":
      console.log("Estamos com escassez de kiwis");
      break;
    case "melancia":
      console.log("Está aqui, custa R$ 3,00");
      break;
    default:
      console.log("Não consheço essa fruta");
  }
}

vendaDeFruta("maçã");
vendaDeFruta("kiwi");
vendaDeFruta("melancia");
vendaDeFruta("arroz");
vendaDeFruta(1);
