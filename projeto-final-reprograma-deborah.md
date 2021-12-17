# Projeto Final {Reprograma}

[![img](https://github.com/elisabetealves/reprograma-estante-de-historias/raw/main/imagens/img.png)](https://github.com/elisabetealves/reprograma-estante-de-historias/blob/main/imagens/img.png)



## 💻 Sobre o projeto



Eu sou apaixonada por leitura e assim como eu existem milhares de pessoas pelo mundo, mas tem pessoas que além de amor pela leitura também amam escrever suas histórias, mas não é segredo para ninguém que, infelizmente, o Brasil não é um país que valoriza as artes em geral, incluindo a literatura. Ser escritor iniciante e independente no Brasil não é fácil, dentre as centenas de obras recebidas pelo departamento editorial, são priorizados aqueles de escritores conhecidos ou blogueiros populares. Geralmente, só 12% das 800 mil propostas são entregues às editoras, ou seja, apenas 15 mil se tornam livros.

A falta de interesse de muitas editoras por escritores iniciantes e independentes fazem com que esses escritores enfrentem um leão por dia para que suas obras possam ter visibilidade, além disso existe o custo que o autor deve arcar com a impressão do livro e o custo do envio e muitos não tem condições para tal.

hffffggffgfffgfggfe tipo de entretenimento.





## 🚀 Descrição da API Estante de Histórias



O projeto é uma API REST que permite que autores independentes possam cadastrar seus livros e disponibilizá-los ao usuário. Assim todos ganham; o usuário ganha com acesso a produções independentes, tem proximidade com os autores e ainda tem acesso a produções e festivais exclusivos. O autor ganha uma nova janela de exibição para sua obra com uma API especializada, alcance de público para sua obra e a possibilidade de ganho financeiro vendendo sua obra de forma independente ou fechando um contrato com uma editora já que sua obra terá alta visibilidade.

A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os livros e autores cadastrados, cadastrar novos livros e autores, atualizar os dados, avaliação do livro, o usuário tem a oportunidade de fazer comentários e também deletar livros e autores.

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)



## 🔗 Link

- [Apresentação](https://www.canva.com/design/DAEjjh5kMho/o-lpglTMDauF-CRLx2e6Dw/view?utm_content=DAEjjh5kMho&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu)



## ⚙️ Funcionalidades/Objetivos

- Cadastro dos autores e seus livros para maior visibilidade;
- Disponibilidade dos livros gratuitamente para acesso dos usuários;
- Avaliação dos livros através de like ou dislike e comentários dos usuários;
- Simplificar a vida dos escritores independentes e dos usuários;



## 📚 Aprendizados

> ⚠️ O projeto final consiste em uma API fundamentada no CRUD. O CRUD é um acrônimo para Create(CRIAR), Read(LER-CONSULTAR), Update(ATUALIZAR) e Delete(DELETAR). São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:



| OPERAÇÃO | MONGODB     | MONGOOSE |
| -------- | ----------- | -------- |
| C`REATE` | insertOne() | save()   |
| R`EAD`   | find()      | find()   |
| U`PDATE` | updateOne() | save()   |
| D`ELETE` | deleteOne() | remove() |





## 🛠️ Tecnologias utilizadas nesse projeto



Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)

### Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [modemon](https://www.npmjs.com/package/nodemon)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)



## 📁 Arquitetura MVC

```
 📁 reprograma-estante-de-historias
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 autoresControllers.js
   |         |- 📑 comentariosControllers.js
   |         |- 📑 livrosControllers.js 
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |    |- 📁 models
   |         |- 📑 autor.js
   |         |- 📑 comentario.js
   |         |- 📑 livro.js
   |
   |    |- 📁 routes
   |         |- 📑 autores.routes.js 
   |         |- 📑 comentarios.routes.js
   |         |- 📑 livros.routes.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
```



## ⚙️ Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                                            | Comando/informação |
| ------------------------------------------------ | ------------------ |
| Faça o fork                                      | `botão de forkar`  |
| Faça o clone                                     | `git clone`        |
| Instale as dependências                          | `npm i`            |
| Crie seu .env e inclua as variáveis e os valores | `MONGODB_URL`      |
| utilize o script de dev                          | `npm dev`          |

MONGODB_URL = URL do `MongoDb Atlas` Banco de dados orientado a documentos e interface na nuvem.



## 🔃 Rotas

- local: [http://localhost:7070](http://localhost:7070/)
- Heroku: https://estante-de-historias.herokuapp.com/
  - Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku



## 🔃 Retorna a documentação no swagger

Swagger - Heroku: https://estante-de-historias.herokuapp.com/api-docs/

| Método HTTP | Endpoint                         | Descrição            |
| ----------- | -------------------------------- | -------------------- |
| GET         | `http://localhost:7070/api-docs` | documentação swagger |



## 🔃 Retorna teste com apresentação

| Método HTTP | Endpoint                 | Descrição                        |
| ----------- | ------------------------ | -------------------------------- |
| GET         | `http://localhost:7070/` | Mensagem de apresentação (Index) |



## 🔃 Manipulação das Rotas de Autores:

| Método HTTP | Endpoint             | Descrição                         |
| ----------- | -------------------- | --------------------------------- |
| GET         | `/autores`           | Retorna todos os autores          |
| GET         | `/nome`              | Retorna autor específico por nome |
| GET         | `/autores/:id`       | Retorna autor específico por id   |
| POST        | `/autores/cadastrar` | Cria/cadastra um novo autor       |
| PUT         | `/autores/:id`       | Altera informações de um autor    |
| DELET       | `/autores/:id`       | Remove um autor específico        |



## 🔃 Manipulação das Rotas de Comentarios:

| Método HTTP | Endpoint            | Descrição                               |
| ----------- | ------------------- | --------------------------------------- |
| GET         | `/comentario`       | Retorna todos os comentários            |
| GET         | `/comentario/:id`   | Retorna um comentário específico por id |
| POST        | `/comentario/criar` | Cria um novo comentário                 |
| PUT         | `/comentario/:id`   | Altera informações de um comentário     |
| DELET       | `/comentario/:id`   | Remove um comentário específico         |



## 🔃 Manipulação das Rotas de Livros:

| Método HTTP | Endpoint              | Descrição                           |
| ----------- | --------------------- | ----------------------------------- |
| GET         | `/livros`             | Retorna todos os livros cadastrados |
| GET         | `/livros/genero`      | Retorna um livro específico gênero  |
| GET         | `/livros/:id`         | Retorna um livro específico por id  |
| POST        | `/livros/cadastrar`   | Cria/cadastra um novo livro         |
| PUT         | `/livros/:id`         | Altera informações de um livro      |
| PATCH       | `/livros/:id`         | atualiza informações por parte      |
| DELET       | `/livros/:id`         | Remove um livro específico          |
| POST        | `/livros/:id/like`    | Dar um like em um livro             |
| POST        | `/livros/:id/dislike` | Dar um dislike em um livro          |



## 📊 Dados para Collection Autores

- id: autogerado e obrigatório
- nome: texto e obrigatório
- biografia: texto e obrigatório
- email: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório



## ✔️ API deve retornar seguinte JSON:

```
{
    "message": "Autor cadastrado com sucesso!",
    "autor": {
        "_id": "60df0799f34e3c6ebca1dce0",
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
        "__v": 0
    }
}
```



## 📊 Dados para Collection Livros

- id: autogerado e obrigatório
- like: opcional
- titulo: texto e obrigatório
- sinopse: texto e obrigatório
- autor: referência do autor cadastrado previamente obrigatório
- genero: texto e obrigatório
- paginas: número e obrigatório
- idioma: texto e obrigatório
- exibição: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório



## ✔️ API deve retornar seguinte JSON:

```
{
    "likes": 1,
    "criadoEm": "2021-07-02T12:43:39.099Z",
    "_id": "60df0a0382bb996448b380c0",
    "titulo": "O casamento",
    "sinopse": "PARA OS NOIVOS É O DIA MAIS IMPORTANTE DE SUAS VIDAS Meses atrás, os amigos diriam que o namoro de Plínio e Diana tinha prazo de validade. Eles se conheceram de um jeito bizarro, pensam completamente diferente e nenhuma das famílias aprova o relacionamento. Mas eles resistiram a tudo. E agora vão se casar. PARA O DETETIVE É A MELHOR CHANCE DE PEGAR UM CRIMINOSO O mais ntegro dos convidados esconde um segredo devastador. Mas alguém sabe e está disposto a espremê-lo com chantagens.Enquanto a plateia espera ansiosa em frente ao altar, algo brutal acontece na antessala. Só quando veem as paredes lavadas com sangue é que os convidados se rendem ao desespero. Começa uma confusão para interromper a marcha nupcial e chamar a polícia. Ninguém sabe o que fazer. E Bardelli, que lidava com um caso de extorsão, descobre que se meteu em algo muito pior. Agora, ele é o único capaz de encontrar respostas. O problema é que as mortes não param de acontecer...",
    "autor": {
        "criadoEm": "2021-07-02T12:24:59.726Z",
        "_id": "60df0799f34e3c6ebca1dce0",
        "nome": "Victor Bonini",
        "biografia": "Victor Bonini nasceu em São Paulo, capital, e se mudou para Vinhedo, interior do estado, durante a infância. Voltou à metrópole aos dezoito anos para cursar Jornalismo na Faculdade Cásper Líbero.O primeiro passo do escritor foi ler muito, o segundo, começar a desenvolver suas próprias histórias.",
        "email": "victorbonini@gmail.com",
         "__v": 0
    },
    "genero": "suspense",
    "paginas": 368,
    "idioma": "poetugues",
    "exibicao": "download do livro",
    "__v": 0
}
```



## 📊 Dados para Collection comentário

- id: autogerado e obrigatório
- comentario: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório



## ✔️ API deve retornar seguinte JSON:

```
{
    "criadoEm": "2021-07-05T16:34:19.089Z",
    "_id": "60df0bdcf0a295a0f4207f91",
    "comentario": "Nunca tinha lido nada de Victor Bonini e confesso que me surpreendi e muito. História bem traçada e com final que para mim, foi inimaginável.",
    "__v": 0
} 
```



## 🚧 Projeto em Construção (futuras melhorias)



- Autenticação das Rotas;
- Sistema de login;
- Uma rota para que os autores possam enviar seus manuscritos para as editoras cadastradas;
- Ranking;
- Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação.



## 👋 Saudações, Eli!

*Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!* *Qualquer dúvida ou sugestão, chama no contatinho!*

[![Gif Yeah](https://camo.githubusercontent.com/8502a673c9aabf92ac6141e77e9fd62a79b8951aee2d2db43ac8d8b4508241db/68747470733a2f2f692e7069636173696f6e2e636f6d2f70696339312f38646438383063343763666337363165383035373435633934313039376164622e676966)](https://camo.githubusercontent.com/8502a673c9aabf92ac6141e77e9fd62a79b8951aee2d2db43ac8d8b4508241db/68747470733a2f2f692e7069636173696f6e2e636f6d2f70696339312f38646438383063343763666337363165383035373435633934313039376164622e676966)

### Vamos nos conectar!

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)

### Feito com 💜 por Elisabete Alves