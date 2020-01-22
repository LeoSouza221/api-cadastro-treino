const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');
const teacherRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const exerciceRouter = require('./routes/exercice');
const trainingRouter = require('./routes/training');

// permite recebimento de parametros json
app.use(express.json());

// utiliza todas as rotas criadas no routes
app.use('/api/user', userRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/student', studentRouter);
app.use('/api/exercice', exerciceRouter);
app.use('/api/training', trainingRouter);

// usado quando nao encontra a rota expecificada
app.use((req, res, next) => {
    const error = new Error('Rota nao encontrada');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({ 
        error: { msg: error.message } 
    });
});

// permite acesso da aplicacao por qualquer rota
app.use(cors);

module.exports = app;
