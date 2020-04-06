const multer = require("multer");

//configurando as info do upload, destino + nome do arquivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// exportar o objeto multer com as suas configurações

module.exports = multer({ storage });