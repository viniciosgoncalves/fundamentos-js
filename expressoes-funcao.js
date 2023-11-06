// forma declarativa declarando a função, mais classica passando ou não parametros e dentro dela codigo
function minhaFuncao(parametro) {
    //bloco de codigo
}
minhaFuncao("parametro")

// expressão de função
//const soma = function(num1, num2) {return num1 + num2}
console.log(soma (1, 1))

// diferença principal? HOISTING
// funções e variaveis são "listadas" no topo do arquivo.
console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {return num1 + num2}
