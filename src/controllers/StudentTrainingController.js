const StudentTrainingService = require('../services/StudentTrainingService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        StudentTrainingService.index(page)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        StudentTrainingService.show(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        const studentTraining = req.body;

        StudentTrainingService.store(studentTraining)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async update(req, res) {
        const { _id } = req.params;
        const { _idTraining } = req.params;
        const studentTraining = req.body;

        StudentTrainingService.update(_id, _idTraining, studentTraining)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async updateTraining(req, res) {
        const _id = req.params;
        const training = req.body;

        StudentTrainingService.updateTraining(_id, training)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        StudentTrainingService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async deleteTraining(req, res) {
        const { _id } = req.params;
        const { _idTraining } = req.params;

        StudentTrainingService.destroyTraining(_id, _idTraining)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    }
}