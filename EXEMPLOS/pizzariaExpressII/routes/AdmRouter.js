var express = require("express");
var router = express.Router();

const AdmController = require('../controllers/AdmController');

router.get('/login', AdmController.show);
router.post('/login', AdmController.login);
router.get('/logout', AdmController.logout);


module.exports = router;