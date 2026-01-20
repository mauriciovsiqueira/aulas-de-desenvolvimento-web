// Declaração com "var" <- visivel fora do scopo do código (não tem escopo de função)
{
  {
    {
      {
        var sera = "Será???";
      }
    }
  }
}

console.log(sera);

function teste() {
  var a = 123;
  console.log(a);
}

teste();

// Não pode acessar variaveis de funções fora do escopo da função
// Pode ter variavéis de forma global ou no escopo
// var permite substituir a variavel usando o mesmo dado

// Declaração com "let" <- visivel dentro do escopo do código (tem escopo de função)
let numero = 1;
{
  let numero = 2;
  console.log("dentro = ", numero);
}

console.log("fora = ", numero);

// Usando var em loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("i =", i);

const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();

// Usando let em loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("i =", i);

const funcs2 = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();