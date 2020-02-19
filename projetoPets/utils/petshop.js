let listaDePets = ["Bob", "Spike", "Tomas"];

const adicionar = nome => {
    listaDePets.push(nome);
    listaDePets.indexOf(nome) != -1 ?  `Parabéns! O pet ${nome} foi adicionado à lista de Pets` :  "Algo deu errado!"
}


const listarPets = () => {
    let conteudo = ""
    for (const valor of listaDePets) {
        conteudo += `
-----------------------------
Nome do pet: ${valor}
-----------------------------\n` 
    }
    return conteudo
}

// adicionar("bob");
// adicionar("spike");

// console.log(listarPets(listaDePets))

module.exports = {adicionar, listarPets}
