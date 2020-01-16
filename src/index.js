const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// conexao com o banco
mongoose.connect('mongodb://localhost:27017/myapi', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// permite recebimento de parametros json
app.use(express.json());
// utiliza todas as rotas criadas no routes
app.use(routes);
// permite acesso da aplicacao por qualquer rota
app.use(cors);



// app rodando na porta 3333
app.listen(3333);
