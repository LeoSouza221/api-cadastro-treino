const StudentTrainingService = require('../services/StudentTrainingService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        StudentTrainingService.index(page)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        StudentTrainingService.show(_id)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async create(req, res) {
        const studentTraining = req.body;

        StudentTrainingService.store(studentTraining)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async update(req, res) {
        const { _id } = req.params;
        const { _idTraining } = req.params;
        const studentTraining = req.body;

        StudentTrainingService.update(_id, _idTraining, studentTraining)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async updateTraining(req, res) {
        const _id = req.params;
        const training = req.body;

        StudentTrainingService.updateTraining(_id, training)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        StudentTrainingService.destroy(_id)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async deleteTraining(req, res) {
        const { _id } = req.params;
        const { _idTraining } = req.params;

        StudentTrainingService.destroyTraining(_id, _idTraining)
            .then(studTrain => res.json(studTrain))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    }
}