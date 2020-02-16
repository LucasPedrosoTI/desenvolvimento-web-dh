const crypto = require('crypto');

const decipher = (mes) => {
    let key = '12345678123456781234567812345678';
    let iv = crypto.randomBytes(16)
    let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decrypted = decipher.update(mes, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8')
    return decrypted
}

const cipher = (mes) => {
    let key = '12345678123456781234567812345678';
    let iv = crypto.randomBytes(16)
    let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(mes, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
}

module.exports = cipher
module.exports = decipher