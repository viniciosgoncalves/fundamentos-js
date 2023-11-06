/* Arrow function, não precisa de return nem de chaves deixando o codigo menor, não pode ser nomeada,
ela sempre vem com uma const e o nome da variavel que vai ser utilizada*/
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num 1, num2) => num1 + num2;

// Arrow function com mais de 1 linha de instrução, utilizavel quando não cabe tudo em uma linha
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numero de 1 a 9"
    } else {
        return num1 + num2;
    }
}