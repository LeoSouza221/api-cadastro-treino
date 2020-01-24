const express = require('express');
const app = express();
const cors = require('cors');

const auth = require('./utils/auth');
const userRouter = require('./routes/user');
const teacherRouter = require('./routes/teacher');
const studentRouter = require('./routes/student');
const exerciceRouter = require('./routes/exercice');
const trainingRouter = require('./routes/training');
const studentTrainingRouter = require('./routes/studentTraining');

// permite recebimento de parametros json
app.use(express.json());

// utiliza todas as rotas criadas no routes
app.use(auth.validate);
app.use('/api/user', userRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/student', studentRouter);
app.use('/api/exercice', exerciceRouter);
app.use('/api/training', trainingRouter);
app.use('/api/student-training', studentTrainingRouter);

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
