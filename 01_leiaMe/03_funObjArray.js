// ===== Function ====================
// Funções <- É um bloco de código {}
// Função sem retorno
// Começa com a palavra reservada "function"
// function imprimirSoma(a, b) {
//   console.log(a + b);
// }

// imprimirSoma(2, 3);

//? Função com retorno
// function soma(a, b = 0) {
//   return a + b;
// }

// console.log(soma(20, 5));

// Armarzenar função em variavel
// função anônima (função sem nome)
// const imprimirSoma1 = function (a, b) {
//   console.log(a + b);
// };

// imprimirSoma1(5, 9);

// Armazenar função arrow
// O "=>" substutui o "function"
// const soma1 = (a, b) => {
//   return a + b;
// };

// console.log(9 + 7);

// Retorno implícito
// Parametro | retorno (Apenas para uma sentença)
// const subtracao = (a, b) => a - b;
// console.log(subtracao(7, 8));

// const imprimir2 = (a) => console.log(a);
// imprimir2("Legal!");

// Funções — Métodos e Propriedades importantes:
// | Seção                                   | Método / Propriedade               | O que faz                           | Exemplo (resultado final)                                               | Mutável?               |
// | --------------------------------------- | ---------------------------------- | ----------------------------------- | ----------------------------------------------------------------------- | ---------------------- |
// | **Declaração / Expressão**              | `function nome()`                  | Declara função tradicional          | `function soma(a,b){return a+b}; soma(1,2)` → `3`                       | ❌                      |
// |                                         | `const f = function()`             | Função anônima atribuída a variável | `const f = function(x){return x*2}; f(3)` → `6`                         | ❌                      |
// |                                         | `const f = (x)=>x*2`               | Arrow function                      | `const f = x=>x*2; f(4)` → `8`                                          | ❌                      |
// | **Parâmetros / Argumentos**             | `arguments`                        | Array-like dos argumentos           | `function f(){arguments[0]}; f(5)` → `5`                                | ❌                      |
// |                                         | `rest params (...)`                | Agrupa argumentos restantes         | `function f(...args){return args}; f(1,2,3)` → `[1,2,3]`                | ❌                      |
// | **Métodos de Função**                   | `.call(this, ...)`                 | Chama função com `this` específico  | `function f(a){return this.x+a}; f.call({x:1},2)` → `3`                 | ❌                      |
// |                                         | `.apply(this, [args])`             | Igual call, mas args como array     | `f.apply({x:1},[2])` → `3`                                              | ❌                      |
// |                                         | `.bind(this, ...)`                 | Cria nova função ligada a `this`    | `const g=f.bind({x:2}); g(3)` → `5` (depende da função)                 | Novo objeto (função)   |
// | **Funções de Escopo / Closures**        | Closure                            | Função que “lembra” do escopo       | `function outer(){let x=1; return ()=>x+1}; const c=outer(); c()` → `2` | ❌                      |
// | **Propriedades de Função**              | `.length`                          | Quantidade de parâmetros declarados | `(function(a,b){}) .length` → `2`                                       | ❌                      |
// |                                         | `.name`                            | Nome da função                      | `(function xyz(){}).name` → `"xyz"`                                     | ❌                      |
// |                                         | `.prototype`                       | Protótipo usado por `new`           | `function F(){}; F.prototype` → `{}`                                    | ❌                      |
// | **Construtores**                        | `new Function(arg1,arg2,...,body)` | Cria função dinamicamente           | `new Function("a","b","return a+b")(1,2)` → `3`                         | Novo objeto (função)   |
// | **Funções Assíncronas / Generators**    | `async function`                   | Retorna Promise                     | `async function f(){return 1}; f()` → `Promise {<resolved>:1}`          | ❌                      |
// |                                         | `async () =>`                      | Arrow async                         | `const f = async ()=>2; f()` → `Promise {<resolved>:2}`                 | ❌                      |
// |                                         | `function*`                        | Generator                           | `function* g(){yield 1; yield 2}; [...g()]` → `[1,2]`                   | Novo objeto (iterador) |
// |                                         | `.next()`                          | Iterador generator                  | `let it=g(); it.next()` → `{value:1, done:false}`                       | ❌                      |
// | **Métodos Estáticos / Object Function** | `Function.prototype.toString()`    | Converte função p/ string           | `(function(a){return a}).toString()` → `"function(a){return a}"`        | ❌                      |
// |                                         | `Function.prototype.apply()`       | Chama função com array args         | `f.apply(null,[1,2])` → depende da função                               | ❌                      |
// |                                         | `Function.prototype.call()`        | Chama função com this               | `f.call(obj,1,2)` → depende da função                                   | ❌                      |
// |                                         | `Function.prototype.bind()`        | Cria nova função com this           | `f.bind(obj)(1,2)` → depende da função                                  | Novo objeto (função)   |

