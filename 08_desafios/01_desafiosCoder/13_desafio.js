function filtrarNumeros(elementos) {
  //   let resultado = [];
  //   const resultado = (elemento) => elemento === "number";
  return elementos.filter(function (elemento) {
    return typeof elemento === "number";
  });
}

console.log(filtrarNumeros(["Web", 1, "3"]));

// Versão simplificada
const filtrarNumeros2 = (elementos) =>
  elementos.filter((elemento) => typeof elemento === "number");

console.log(filtrarNumeros2(["Web", 1, "3"])); // [1]

// Versão arrow function
const filtrarNumeros3 = (arr) => arr.filter((v) => typeof v === "number");
console.log(filtrarNumeros3([1, 2, "Array"]));
