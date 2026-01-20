function soBoaNoticia(nota) {
  if (nota > 9) {
    console.log("Quadro de honra com " + nota);
  } else if (nota >= 7 && nota <= 8) {
    console.log("Aprovado " + nota);
  } else if (nota >= 4 && nota >= 6) {
    console.log("Recuperação com " + nota);
  } else if (nota >= 0 && nota >= 3) {
    console.log("Reprovado com " + nota);
  } else {
    console.log("Nota inválida");
  }
}

soBoaNoticia(9.2);
soBoaNoticia(7.8);
soBoaNoticia(6.7);
soBoaNoticia(3.5);
soBoaNoticia(-1);
