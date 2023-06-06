# projeto-final-reprograma-deborah
API Psiquiatras Transtorno Bipolar

# Projeto Final {Reprograma}



## 💻 Sobre o projeto



O projeto visa ajudar pacientes com transtorno bipolar a conseguir achar médicos especializados no assunto, principalmente para o público LGBT, já que os stigma é em dobro e nem todo profissional sabe lidar com esse tipo de paciente





## 🚀 Descrição da API Psiquiatras Bipolaridade



O projeto é uma API REST usada para listar psiquiatras especializados em transtorno bipolar, agora focando nos médicos de Niterói/RJ, talvez expandindo para outras localidades. O objetivo é facilitar o acesso desses pacientes a esses profissionais em um só lugar, já que outras plataformas não são muito especificas quanto a especialidade dos profissionais. 

A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os psiquiatras cadastrados, cadastrar novos psiquiatras, atualizar os dados e também deletar algum médico da lista.

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/)





## ⚙️ Funcionalidades/Objetivos

- Cadastro de psiquiatras especializados em transtorno bipolar;
- Acesso mais fácil para os pacientes;
- Comentários sobre a atuação dos médicos;
- Melhorar o atendimento a pessoas com transtorno bipolar;





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
- [MongoDB](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [VScode](https://code.visualstudio.com/)
- [Heroku](https://dashboard.heroku.com/apps)

### Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://www.npmjs.com/package/cors)





## 📁 Arquitetura MVC

```
 📁 projeto-final-reprograma-deborah
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 psiquiatrasBipolarController.js
   |
   |    |- 📁 data
   |         |- 📑 mongoCofig.js
   |
   |    |- 📁 models
   |         |- 📑 psiquiatrasBipolarSchema.js
   |
   |    |- 📁 routes
   |         |- 📑 index.js 
   |         |- 📑 psiquiatrasBipolarRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 projeto-final-reprograma-deborah.md
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

- local: [localhost:3000](http://localhost:3000/)
- Heroku: https://projeto-final-reprograma-debbs.herokuapp.com/all
  - Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku.





## 🔃 Retorna teste com apresentação

| Método HTTP | Endpoint                 | Descrição                        |
| ----------- | ------------------------ | -------------------------------- |
| GET         | `http://localhost:3000/` | Mensagem de apresentação (Index) |





## 🔃 Manipulação das Rotas:

| Método HTTP | Endpoint | Descrição                               |
| ----------- | -------- | --------------------------------------- |
| GET         | /all     | Retorna todos os psiquiatras            |
| POST        | /create  | Adiciona um psiquiatra a API            |
| UPDATE      | /update` | Atualiza os dados de um dos psiquiatras |
| DELETE      | /delete  | Deleta informações de um psiquiatra     |





## 📊 Dados para Psiquiatras:



- nome: texto e obrigatório
- endereço: texto e obrigatório
- email: texto, obrigatório e único
- telefone: numero e obrigatório
- crm: texto, obrigatório e único





## ✔️ API deve retornar seguinte JSON:

```
{
  "message": "Psiquiatra encontrado com sucesso",
  "psiquiatrasBipolar": [
    {
      "_id": "61bbe86f7e64f9275c675394",
      "name": "Dr. Renato Fernandes Elias",
      "adress": "Rua Gaviao Peixoto, 148 sala 803, Icaraí, Niterói",
      "email": "dreliasrenato@gmail.com",
      "telephoneNumber": 2139522984,
      "crm": 656070,
      "createdAt": "2021-12-17T01:31:27.498Z",
      "updatedAt": "2021-12-17T02:21:50.754Z",
      "__v": 0
    }
```





## 🚧 Projeto em Construção (futuras melhorias)



- Aumentar o alcance de cidades e o número de psiquiatras;
- Sistema de login;
- Sistema de avaliação de médicos;
- Colocar mais informações como preço da consulta, quais planos aceita e etc.
- Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação.



## 👋 Olar!!



![Kureha | Wiki | One Piece Brasil™ Amino](http://pm1.narvii.com/7431/b6e1758f1f33ee9c07f0490a3d192c28c6bbe0a0r1-340-292v2_00.jpg)



### Vamos nos conectar!

- [LinkedIn](https://www.https://www.linkedin.com/in/deborahgomes123/)
- [GitHub](https://github.com/debbsgomes)



### Deborah Gomes 😀 
