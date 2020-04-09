const users = require('../database/users.json');

module.exports = {
    show: (req, res, next) => {
        res.render('crud-adm/login', {error:null})
    },
    login: (req, res, next) => {
        // capturar as infos
        let { email, senha } = req.body;

        let user = users.findIndex(user => user.email == email && user.senha == senha);

        if (user != -1 ) {
            req.session.user = JSON.stringify(user);
            res.redirect("/pizzas")
        } else {
            res.render("crud-adm/login", {error:"Usuário/Senha inválido"})
        }

    },

    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/adm/login')
    },
}