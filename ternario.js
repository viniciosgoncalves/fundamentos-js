//estrutura sem ternario
const idadeMinima = 18;
const idadeCliente = 16;

/**
if (idadeCliente >= 18) {
    console.log("cerveja")
} else {
    console.log("suco")
}
**/

//estrutura com operador ternario é parecido com um if, é um ternario pois tem 3 operadores >= maior igual, ? separar as duas partes da comparação, : separam as duas partes do resultado.
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
