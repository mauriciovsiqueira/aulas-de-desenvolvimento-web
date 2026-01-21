// require - ele seleciona o arquivo com os modulos - ./modulo é o arquivo e onde ele está.
const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);
