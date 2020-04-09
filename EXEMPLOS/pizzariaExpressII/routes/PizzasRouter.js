var express = require("express");
var router = express.Router();

const upload = require("../lib/upload");
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado');

const PizzasController = require("../controllers/PizzasController");

/* GET home page. */
router.get("/", PizzasController.index);
router.get("/busca", PizzasController.search);
router.get("/pizzas/:id/edit",verificaUsuarioLogado , PizzasController.edit);
router.get("/pizzas/create", verificaUsuarioLogado, PizzasController.create);
router.get("/pizzas/:id", PizzasController.show);
router.get("/pizzas", verificaUsuarioLogado, PizzasController.list);
router.post("/pizzas", verificaUsuarioLogado, upload.single("img"), PizzasController.store);
router.put("/pizzas/:id/update", verificaUsuarioLogado, PizzasController.update);
router.delete("/pizzas/:id", verificaUsuarioLogado, PizzasController.delete);

module.exports = router;