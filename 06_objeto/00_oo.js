// Código não executavel..

// Procedural - função
function processamento(valor1, valor2, valor3) {}

// OO - objeto
objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    //...
  },
};

objeto.processamento(); // Foco passou a ser o objeto.

// Princípios importantes:
// abstração.
// encapsulamento.
// herança (prototype)
// polimorfismo

// 1. Abstração

// Mostrar só o essencial e esconder os detalhes.

// Você cria algo simples de usar, sem mostrar como tudo funciona por dentro.

class Carro {
  ligar() {
    console.log("Carro ligado!");
  }
}

const carro = new Carro();
carro.ligar(); // Não sabemos como ele liga — só usamos o método

// Ideia: você usa uma “interface” (métodos simples) sem se preocupar com o funcionamento interno.

// 2. Encapsulamento

// Proteger os dados internos de um objeto, permitindo o acesso só de forma controlada.

// Em vez de deixar tudo público, usamos métodos (getters e setters) para ler ou alterar dados com segurança.

class ContaBancaria {
  #saldo = 0; // o "#" torna o atributo privado

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.verSaldo()); // 100
// console.log(conta.#saldo); ❌ Erro! saldo é privado

// Ideia: o objeto protege seus dados e só permite acesso da forma certa.

// 3. Herança

// Reaproveitar código de uma classe em outra.

// Uma classe “filha” herda características e comportamentos de uma classe “pai”.

class Animal {
  comer() {
    console.log("O animal está comendo");
  }
}

class Cachorro extends Animal {
  latir() {
    console.log("Au au!");
  }
}

const dog = new Cachorro();
dog.comer(); // herdado da classe Animal
dog.latir(); // método próprio

// Ideia: evita repetir código — você cria classes que herdam comportamento de outras.

// 4. Polimorfismo

// “Muitas formas”: diferentes objetos podem usar o mesmo método, mas agir de forma diferente.

class Animal {
  fazerSom() {
    console.log("Som genérico");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au!");
  }
}

const animais = [new Gato(), new Cachorro()];
animais.forEach((a) => a.fazerSom());
// Saída:
// Miau!
// Au au!

// Ideia: o mesmo método (fazerSom()) se comporta de maneiras diferentes dependendo do objeto.

// Resumo geral
// Abstração, Mostra só o essencial, carro.ligar(), sem mostrar detalhes
// Encapsulamento, Protege dados internos, #saldo privado, acesso via métodos
// Herança, Reaproveita código, class Cachorro extends Animal
// Polimorfismo, Mesmo método, ações diferentes	animal.fazerSom() -> “Miau” ou “Au au”

// ======================================================================================

// Object.keys(pessoa)

// Retorna um array com os nomes das propriedades (as chaves) do objeto.

// ["nome", "idade", "peso"]

// Object.values(pessoa)

// Retorna um array com os valores correspondentes a cada chave.

// ["Ana", 2, 13]

// Object.entries(pessoa)

// Retorna um array de arrays, onde cada subarray tem a forma [chave, valor].

// [
//   ["nome", "Ana"],
//   ["idade", 2],
//   ["peso", 13]
// ]
