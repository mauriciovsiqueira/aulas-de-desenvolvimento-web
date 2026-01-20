function tratarErrorELancar(erro) {
  throw new Error("...");
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase());
  } catch (e) {
    tratarErrorELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { name: "roberto" };
imprimirNomeGritado(obj);
