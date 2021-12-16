const express = require("express"); //chamo pois eu preciso usar o router
const router = express.Router(); //para utilizar as rotas feitas no controller
const controller = require("../controller/psiquiatrasBipolarController"); // pegar tudo dentro de routes

router.get("/all", controller.getAll);

router.post("/create", controller.createPsiquiatra)

router.patch("/update/:id", controller.updatePsiquiatraById)

router.delete("/delete/:id", controller.deletePsiquiatraById)

module.exports = router

