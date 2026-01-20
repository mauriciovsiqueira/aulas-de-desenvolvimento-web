function calculadora(num1, operacao, num2) {
  switch (operacao) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Inválido");
  }
}

calculadora(3, "+", 2);
calculadora(3, "-", 2);
calculadora(3, "*", 2);
calculadora(3, "/", 2);
calculadora(3, "a", 2);
