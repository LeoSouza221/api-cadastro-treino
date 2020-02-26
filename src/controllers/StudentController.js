const StudentService = require('../services/StudentService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        StudentService.index(page)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        StudentService.show(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        const student = req.body;

        StudentService.create(student)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.status(error.status).json(error.err);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        StudentService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },
}