// typeof
//retorna o tipo de dado

var nome = "Lucas"
console.log(typeof nome); // string

var chove = true;
console.log(typeof chove); //boolena

//Number()
//transforma string em number

var numero = "4.5"
numero = Number(numero)
console.log(typeof numero); // number

//parseInt()
//transforma em numero inteiro (sem decimais), pode transformar string com caracteres nao numericos em number caso o 1º caactere seja um numero
var numeroInt = parseInt(numero);
console.log(numeroInt) // 4
console.log(typeof numeroInt); //number

//parseFloat()
// igual ao parseInt porem retorna os decimais

//String()
//transforma em string, menos objetos. Funciona com arrays
