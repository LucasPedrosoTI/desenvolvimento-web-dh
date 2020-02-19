let cachorros = require("./pets.json")
var data = new Date()
var utc = data.getTimezoneOffset()


const darBanho = pet => {
    //adiciona a string ~banho ao pet.servicos
    //imprime uma note: dando banho em ataulfo
    //retorna o pet
    pet.servicos.push({"servico":"banho", "data": data})
    console.log(`Dando banho em ${pet.nome}`)
    return pet
}

const darVacina = pet => {
    //testa se o pet ja foi vacinado
    //caso nao:
   //adiciona a string "vacina" ao pet.servicos
    //imprime uma note: Vacinando ataulfo
    //retorna o pet
    //caso sim:
    // imprimir msg de erro
    pet.vacinado ? console.log(`Erro! O ${pet.nome} já foi vacinado!`) : 
    
    (console.log(`Vacinando ${pet.nome}`), 
    pet.vacinado = true, 
    pet.servicos.push({"servico":"vacina", "data":data}))

    return pet
}

// console.log(darBanho(cachorros[0]))

const tosar = pet => {
    pet.servicos.push({"servico":"tosar", "data":data})
    console.log(`Tosando ${pet.nome}`)
    return pet
}

const consulta = pet => {
    pet.servicos.push({"servico":"consulta", "data":data})
    console.log(`${pet.nome} esta em consulta`)
return pet
}

const mostrarServicos = pet => {
    for (const servico of pet.servicos) {
        if (servico.data){
        console.log(`${servico.servico}: ${servico.data.toLocaleDateString()}`);
        } else {
            console.log(`${servico}: DATA INDEFINIDA`)
        } 
    }
}

//serv e uma funcao que realiza um servico sobre o pet 
const aplicarServico = (pet, ...servicos) => {
     for (const serv of servicos) {
        pet = serv(pet)
     } 
     return pet
}
// darVacina(cachorros[0])
// consulta(cachorros[0])
// tosar(cachorros[0])
// mostrarServicos(cachorros[0])

console.log(aplicarServico(cachorros[0], darVacina, consulta, tosar, darBanho));

