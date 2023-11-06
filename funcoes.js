// let x = "";
// console.log(x)
// x = "oi";

// Tres formas de escrever funções
// 1. DECLARAÇÃO DE FUNÇÃO
// Primeiro (declara a função)
function imprimeTexto (texto) {
    console.log(texto)
}

// Segundo (executa a função 1 ou mais vezes)
imprimeTexto (soma());
//imprimeTexto("outro texto");

// função sem parametro, 
function soma (){
    // pode ter outras coisas antes do retorno, o retorno deve ser no final
    return 2 + 2;
}
//console.log(soma())
