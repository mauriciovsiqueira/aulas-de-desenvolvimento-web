function menorNumero(arraydeNumeros) {
  return arraydeNumeros.reduce((a, b) => (a < b ? a : b));
}

console.log(menorNumero([10, 5, 35, 65]));

// Simplificado
function menorNumero2(arraydeNumeros) {
  return Math.min(...arraydeNumeros);
}

console.log(menorNumero2([10, 5, 35, 65]));
