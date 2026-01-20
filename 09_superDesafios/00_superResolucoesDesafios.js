// 🟢 Nível Iniciante (1–20)

// 1. Função que recebe dois números e retorna a soma
// function soma(a, b) {
//   return a + b;
// }

// Explicação:

// function soma(a, b) {} define a função com dois parâmetros.

// return a + b; soma os parâmetros e devolve o resultado.

// 2. Função que recebe uma string e retorna seu tamanho
// function tamanho(texto) {
//   return texto.length;
// }

// Explicação:

// .length retorna o número de caracteres da string.

// 3. Função que recebe um número e retorna se é positivo ou negativo
// function positivoOuNegativo(n) {
//   if (n > 0) return "Positivo";
//   if (n < 0) return "Negativo";
//   return "Zero";
// }

// Explicação:

// Testa n > 0 e n < 0. Se nenhum, é Zero.

// 4. Função que recebe um nome e retorna mensagem de saudação
// function saudacao(nome) {
//   return `Olá, ${nome}!`;
// }

// Explicação:

// Template string insere nome na mensagem.

// 5. Retorna o maior entre dois
// function maiorEntre(a, b) {
//   return a > b ? a : b;
// }

// Explicação:

// Operador ternário escolhe o maior.

// 6. Retorna o triplo de um número
// function triplo(n) {
//   return n * 3;
// }

// Explicação:

// Multiplica por 3.

// 7. Verifica se é par
// function ehPar(n) {
//   return n % 2 === 0;
// }

// Explicação:

// Resto (%) zero indica par.

// 8. Recebe array e retorna primeiro elemento
// function primeiroElement(arr) {
//   return arr[0];
// }

// Explicação:

// Índice 0 é o primeiro item.

// 9. Retorna quantidade de elementos de um array
// function tamanhoArray(arr) {
//   return arr.length;
// }

// Explicação:

// .length em arrays retorna quantidade.

// 10. String em minúsculas
// function paraMinusculas(texto) {
//   return texto.toLowerCase();
// }

// Explicação:

// .toLowerCase() converte.

// 11. Retorna o dobro
// function dobro(n) {
//   return n * 2;
// }

// Explicação:

// Multiplica por 2.

// 12. Recebe objeto e retorna nome
// function pegaNome(obj) {
//   return obj.nome;
// }

// Explicação:

// Acessa a propriedade nome do objeto.

// 13. Soma todos os valores de um array
// function somaArray(nums) {
//   return nums.reduce((acc, cur) => acc + cur, 0);
// }

// Explicação:

// reduce acumula soma começando em 0.

// 14. Adiciona elemento no final do array
// function adicionaNoFinal(arr, elemento) {
//   arr.push(elemento);
//   return arr;
// }

// Explicação:

// push acrescenta no final; retorna array atualizado.

// 15. Recebe objeto com nome e idade e retorna idade
// function pegaIdade(pessoa) {
//   return pessoa.idade;
// }

// Explicação:

// Acessa idade.

// 16. Remove último item de um array
// function removeUltimo(arr) {
//   arr.pop();
//   return arr;
// }

// Explicação:

// pop remove o último elemento (e o retorna se precisar).

// 17. Retorna quadrado de um número
// function quadrado(n) {
//   return n * n;
// }

// Explicação:

// Multiplica n por ele mesmo.

// 18. Verifica se palavra contém letra "a"
// function contemA(palavra) {
//   return palavra.includes("a");
// }

// Explicação:

// .includes retorna booleano se substring existe (case-sensitive).

// 19. Recebe array de strings e retorna a última string
// function ultimaString(arr) {
//   return arr[arr.length - 1];
// }

// Explicação:

// Índice length - 1 é o último.

// 20. Retorna novo array sem o primeiro item
// function semPrimeiro(arr) {
//   return arr.slice(1);
// }

// Explicação:

// slice(1) cria cópia a partir do índice 1 (exclui o primeiro).

// 🟡 Nível Intermediário (21–40)
// 21. Retorna apenas números maiores que 5
// function maioresQueCinco(arr) {
//   return arr.filter(n => n > 5);
// }

// Explicação:

// filter cria novo array com itens que passam no teste.

// 22. Retorna array com números ao quadrado
// function aoQuadrado(arr) {
//   return arr.map(n => n * n);
// }

// Explicação:

// map transforma cada item.

// 23. Une array de strings por hífen
// function unirPorHifen(arr) {
//   return arr.join("-");
// }

// Explicação:

// join concatena com separador.

// 24. Obter chaves de um objeto
// function chaves(obj) {
//   return Object.keys(obj);
// }

// Explicação:

// Object.keys retorna array de chaves.

// 25. Obter valores de um objeto
// function valores(obj) {
//   return Object.values(obj);
// }

// Explicação:

// Object.values retorna array de valores.

