const TrainingService = require('../services/TrainingService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        TrainingService.index(page)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        TrainingService.show(_id)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async create(req, res) {
        const training = req.body;

        TrainingService.store(training)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async update(req, res) {
        const { _id } = req.params;
        const { _idExercice } = req.params;
        const exercice = req.body;

        TrainingService.update(_id, _idExercice, exercice)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async updateExercice(req, res) {
        const _id = req.params;
        const exercice = req.body;

        TrainingService.updateExercice(_id, exercice)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        TrainingService.destroy(_id)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async deleteExercice(req, res) {
        const { _id } = req.params;
        const { _idExercice } = req.params;

        TrainingService.destroyExercice(_id, _idExercice)
            .then(training => res.json(training))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    }
}