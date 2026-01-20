let contador = 1;

while (contador <= 10) {
  console.log("Contador " + contador);
  contador++;
}

for (let i = 0; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 5.5, 6.0];

for (let i = 0; i < notas.length; i++) {
  // .lenght - é o total do array
  console.log(`Nota = ${notas}`);
}

// Estrutura for
// | Estrutura                         | Uso Principal                                                                     | Itera Sobre                 | Pode acessar índice?               | Exemplo                                       |
// | --------------------------------- | --------------------------------------------------------------------------------- | --------------------------- | ---------------------------------- | --------------------------------------------- |
// | **for (clássico)**                | Repetir com controle total de contagem                                            | Números / Índices           | ✔ Sim                              | `for (let i = 0; i < 5; i++) console.log(i);` |
// | **for...of**                      | Percorrer valores de iteráveis                                                    | Arrays, Strings, Maps, Sets | ❌ Não diretamente (precisa truque) | `for (let valor of arr) console.log(valor);`  |
// | **for...in**                      | Percorrer **chaves** de objetos e índices de arrays (não recomendado para arrays) | Objetos e Arrays            | ✔ Sim                              | `for (let chave in obj) console.log(chave);`  |
// | **forEach()** *(método do array)* | Executar função para cada item do array                                           | Arrays                      | ✔ Sim (parâmetro)                  | `arr.forEach((v,i)=> console.log(i,v));`      |

// E qual usar
// | Quer trabalhar com...                     | Melhor opção                      |
// | ----------------------------------------- | --------------------------------- |
// | **Índice do array**                       | `for` clássico **ou** `forEach()` |
// | **Valores do array**                      | `for...of` **ou** `forEach()`     |
// | **Propriedades de objeto**                | `for...in`                        |
// | **Interromper o loop (break / continue)** | `for` clássico **ou** `for...of`  |
// | **Callbacks e código funcional**          | `forEach()`                       |

// 🚫 forEach() não aceita break ou continue
// 🚫 for...in em arrays pode pegar propriedades do prototype → evite!

const arr = ["A", "B", "C"];

// for clássico
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// for...of
for (let valor of arr) {
  console.log(valor);
}

// for...in
for (let indice in arr) {
  console.log(indice, arr[indice]);
}

// forEach
arr.forEach((valor, indice) => {
  console.log(indice, valor);
});
