var express = require('express');
var router = express.Router();

const mailController = require('../controller/mailController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enviar', mailController.enviar );

module.exports = router;
