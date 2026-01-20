// Junta arrays

const filhas = ["Ana", "Nicole"];
const filhos = ["Nicolas", "Ravi"];
const todos = filhas.concat(filhos, "fulano");

console.log(filhas, filhos, todos);

console.log([].concat([1, 2], [3, 4], 5, [[5, 6]]));
