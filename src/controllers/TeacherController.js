const TeacherService = require('../services/TeacherService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        TeacherService.index(page)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getById(req, res) {
        const _id = req.params;

        TeacherService.show(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async getByIdStudents(req, res) {
        const _id = req.params;

        TeacherService.showStudent(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async create(req, res) {
        const teacher = req.body;

        TeacherService.store(teacher)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async updateStudents(req, res) {
        const { _id } = req.params;
        const { _idStudent } = req.params;

        TeacherService.updateStudents(_id, _idStudent)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });
    },

    async delete(req, res) {
        const _id = req.params;

        TeacherService.destroy(_id)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });

    },

    async deleteStudents(req, res) {
        const { _id } = req.params;
        const { _idStudent } = req.params;

        TeacherService.destroyStudents(_id, _idStudent)
            .then(response => res.status(response.status).json(response.data))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.status(error.status).json(error.err);
            });

    }

}