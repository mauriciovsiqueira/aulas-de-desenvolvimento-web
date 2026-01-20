// ===== JSON ====================
// Principais métodos JSON:
// | Seção          | Método / Propriedade                   | O que faz                        | Exemplo (resultado final)                                            | Mutável?    |
// | -------------- | -------------------------------------- | -------------------------------- | -------------------------------------------------------------------- | ----------- |
// | **Conversão**  | `JSON.parse(str)`                      | Converte JSON string para objeto | `JSON.parse('{"a":1}')` → `{a:1}`                                    | Novo objeto |
// |                | `JSON.stringify(obj)`                  | Converte objeto para JSON string | `JSON.stringify({a:1})` → `'{"a":1}'`                                | Novo string |
// | **Com opções** | `JSON.stringify(obj, replacer)`        | Filtra propriedades              | `JSON.stringify({a:1,b:2}, ["a"])` → `'{"a":1}'`                     | Novo string |
// |                | `JSON.stringify(obj, replacer, space)` | Formata com indentação           | `JSON.stringify({a:1,b:2}, null, 2)` → `'{\n  "a": 1,\n  "b": 2\n}'` | Novo string |

// Conversões mais complexas:
// | Exemplo                               | O que acontece       | Resultado    |
// | ------------------------------------- | -------------------- | ------------ |
// | `JSON.parse('[1,2,3]')`               | Array válido         | `[1,2,3]`    |
// | `JSON.stringify([1,2,3])`             | Array → string       | `"[1,2,3]"`  |
// | `JSON.stringify({ a: undefined })`    | **Ignora undefined** | `"{}"`       |
// | `JSON.stringify({ a: function(){} })` | **Ignora funções**   | `"{}"`       |
// | `JSON.stringify({ a: null })`         | Mantém null          | `{"a":null}` |

// Erros comuns:
// | Situação                      | Exemplo               | Por que dá erro?              |
// | ----------------------------- | --------------------- | ----------------------------- |
// | JSON **sem aspas** nas chaves | `'{"nome": Ana}'`     | JSON exige aspas duplas `" "` |
// | Uso de **aspas simples**      | `'{ 'nome': "Ana" }'` | JSON só aceita aspas duplas   |
// | Vírgula sobrando              | `'{"a":1,}'`          | Formato inválido              |
// | Comentários dentro do JSON    | `// Não permitido`    | JSON não suporta comentários  |

// Stringify com formatação (indentação):
// | Exemplo                        | Descrição             | Resultado                |
// | ------------------------------ | --------------------- | ------------------------ |
// | `JSON.stringify(obj, null, 2)` | Formata com 2 espaços | JSON bonito e legível ✔️ |

// Replacer (filtrar propriedades):
// | Exemplo                            | O que faz     | Resultado   |
// | ---------------------------------- | ------------- | ----------- |
// | `JSON.stringify({a:1,b:2}, ["a"])` | Só inclui `a` | `"{"a":1}"` |

// Reviver valores ao parsear:
// | Exemplo                                                                | O que faz              | Resultado             |
// | ---------------------------------------------------------------------- | ---------------------- | --------------------- |
// | `JSON.parse('{"data":"2025-11-20"}', (k,v)=>k==="data"?new Date(v):v)` | Converte data de volta | `{ data: Date(...) }` |

// JSON não suporta!:
// | Item               | Exemplo            | Resultado |
// | ------------------ | ------------------ | --------- |
// | Funções            | `()=>{}`           | Ignorado  |
// | `undefined`        | `{ a: undefined }` | Ignorado  |
// | Símbolos           | `Symbol()`         | Ignorado  |
// | Circular reference | `obj.a = obj`      | ❌ Erro    |

// Dica final:
// Para testar rapidamente JSON:

// console.log(JSON.stringify({ x: 10, y: 20 }, null, 2));

// ===== Regex ====================
// Criando e testando regex:
// | Seção                 | Método / Propriedade             | O que faz                          | Exemplo (resultado final)              | Mutável?    |
// | --------------------- | -------------------------------- | ---------------------------------- | -------------------------------------- | ----------- |
// | **Construtores**      | `new RegExp("pattern", "flags")` | Cria regex                         | `new RegExp("ab","i")` → `/ab/i`       | Novo objeto |
// |                       | `/pattern/flags`                 | Literal regex                      | `/ab/g` → `/ab/g`                      | Novo objeto |
// | **Execução**          | `.test(str)`                     | Verifica se bate                   | `/ab/.test("abc")` → `true`            | ❌           |
// |                       | `.exec(str)`                     | Retorna correspondência            | `/ab/.exec("abc")` → `["ab"]`          | ❌           |
// | **Strings com regex** | `.match(regex)`                  | Retorna correspondência            | `"abc".match(/b/)` → `["b"]`           | ❌           |
// |                       | `.matchAll(regex)`               | Retorna todas correspondências     | `"abab".matchAll(/ab/g)` → *iterador*  | ❌           |
// |                       | `.replace(regex, replacement)`   | Substitui valores                  | `"abc".replace(/b/,"B")` → `"aBc"`     | Novo string |
// |                       | `.search(regex)`                 | Índice da primeira correspondência | `"abc".search(/b/)` → `1`              | ❌           |
// |                       | `.split(regex)`                  | Divide string                      | `"a,b,c".split(/,/)` → `["a","b","c"]` | Novo array  |

