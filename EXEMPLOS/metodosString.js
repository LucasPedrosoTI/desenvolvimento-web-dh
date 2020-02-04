// str.length
//retorna a extensao de uma cadeia de texto

var string = "Hello, my name is Lucas."

var extension = string.length;

// console.log(extension);

// str.indexOf()
// retorna a posicao do primeiro resultado encontrado

console.log(string.indexOf("is")); // --> 15
console.log(string.indexOf("Pedro")); // --> -1

// str.slice()
// retorna onde comeca e termina uma cadeia determinada pelos numeros

console.log(string.slice(15, 24)); // --> is Lucas.

//str.trim()
// Elimina espacos no comeco e no fim, nao elimina os do meio

var trim = "  My name is Tomas   ";

console.log(trim.trim()); //--> "My name is Tomas"

// str.split()
// divide a string em um array de palavras, utiliza um separador especificado

string.split(" "); // retorna [ 'Hello,', 'my', 'name', 'is', 'Lucas.' ]

//str.replace()
// substitui as palavras de uma string pelo termo especificado

string.replace("Lucas", "Tomas"); // retorna Hello, my name is Tomas.

//--------------EXERCICIOS-----------------------------//

function substituicaoRapida (texto, busca, altera) {
    return texto.replace(busca, altera)
}

let textoNovo = substituicaoRapida('Boa tarde','tarde','noite');
console.log(textoNovo) //'Boa noite'

const menciona = (texto, palavra) => texto.indexOf(palavra) != -1;

menciona('Existem muitas linguagens de programação e javascript é uma delas','programação'); // true

var texto = "Olá, sou Carlos!";
var inicio = texto.indexOf("Carlos");
var final = texto.indexOf("!");
var nomeUsuario = texto.slice(inicio, final);

console.log(nomeUsuario);