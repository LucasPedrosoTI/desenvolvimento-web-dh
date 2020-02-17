const crypto = require('crypto'); //biblioteca nativa de criptografia
let key = '12345678123456781234567812345678'; //senha para criptografar e desc...
let iv = crypto.randomBytes(16) //vetor para bufferizar a key

const criptografia = {
    cipher: (mes) => { // função para criptografar
    let cipher = crypto.createCipheriv('aes-256-gcm',key, iv)
    return cipher.update(mes, 'utf-8', 'hex');
    },
    decipher: (mes) => { // função para descriptografar
    let decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    return decipher.update(mes, 'hex', 'utf-8');
    }
}

module.exports = criptografia; 

