// Função normal.
let dobro = function (a) {
  return 2 * a;
};

// Função arrow com corpo.
dobro = (a) => {
  return 2 * a;
};

// Função arrow sem corpo, return implícito
dobro = (a) => 2 * a;
console.log(dobro(5));

let ola1 = function () {
  return "Olá";
};

ola2 = () => "Olá";
ola3 = (_) => "Olá"; // Sem parenteses

console.log(ola1());
console.log(ola2());
console.log(ola3());

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa();

// Não é necessário o bind
