const fs = require('fs'); //biblioteca para a leitura de dados e arquivos
const http = require('http') //armazena um objeto que contém propriedades e funcionalidades para criar o servidor
const moment = require('moment'); // biblioteca terceira para data
const crypto = require('crypto'); // biblioteca nativa para criptografia

let iv = crypto.randomBytes(16) //initialization  vector of 16 bytes
let secret_message = "Esse texto está decifrado";
let key = '12345678123456781234567812345678';
var encrypted;
var decrypted;

function cipher (mes){
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    encrypted = cipher.update(mes, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
}

function decipher (mes){
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decrypted = decipher.update(mes, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8')
    return decrypted
}

let dados = fs.readFileSync('./exemplo.txt', 'utf8');
let data = moment();

let hoje = data.format('MMM do YY')

http.createServer(function (req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    if (req.url == '/') {
        res.end(`Bem-vindo 
        Texto gerado com a biblioteca FS: ${dados} 
        Teste com datas com a biblioteca moment: ${hoje}
        Teste com criptografia:
        Mensagem: ${secret_message}
        Criptografada: ${encrypted}
        Descriptografada: ${decrypted}
        `);
    }
    if (req.url == '/saudacao') {
       res.end('Olá! Estamos no localhost:3030/saudacao'); 
    }
}).listen(3030, 'localhost'); //configura o servidor para tratar as requisiçoes que chegarem

cipher(secret_message);
decipher(encrypted);
 