const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

// Função bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

function Pessoa() {
  this.idade = 0;

  // SetInterval - função que serve para executar outra função.
  setInterval(
    function () {
      this.idade++;
      console.log(this.idade);
    }.bind(this),
    1000
  );
}

// Criando novo objeto.
new Pessoa();
