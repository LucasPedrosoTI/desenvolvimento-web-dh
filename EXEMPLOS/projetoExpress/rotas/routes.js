const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController')

const router = Router();

router.get('/criar', ProdutoController.criarProduto)
router.get('/deletar/:id', ProdutoController.deletarProduto);

module.exports = router;
