function funcaoDaSorte(numero) {
  // 0 a 1 ---- 0 a 10 ---- +1 -----1 a 10
  const resultado = Math.floor(Math.random() * 10) + 1;

  if (resultado === numero) {
    return `Parabéns! O número sorteado foi ${resultado}`;
  }

  return `Que pena! O número sorteado foi ${resultado}`;
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(2));
