const pizzas = require('../database/pizzas.json');

module.exports = {
    index: (req, res) => {
        res.render('index', { pizzas }) // o mesmo que {pizza:pizza}
    },

    pizza: (req, res) => {

        //capturando a pizza com o id passado na rota
        let pizza = pizzas.find(pizza => pizza.id == req.params.id);

        // retornando a pizza ao usuário

        if (pizza) {
            res.render('pizza', { pizza });
        } else {
            res.render("error", { id: req.params.id })
        }
    }

}