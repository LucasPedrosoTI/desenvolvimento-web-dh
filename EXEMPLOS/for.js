papagaio = (texto) => {
    for (var i = 0; i <= 5; i++){
        console.log(texto)
    }
}
var contador

function naoPareDeContarImparesAte(numero){
    // Escreva aqui o seu código
    let contador = [];
    for (let index = 0; index <= numero; index++) {
        index % 2 != 0 ? contador.push(index) : "";         
    }    return contador.length
} 




/*function count(inicio, fim) {
    //Escreva seu código aqui
    do {
        console.log("O número atual é " + inicio + " e é menor que " + fim)
        inicio++
    } while (inicio < fim)
}*/


function count(inicio, fim) {
    //Escreva seu código aqui
    while (inicio<fim) {
        console.log("O número atual é " + inicio + " e é menor que " + fim)
        inicio++
    } 
}
//count(6,7);

function encontreUm5 (numeros){
    var i = 0
    do { console.log("Encontramos um 5!")
        i++
    } while (numeros[i] == 5) 
}

//encontreUm5([1,2,5,4]);

// Uso do parametro spread ("...") -- copia os dados de um array, objeto, etc
let notas = [1,2,3,4,5];

//console.log(Math.min(...notas));

// Uso do parametro Rest spread - quando o spread é usado nos parametros de uma função para que ela aceite um número indefinido de parametros

function subtrair (...numeros){
    return numeros.reduce((pilha, num) => pilha -= num);
}

//console.log(subtrair(1,2,3));

