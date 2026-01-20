// Cadeia de protótipos (prototype chain)
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual} Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari2 = {
  modelo: "F40",
  velMax: 324, // Shadowing - sombreamento
};

const volvo2 = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; // super.status - referencia o objeto pai
  },
};

Object.setPrototypeOf(ferrari2, carro); // Torna o carro como prototipo de ferrari
Object.setPrototypeOf(volvo2, carro);

console.log(ferrari2);
console.log(volvo2);

volvo2.acelerarMais(100);
console.log(volvo2.status());

ferrari2.acelerarMais(300);
console.log(ferrari2.status());
