const UserService = require('../services/UserService');

module.exports = {
    async get(req, res) {

        const { page = 1 } = req.query;
        
        UserService.index(page)
            .then(response => res.status(response.status).json(response.users))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        UserService.show(_id)
            .then(user => res.json(user))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        UserService.store(req.body)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async update(req, res) {
        const _id = req.params;
        const userInfo = req.body;
        
        UserService.update(_id, userInfo)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        UserService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async login(req, res) {
        const user = req.body;

        UserService.login(user)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    }
}