function fatorial(numero) {
  if (numero == 0) {
    return 1;
  } else {
    // Chamada recursiva - função chama a si mesma, quase um loop, não utilizar com muitos numero, pode estourar a pilha.
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorial(10));
