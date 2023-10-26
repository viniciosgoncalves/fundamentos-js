// TIPO DE DADO
// BOOLEANOS

//conversão implícita
//const numero = 455;
//const numeroString = "456";

//console.log (numero === numeroString)

//conversão explicita
//const numero = 456;
//const numeroString = "456";

//console.log (numero == numeroString)

const numero = 456;
const numeroString = "456";

// converter o valor que numeroString que esta como string e não number
//Number ()
//String ()
//console.log (numero + Number (numeroString))

//let telefone = 12341234;
//console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.