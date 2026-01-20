// Função auxiliar: calcula a maior nota possível para o valor atual do saque
function calcularValorNota(valorSaque) {
  if (valorSaque >= 100) {
    return 100; // Se o valor for maior ou igual a 100, retorna nota de 100
  } else if (valorSaque >= 50) {
    return 50; // Se não, e for >= 50, retorna nota de 50
  } else if (valorSaque >= 10) {
    return 10; // Se não, e for >= 10, retorna nota de 10
  } else if (valorSaque >= 5) {
    return 5; // Se não, e for >= 5, retorna nota de 5
  } else if (valorSaque >= 1) {
    return 1; // Se não, e for >= 1, retorna nota de 1
  }
}

// Função auxiliar: monta a string de resultado com as notas utilizadas
function elaborarResultado(
  contador100,
  contador50,
  contador10,
  contador5,
  contador1
) {
  let resultado = ""; // Cria uma string vazia para acumular o resultado

  // Adiciona a quantidade de cada nota somente se for maior que zero
  if (contador100 > 0) {
    resultado += `${contador100} nota(s) de R$ 100. `;
  }
  if (contador50 > 0) {
    resultado += `${contador50} nota(s) de R$ 50. `;
  }
  if (contador10 > 0) {
    resultado += `${contador10} nota(s) de R$ 10. `;
  }
  if (contador5 > 0) {
    resultado += `${contador5} nota(s) de R$ 5. `;
  }
  if (contador1 > 0) {
    resultado += `${contador1} nota(s) de R$ 1. `;
  }

  return resultado; // Retorna a string completa com as notas
}

// Função principal: calcula quantas notas de cada tipo são necessárias para o saque
function sacarDinheiro(valorSaque) {
  // Inicializa contadores para cada tipo de nota
  let contador100 = 0;
  let contador50 = 0;
  let contador10 = 0;
  let contador5 = 0;
  let contador1 = 0;

  // Calcula a primeira nota a ser usada
  let valorNota = calcularValorNota(valorSaque);

  // Enquanto ainda houver valor para sacar
  while (valorSaque >= valorNota) {
    switch (valorNota) {
      case 100: // Se a nota for 100
        valorSaque -= 100; // Subtrai do valor do saque
        contador100++; // Incrementa contador de notas de 100
        break;
      case 50:
        valorSaque -= 50;
        contador50++;
        break;
      case 10:
        valorSaque -= 10;
        contador10++;
        break;
      case 5:
        valorSaque -= 5;
        contador5++;
        break;
      case 1:
        valorSaque -= 1;
        contador1++;
        break;
    }

    // Atualiza o valor da próxima nota a ser usada
    valorNota = calcularValorNota(valorSaque);
  }

  // Retorna a string formatada com a quantidade de cada nota
  return elaborarResultado(
    contador100,
    contador50,
    contador10,
    contador5,
    contador1
  );
}

// Exemplo de uso
console.log(sacarDinheiro(153));
// Saída: "1 nota(s) de R$ 100. 1 nota(s) de R$ 50. 3 nota(s) de R$ 1."
