const ExerciceService = require('../services/ExerciceService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        ExerciceService.index(page)
            .then(exercice => res.json(exercice))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        ExerciceService.show(_id)
            .then(exercice => res.json(exercice))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async create(req, res) {
        const exercice = req.body;

        ExerciceService.store(exercice)
            .then(exercice => res.json(exercice))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async update(req, res) {
        const _id = req.params;
        const exercice = req.body;

        ExerciceService.update(_id, exercice)
            .then(exercice => res.json(exercice))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },
     
    async delete(req, res) {
        const _id = req.params;

        ExerciceService.destroy(_id)
            .then(exercice => res.json(exercice))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },
};
