function maiorOuIgual(num1, num2) {
  if (num1 > num2) {
    return true;
  }
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));
console.log(maiorOuIgual(5, 10));

function maiorOuIgual2(num1, num2) {
  return typeof num1 == typeof num2 && num1 >= num2;
}

console.log(maiorOuIgual2(0, 0));
console.log(maiorOuIgual2(0, "0"));
console.log(maiorOuIgual2(5, 1));
console.log(maiorOuIgual2(5, 10));

const maiorOuIgual3 = (num1, num2) =>
  typeof num1 == typeof num2 && num1 >= num2;
console.log(maiorOuIgual3(0, 0));
console.log(maiorOuIgual3(0, "0"));
console.log(maiorOuIgual3(5, 1));
console.log(maiorOuIgual3(5, 10));
