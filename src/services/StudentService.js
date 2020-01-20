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

            if (isTeacher) return { msg: 'Usuario cadastrado ja e um professor' }

            return await Student.create(student);
        } catch(err) {
            return err;
        }
    },

    async update(_id, student) {
        try {
            const { user } = student;

            if (user) return { msg: 'Nao eh permitida a alteracao de usuario' };

            return await Student.findOneAndUpdate(_id, { $set: student }, { useFindAndModify: false, new: true });
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