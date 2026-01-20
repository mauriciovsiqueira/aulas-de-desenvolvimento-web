// Primeira palavra maiuscula e o resto minuscula das palavras
function converterString(texto) {
  if (typeof texto !== "string") {
    return `somente texto`;
  }

  const SepararPalavra = texto.toLowerCase().split(" ");
  const palavraFinalizada = SepararPalavra.map((p) => {
    return p.charAt(0).toUpperCase() + p.slice(1);
  });

  return palavraFinalizada.join(" ");
}

console.log(converterString("aÇuCAr"));
console.log(converterString(1));

// Crie uma função que receba uma frase e conte quantas vogais existem nela
function contarVogais(texto) {
  if (typeof texto !== "string") {
    return `somente texto`;
  }

  const textoArray = texto.toLowerCase().split("");
  const vogal = "aeiou".split("");
  const filtrarPalavras = textoArray.filter((palavra) =>
    vogal.includes(palavra)
  );

  const total = filtrarPalavras.length;
  const a = filtrarPalavras.filter((p) => p.includes("a")).length;
  const e = filtrarPalavras.filter((p) => p.includes("e")).length;
  const i = filtrarPalavras.filter((p) => p.includes("i")).length;
  const o = filtrarPalavras.filter((p) => p.includes("o")).length;
  const u = filtrarPalavras.filter((p) => p.includes("u")).length;

  return {
    total,
    a,
    e,
    i,
    o,
    u,
  };
}

console.log(contarVogais("aÇuCAr"));
console.log(contarVogais("@ÇuC4r é b0m"));
console.log(contarVogais(1));

// Versão otimizada
function contarVogais1(texto = "") {
  if (typeof texto !== "string") {
    return "somente texto";
  }

  const vogais = ["a", "e", "i", "o", "u"];
  const contador = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (const letra of texto.toLowerCase()) {
    if (vogais.includes(letra)) {
      contador[letra]++;
    }
  }

  return {
    total: Object.values(contador).reduce((soma, num) => soma + num, 0),
    ...contador,
  };
}

console.log(contarVogais1("aÇuCAr"));
console.log(contarVogais1("@ÇuC4r é b0m"));
console.log(contarVogais1(1));

// Contar Strings varios tipos
function contarStrings(texto) {
  if (typeof texto !== "string") {
    return `Informe uma string`;
  }

  const textoFormatado = texto.replaceAll(" ", "").toLowerCase().split("");
  const GrupoLetras = "qwertyuiopçlkjhgfdsazxcvbnm".split("");
  const GrupoNumeros = "0123456789".split("");

  const letras = textoFormatado.filter((l) => GrupoLetras.includes(l)).length;
  const numeros = textoFormatado.filter((n) => GrupoNumeros.includes(n)).length;
  const simbolos = textoFormatado.filter(
    (c) => !GrupoLetras.includes(c) && !GrupoNumeros.includes(c)
  ).length;

  return {
    letras,
    numeros,
    simbolos,
    total: textoFormatado.length,
  };
}

console.log(contarStrings("Vasco da Gama"));
console.log(contarStrings("123456, 125, açaí"));
console.log(contarStrings("@125, #$%mais"));

// Super difícil
function conversorDeStrings(texto) {
  if (typeof texto !== "string") {
    return "Informe um texto";
  }

  // 1. Tabela de acentos para remover manualmente
  const mapaAcentos = {
    a: "áàâã",
    e: "éèê",
    i: "íìî",
    o: "óòôõ",
    u: "úùû",
    c: "ç",
  };

  // 2. Função para remover acentos
  function removerAcentos(str) {
    const chars = str.split("");
    return chars
      .map((char) => {
        for (const base in mapaAcentos) {
          if (mapaAcentos[base].includes(char)) {
            return base;
          }
        }
        return char;
      })
      .join("");
  }

  // 3. Texto sem acentos e normalizado
  const textoLimpo = removerAcentos(texto.trim().toLowerCase());

  // 4. Quebra em palavras (apenas por espaço)
  const palavras = textoLimpo.split(" ").filter((p) => p !== "");

  // --- FORMATAÇÕES ---

  // original sem acentos
  const original = textoLimpo;

  // minuscula
  const minuscula = textoLimpo;

  // maiuscula
  const maiuscula = textoLimpo.toUpperCase();

  // snake_case
  const snake_case = palavras.join("_");

  // kebab-case
  const kebab_case = palavras.join("-");

  // camelCase
  const camelCase =
    palavras[0] +
    palavras
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");

  // PascalCase
  const PascalCase = palavras
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return {
    original,
    minuscula,
    maiuscula,
    snake_case,
    kebab_case,
    camelCase,
    PascalCase,
  };
}

console.log(conversorDeStrings("áçucar"));
