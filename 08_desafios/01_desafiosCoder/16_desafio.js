function checarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return `${ano} é bissexto`;
  } else {
    return `${ano} não é bissexto`;
  }
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));

// Forma simplificada
function checarAnoBissexto2(ano) {
  return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto2(2020));
console.log(checarAnoBissexto2(2100));
