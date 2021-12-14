const express = require("express"); //chamo pois eu preciso usar o router
const router = express.Router(); //para utilizar as rotas feitas no controller
const controller = require("../controller/psiquiatrasBipolarController"); // pegar tudo dentro de routes

router.get("/all", controller.getAll);

module.exports = router

