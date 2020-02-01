//for in - só para iterar sobre objetos

let carro = {
    nome: "fox",
    ano: "2011"
}

for (let prop in carro){
    console.log(prop +": " + carro[prop]) //imprime cada propriedade e seu valor
}

//for of - iterar sobre arrays e string

let series = ["Friends", "GOT", "Breaking Bad"];

for (const valor of series) {
    console.log(valor);    
}