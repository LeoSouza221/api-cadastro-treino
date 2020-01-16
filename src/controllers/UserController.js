const UserService = require('../services/UserService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;
        
        UserService.index(page)
            .then(user => res.json(user))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        UserService.show(_id)
            .then(user => res.json(user))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async create(req, res) {
        UserService.store(req.body)
            .then(user => res.json(user))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async update(req, res) {
        const _id = req.params;
        const userInfo = req.body;
        
        UserService.update(_id, userInfo)
            .then(user => res.json(user))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        UserService.destroy(_id)
            .then(msg => res.json(msg))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },
}