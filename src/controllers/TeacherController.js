const TeacherService = require('../services/TeacherService');

module.exports = {
    async get(req, res) {
        const { page = 1 } = req.query;

        TeacherService.index(page)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getById(req, res) {
        const _id = req.params;
        console.log(_id)
        TeacherService.show(_id)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async getByIdStudents(req, res) {
        const _id = req.params;

        TeacherService.showStudent(_id)
            .then(students => res.json(students))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async create(req, res) {
        const teacher = req.body;

        TeacherService.store(teacher)
            .then(teacher => res.json(teacher))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });
    },

    async updateStudents() {

    },

    async delete(req, res) {
        const _id = req.params;

        TeacherService.destroy(_id)
            .then(msg => res.json(msg))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });

    },

    async deleteStudents(req, res) {
        const _id = req.params;
        const _idStudent = req.params;

        TeacherService.destroyStudents(_id, _idStudent)
            .then(msg => res.json(msg))
            .catch(error => {
                console.error.bind(console, `Error ${error}`); 
                res.json(error);
            });

    }

}