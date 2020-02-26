const ExerciceService = require('../services/ExerciceService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        ExerciceService.index(page)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        ExerciceService.show(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        const exercice = req.body;

        ExerciceService.store(exercice)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async update(req, res) {
        const _id = req.params;
        const exercice = req.body;

        ExerciceService.update(_id, exercice)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },
     
    async delete(req, res) {
        const _id = req.params;

        ExerciceService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },
};
