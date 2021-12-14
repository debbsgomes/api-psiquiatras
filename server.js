const app = require ("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Olá divas. Estou na porta ${PORT}`);
})