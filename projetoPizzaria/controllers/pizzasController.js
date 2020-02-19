const pizzas = [
    {
        "nome": "pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni"
        ]
    },
    {
        "nome": "marguerita",
        "ingredientes": [
            "mussarela",
            "tomate",
            "manjericão"
        ]
    }
]

function listarPizzas(req, res) {
    return res.send(pizzas)
}

function mostrarPizza(req, res){
    let {id} = req.params
    if (id<pizzas.length) {
        return res.send(pizzas[id]);
    } else{
        return res.send('Pizza não encontrada')
    } 
}

module.exports = { listarPizzas , mostrarPizza }