//sem template string utilizando concatenação simbolo de +

const nome = "Vinicios";
const idade = 2023-1991;
const cidadeDeNascimento = "Chopinzinho";
// const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
//console.log(apresentacao)


//template basicamente uma string modelo, com template string utilizando simbolo ` e $
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao)