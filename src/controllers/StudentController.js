const StudentService = require('../services/StudentService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        StudentService.index(page)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        StudentService.show(_id)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.json(error);
            });
    },

    async create(req, res) {
        const student = req.body;

        StudentService.create(student)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, res.json(error));
                res.json(error);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        StudentService.destroy(_id)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },
}