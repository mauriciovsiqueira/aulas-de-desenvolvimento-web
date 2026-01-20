console.log(typeof Array, typeof new Array(), typeof []); // new transforma em objeto.

let aprovados = new Array("Bia", "Carlos", "Ana"); // Não recomendado, mas funciona.
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"]; // Forma literal e recomendado.
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort(); // Organiza por ordem.
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);
console.log(aprovados[1]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 2, "Elemento1", "Elemento2"); // Remover e adicionar - (1,2) - A partir do indice 1, remover 2 elementos, adiciona os outros elementos.
console.log(aprovados);
