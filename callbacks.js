//EXERCICIOS CALLBACKS -----------------------

//const dobro = num => num * 2;
//
//const triplo = num => num * 3;
//
//const aplicar = (num, funcao) => funcao(num);

function dobro (num){
    return num * 2
    };

function triplo (num) {
    return num * 3
    };

function aplicar (num, callback) {
    return callback(num)
    };

// console.log(aplicar(2, dobro)); // 4
// console.log(aplicar(4, triplo)); // 12

function adicionarHttp(url) {
     return url = "http://"+ url
    // escreva seu código aqui
}

function processar(sites, callback){
    // escreva seu código aqui
    let newArr = [];
    for (let i = 0; i < sites.length; i++) {
        sites[i] = callback(sites[i])
        newArr.push(sites[i]);
    } return newArr
}

var exemplo = ["www.tangoe.com", "www.msn.com", "www.pg.com"]


// console.log(processar(exemplo, adicionarHttp));
// sites[i] = "http://"+ sites[i];

var exemploComHttp = exemplo.map(site => "http://"+site); // ou exemplo.map(adicionarHttp   );
console.log(exemploComHttp);

for (let valor of exemplo) {
    let comHttp = [];
    comHttp.push(valor = "http://"+valor)
    console.log(comHttp);
    }   