// 26. Conta vogais em uma string
// function contaVogais(texto) {
//   const vogais = "aeiouAEIOU";
//   let count = 0;
//   for (let ch of texto) if (vogais.includes(ch)) count++;
//   return count;
// }

// Explicação:

// Itera chars; incrementa se for vogal (case-insensitive por incluir maiúsculas).

// 27. Remove espaços no início e fim
// function trimText(texto) {
//   return texto.trim();
// }

// Explicação:

// .trim() remove espaços de ambos os lados.

// 28. Retorna média de números
// function media(nums) {
//   if (nums.length === 0) return 0;
//   const soma = nums.reduce((a, b) => a + b, 0);
//   return soma / nums.length;
// }

// Explicação:

// Soma com reduce, divide pela quantidade; trata array vazio.

// 29. Retorna somente os pares
// function somentePares(arr) {
//   return arr.filter(n => n % 2 === 0);
// }

// Explicação:

// Filtra por resto zero.

// 30. Inverte array sem .reverse()
// function inverteArray(arr) {
//   const res = [];
//   for (let i = arr.length - 1; i >= 0; i--) res.push(arr[i]);
//   return res;
// }

// Explicação:

// Percorre do fim ao começo e empilha em novo array.

// 31. Ordena array de números (crescente)
// function ordenaCrescente(arr) {
//   return arr.slice().sort((a, b) => a - b);
// }

// Explicação:

// slice() clona para não mutar; sort com função numérica evita ordenação lexicográfica.

// 32. Nomes com mais de 5 caracteres
// function nomesGrandes(arr) {
//   return arr.filter(n => n.length > 5);
// }

// Explicação:

// Filtra por length > 5.

// 33. Inverte palavra
// function invertePalavra(palavra) {
//   return palavra.split("").reverse().join("");
// }

// Explicação:

// split em chars, reverse, join novamente.

// 34. Conta propriedades de um objeto
// function contaProps(obj) {
//   return Object.keys(obj).length;
// }

// Explicação:

// Object.keys e .length.

// 35. Mescla dois objetos em um novo
// function mescla(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// Explicação:

// Spread operator combina; propriedades do obj2 sobrescrevem obj1 se houver conflito.

// 36. Transforma array de objetos em array com apenas preços
// function soPrecos(produtos) {
//   return produtos.map(p => p.preco);
// }

// Explicação:

// map extrai preco de cada item.

// 37. Soma preços dos produtos
// function somaPrecos(produtos) {
//   return produtos.reduce((acc, p) => acc + p.preco, 0);
// }

// Explicação:

// reduce soma a propriedade preco.

// 38. Verifica existência de elemento no array
// function existe(arr, el) {
//   return arr.includes(el);
// }

// Explicação:

// includes retorna booleano.

// 39. Duplica valores de um array
// function duplica(arr) {
//   return arr.map(n => n * 2);
// }

// Explicação:

// map aplica multiplicação.

// 40. Remove números negativos de um array
// function semNegativos(arr) {
//   return arr.filter(n => n >= 0);
// }

// Explicação:

// Mantém só n >= 0.

// 🔴 Nível Difícil (41–60)
// 41. Segundo maior valor de um array
// function segundoMaior(arr) {
//   if (arr.length < 2) return null;
//   let max = -Infinity, segundo = -Infinity;
//   for (let n of arr) {
//     if (n > max) { segundo = max; max = n; }
//     else if (n > segundo && n < max) { segundo = n; }
//   }
//   return segundo === -Infinity ? null : segundo;
// }

// Explicação:

// Percorre uma vez atualizando max e segundo. Trata casos com menos de 2 elementos e todos iguais.

// 42. Soma de cada linha em uma matriz (array de arrays)
// function somaLinhas(matriz) {
//   return matriz.map(linha => linha.reduce((a,b) => a + b, 0));
// }

// Explicação:

// map para cada linha aplica reduce somando seus elementos.

// 43. Converte array de {nome, idade} em objeto { nome: idade }
// function arrayParaObjeto(pessoas) {
//   return pessoas.reduce((acc, p) => {
//     acc[p.nome] = p.idade;
//     return acc;
//   }, {});
// }

// Explicação:

// reduce constrói um objeto onde cada nome vira chave.

// 44. Conta propriedades booleanas true
// function contaTrue(obj) {
//   return Object.values(obj).filter(v => v === true).length;
// }

// Explicação:

// Object.values pega valores; filtra true e conta.

// 45. Remove duplicados de um array
// function semDuplicados(arr) {
//   return Array.from(new Set(arr));
// }

// Explicação:

// Set mantém itens únicos; Array.from volta para array.

// 46. Conta frequência de cada letra em um texto
// function freqLetras(texto) {
//   const mapa = {};
//   for (let ch of texto) {
//     if (ch === ' ') continue; // opcional: ignora espaços
//     mapa[ch] = (mapa[ch] || 0) + 1;
//   }
//   return mapa;
// }