// =====

// // | Método                     | O que faz                                     | Exemplo              | Resultado                   |
// // | -------------------------- | --------------------------------------------- | -------------------- | --------------------------- |
// // | **`call(this, ...args)`**  | Chama a função definindo o `this`.            | `f.call(obj, 10)`    | Executa com `this = obj`    |
// // | **`apply(this, [args])`**  | Igual ao `call`, mas com array de argumentos. | `f.apply(obj, [10])` | Executa com `this = obj`    |
// // | **`bind(this, ...args)`**  | Retorna uma nova função com `this` fixo.      | `g = f.bind(obj)`    | `g()` usa `obj` como `this` |
// // | **`toString()`**           | Retorna o código fonte da função como string. | `f.toString()`       | `"function f(){}"`          |
// // | **`name` (propriedade)**   | Nome da função.                               | `f.name`             | `"f"`                       |
// // | **`length` (propriedade)** | Quantidade de parâmetros.                     | `(a,b)=>{}.length`   | `2`                         |

// // Formas de declarar funções:
// // | Tipo                     | Exemplo                           | Observações                             |
// // | ------------------------ | --------------------------------- | --------------------------------------- |
// // | **Declaração de função** | `function ola(){}`                | Sofre *hoisting* (pode ser usada antes) |
// // | **Expressão de função**  | `const ola = function(){}`        | Não sofre hoisting completo             |
// // | **Arrow Function**       | `const soma = (a,b)=>a+b`         | `this` léxico (não muda com call/apply) |
// // | **Função Anônima**       | `setTimeout(function(){})`        | Sem nome                                |
// // | **IIFE**                 | `(function(){})()`                | Executa imediatamente                   |
// // | **Função geradora**      | `function* ger(){ yield 1 }`      | Usa `yield`, retorna iterador           |
// // | **Função assíncrona**    | `async function f(){ await ... }` | Usa `async/await`                       |

// // Recursos avançados de funções:
// // | Recurso                | Exemplo                                    | Resultado                       |
// // | ---------------------- | ------------------------------------------ | ------------------------------- |
// // | **Parâmetro padrão**   | `function f(a=1){}`                        | Se não passar, usa `1`          |
// // | **Rest operator**      | `function f(...v){}`                       | Junta argumentos em array       |
// // | **Spread em chamada**  | `f(...arr)`                                | Expande array como argumentos   |
// // | **Callback**           | `arr.map(v => v*2)`                        | Função passada como parâmetro   |
// // | **Closures**           | `function pai(){ let x=1; return ()=>x; }` | Mantém escopo mesmo acima       |
// // | **Função como objeto** | `func.prop = 10`                           | Funções também têm propriedades |

// // Diferenças importantes:
// // | Comparação                  | Comportamento                                           |
// // | --------------------------- | ------------------------------------------------------- |
// // | **Arrow x Function normal** | Arrow não muda `this`                                   |
// // | **call/apply x bind**       | call/apply → executa agora / bind → retorna nova função |
// // | **Hoisting**                | Só *declaração* de função sobe                          |

// // Exemplinho rápido para memorizar o bind:
// // const pessoa = { nome: "Ana" };

// // function falar() {
// //   console.log(this.nome);
// // }

// // const falarAna = falar.bind(pessoa);
// // falarAna(); // Ana

// ===== Object ====================
// Object <- Coleção de {} e valor
// const prod1 = {}; //* Objeto vázio (entre {})
// prod1.nome = "Celular";
// prod1.preco = 5000.9;
// prod1["Desconto"] = 0.4; //* Pode usar [], evitar atributos com espaço
// console.log(prod1);

// Forma literal, já colocando o valor
// const prod2 = {
//   nome: "Camisa",
//   preco: 79.9,
//   obj: {
//     blabla: 1,
//     obj: {
//       blabla: 2,
//     },
//   },
// };
// console.log(prod2);

