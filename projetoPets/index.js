const http = require("http");
const petshop = require('./utils/petshop');


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    if (req.url == "/listaspets") {
        let resultado = petshop.listarPets();

        return res.end(resultado);
    }
}).listen(3000, "localhost");