// Explicação:

// Itera chars; incrementa contador no objeto. Pode normalizar caixa se desejar.

// 47. Simula .map() sem usar .map()
// function meuMap(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i], i, arr));
//   }
//   return res;
// }

// Explicação:

// Itera e aplica fn em cada item empurrando resultado.

// 48. Simula .filter() sem usar .filter()
// function meuFilter(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i, arr)) res.push(arr[i]);
//   }
//   return res;
// }

// Explicação:

// Testa fn e adiciona quando retorna true.

// 49. Simula .reduce() sem usar .reduce()
// function meuReduce(arr, fn, inicial) {
//   let acc = inicial;
//   let i = 0;
//   if (acc === undefined) {
//     acc = arr[0];
//     i = 1;
//   }
//   for (; i < arr.length; i++) {
//     acc = fn(acc, arr[i], i, arr);
//   }
//   return acc;
// }

// Explicação:

// Suporta inicial opcional; acumula chamando fn.

// 50. Interseção entre dois arrays
// function intersecao(a, b) {
//   const setB = new Set(b);
//   return Array.from(new Set(a.filter(x => setB.has(x))));
// }

// Explicação:

// Usa Set para checagem rápida; evita duplicados finais com new Set.

// 51. Produto mais caro em lista
// function maisCaro(produtos) {
//   return produtos.reduce((maior, p) => p.preco > maior.preco ? p : maior, produtos[0]);
// }

// Explicação:

// reduce mantém o produto de maior preço; inicial com primeiro item.

// 52. Menor número sem Math.min
// function menorNumero(arr) {
//   let menor = Infinity;
//   for (let n of arr) if (n < menor) menor = n;
//   return menor;
// }

// Explicação:

// Percorre e atualiza menor.

// 53. Embaralhar elementos de um array (Fisher–Yates)
// function embaralha(arr) {
//   const a = arr.slice();
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// Explicação:

// Implementa Fisher–Yates para um shuffle justo; clona array para não mutar original.

// 54. Valida se objeto contém propriedade específica
// function temProp(obj, prop) {
//   return Object.prototype.hasOwnProperty.call(obj, prop);
// }

// Explicação:

// hasOwnProperty verifica propriedades próprias, evitando falsos positivos de protótipo.

// 55. Divide array em pares e ímpares
// function paresEImpares(arr) {
//   return arr.reduce((acc, n) => {
//     if (n % 2 === 0) acc.pares.push(n);
//     else acc.impares.push(n);
//     return acc;
//   }, { pares: [], impares: [] });
// }

// Explicação:

// reduce constrói objeto com duas listas.

// 56. Agrupa pessoas por idade
// function agrupaPorIdade(pessoas) {
//   return pessoas.reduce((acc, p) => {
//     (acc[p.idade] = acc[p.idade] || []).push(p);
//     return acc;
//   }, {});
// }

// Explicação:

// Chave é a idade; cada chave recebe array de pessoas dessa idade.

// 57. Retorna apenas palíndromos de um array de strings
// function palindromos(arr) {
//   return arr.filter(s => {
//     const limpo = s.toLowerCase().replace(/[\W_]/g, "");
//     return limpo === limpo.split("").reverse().join("");
//   });
// }

// Explicação:

// Normaliza removendo caracteres não alfanuméricos e compara com versão invertida.

// 58. Compara dois objetos (mesmas propriedades e valores)
// function objetosIguais(a, b) {
//   const ka = Object.keys(a);
//   const kb = Object.keys(b);
//   if (ka.length !== kb.length) return false;
//   for (let k of ka) {
//     if (a[k] !== b[k]) return false;
//   }
//   return true;
// }

// Explicação:

// Compara chaves e valores de forma rasa (shallow). Não faz comparação profunda de objetos aninhados.

// 59. Converte array de pares [chave, valor] em objeto
// function paresParaObjeto(pares) {
//   return pares.reduce((acc, [k, v]) => (acc[k] = v, acc), {});
// }

// Explicação:

// Cada par vira uma propriedade no objeto acumulador.

// 60. Frequência de cada elemento em um array
// function frequencia(arr) {
//   return arr.reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {});
// }

// Explicação:

// reduce cria mapa contando ocorrências de cada elemento.

// Feito ✅
// Entreguei as 60 soluções comentadas.
// Se quiser que eu:

// execute testes com exemplos (posso mostrar saídas de alguns exemplos),

// explique mais a fundo alguma questão (linha a linha mais detalhado), ou

// gere versões alternativas (ex.: soluções funcionais vs imperativas),

// diz qual item(s) quer que eu aprofunde. 🚀
// Quer que eu gere um PDF colorido com todas essas respostas (lembrando que você já indicou preferência por PDF antes)? Posso gerar e fornecer o arquivo para download agora, se quiser.
