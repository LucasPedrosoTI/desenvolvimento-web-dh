var express = require("express");
var router = express.Router();

const ClientController = require('../controllers/ClientController');

router.get('/clients', ClientController.index);

module.exports = router;
