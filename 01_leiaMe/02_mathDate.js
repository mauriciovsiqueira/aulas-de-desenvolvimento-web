// ===== Math ====================
// Métodos e funções do Math:
// | Seção                                 | Método / Propriedade | O que faz                | Exemplo (resultado final)                   | Mutável? |
// | ------------------------------------- | -------------------- | ------------------------ | ------------------------------------------- | -------- |
// | **Constantes**                        | `Math.PI`            | Pi                       | `Math.PI` → `3.141592653589793`             | ❌        |
// |                                       | `Math.E`             | Euler                    | `Math.E` → `2.718281828459045`              | ❌        |
// |                                       | `Math.LN2`           | Logaritmo natural de 2   | `Math.LN2` → `0.6931471805599453`           | ❌        |
// |                                       | `Math.LN10`          | Logaritmo natural de 10  | `Math.LN10` → `2.302585092994046`           | ❌        |
// |                                       | `Math.LOG2E`         | log₂e                    | `Math.LOG2E` → `1.4426950408889634`         | ❌        |
// |                                       | `Math.LOG10E`        | log₁₀e                   | `Math.LOG10E` → `0.4342944819032518`        | ❌        |
// |                                       | `Math.SQRT1_2`       | √0.5                     | `Math.SQRT1_2` → `0.7071067811865476`       | ❌        |
// |                                       | `Math.SQRT2`         | √2                       | `Math.SQRT2` → `1.4142135623730951`         | ❌        |
// | **Funções de arredondamento**         | `Math.round(x)`      | Arredonda                | `Math.round(3.7)` → `4`                     | ❌        |
// |                                       | `Math.floor(x)`      | Arredonda pra baixo      | `Math.floor(3.7)` → `3`                     | ❌        |
// |                                       | `Math.ceil(x)`       | Arredonda pra cima       | `Math.ceil(3.2)` → `4`                      | ❌        |
// |                                       | `Math.trunc(x)`      | Remove parte decimal     | `Math.trunc(3.7)` → `3`                     | ❌        |
// | **Funções exponenciais / logaritmos** | `Math.pow(x,y)`      | Potência                 | `Math.pow(2,3)` → `8`                       | ❌        |
// |                                       | `Math.sqrt(x)`       | Raiz quadrada            | `Math.sqrt(16)` → `4`                       | ❌        |
// |                                       | `Math.cbrt(x)`       | Raiz cúbica              | `Math.cbrt(27)` → `3`                       | ❌        |
// |                                       | `Math.exp(x)`        | e^x                      | `Math.exp(1)` → `2.718281828459045`         | ❌        |
// |                                       | `Math.log(x)`        | ln(x)                    | `Math.log(Math.E)` → `1`                    | ❌        |
// |                                       | `Math.log10(x)`      | log₁₀(x)                 | `Math.log10(100)` → `2`                     | ❌        |
// |                                       | `Math.log2(x)`       | log₂(x)                  | `Math.log2(8)` → `3`                        | ❌        |
// | **Funções trigonométricas**           | `Math.sin(x)`        | Seno                     | `Math.sin(Math.PI/2)` → `1`                 | ❌        |
// |                                       | `Math.cos(x)`        | Cosseno                  | `Math.cos(0)` → `1`                         | ❌        |
// |                                       | `Math.tan(x)`        | Tangente                 | `Math.tan(0)` → `0`                         | ❌        |
// |                                       | `Math.asin(x)`       | Arco seno                | `Math.asin(1)` → `1.5707963267948966`       | ❌        |
// |                                       | `Math.acos(x)`       | Arco cosseno             | `Math.acos(1)` → `0`                        | ❌        |
// |                                       | `Math.atan(x)`       | Arco tangente            | `Math.atan(1)` → `0.7853981633974483`       | ❌        |
// | **Outros métodos úteis**              | `Math.min(...)`      | Retorna menor            | `Math.min(3,7,1)` → `1`                     | ❌        |
// |                                       | `Math.max(...)`      | Retorna maior            | `Math.max(3,7,1)` → `7`                     | ❌        |
// |                                       | `Math.random()`      | Aleatório [0,1)          | `Math.random()` → `0.548` (ex.)             | ❌        |
// |                                       | `Math.sign(x)`       | Sinal de número          | `Math.sign(-5)` → `-1`                      | ❌        |
// |                                       | `Math.abs(x)`        | Valor absoluto           | `Math.abs(-5)` → `5`                        | ❌        |
// |                                       | `Math.clz32(x)`      | Leading zeros em 32 bits | `Math.clz32(1)` → `31`                      | ❌        |
// |                                       | `Math.fround(x)`     | Float32 mais próximo     | `Math.fround(1.337)` → `1.3370000123977661` | ❌        |
// |                                       | `Math.hypot(a,b)`    | Hipotenusa               | `Math.hypot(3,4)` → `5`                     | ❌        |

