function formatarSlug(array) {
  if (!Array.isArray(array)) return "Informe um array";

  const arrayLimpo = array.filter((item) => item.trim() !== "");

  if (arrayLimpo.length === 0) return "";

  const resultado = arrayLimpo.join("-").toLowerCase();

  return resultado;
}

// console.log(formatarSlug(["Camisa", "Short", "JS"]));
// console.log(formatarSlug([""]));

// Otimizado
const formatarSlug2 = (array) =>
  Array.isArray(array)
    ? array
        .filter((s) => s.trim())
        .map((s) => s.toLowerCase())
        .join("-")
    : "Informe um array";

// console.log(formatarSlug2(["Receita", "de", "Bolo", "Chocolate"]));
// console.log(formatarSlug2(["JavaScript", "", "é", "Incrível"]));
// console.log(formatarSlug2([""]));

// Insano
function gerarSuperSlug(array) {
  if (!Array.isArray(array)) return "Informe um array";
  const resultado = [];

  function explorar(item) {
    if (typeof item === "string" || typeof item === "number") {
      const limpo = String(item)
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim();

      if (limpo) {
        resultado.push(limpo.toLowerCase());
      }
    } else if (Array.isArray(item)) {
      for (let valor of item) {
        explorar(valor);
      }
    }
  }

  array.forEach(explorar);

  const semRepeticaoSequencial = resultado.filter(
    (item, i) => item !== resultado[i - 1]
  );

  let slug = semRepeticaoSequencial.join("-").replace(/\s+/g, "-");

  if (slug.length > 50) {
    slug = slug.substring(0, 50);
    const ultimoHifen = slug.lastIndexOf("-");
    if (ultimoHifen !== -1) slug = slug.substring(0, ultimoHifen);
  }

  return slug;
}

console.log(gerarSuperSlug([1, 2, 3, 5, 7, ["Ola@"], [[7]]]));

// Otimizado
const gerarSuperSlug2 = (array) => {
  const extrair = (item) => {
    if (typeof item === "number" || typeof item === "string") {
      const s = String(item)
        .replace(/[^a-z0-9 ]/gi, "")
        .trim()
        .toLowerCase();
      return s ? [s] : [];
    }
    return Array.isArray(item) ? item.flatMap(extrair) : [];
  };

  let slug = extrair(array)
    .filter((n, i, self) => n !== self[i - 1]) // Remove apenas consecutivos
    .join("-")
    .replace(/-+/g, "-"); // Garante hífens únicos

  if (slug.length > 50) {
    slug = slug.substring(0, 50);
    slug = slug.substring(0, Math.max(0, slug.lastIndexOf("-")));
  }

  return slug;
};

console.log(gerarSuperSlug2([1, 2, 3, 5, 7, ["Ola@"], [[7]]]));
