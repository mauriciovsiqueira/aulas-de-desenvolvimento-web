function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Valor inválido";
  }

  return a + b;
}

console.log(soma(10, 89));
console.log(soma("açucar", 22));