// Classes de caracteres:
// | Padrão | Significado              | Exemplo              | Resultado       |
// | ------ | ------------------------ | -------------------- | --------------- |
// | `\d`   | dígito (0-9)             | `/\d/.test("a1")`    | `true`          |
// | `\w`   | letra, número ou _       | `"a_b".match(/\w/g)` | `["a","_","b"]` |
// | `\s`   | espaços                  | `"a b".match(/\s/)`  | `" "`           |
// | `\D`   | NÃO dígito               | `/\D/.test("a")`     | `true`          |
// | `\W`   | NÃO caractere de palavra | `"!"`                | `true`          |
// | `\S`   | NÃO espaço               | match em `"abc"`     | `"a"`           |

// Quantificadores:
// | Padrão  | Significa    | Exemplo                  | Bate com   |
// | ------- | ------------ | ------------------------ | ---------- |
// | `+`     | 1 ou mais    | `/a+/.test("aaa")`       | `"aaa"`    |
// | `*`     | 0 ou mais    | `/a*/.test("")`          | `""`       |
// | `?`     | 0 ou 1       | `/a?/.test("a")`         | `"a"`      |
// | `{3}`   | exatamente 3 | `/a{3}/`                 | `"aaa"`    |
// | `{2,4}` | de 2 a 4     | `"aaaa".match(/a{2,4}/)` | `"aaaa"`   |
// | `{2,}`  | 2 ou mais    | `/a{2,}/`                | `"aaa..."` |

// Âncoras (posição):
// | Padrão | Significado      | Exemplo                     | Resultado |
// | ------ | ---------------- | --------------------------- | --------- |
// | `^`    | início da string | `/^a/.test("abc")`          | `true`    |
// | `$`    | final da string  | `/c$/.test("abc")`          | `true`    |
// | `\b`   | borda de palavra | `/\bjs\b/.test("js rocks")` | `true`    |
// | `\B`   | NÃO borda        | `/\Bjs/.test("xxjs")`       | `true`    |

// Grupos e Alternância:
// | Padrão    | Significa         | Exemplo                | Resultado      |       |       |
// | --------- | ----------------- | ---------------------- | -------------- | ----- | ----- |
// | `(abc)`   | grupo             | `"abc".match(/(abc)/)` | `"abc"`        |       |       |
// | `(a       | b)`               | a ou b                 | `"a".match(/(a | b)/)` | `"a"` |
// | `(?:abc)` | grupo sem captura | melhora performance    | sem captura    |       |       |

// Flags importantes:
// | Flag | Função                       | Exemplo |
// | ---- | ---------------------------- | ------- |
// | `g`  | global (todas ocorrências)   | `/a/g`  |
// | `i`  | ignora maiúsculas/minúsculas | `/a/i`  |
// | `m`  | multilinhas                  | `/^a/m` |

// Exemplos úteis do dia a dia:
// | Tarefa              | Regex                           | Aceita           |
// | ------------------- | ------------------------------- | ---------------- |
// | E-mail simples      | `/\S+@\S+\.\S+/`                | `email@ex.com`   |
// | Somente números     | `/^\d+$/`                       | `12345`          |
// | Somente letras      | `/^[a-zA-Z]+$/`                 | `abcDEF`         |
// | CEP brasileiro      | `/^\d{5}-?\d{3}$/`              | `12345-000`      |
// | Telefone BR simples | `/^\(?\d{2}\)?\d{4,5}-?\d{4}$/` | `(11)99999-9999` |

// Diferença importante!:
// | Pattern   | Entrada   | Resultado                                    |
// | --------- | --------- | -------------------------------------------- |
// | `/abc/`   | `"xabcx"` | encontra                                     |
// | `/^abc$/` | `"xabcx"` | NÃO encontra (string inteira deve ser igual) |

// Teste rápido
// const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
// console.log(regex.test("123.456.789-10")); // true

