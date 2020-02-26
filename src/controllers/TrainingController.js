const TrainingService = require('../services/TrainingService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        TrainingService.index(page)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        TrainingService.show(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        const training = req.body;

        TrainingService.store(training)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async update(req, res) {
        const { _id } = req.params;
        const { _idExercice } = req.params;
        const exercice = req.body;

        TrainingService.update(_id, _idExercice, exercice)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async updateExercice(req, res) {
        const _id = req.params;
        const exercice = req.body;

        TrainingService.updateExercice(_id, exercice)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        TrainingService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async deleteExercice(req, res) {
        const { _id } = req.params;
        const { _idExercice } = req.params;

        TrainingService.destroyExercice(_id, _idExercice)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    }
}