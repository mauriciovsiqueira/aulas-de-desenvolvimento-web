Array.prototype.forEach2 = function (calback) {
  for (let i = 0; i < this.length; i++) {
    calback(this[i], i, this); // Executa o callback, passando 3 parâmetros: this[i] → o elemento atual, i → o índice do elemento, this → o próprio array original
  }
};

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
