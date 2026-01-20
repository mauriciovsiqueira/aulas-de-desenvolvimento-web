function saudacaoUpdate1(nome) {
  if (typeof nome !== "string") {
    return "Nome inválido";
  }

  nome = nome.toLowerCase();
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  const horaDoDia = new Date().getHours();

  const horaSaudacao =
    horaDoDia < 12 ? "Bom dia" : horaDoDia < 18 ? "Boa tarde" : "Boa noite";

  return `${horaSaudacao}, ${nomeFormatado}! Fico feliz de ter você por aqui!!!`;
}

console.log(saudacaoUpdate1("Maurício"));
console.log(saudacaoUpdate1("mAURÍcio"));
console.log(saudacaoUpdate1("MAURÍCIO"));
console.log(saudacaoUpdate1(123));