// ===== DOM ====================
// DOM — Seleção, Modificação e Eventos:
// | Seção                       | Método / Propriedade                     | O que faz                              | Exemplo (resultado final)                                                        | Mutável? |
// | --------------------------- | ---------------------------------------- | -------------------------------------- | -------------------------------------------------------------------------------- | -------- |
// | **Seleção**                 | `document.getElementById(id)`            | Retorna elemento pelo id               | `<div id="x"></div>; document.getElementById("x")` → `<div id="x"></div>`        | ✅        |
// |                             | `document.getElementsByClassName(class)` | Retorna HTMLCollection                 | `<div class="a"></div>; document.getElementsByClassName("a")` → *HTMLCollection* | ✅        |
// |                             | `document.getElementsByTagName(tag)`     | Retorna HTMLCollection                 | `<p></p>; document.getElementsByTagName("p")` → *HTMLCollection*                 | ✅        |
// |                             | `document.querySelector(selector)`       | Primeiro elemento que bate com seletor | `document.querySelector(".a")` → `<div class="a"></div>`                         | ✅        |
// |                             | `document.querySelectorAll(selector)`    | Todos elementos que batem              | `document.querySelectorAll("p")` → *NodeList*                                    | ✅        |
// | **Manipulação de conteúdo** | `.innerHTML`                             | Conteúdo HTML                          | `div.innerHTML = "<p>Oi</p>"` → `<p>Oi</p>`                                      | ✅        |
// |                             | `.textContent`                           | Conteúdo de texto                      | `div.textContent = "Oi"` → `"Oi"`                                                | ✅        |
// |                             | `.appendChild(node)`                     | Adiciona elemento filho                | `div.appendChild(p)` → `<div><p></p></div>`                                      | ✅        |
// |                             | `.removeChild(node)`                     | Remove elemento filho                  | `div.removeChild(p)` → `<div></div>`                                             | ✅        |
// |                             | `.setAttribute(attr, value)`             | Define atributo                        | `div.setAttribute("id","x")` → `<div id="x"></div>`                              | ✅        |
// |                             | `.getAttribute(attr)`                    | Lê atributo                            | `div.getAttribute("id")` → `"x"`                                                 | ❌        |
// | **Eventos**                 | `.addEventListener(event, fn)`           | Adiciona listener                      | `div.addEventListener("click", ()=>{})` → listener registrado                    | ✅        |
// |                             | `.removeEventListener(event, fn)`        | Remove listener                        | `div.removeEventListener("click", fn)` → listener removido                       | ✅        |
// | **Classe / Estilo**         | `.classList.add/remove/toggle`           | Manipula classes                       | `div.classList.add("ativo")` → `<div class="ativo"></div>`                       | ✅        |
// |                             | `.style.prop = value`                    | Modifica estilo                        | `div.style.color = "red"` → `<div style="color:red"></div>`                      | ✅        |

// Alterar conteúdo:
// | Tarefa              | Exemplo                             | Resultado         |
// | ------------------- | ----------------------------------- | ----------------- |
// | Trocar texto        | `el.textContent = "Olá"`            | Insere só texto   |
// | Inserir HTML        | `el.innerHTML = "<b>Oi</b>"`        | Renderiza tags    |
// | Atualizar atributos | `el.setAttribute("src", "img.png")` | Modifica atributo |
// | Pegar atributo      | `el.getAttribute("href")`           | `"https://..."`   |

// Estilos e classes:
// | Método                | O que faz            | Exemplo                        | Resultado       |
// | --------------------- | -------------------- | ------------------------------ | --------------- |
// | `.style.propriedade`  | Define estilo inline | `el.style.color = "red"`       | Texto vermelho  |
// | `.classList.add()`    | Adicionar classe     | `el.classList.add("ativo")`    | Classe aplicada |
// | `.classList.remove()` | Remover classe       | `el.classList.remove("ativo")` | Classe removida |
// | `.classList.toggle()` | Alterna classe       | `el.classList.toggle("dark")`  | Liga/desliga    |

// Criando / removendo elementos:
// | Ação               | Exemplo                                     | Resultado                  |
// | ------------------ | ------------------------------------------- | -------------------------- |
// | Criar              | `const div = document.createElement("div")` | Elemento `<div>` novo      |
// | Adicionar no final | `pai.appendChild(div)`                      | Inserido como último filho |
// | Remover            | `el.remove()`                               | Elemento sai do DOM        |
// | Duplicar           | `el.cloneNode(true)`                        | Clona (true = com filhos)  |

// Eventos:
// | Método               | Exemplo                                | O que acontece            |
// | -------------------- | -------------------------------------- | ------------------------- |
// | `addEventListener()` | `btn.addEventListener("click", fn)`    | Executa função ao clicar  |
// | Evento comum         | `mouseover`, `keyup`, `submit`…        | Reage às ações do usuário |
// | Remover evento       | `btn.removeEventListener("click", fn)` | Pára de escutar           |

// Navegação entre elementos:
// | Propriedade           | O que retorna          |
// | --------------------- | ---------------------- |
// | `.parentNode`         | Pai do elemento        |
// | `.children`           | Filhos do elemento     |
// | `.firstChild`         | Primeiro nó filho      |
// | `.nextElementSibling` | Próximo elemento irmão |

// Exemplo prático completo:
// const titulo = document.querySelector("#titulo");

// titulo.textContent = "Novo título!";
// titulo.classList.add("ativo");

// document.querySelector("button")
//   .addEventListener("click", () => {
//     alert("Você clicou!");
//   });
