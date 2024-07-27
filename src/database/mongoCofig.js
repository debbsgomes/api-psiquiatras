const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado!")
    } catch (error) {
        console.log("Erro: ", error.message);
    }
}

module.exports = {
    connect
}

// banco de dados