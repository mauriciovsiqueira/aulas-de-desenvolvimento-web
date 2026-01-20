// ===== Variáveis ====================
// var a = 30; //* <- var (antigo, mas utilizado ainda)
// const B = 20; //* <- constante, sempre utilizar com letra maiuscula
// let c = 50; //* <- let (usado atualmente)

// ===== Tipos de Dados ====================
// ===== String ====================
// console.log(''); ou ("");
// == Template string ==
// console.log(`texto ${valor} texto!`);
// console.log(typeof texto); <- Mostra o tipo do dado
// texto.metodo

// Métodos e propriedades de String:
// | Seção                              | Método / Propriedade                            | O que faz                     | Exemplo (resultado final)                        | Mutável?    |
// | ---------------------------------- | ----------------------------------------------- | ----------------------------- | ------------------------------------------------ | ----------- |
// | **Propriedades**                   | `.length`                                       | Quantidade de caracteres      | `"abc".length` → `3`                             | ❌           |
// | **Acesso / Indexação**             | `[i]`                                           | Retorna caractere             | `"abc"[1]` → `"b"`                               | ❌           |
// |                                    | `.charAt(i)`                                    | Retorna caractere             | `"abc".charAt(1)` → `"b"`                        | ❌           |
// |                                    | `.charCodeAt(i)`                                | Código Unicode do caractere   | `"A".charCodeAt(0)` → `65`                       | ❌           |
// | **Transformação**                  | `.toUpperCase()`                                | Para maiúsculas               | `"abc".toUpperCase()` → `"ABC"`                  | Novo string |
// |                                    | `.toLowerCase()`                                | Para minúsculas               | `"ABC".toLowerCase()` → `"abc"`                  | Novo string |
// |                                    | `.trim()`                                       | Remove espaços do início/fim  | `"  abc  ".trim()` → `"abc"`                     | Novo string |
// |                                    | `.trimStart()` / `.trimLeft()`                  | Remove espaços do início      | `"  abc".trimStart()` → `"abc"`                  | Novo string |
// |                                    | `.trimEnd()` / `.trimRight()`                   | Remove espaços do fim         | `"abc  ".trimEnd()` → `"abc"`                    | Novo string |
// |                                    | `.padStart(n,char)`                             | Preenche início até tamanho n | `"5".padStart(3,"0")` → `"005"`                  | Novo string |
// |                                    | `.padEnd(n,char)`                               | Preenche fim até tamanho n    | `"5".padEnd(3,"0")` → `"500"`                    | Novo string |
// |                                    | `.repeat(n)`                                    | Repete string n vezes         | `"a".repeat(3)` → `"aaa"`                        | Novo string |
// |                                    | `.replace(search, replace)`                     | Substitui primeira ocorrência | `"abcabc".replace("a","x")` → `"xbcabc"`         | Novo string |
// |                                    | `.replaceAll(search, replace)`                  | Substitui todas               | `"abcabc".replaceAll("a","x")` → `"xbcxbc"`      | Novo string |
// |                                    | `.slice(i,f)`                                   | Retorna substring             | `"abc".slice(1)` → `"bc"`                        | Novo string |
// |                                    | `.substring(i,f)`                               | Retorna substring             | `"abc".substring(1,2)` → `"b"`                   | Novo string |
// |                                    | `.substr(i,len)` ⭐ (obsoleto)                  | Retorna substring             | `"abc".substr(1,2)` → `"bc"`                     | Novo string |
// | **Busca / Verificação**            | `.includes(str)`                                | Verifica se contém            | `"abc".includes("b")` → `true`                   | ❌           |
// |                                    | `.startsWith(str)`                              | Começa com                    | `"abc".startsWith("a")` → `true`                 | ❌           |
// |                                    | `.endsWith(str)`                                | Termina com                   | `"abc".endsWith("c")` → `true`                   | ❌           |
// |                                    | `.indexOf(str)`                                 | Primeiro índice               | `"abcabc".indexOf("b")` → `1`                    | ❌           |
// |                                    | `.lastIndexOf(str)`                             | Último índice                 | `"abcabc".lastIndexOf("b")` → `4`                | ❌           |
// |                                    | `.search(regex)`                                | Índice via regex              | `"abc".search(/b/)` → `1`                        | ❌           |
// |                                    | `.match(regex)`                                 | Array de correspondências     | `"abcabc".match(/a/g)` → `["a","a"]`             | Novo array  |
// |                                    | `.matchAll(regex)`                              | Iterador de correspondências  | `[..."abcabc".matchAll(/a/g)]` → `[["a"],["a"]]` | ❌           |
// |                                    | `.startsWith()` / `.endsWith()`                 | Verifica início/fim           | `"abc".startsWith("a")` → `true`                 | ❌           |
// |                                    | `.concat(str)`                                  | Concatena strings             | `"a".concat("b")` → `"ab"`                       | Novo string |
// |                                    | `.repeat(n)`                                    | Repete string                 | `"a".repeat(3)` → `"aaa"`                        | Novo string |
// | **Normalização / Unicode**         | `.normalize()`                                  | Unicode NFC/NFD               | `"é".normalize()` → `"é"`                        | Novo string |
// |                                    | `.codePointAt(i)`                               | Código Unicode (full)         | `"𝟘".codePointAt(0)` → `120792`                  | ❌           |
// |                                    | `.fromCodePoint()`                              | Cria string por código        | `String.fromCodePoint(120792)` → `"𝟘"`           | Novo string |
// | **Template / Internacionalização** | `` `template ${var}` ``                         | Template literals             | `` `a${1}` `` → `"a1"`                           | Novo string |
// |                                    | `.localeCompare(str)`                           | Compara strings               | `"a".localeCompare("b")` → `-1`                  | ❌           |
// |                                    | `.toLocaleUpperCase()` / `.toLocaleLowerCase()` | Maiúsc/minúsc locale          | `"i".toLocaleUpperCase("tr")` → `"İ"`            | Novo string |
// | **Iteração / Conversão**           | `.split("")`                                    | Converte p/ array de chars    | `"abc".split(",")` → `["a","b","c"]`             | Novo array  |
// |                                    | `[...str]`                                      | Spread para array             | `[..."abc"]` → `["a","b","c"]`                   | Novo array  |
// |                                    | `.valueOf()`                                    | Retorna string primitiva      | `"abc".valueOf()` → `"abc"`                      | ❌           |
// |                                    | `.toString()`                                   | Retorna string primitiva      | `"abc".toString()` → `"abc"`                     | ❌           |