// ===== Date ====================
// | Seção                   | Método / Propriedade                | O que faz                  | Exemplo (resultado final)                                                    | Mutável?                   |
// | ----------------------- | ----------------------------------- | -------------------------- | ---------------------------------------------------------------------------- | -------------------------- |
// | **Criação**             | `new Date()`                        | Data atual                 | `new Date()` → `2025-11-26T10:00:00.000Z` (ex.)                              | Novo objeto                |
// |                         | `new Date(ms)`                      | Data a partir de timestamp | `new Date(0)` → `1970-01-01T00:00:00.000Z`                                   | Novo objeto                |
// |                         | `new Date(dateString)`              | Data a partir de string    | `new Date("2025-01-01")` → `2025-01-01T00:00:00.000Z`                        | Novo objeto                |
// |                         | `new Date(year,month,day,h,m,s,ms)` | Data detalhada             | `new Date(2025,0,1)` → `2025-01-01T00:00:00.000Z`                            | Novo objeto                |
// | **Getters**             | `.getFullYear()`                    | Ano                        | `new Date(2025,0,1).getFullYear()` → `2025`                                  | ❌                          |
// |                         | `.getMonth()`                       | Mês (0-11)                 | `new Date(2025,0,1).getMonth()` → `0`                                        | ❌                          |
// |                         | `.getDate()`                        | Dia do mês                 | `new Date(2025,0,1).getDate()` → `1`                                         | ❌                          |
// |                         | `.getDay()`                         | Dia da semana (0-6)        | `new Date(2025,0,1).getDay()` → `3`                                          | ❌                          |
// |                         | `.getHours()`                       | Hora                       | `new Date(2025,0,1,15).getHours()` → `15`                                    | ❌                          |
// |                         | `.getMinutes()`                     | Minutos                    | `new Date(2025,0,1,15,30).getMinutes()` → `30`                               | ❌                          |
// |                         | `.getSeconds()`                     | Segundos                   | `new Date(2025,0,1,15,30,45).getSeconds()` → `45`                            | ❌                          |
// |                         | `.getMilliseconds()`                | Milissegundos              | `new Date(2025,0,1,0,0,0,123).getMilliseconds()` → `123`                     | ❌                          |
// |                         | `.getTime()`                        | Timestamp (ms desde 1970)  | `new Date(2025,0,1).getTime()` → `1735680000000`                             | ❌                          |
// |                         | `.getTimezoneOffset()`              | Diferença em min           | `new Date().getTimezoneOffset()` → `-180` (ex.)                              | ❌                          |
// | **Setters / Mutação**   | `.setFullYear(y)`                   | Define ano                 | `let d=new Date(); d.setFullYear(2026); d` → `2026-11-26T...`                | Objeto original modificado |
// |                         | `.setMonth(m)`                      | Define mês                 | `d.setMonth(0)` → `2026-01-26T...`                                           | Objeto original modificado |
// |                         | `.setDate(d)`                       | Define dia                 | `d.setDate(1)` → `2026-01-01T...`                                            | Objeto original modificado |
// |                         | `.setHours(h)`                      | Define hora                | `d.setHours(10)` → `2026-01-01T10:00:00.000Z`                                | Objeto original modificado |
// |                         | `.setMinutes(m)`                    | Define minutos             | `d.setMinutes(30)` → `2026-01-01T10:30:00.000Z`                              | Objeto original modificado |
// |                         | `.setSeconds(s)`                    | Define segundos            | `d.setSeconds(45)` → `2026-01-01T10:30:45.000Z`                              | Objeto original modificado |
// |                         | `.setMilliseconds(ms)`              | Define milissegundos       | `d.setMilliseconds(123)` → `2026-01-01T10:30:45.123Z`                        | Objeto original modificado |
// |                         | `.setTime(ms)`                      | Define timestamp           | `d.setTime(0)` → `1970-01-01T00:00:00.000Z`                                  | Objeto original modificado |
// | **Conversão / Formato** | `.toISOString()`                    | ISO string                 | `new Date(2025,0,1).toISOString()` → `"2025-01-01T00:00:00.000Z"`            | Novo string                |
// |                         | `.toDateString()`                   | Data legível               | `new Date(2025,0,1).toDateString()` → `"Wed Jan 01 2025"`                    | Novo string                |
// |                         | `.toTimeString()`                   | Hora legível               | `new Date(2025,0,1,15,30).toTimeString()` → `"15:30:00 GMT-0300 (Brasilia)"` | Novo string                |
// |                         | `.toLocaleDateString()`             | Data formatada             | `new Date(2025,0,1).toLocaleDateString("pt-BR")` → `"01/01/2025"`            | Novo string                |
// |                         | `.toLocaleTimeString()`             | Hora formatada             | `new Date(2025,0,1,15,30).toLocaleTimeString("pt-BR")` → `"15:30:00"`        | Novo string                |
// | **Estáticos Date**      | `Date.now()`                        | Timestamp atual            | `Date.now()` → `1735679940000` (ex.)                                         | ❌                          |
// |                         | `Date.parse(str)`                   | Timestamp de string        | `Date.parse("2025-01-01")` → `1735680000000`                                 | ❌                          |
// |                         | `Date.UTC(y,m,d,h,mi,s,ms)`         | Timestamp UTC              | `Date.UTC(2025,0,1)` → `1735680000000`                                       | ❌                          |
// |                         | `Date.prototype`                    | Protótipo padrão           | `Date.prototype` → `{}`                                                      | ❌                          |

