require("dotenv-safe").config();
const express = require("express"); //faz ligação http , crud
const cors = require("cors"); //não dar conflito de API
const db = require("./database/mongoCofig"); //chama a lógica da conexão

const app = express(); //chama o express

app.use(express.json());
app.use(cors());

db.connect(); //conecta com o banco de dados

const projetoRoutes = require("./routes/psiquiatrasBipolarRoutes");

app.use("/", projetoRoutes);

module.exports = app