// ===== Number ====================
// console.log(1);
// console.log(1.6);

// Métodos e propriedades de Number:
// | Seção                        | Método / Propriedade               | O que faz                                | Exemplo (resultado final)                                 | Mutável?    |
// | ---------------------------- | ---------------------------------- | ---------------------------------------- | --------------------------------------------------------- | ----------- |
// | **Propriedades estáticas**   | `Number.MAX_VALUE`                 | Maior valor representável                | `Number.MAX_VALUE` → `1.7976931348623157e+308`            | ❌           |
// |                              | `Number.MIN_VALUE`                 | Menor valor positivo >0                  | `Number.MIN_VALUE` → `5e-324`                             | ❌           |
// |                              | `Number.NaN`                       | Valor NaN                                | `Number.NaN` → `NaN`                                      | ❌           |
// |                              | `Number.NEGATIVE_INFINITY`         | -Infinity                                | `Number.NEGATIVE_INFINITY` → `-Infinity`                  | ❌           |
// |                              | `Number.POSITIVE_INFINITY`         | Infinity                                 | `Number.POSITIVE_INFINITY` → `Infinity`                   | ❌           |
// |                              | `Number.EPSILON`                   | Diferença mínima entre 1 e próximo float | `Number.EPSILON` → `2.220446049250313e-16`                | ❌           |
// |                              | `Number.MAX_SAFE_INTEGER`          | Maior inteiro seguro                     | `Number.MAX_SAFE_INTEGER` → `9007199254740991`            | ❌           |
// |                              | `Number.MIN_SAFE_INTEGER`          | Menor inteiro seguro                     | `Number.MIN_SAFE_INTEGER` → `-9007199254740991`           | ❌           |
// | **Conversão / Análise**      | `Number.isNaN(value)`              | Verifica NaN                             | `Number.isNaN(NaN)` → `true`                              | ❌           |
// |                              | `Number.isFinite(value)`           | Verifica finito                          | `Number.isFinite(1/0)` → `false`                          | ❌           |
// |                              | `Number.isInteger(value)`          | Verifica inteiro                         | `Number.isInteger(3.0)` → `true`                          | ❌           |
// |                              | `Number.isSafeInteger(value)`      | Verifica inteiro seguro                  | `Number.isSafeInteger(9007199254740992)` → `false`        | ❌           |
// |                              | `Number.parseFloat(str)`           | Converte string p/ float                 | `Number.parseFloat("3.14")` → `3.14`                      | ❌           |
// |                              | `Number.parseInt(str, base)`       | Converte string p/ int                   | `Number.parseInt("10",2)` → `2`                           | ❌           |
// | **Instância / Propriedades** | `.toExponential(fractionDigits)`   | Notação exponencial                      | `(123).toExponential(2)` → `"1.23e+2"`                    | Novo string |
// |                              | `.toFixed(digits)`                 | Casas decimais fixas                     | `(1.234).toFixed(2)` → `"1.23"`                           | Novo string |
// |                              | `.toPrecision(precision)`          | Precisão significativa                   | `(1.234).toPrecision(3)` → `"1.23"`                       | Novo string |
// |                              | `.toString(base)`                  | Converte p/ string em base               | `(255).toString(16)` → `"ff"`                             | Novo string |
// |                              | `.valueOf()`                       | Retorna valor primitivo                  | `(123).valueOf()` → `123`                                 | ❌           |
// |                              | `.toLocaleString(locale, options)` | Formatação local                         | `(1234567.89).toLocaleString("pt-BR")` → `"1.234.567,89"` | Novo string |

// ===== Boolean ====================
// | Seção                         | Método / Propriedade | O que faz                    | Exemplo (resultado final)            | Mutável?    |       |   |               |   |
// | ----------------------------- | -------------------- | ---------------------------- | ------------------------------------ | ----------- | ----- | - | ------------- | - |
// | **Criação / Conversão**       | `Boolean(value)`     | Converte valor para booleano | `Boolean(1)` → `true`                | ❌           |       |   |               |   |
// |                               | `new Boolean(value)` | Cria objeto Boolean          | `new Boolean(0)` → `Boolean {false}` | Novo objeto |       |   |               |   |
// | **Propriedades de protótipo** | `.valueOf()`         | Retorna valor primitivo      | `(true).valueOf()` → `true`          | ❌           |       |   |               |   |
// |                               | `.toString()`        | Converte para string         | `(false).toString()` → `"false"`     | Novo string |       |   |               |   |
// | **Operações lógicas**         | `&&`                 | AND lógico                   | `true && false` → `false`            | ❌           |       |   |               |   |
// |                               | `                    |                              | `                                    | OR lógico   | `true |   | false`→`true` | ❌ |
// |                               | `!`                  | NOT lógico                   | `!true` → `false`                    | ❌           |       |   |               |   |
// | **Métodos estáticos**         | `Boolean.prototype`  | Protótipo do Boolean         | `Boolean.prototype` → `{}`           | ❌           |       |   |               |   |
