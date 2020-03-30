var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/busca', PizzasController.search)
router.get('/pizzas/:id', PizzasController.show);
router.post('/pedidos/add', PizzasController.add)

module.exports = router;