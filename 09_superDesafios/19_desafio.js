function ultimaString(arrayStr) {
  if (Array.isArray(arrayStr)) {
    for (let str of arrayStr) {
      if (typeof str !== "string") {
        return "Informe um array de strings";
      }
    }
  } else {
    return "Informe um array válido";
  }

  if (arrayStr.length === 0) {
    return "Array não pode ser vázio";
  }

  return arrayStr[arrayStr.length - 1];
}

// console.log(ultimaString(["Açaí", "Açucar", "Pix"]));
// console.log(ultimaString([]));
// console.log(ultimaString(29));
// console.log(ultimaString([29]));

// Insano
function ultimaStringInsano(...string) {
  let stringEncontrada;

  function busca(item) {
    if (typeof item === "string") {
      stringEncontrada = item;
      return;
    }

    if (Array.isArray(item)) {
      for (let str of item) {
        busca(str);
      }
      return;
    }

    if (item && typeof item === "object") {
      for (let i in item) {
        busca(item[i]);
      }
      return;
    }
  }

  for (let s of string) {
    busca(s);
  }

  return stringEncontrada ?? "Nenhuma string encontrada";
}

console.log(ultimaStringInsano("açaí"));
console.log(ultimaStringInsano(["açucar", [["mega"]]]));
console.log(ultimaStringInsano({ x: "mato" }));
console.log(ultimaStringInsano({ x: "mamão", d: { i: "idade" } }));
console.log(ultimaStringInsano([{ x: "mãe", d: { i: 1 } }]));
console.log(ultimaStringInsano({ x: "creme", d: [{ i: "trigo" }] }));
console.log(ultimaStringInsano(1));
