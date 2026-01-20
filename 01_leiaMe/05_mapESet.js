//Map
// | Seção                    | Método / Propriedade         | O que faz                       | Exemplo (resultado final)                                 | Mutável? |
// | ------------------------ | ---------------------------- | ------------------------------- | --------------------------------------------------------- | -------- |
// | **Criação**              | `new Map()`                  | Cria novo Map                   | `new Map()` → `Map(0) {}`                                 | ✅        |
// |                          | `new Map([[key,value],...])` | Cria Map com valores            | `new Map([["a",1],["b",2]])` → `Map(2) {"a"=>1,"b"=>2}`   | ✅        |
// | **Adição / Remoção**     | `.set(key,value)`            | Adiciona ou atualiza            | `map.set("c",3)` → `Map(3) {"a"=>1,"b"=>2,"c"=>3}`        | ✅        |
// |                          | `.delete(key)`               | Remove chave                    | `map.delete("a")` → `true`, Map agora → `{"b"=>2,"c"=>3}` | ✅        |
// |                          | `.clear()`                   | Remove todos itens              | `map.clear()` → `Map(0){}`                                | ✅        |
// | **Acesso / Verificação** | `.get(key)`                  | Retorna valor da chave          | `map.get("b")` → `2`                                      | ❌        |
// |                          | `.has(key)`                  | Verifica existência             | `map.has("a")` → `false`                                  | ❌        |
// | **Iteração**             | `.keys()`                    | Retorna iterador de chaves      | `map.keys()` → *Iterator*                                 | ❌        |
// |                          | `.values()`                  | Retorna iterador de valores     | `map.values()` → *Iterator*                               | ❌        |
// |                          | `.entries()`                 | Retorna iterador [chave, valor] | `map.entries()` → *Iterator*                              | ❌        |
// |                          | `.forEach(fn)`               | Itera sobre elementos           | `map.forEach((v,k)=>console.log(k,v))` → `"b 2"` `"c 3"`  | ❌        |
// | **Propriedades**         | `.size`                      | Quantidade de itens             | `map.size` → `2`                                          | ❌        |

// Set
// | Seção                    | Método / Propriedade | O que faz                                  | Exemplo (resultado final)                            | Mutável? |
// | ------------------------ | -------------------- | ------------------------------------------ | ---------------------------------------------------- | -------- |
// | **Criação**              | `new Set()`          | Cria novo Set vazio                        | `new Set()` → `Set(0){}`                             | ✅        |
// |                          | `new Set([values])`  | Cria Set com valores                       | `new Set([1,2,2,3])` → `Set(3){1,2,3}`               | ✅        |
// | **Adição / Remoção**     | `.add(value)`        | Adiciona valor único                       | `set.add(4)` → `Set(4){1,2,3,4}`                     | ✅        |
// |                          | `.delete(value)`     | Remove valor                               | `set.delete(2)` → `true`, Set agora → `{1,3,4}`      | ✅        |
// |                          | `.clear()`           | Remove todos valores                       | `set.clear()` → `Set(0){}`                           | ✅        |
// | **Verificação / Acesso** | `.has(value)`        | Verifica existência                        | `set.has(3)` → `true`                                | ❌        |
// | **Iteração**             | `.keys()`            | Retorna iterador de valores (igual values) | `set.keys()` → *Iterator*                            | ❌        |
// |                          | `.values()`          | Retorna iterador de valores                | `set.values()` → *Iterator*                          | ❌        |
// |                          | `.entries()`         | Retorna iterador [value, value]            | `set.entries()` → *Iterator*                         | ❌        |
// |                          | `.forEach(fn)`       | Itera sobre valores                        | `set.forEach(v=>console.log(v))` → `"1"` `"3"` `"4"` | ❌        |
// | **Propriedades**         | `.size`              | Quantidade de valores                      | `set.size` → `3`                                     | ❌        |
