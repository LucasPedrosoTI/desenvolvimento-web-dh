let frutas = ["maçã", "banana", "uva"];
let frutasDois = ["laranja", "abacate"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome: "Lucas",
    idade: "25",
}

let infoPessoal = {
    tel: 123456789,
    rg: 1223465456,
    ...pessoa
}

console.log(infoPessoal);

function letras(...params) {
    console.log(params)
}

letras("a", "b", "c");