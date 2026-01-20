const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj)); // Transforma objeto em JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // Transforma em objeto a partir de um JSON
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e":[]}'));
