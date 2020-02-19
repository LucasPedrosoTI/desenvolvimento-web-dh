//Requisitando o objeto fs
//let fs = require('fs');

//lendo o arquivo pets.json e armazenando em stringJson
//let stringJson = fs.readFileSync("pets.json", "utf-8");

//transformar a string json em obeto:

//let cachorros = JSON.parse(stringJson); 

let cachorros = require("./pets.json")

//let nome = "Lucas Pedroso Santos";

//console.log(nome.indexOf("Pedroso"));

//funcao contem com os parametros busca e texto que retorna true se encontrar a busca no texto

contem = (texto, busca) => texto.indexOf(busca) >= 0

var teste = contem("agulha no palheiro","agulha")
console.log(teste);

const buscaCachorrosPorNome = (trecho) => {
    let resultado = cachorros.filter(
        cachorro => {
            return contem(trecho, cachorro.nome);
        }
        );
        return resultado;
};

const buscarCastrado = cachorros.filter((cachorro) => cachorro.castrado);

console.log(buscarCastrado);