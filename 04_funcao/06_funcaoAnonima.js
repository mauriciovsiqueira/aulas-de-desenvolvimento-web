const soma = function (x, y) {
  return x + y;
};

const imprimiResultado = function (a, b, operação = soma) {
  console.log(operação(a, b));
};

imprimiResultado(3, 4);
imprimiResultado(3, 4, soma);
imprimiResultado(3, 4, function (x, y) {
  return x - y;
});

imprimiResultado(3, 4, (x, y) => x * y);

// Função dentro de objeto.
const pessoa = {
  falar: function () {
    console.log("opa");
  },
};

pessoa.falar();
