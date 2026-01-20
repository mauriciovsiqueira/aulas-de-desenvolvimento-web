function calcularSalario(qtdHoras, sPorHora) {
  let salarioBruto = qtdHoras * sPorHora;
  let salarioLiquido = salarioBruto - (salarioBruto * 30) / 100;
  return salarioLiquido;
}
console.log(calcularSalario(150, 40.5));
console.log(calcularSalario(180, 60));
