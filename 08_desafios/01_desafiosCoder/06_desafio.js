function inverso(valor) {
  if (typeof valor === "boolean") {
    return !valor;
  } else if (typeof valor === "number") {
    return -valor;
  } else {
    return `booleano ou número esperados, mas o paramtro é do tipo ${typeof valor}`;
  }
}

console.log(inverso(true));
console.log(inverso(-1));
console.log(inverso("Programação"));
