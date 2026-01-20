// Afeta o mais próximo no switch, while e for.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break sai do laço quando utilizado.
for (x in nums) {
  if (x == 5) {
    break;
  }

  console.log(x + " = " + nums[x]);
}

// continue pula no quando utilizado.
for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(y + " = " + nums[y]);
}

// Rótulo
externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo; // Sem o rótulo ele afeta o laço interno
    console.log(`Par = ${a}, ${b}`);
  }
}
