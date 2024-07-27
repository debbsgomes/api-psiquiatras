require("dotenv-safe").config();
const express = require("express"); //faz ligação http , crud
const cors = require("cors"); //não dar conflito de API
const db = require("./database/mongoCofig"); //chama a lógica da conexão

const index = require("./routes/index")

const app = express(); //chama o express

app.use(express.json());
app.use(cors());
app.use("/", index)

db.connect(); //conecta com o banco de dados

const psiquiatrasBipolarRoutes = require("./routes/psiquiatrasBipolarRoutes");

app.use("/", psiquiatrasBipolarRoutes);

module.exports = app
