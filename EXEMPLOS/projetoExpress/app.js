const express = require('express'); // IMPORTA A BIBLIOTECA
const rotas = require('./rotas/routes');
const app = express(); // ATIVA AS FUNCIONALIDADES NA VARIAVEL


//ROTAS

app.get('/', (req, res) => res.send("Olá Mundo!"))

app.get('/contatos', (req, res)=>res.send(["Contato1","Contato2"]));

app.get('/perfil', (req, res) => {
    res.send(boasVindas)
})

app.get('/produtos/:id?', (req, res) => {
    let {id} = req.params;
    res.send(`Eu tenho um produto com o id: ${id}`);
    
})

app.get('/serie/:id', (req, res) => {
    let {id} = req.params;
    console.log(`the id is ${id}`)
})

app.use('/produto', rotas);

//CRIANDO O SERVIDOR
app.listen(8000, () => {
    console.log("Levantando o servidor com Express")
});




