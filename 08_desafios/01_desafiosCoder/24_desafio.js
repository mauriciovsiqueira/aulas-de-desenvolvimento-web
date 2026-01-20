function contarCaractere(caractere, palavra) {
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i) === caractere) {
      contador++;
    }
  }

  return contador;
}

console.log(contarCaractere("a", "açucar e açaí"));
