function negativoOuPositivo4(numero) {
  if (typeof numero !== "number") {
    return "Valor não é um número";
  }

  return numero === 0 ? "Zero é neutro" : numero > 0 ? "Positivo" : "Negativo";
}

console.log(negativoOuPositivo4(45));
console.log(negativoOuPositivo4(0));
console.log(negativoOuPositivo4(-0));
console.log(negativoOuPositivo4("texto"));
console.log(negativoOuPositivo4(-45));
