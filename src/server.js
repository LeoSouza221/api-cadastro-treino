const mongoose = require('mongoose');
const app = require('./index');
const http = require('http');
const port = process.env.PORT || 3333;
const server = http.createServer(app);

// app rodando na porta 3333
server.listen(port, () => console.log(`server listen in port ${port}`));

// conexao com o banco
mongoose.connect('mongodb://localhost:27017/myapi', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