// Pode ter objeto dentro de objeto
// Métodos / propriedades de Object:
// | Seção                            | Método / Propriedade                       | O que faz                                | Exemplo (resultado final)                                                    | Mutável?                   |
// | -------------------------------- | ------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------- | -------------------------- |
// | **Criação / Construtor**         | `Object()`                                 | Cria um objeto                           | `Object({a:1})` → `{a:1}`                                                    | ❌                          |
// |                                  | `Object.create(proto)`                     | Cria objeto com protótipo                | `Object.create({x:1})` → `{}`                                                | Novo objeto                |
// |                                  | `Object.assign(target, ...sources)`        | Copia propriedades                       | `let o1={a:1}; Object.assign(o1,{b:2})` → `{a:1,b:2}`                        | Objeto original modificado |
// |                                  | `Object.fromEntries(entries)`              | Converte pares `[key,value]` para objeto | `Object.fromEntries([["a",1],["b",2]])` → `{a:1,b:2}`                        | Novo objeto                |
// |                                  | `Object.keys(obj)`                         | Retorna array de chaves                  | `Object.keys({a:1,b:2})` → `["a","b"]`                                       | Novo array                 |
// |                                  | `Object.values(obj)`                       | Retorna array de valores                 | `Object.values({a:1,b:2})` → `[1,2]`                                         | Novo array                 |
// |                                  | `Object.entries(obj)`                      | Retorna array de pares `[key,value]`     | `Object.entries({a:1})` → `[["a",1]]`                                        | Novo array                 |
// | **Propriedades**                 | `Object.defineProperty(obj,key,desc)`      | Define propriedade                       | `let o={}; Object.defineProperty(o,"a",{value:1})` → `{a:1}`                 | Objeto original modificado |
// |                                  | `Object.defineProperties(obj, descs)`      | Define várias propriedades               | `Object.defineProperties({}, {a:{value:1}, b:{value:2}})` → `{a:1,b:2}`      | Objeto original modificado |
// |                                  | `Object.getOwnPropertyDescriptor(obj,key)` | Obtém descrição de propriedade           | `Object.getOwnPropertyDescriptor({a:1},"a")` → `{value:1,writable:true,...}` | ❌                          |
// |                                  | `Object.getOwnPropertyDescriptors(obj)`    | Descrições de todas as propriedades      | `Object.getOwnPropertyDescriptors({a:1,b:2})` → `{a:{...}, b:{...}}`         | ❌                          |
// |                                  | `Object.hasOwn(obj,key)`                   | Verifica propriedade                     | `Object.hasOwn({a:1},"a")` → `true`                                          | ❌                          |
// |                                  | `Object.is(value1,value2)`                 | Compara valores                          | `Object.is(NaN,NaN)` → `true`                                                | ❌                          |
// | **Imutabilidade / Configuração** | `Object.freeze(obj)`                       | Congela objeto                           | `let o={a:1}; Object.freeze(o)` → `{a:1}`                                    | Objeto original modificado |
// |                                  | `Object.seal(obj)`                         | Selar objeto (não adiciona propriedades) | `let o={a:1}; Object.seal(o)` → `{a:1}`                                      | Objeto original modificado |
// |                                  | `Object.preventExtensions(obj)`            | Impede adicionar propriedades            | `let o={a:1}; Object.preventExtensions(o)` → `{a:1}`                         | Objeto original modificado |
// |                                  | `Object.isFrozen(obj)`                     | Verifica se congelado                    | `Object.isFrozen({})` → `false`                                              | ❌                          |
// |                                  | `Object.isSealed(obj)`                     | Verifica se selado                       | `Object.isSealed({})` → `false`                                              | ❌                          |
// |                                  | `Object.isExtensible(obj)`                 | Verifica se extensível                   | `Object.isExtensible({})` → `true`                                           | ❌                          |
// | **Prototipagem / Herança**       | `Object.getPrototypeOf(obj)`               | Retorna protótipo                        | `Object.getPrototypeOf({})` → `Object.prototype`                             | ❌                          |
// |                                  | `Object.setPrototypeOf(obj,proto)`         | Define protótipo                         | `let o={}; Object.setPrototypeOf(o,{x:1})` → `{}`                            | Objeto original modificado |
// |                                  | `Object.prototype`                         | Protótipo padrão de objetos              | `Object.prototype` → `{}`                                                    | ❌                          |

// ===== Array ====================
// Arrays <- Tipo object, tipo dinamico (pode adicionar)
// const valores = [7.7, 8.9, 6.3, 9.2];
// console.log(valores[0], valores[3]); //* Começa pelo indice 0

// valores[4] = 10;
// console.log(valores);
// console.log(valores.length); //* Verifica o total de valores

// valores.push({ id: 3 }, false, null, "teste"); //* Adiciona mais valores no array
// console.log(valores);

// console.log(valores.pop()); //* Retira o último valor

// delete valores[0]; //* Deleta o indice indicado
// console.log(valores);

