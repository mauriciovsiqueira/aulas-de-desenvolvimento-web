function retornaTamanhoDaString(texto) {
  if (typeof texto !== "string") {
    return "Inválido, não é uma string";
  }

  texto = texto.trim();

  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Tira os acentos e caracteres

  return texto.length;
}

console.log(retornaTamanhoDaString("Maurício"));
console.log(retornaTamanhoDaString("Maurício "));
console.log(retornaTamanhoDaString(" Já "));
console.log(retornaTamanhoDaString(8));
