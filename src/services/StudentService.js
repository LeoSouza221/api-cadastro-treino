const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

module.exports = {
    async index(page) {
        try {
            const data = await Student.paginate({}, { page, limit: 10 });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await Student.findById(_id);
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async create(student) {
        try {
            const { user } = student;
            const isTeacher = await Teacher.findOne({ user });

            if (isTeacher) return { data: { msg: 'Usuario cadastrado ja e um personal' }, status: 200}

            const data = await Student.create(student);

            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroy(_id) {
        try {
            await Student.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { data: { msg: 'Estudante deletado com sucesso' }, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },
}