// Funções <- É um bloco de código {}
// Função sem retorno
// Começa com a palavra reservada "function"
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

//? Função com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(20, 5));

// Armarzenar função em variavel
// função anônima (função sem nome)
const imprimirSoma1 = function (a, b) {
  console.log(a + b);
};

imprimirSoma1(5, 9);

// Armazenar função arrow
// O "=>" substutui o "function"
const soma1 = (a, b) => {
  return a + b;
};

console.log(9 + 7);

// Retorno implícito
// Parametro | retorno (Apenas para uma sentença)
const subtracao = (a, b) => a - b;
console.log(subtracao(7, 8));

const imprimir2 = (a) => console.log(a);
imprimir2("Legal!");