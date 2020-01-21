const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

module.exports = {
    async index(page) {
        try {
            return await Student.paginate({}, { page, limit: 10 });
        } catch(err) {
            return err;
        }
    },

    async show(_id) {
        try {
            return await Student.findById(_id);
        } catch(err) {
            return err;
        }
    },

    async create(student) {
        try {
            const { user } = student;

            const isTeacher = await Teacher.findOne({ user });

            if (isTeacher) return { msg: 'Usuario cadastrado ja e um personal' }

            return await Student.create(student);
        } catch(err) {
            return err;
        }
    },

    async destroy(_id) {
        try {
            await Student.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { msg: 'Estudante deletado com sucesso' };
        } catch(err) {
            return err;
        }
    },
}