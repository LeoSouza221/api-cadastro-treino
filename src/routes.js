const { Router } = require('express');
const UserController = require('./controllers/UserController');
const routes = Router();

routes.get('/api/user', UserController.get);
routes.get('/api/user/:_id', UserController.getById);
routes.post('/api/user', UserController.create);
routes.put('/api/user/:_id', UserController.update);
routes.delete('/api/user/:_id', UserController.delete);

module.exports = routes;
