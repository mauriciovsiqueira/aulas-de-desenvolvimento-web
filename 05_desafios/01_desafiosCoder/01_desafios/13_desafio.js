function qualDia(dia) {
  switch (dia) {
    case 1:
      console.log("Domingo");
      console.log("Final de semana");
      break;

    case 2:
      console.log("Segunda");
      console.log("Dia util");
      break;

    case 3:
      console.log("Terça");
      console.log("Dia util");
      break;

    case 4:
      console.log("Quarta");
      console.log("Dia util");
      break;

    case 5:
      console.log("Quinta");
      console.log("Dia util");
      break;

    case 6:
      console.log("Sexta");
      console.log("Dia util");
      break;

    case 7:
      console.log("Sábado");
      console.log("Final de semana");
      break;

    default:
      console.log("Dia inválido");
  }
}

qualDia(2);
qualDia(1);
qualDia("a");

// O certo.

// function classificaDia(numero) {
//     switch (numero) {
//         case 1:
//             return "Fim de semana"
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             return "Dia útil"
//         case 7:
//             return "Fim de semana"
//         default:
//             return "Dia inválido"
//     }
// }

// console.log(classificaDia(1));
// console.log(classificaDia(2));
// console.log(classificaDia(3));
// console.log(classificaDia(4));
// console.log(classificaDia(5));
// console.log(classificaDia(6));
// console.log(classificaDia(7));
// console.log(classificaDia('a'));

// O otimizado.

// function qualDia(dia) {
//   switch (dia) {
//     case 1:
//       console.log("Domingo");
//       console.log("Final de semana");
//       break;

//     case 2:
//       console.log("Segunda");
//     case 3:
//       if (dia === 3) console.log("Terça");
//     case 4:
//       if (dia === 4) console.log("Quarta");
//     case 5:
//       if (dia === 5) console.log("Quinta");
//     case 6:
//       if (dia === 6) console.log("Sexta");
//       console.log("Dia util");
//       break;

//     case 7:
//       console.log("Sábado");
//       console.log("Final de semana");
//       break;

//     default:
//       console.log("Dia inválido");
//   }
// }

// qualDia(3);
// qualDia(1);
// qualDia("a");