// Metodos do Array
// | Seção                           | Método / Propriedade    | O que faz                                  | Exemplo (resultado final)                                                  | Mutável?                       |
// | ------------------------------- | ----------------------- | ------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------ |
// | **Estrutura e Tamanho**         | `.length`               | Quantidade de itens                        | `[1,2,3].length` → `3`                                                     | ❌                              |
// | **Inserção / Remoção**          | `.push(v)`              | Adiciona no final                          | `let arr=[1,2]; arr.push(3)` → `[1,2,3]`                                   | Array original modificado      |
// |                                 | `.pop()`                | Remove do final                            | `let arr=[1,2,3]; arr.pop()` → `[1,2]`                                     | Array original modificado      |
// |                                 | `.unshift(v)`           | Adiciona no início                         | `let arr=[2,3]; arr.unshift(1)` → `[1,2,3]`                                | Array original modificado      |
// |                                 | `.shift()`              | Remove do início                           | `let arr=[1,2,3]; arr.shift()` → `[2,3]`                                   | Array original modificado      |
// |                                 | `.splice(i,q)`          | Remove/insere elementos                    | `let arr=['a','b','c']; arr.splice(1,1)` → `['a','c']`                     | Array original modificado      |
// |                                 | `.toSpliced()` 🌟       | Igual splice, mas imutável                 | `[1,2,3].toSpliced(1,1)` → `[1,3]`                                         | Novo array                     |
// |                                 | `.with(i,v)` 🌟         | Copia alterando posição                    | `[1,2].with(1,9)` → `[1,9]`                                                | Novo array                     |
// | **Junta / Copia Dados**         | `.concat()`             | Junta arrays                               | `[1].concat([2])` → `[1,2]`                                                | Novo array                     |
// |                                 | `.slice(i,f)`           | Copia parte (imutável)                     | `[1,2,3].slice(1)` → `[2,3]`                                               | Novo array                     |
// |                                 | `.join(sep)`            | Converte p/ string com separador           | `[1,2].join("-")` → `"1-2"`                                                | Novo array (string resultante) |
// |                                 | `.flat()`               | Achata 1 nível                             | `[1,[2]].flat()` → `[1,2]`                                                 | Novo array                     |
// |                                 | `.flatMap(fn)`          | Map + flat                                 | `[1,2].flatMap(x=>[x,x])` → `[1,1,2,2]`                                    | Novo array                     |
// |                                 | `.copyWithin()`         | Copia parte do array dentro dele           | `[1,2,3,4].copyWithin(1,2)` → `[1,3,4,4]`                                  | Array original modificado      |
// |                                 | `.fill(v)`              | Preenche com valor                         | `[1,2,3].fill(0)` → `[0,0,0]`                                              | Array original modificado      |
// | **Busca / Verificação**         | `.includes(v)`          | Verifica se contém                         | `[1,2].includes(2)` → `true`                                               | ❌                              |
// |                                 | `.indexOf(v)`           | Primeiro índice                            | `[1,2,2].indexOf(2)` → `1`                                                 | ❌                              |
// |                                 | `.lastIndexOf(v)`       | Última ocorrência                          | `[2,1,2].lastIndexOf(2)` → `2`                                             | ❌                              |
// |                                 | `.find(fn)`             | Retorna o primeiro que satisfaz            | `[1,3].find(x=>x>1)` → `3`                                                 | ❌                              |
// |                                 | `.findIndex(fn)`        | Índice do primeiro que satisfaz            | `[1,3].findIndex(x=>x>1)` → `1`                                            | ❌                              |
// |                                 | `.findLast(fn)` 🌟      | Último que satisfaz                        | `[1,3].findLast(x=>x>1)` → `3`                                             | ❌                              |
// |                                 | `.findLastIndex(fn)` 🌟 | Índice do último que satisfaz              | `[1,3].findLastIndex(x=>x>1)` → `1`                                        | ❌                              |
// |                                 | `.some(fn)`             | Algum atende?                              | `[1,2].some(x=>x>1)` → `true`                                              | ❌                              |
// |                                 | `.every(fn)`            | Todos atendem?                             | `[1,2].every(x=>x>0)` → `true`                                             | ❌                              |
// | **Transformação / Callback**    | `.map(fn)`              | Transforma cada item                       | `[1,2].map(n=>n*2)` → `[2,4]`                                              | Novo array                     |
// |                                 | `.filter(fn)`           | Filtra valores                             | `[1,2].filter(n=>n>1)` → `[2]` -                                           | Novo array                     |
// |                                 | `.reduce(fn,i)`         | Reduz a um valor                           | `[1,2].reduce((a,b)=>a+b,0)` → `3`                                         | ❌                              |
// |                                 | `.reduceRight(fn)`      | Reduz da direita p/ esquerda               | `["a","b"].reduceRight((a,b)=>a+b)` → `"ba"`                               | ❌                              |
// | **Ordenação / Inversão**        | `.sort()`               | Ordena (muta)                              | `[3,1,2].sort()` → `[1,2,3]`                                               | Array original modificado      |
// |                                 | `.toSorted()` 🌟        | Ordena (imutável)                          | `[3,1,2].toSorted()` → `[1,2,3]`                                           | Novo array                     |
// |                                 | `.reverse()`            | Inverte (muta)                             | `[1,2].reverse()` → `[2,1]`                                                | Array original modificado      |
// |                                 | `.toReversed()` 🌟      | Inverte (imutável)                         | `[1,2].toReversed()` → `[2,1]`                                             | Novo array                     |
// | **Iteração**                    | `.forEach(fn)`          | Itera sem retorno                          | `[1].forEach(x=>console.log(x))` → `[1]`                                   | ❌                              |
// |                                 | `.entries()`            | Iterador [indice, valor]                   | `[..."test"].entries()` → `Array Iterator {}`                              | ❌                              |
// |                                 | `.keys()`               | Iterador de índices                        | `[1,2].keys()` → `Array Iterator {}`                                       | ❌                              |
// |                                 | `.values()`             | Iterador de valores                        | `[1,2].values()` → `Array Iterator {}`                                     | ❌                              |
// | **Strings / Conversão**         | `.toString()`           | Array → String                             | `[1,2].toString()` → `"1,2"`                                               | ❌                              |
// |                                 | `.toLocaleString()`     | Formata p/ idioma                          | `[10.5].toLocaleString("pt-BR")` → `"10,5"`                                | ❌                              |
// |                                 | `.at(i)`                | Acessa item por índice (negativo funciona) | `[1,2,3].at(-1)` → `3`                                                     | ❌                              |
// | **Métodos Estáticos `Array.*`** | `Array.isArray(x)`      | Testa se é array                           | `Array.isArray([])` → `true`                                               | ❌                              |
// |                                 | `Array.from(x)`         | Converte p/ array                          | `Array.from("abc")` → `["a","b","c"]`                                      | ❌                              |
// |                                 | `Array.fromAsync()` 🌟  | Converte async p/ array                    | `await Array.fromAsync(fetch(...))` → `Array [...]`                        | ❌                              |
// |                                 | `Array.of(...)`         | Cria array com valores                     | `Array.of(1,2)` → `[1,2]`                                                  | ❌                              |
// |                                 | `Array.prototype`       | Acesso ao protótipo                        | `Array.prototype` → `Array []`                                             | ❌                              |
// | **Novos Métodos ES2024**        | `.groupBy()` 🌟         | Agrupa por critério                        | `[1,2,3,4].groupBy(x=>x%2===0?"par":"impar")` → `{impar:[1,3], par:[2,4]}` | Novo array                     |
// |                                 | `.groupByToMap()` 🌟    | Agrupa p/ Map                              | `[1,2,3,4].groupByToMap(x=>x%2)` → `Map(2) {0 => [2,4], 1 => [1,3]}`       | Novo array                     |