// Obs.: JS corrige automaticamente datas inválidas
// Ex.: setDate(35) → pula para o mês seguinte

// Datas com locais e formatação:
// | Método                        | O que faz                  | Exemplo                      |
// | ----------------------------- | -------------------------- | ---------------------------- |
// | `toLocaleDateString("pt-BR")` | Converte em data do Brasil | `"20/11/2025"`               |
// | `toLocaleTimeString("pt-BR")` | Hora local                 | `"11:30:12"`                 |
// | `toLocaleString("pt-BR")`     | Data + hora                | `"20/11/2025 11:30:12"`      |
// | `toISOString()`               | ISO padrão global          | `"2025-11-20T14:30:12.123Z"` |

// Cálculos com datas:
// | Tarefa                     | Exemplo                  | Resultado       |
// | -------------------------- | ------------------------ | --------------- |
// | Diferença entre datas (ms) | `data2 - data1`          | `345600000`     |
// | Transformar ms → dias      | `ms / 86400000`          | `4 dias`        |
// | Somar dias                 | `setDate(getDate() + 7)` | +7 dias na data |

// ⚠️ Erros Comuns e Dicas:
// | Problema                              | Causa                     | Correção                      |
// | ------------------------------------- | ------------------------- | ----------------------------- |
// | Mês errado                            | `Month` começa em **0**   | Somar +1 na exibição          |
// | Fuso horário diferente                | Usa UTC de padrão         | Use `toLocaleString("pt-BR")` |
// | Datas de texto diferentes por browser | Formatos não padronizados | Sempre use formato **ISO**    |

// Exemplo rapidinho para treinar:
// const data = new Date("2025-11-20");

// console.log(data.toLocaleString("pt-BR"));
// console.log(data.getFullYear());
// console.log(data.getMonth() + 1);
