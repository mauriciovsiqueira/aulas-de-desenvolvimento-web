this.ola = "Fala Pessoal";
exports.bemVindo = "Bem vindo ao node!";
module.exports.ateLogo = "Até próximo exemplo";

// this.ola: No escopo global de um módulo Node, o this referencia o objeto module.exports.
// exports.bemVindo: O exports é um "atalho" (shorthand) que aponta para module.exports. É a forma mais comum de exportar múltiplas funções ou variáveis.
// module.exports.ateLogo: É a forma oficial e principal. O Node.js realmente retorna o que estiver contido em module.exports quando você usa require() em outro arquivo.
