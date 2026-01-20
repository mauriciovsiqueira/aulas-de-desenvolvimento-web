function aumentoSalario(planTrab, salario) {
  switch (planTrab) {
    case "a":
      // Não ha necessidade de break, pois o return já encerra a função.
      return 1.1 * salario;
    case "b":
      return 1.15 * salario;
    case "c":
      return 1.2 * salario;
    default:
      return "Plano inválido";
  }
}

console.log(aumentoSalario("a", 1000));
console.log(aumentoSalario("b", 1000));
console.log(aumentoSalario("c", 1000));
