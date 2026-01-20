function removerVogais(palavra) {
  let vogais = ["a", "e", "i", "o", "u"];
  let resultado = [];

  for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (!vogais.includes(letra)) {
      resultado.push(palavra[i]);
    }
  }

  return resultado.join("");
}

console.log(removerVogais("açucar"));

// Simplificada

function removerVogais2(palavra) {
  return palavra.replace(/[aeiouáéíóú]/gi, "");
}
// /[aeiouáéíóú]/gi:
// [] → conjunto de caracteres a remover (vogais)
// g → global (todas ocorrências)
// i → ignore case (maiúsculas/minúsculas)

console.log(removerVogais2("açúcar"));
