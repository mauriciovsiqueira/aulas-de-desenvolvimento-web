// node -v - para verificar a versão do node.

// sudo npm i -g nodemon - instalação de forma global.
// npm i nodemon - instalação normal.

// npm - é um gerenciador de pacotes do node.
// npm -v - para verificar a versão.
// npm i ou npm install - instalar os pacotes.
// npm i lodash - instala essa biblioteca - ele instalou e criou a pasta node_modules

// git/github
// Criação do .gitignore
// ele serve para bloquear arquivos que não vão para o github.
// Criar arquivo .gitignore e nela colocar isso:
// node_modules/

// nodemon no NixOS:
// Temporário (na sessão atual):
// nix-shell -p nodePackages.nodemon

// Permanente (via comando de perfil):
// nix-env -iA nixos.nodePackages.nodemon

// ou colocar na config.nix
// nodemon
