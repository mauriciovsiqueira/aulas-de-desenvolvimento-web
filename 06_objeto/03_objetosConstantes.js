// pessoa -> 123 -> {...}
const pessoa = { nome: "Jõao" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...} - Não pode, pois pessoa é uma constante.
// pessoa = { nome: "Ana" };

// Consgelar o objeto, não da para mudar.
Object.freeze(pessoa);

pessoa.nome = "Maria";
console.log(pessoa.nome);
