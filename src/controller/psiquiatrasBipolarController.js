const Users = require("../models/psiquiatrasBipolarSchema");

const getAll = async(req, res) => {
    try{
        const users = await Users.find();
        res.status(200).json({
            message: "Usuário encontrado com sucesso",
            users
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    getAll
}