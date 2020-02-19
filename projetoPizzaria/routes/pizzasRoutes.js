const express = require('express');
const router = express.Router();

const pizzasController = require('../controllers/pizzasController')

router.get('/', pizzasController.listarPizzas)

router.get('/:id', pizzasController.mostrarPizza)

module.exports = router;