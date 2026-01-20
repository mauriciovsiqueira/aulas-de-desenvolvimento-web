const imprimirResultado = function (nota) {
  switch (
    Math.floor(nota) // Math.floor - Arredonda para inteiro para baixo, proximo do numero de entrada.
  ) {
    case 10:
    case 9:
      console.log("Quadro de Honra");
      break;
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    default:
      console.log("Nota Invalida");
  }
};

imprimirResultado(9.5);
imprimirResultado(8);
imprimirResultado(5.6);
imprimirResultado(2);
imprimirResultado(-2);
