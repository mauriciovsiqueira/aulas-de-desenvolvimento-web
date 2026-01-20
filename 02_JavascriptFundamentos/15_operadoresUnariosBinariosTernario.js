// Unários - Usado somente um operador
console.log(!true); 
let num1 = 1;
let num2 = 2; 
num1++; // Pós fixada
++num2; // Pré fixada
console.log(num1, num2); 

// Binários - Usado dois operadores
console.log(2 + 3);

// Ternário - Usado três operadores 
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado(7,1));
console.log(resultado(6));