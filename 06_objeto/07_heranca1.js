const ferrari = {
  modelo: "F40",
  velMax: 200,
};

const volvo = {
  modelo: "V40",
  velMax: 300,
};

console.log(ferrari.__proto__); // __proto__, busca a herança no pai e assim por diante
console.log(ferrari.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
