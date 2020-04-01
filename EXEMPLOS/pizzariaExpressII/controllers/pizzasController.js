const pizzas = require('../database/Pizzas.json');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        res.render("index", { pizzas, busca: "" });
    },
    show: (req, res) => {

        // Capturando a pizza com o id passado na rota
        let pizza = pizzas.find(
            pizza => pizza.id == req.params.id
        );

        // Capturando a posição da pizza no array
        let pos = pizzas.indexOf(pizza);

        // determinando o id da próxima pizza e da anterior
        let idPrev = null;
        let idNext = null;

        if (pos > 0) {
            idPrev = pizzas[pos - 1].id;
        }

        if (pos < pizzas.length - 1) {
            idNext = pizzas[pos + 1].id;
        }

        // Retornando a pizza para o usuário
        if (pizza) {
            res.render("pizza", { pizza, idNext, idPrev });
        } else {
            res.render("erros/pizzaNaoEncontrada", { id: req.params.id });
        }
    },
    search: (req, res) => {
        let busca = req.query.q;
        if (busca) {
            let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
            return res.render('index', { pizzas: result, busca });
        } else {
            return res.redirect('/');
        }
    },
    edit: (req, res) => {
        // Carregar a pizza de id passado pela rota
        let pizza = pizzas.find(
            (pizza) => {
                return pizza.id == req.params.id;
            }
        )

        // Enviar view edit-pizza passando para ela a pizza carregada
        return res.render("crud-pizzas/edit", { pizza });
    },
    create: (req, res) => {
        return res.render("crud-pizzas/create");
    },
    store: (req, res) => {

        //Capturar as infos enviadas pelo user
        let { nome, ingredientes, preco } = req.body;

        ingredientes = ingredientes.split(","); //transforma em um array

        ingredientes = ingredientes.map(
                ing => ing.trim()
            ) // tira os espaços

        // tratar o upload do arquivo

        // Criar um objeto literal representando uma pizza com as informações enviadas
        let id = pizzas[pizzas.length - 1].id + 1;
        const pizza = { id, nome, ingredientes, preco: Number(preco), destaque: false, img: '' }

        // adicionar a pizza criada ao array de pizzas
        pizzas.push(pizza);

        // salvar o array de pizzas no pizzas.json
        fs.writeFileSync('./database/Pizzas.json', JSON.stringify(pizzas))

        // redirecionar o usuário de volta a tela de pizzas

        res.redirect('/pizzas')

    },
    list: (req, res) => {
        return res.render("crud-pizzas/list", { pizzas });
    },
    update: (req, res) => {
        // caputrar o id da pizza a ser alterada!
        let id = req.params.id

        // caputrar os novos dados da pizza

        let { nome, ingredientes, preco } = req.body

        ingredientes = ingredientes.split(","); //transforma em um array

        ingredientes = ingredientes.map(
            ing => ing.trim())


        // alterar os campos (exceto a imagem);
        let pizza = pizzas.find(p => id == p.id)

        pizza.nome = nome;
        pizza.preco = Number(preco);
        pizza.ingredientes = ingredientes;

        // salvar o array de pizzas no pizzas.json
        fs.writeFileSync('./database/Pizzas.json', JSON.stringify(pizzas))

        // redirecionar o usuário de volta a tela de pizzas

        res.redirect('/pizzas')

    },
    delete: (req, res) => {

        //remover a pizza do JSON
        pizzas.splice(pizzas.findIndex(e => e.id == req.params.id), 1) // a findIndex é usada para encontrar o elemento com o id passado, e o "1" remove somente sse elemento

        // salvar o array de pizzas no pizzas.json
        fs.writeFileSync('./database/Pizzas.json', JSON.stringify(pizzas))

        //redirecionar para a lista de pizzas
        res.redirect('/pizzas')
    }
}