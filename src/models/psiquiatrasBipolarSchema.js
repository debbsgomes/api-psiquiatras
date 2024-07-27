const mongoose = require("mongoose"); //para conectar com o banco de dados

//criação de um objeto
const psiquiatrasBipolarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephoneNumber: {
        type: Number,
        required: true
    },
    crm: {
        type: Number,
        required: true,
        unique: true
    }
}, {timestamps: true})

const psiquiatrasBipolar = mongoose.model("Psiquiatra", psiquiatrasBipolarSchema);

module.exports = psiquiatrasBipolar


// lista os objetos