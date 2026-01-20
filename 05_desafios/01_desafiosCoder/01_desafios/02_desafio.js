function classificaTriangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    return "Equilátero";
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }

  // Mas compacta.
  // return lado1 == lado2 && lado2 == lado3
  //   ? "Equilátero"
  //   : lado1 == lado2 || lado2 == lado3 || lado1 == lado3
  //   ? "Isósceles"
  //   : "Escaleno";
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));
