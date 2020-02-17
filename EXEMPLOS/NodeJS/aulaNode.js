const fs = require('fs'); //biblioteca para a leitura de dados e arquivos
const http = require('http') //armazena um objeto que contém propriedades e funcionalidades para criar o servidor
const moment = require('moment'); // biblioteca terceira para data
const criptografia = require('./utils/cryptoModule');

let secret_message = "Esse texto está decifrado";

var criptografado = criptografia.cipher(secret_message);

var descriptografado = criptografia.decipher(criptografado);

let dados = fs.readFileSync('./exemplo.txt', 'utf8'); //método FS para ler um arquivo
let data = moment();

let hoje = data.format('MMM do YY')

http.createServer(function (req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    if (req.url == '/') {
        res.end(`Bem-vindo 
        Texto gerado com a biblioteca FS: ${dados} 
        Teste com datas com a biblioteca moment: ${hoje}
        <----------- Teste com criptografia ----------->
        Mensagem: ${secret_message}
        Criptografada: ${criptografado}
        Descriptografada: ${descriptografado}
        `);
    }
    if (req.url == '/saudacao') {
       res.end('Olá! Estamos no localhost:3030/saudacao'); 
    }
}).listen(3030, 'localhost'); //configura o servidor para tratar as requisiçoes que chegarem

// cipher(secret_message);
// decipher(encrypted);
 