// Arrays <- Tipo object, tipo dinamico (pode adicionar)
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); //* Começa pelo indice 0

valores[4] = 10;
console.log(valores);
console.log(valores.length); //* Verifica o total de valores

valores.push({ id: 3 }, false, null, "teste"); //* Adiciona mais valores no array
console.log(valores);

console.log(valores.pop()); //* Retira o último valor

delete valores[0]; //* Deleta o indice indicado
console.log(valores);