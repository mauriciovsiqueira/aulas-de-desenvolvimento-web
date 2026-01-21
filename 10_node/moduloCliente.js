// require:
// Você pode usar o require para carregar três tipos de recursos:
// Módulos Internos (Core Modules): Já vêm com o Node.
// const fs = require('fs'); // Sistema de arquivos
// const path = require('path');

// Módulos Locais: Arquivos criados por você no projeto (é obrigatório usar o caminho relativo ./):
// const meuModulo = require('./meuModulo');

// Módulos de Terceiros: Instalados via NPM (ficam na pasta node_modules):
// const express = require('express');

const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);
