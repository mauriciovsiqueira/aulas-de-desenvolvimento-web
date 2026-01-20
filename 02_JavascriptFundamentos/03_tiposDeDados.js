// Tipagem Fraca e Tipos de Dados
// String (Texto)
let escola = "Cod3r"; //* Tipo string = texto ('' ou "")
console.log(escola);
console.log(typeof escola);
console.log(escola.substring(0)); //* Retorna a partir do indice indicado
console.log(escola.substring(0, 3)); //* Retorna a partir do indice e finaliza no indice indicado
console.log("Escola ".concat(escola).concat("!")); //* Junta string (pode ser utilizdo com +, somente com string é o ideal)
console.log(escola.replace(3, "e")); //* Substitua na letra indicada com a letra indicada
console.log("Ana, Pedro, Claudio".split(",")); //* Transforma em uma Array

// Tempplates String
const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

// Expressões...
console.log(`1 + 1 = ${1 + 1}`); //* Expressão de um template começa com `texto ${expressão ou valor} texto`

String.split(" "); // Separa strings de acordo com o separador " " e transforma em array
String.repeat("string"); // .repeat - repete uma string quantas vezes quiser
String.charAt(indice); // string → a string onde você quer buscar o caractere - indice → posição do caractere (começa em 0)

// ============================================================================

// Number (Inteiro ou Flutuante (Casas decimais))
let qualquer1 = 3.1516; //* Tipo number = numérico (tipo intero ou flutuante não diferencia , usa .)
qualquer = 10;
console.log(qualquer);
console.log(typeof qualquer);
console.log(Number.isInteger(qualquer)); //* Verifica se é inteiro
console.log(qualquer1.toFixed(2)); //* Fixa duas ou mais casas decimais
console.log(qualquer1.toString()); //* Transforma em string

Math.PI; //* Valor de PI na função Math
Math.pow(); //* Para calcular a potência de um número
Math.floor(2); // .floor - Arrendonda para 2 de acordo com o parametro
Math.random() * 10 + 1; // Conta de 0 a 1 ---- * 10 conta de 0 a 10 ---- +1 -----1 a 10

// ============================================================================

// Boolean (Verdadeiro ou Falso)
let qualquer3 = true; //* Tipo boolean = true, 1 or false, 0 (verdadeiro ou falso). A ! na frente inverte a lógica, !! na frente ao valor original.
console.log(qualquer);
console.log(typeof qualquer);
