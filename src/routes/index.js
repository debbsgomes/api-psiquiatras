const express = require("express");
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "tittle": "API de psiquiatras especializados em transtorno bipolar na cidade de Niterói/RJ",
        "version": "1.0.0",
        "message": "Criada com o proposito de listar os psiquiatras"
    })
})

module.exports = router