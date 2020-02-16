const express = require('express'); // IMPORTA A BIBLIOTECA
const app = express(); // ATIVA AS FUNCIONALIDADES NA VARIAVEL

let produto = {
    "tipoProduto" : null,
    "preco" : null,
    "quantidade" : null,
}

app.get('/produto/adicionar', (req, res) => 
    res.send(produto)
);

app.post('/produto/criar', (req, res) => {
    res.send(produto = {
        "tipoProduto":"living",
        "preco":1245,
        "quantidade":300,
    })
})

// app.listen(7000, () => {
//     console.log("Levantando o servidor com Express")
// });
