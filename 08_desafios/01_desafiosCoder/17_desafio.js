function somarNumeros(array) {
  return array.reduce((acumulador, atual) => {
    return acumulador + atual;
  });
}

console.log(somarNumeros([10, 10, 10]));

//Simplificado
function somarNumeros2(array) {
  const soma = array.reduce((acumulador, atual) => {
    return acumulador + atual;
  });

  return soma;
}

console.log(somarNumeros2([10, 10, 10]));

// Mais simplificado
const somarNumeros3 = (array) => array.reduce((a, b) => a + b);

console.log(somarNumeros3([10, 10, 10])); // 30
