const mongoose = require("mongoose"); //para conectar com o banco de dados

//criação de um objeto
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        type: Number,
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

const Users = mongoose.model("User", usersSchema);

module.exports = Users