// Lista dos principais métodos de array que usam callback:
// | Método      | Para que serve                                     | Retorno                  | Callback recebe                  |
// | ----------- | -------------------------------------------------- | ------------------------ | -------------------------------- |
// | `forEach`   | Executar algo para cada item                       | nada                     | (item, index, array)             |
// | `map`       | Criar um **novo array** transformado               | novo array               | (item, index, array)             |
// | `filter`    | Filtrar itens com base em uma condição             | novo array filtrado      | (item, index, array)             |
// | `reduce`    | Reduzir tudo a um valor só                         | qualquer valor           | (acumulador, item, index, array) |
// | `find`      | Achar **o primeiro** item que satisfaça a condição | o item encontrado        | (item, index, array)             |
// | `findIndex` | Achar o índice do item                             | número                   | (item, index, array)             |
// | `some`      | Ver se **algum** item passa no teste               | boolean                  | (item, index, array)             |
// | `every`     | Ver se **todos** passam no teste                   | boolean                  | (item, index, array)             |
// | `sort`      | Ordenar os itens                                   | o próprio array alterado | (a, b) → dois itens              | - ((a, b) => b - a) - decrescente em num. | ((a, b) => b - a) - decrescente em num.
// | `flatMap`   | Achatar + mapear                                   | novo array               | (item, index, array)             |
