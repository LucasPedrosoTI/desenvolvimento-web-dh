var express = require('express');
var router = express.Router();
const pizzasController = require('../controllers/pizzasController');

/* GET home page. */
router.get('/', pizzasController.index);

router.get('/pizzas/:id', pizzasController.pizza);

module.exports = router;