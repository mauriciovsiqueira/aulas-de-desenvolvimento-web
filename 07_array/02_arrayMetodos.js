const pilotos = ["Vettel", "Alonso", "Raikonen", "Massa"];
pilotos.pop(); // Remove do ultimo indice
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona no ultimo indice
console.log(pilotos);

pilotos.shift(); // Remove do primeiro indice
console.log(pilotos);

pilotos.unshift("Hamilton"); // Adiciona no primeiro indice
console.log(pilotos);

// splice pode adicionar e remover elementos
// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);
// aprovados.splice(1, 2, "Elemento1", "Elemento2"); // Remover e adicionar - (1,2) - A partir do indice 1, remover 2 elementos, adiciona os outros elementos.

const algunsPilotos1 = pilotos.slice(2); // Retorna um novo array - a partir do indice 2 do array pilotos
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);

// forEach: fazer algo com cada item
// filter: manter alguns itens
// map: mudar cada item
// reduce: resumir tudo em um só resultado

Array.sort(); // Organiza por ordem.
// Forma simplificada
function receberSomenteOsParesDeIndicesPares2(array) {
  return array.filter((valor, indice) => indice % 2 === 0 && valor % 2 === 0); // Valor primeiro, indice em segundo e o array original (raramente usasdo.)
}
