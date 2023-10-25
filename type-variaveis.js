//VAR primeira que surgiu no js uso mais liberado não necessariamente precisa declarar a variavel
// calcular area de um retangulo
//var altura = 5;
//var comprimento = 7;

//var area = altura * comprimento;
//console.log (area)

//LET surgiu em 2015
// calcular area retangulo
// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// }else {
//     area = (altura * comprimento) / 2;
// }

// console.log (area)

//CONST
const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

