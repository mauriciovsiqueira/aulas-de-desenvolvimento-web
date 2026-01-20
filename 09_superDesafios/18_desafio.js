function estaIncluido(palavra) {
  if (typeof palavra !== "string") {
    return "Informe uma string";
  }

  return palavra.toLowerCase().includes("a");
}

console.log(estaIncluido("Açaí"));
console.log(estaIncluido("Pix"));

// Insano
function estaIncluidoInsano(palavra) {
  if (typeof palavra !== "string") {
    return "Informe uma string válida";
  }

  const texto = palavra.toLowerCase();
  const letrasA = "aáàãâ";

  for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < letrasA.length; j++) {
      if (texto[i] === letrasA[j]) {
        return true;
      }
    }
  }

  return false;
}

console.log(estaIncluidoInsano("açaí"));
console.log(estaIncluidoInsano("pix"));
