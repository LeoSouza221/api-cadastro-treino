const Teacher = require('../models/Teacher');

module.exports = {
    async index(page) {
        try {
            return await Teacher.paginate({}, { page, limit: 10 });
        } catch(err) {
            return err;
        }
    },

    async show(_id) {
        try {
            return await Teacher.findById(_id, '-students');
        } catch(err) {
            return err;
        }
    },

    async showStudent(_id, student) {
        try {
            return await Teacher.find({
            //     _id,
            //     students.user.name { $regex: '.*' + student + '.*' }
            });
        } catch(err) {
            return err;
        }
    },

    async store(teacher) {
        try {
            return await Teacher.create(teacher)
        } catch(err) {
            return err;
        }
    },

    async updateStudents(_id, _idStudent) {
        try {
            const teacher = await Teacher.findById(_id);
            
            return await teacher.students.push(_idStudent);

        } catch(err) {
            return err;
        }
    },

    async destroy(_id) {
        try {
            await Teacher.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { msg: 'Usuario deletado com sucesso' };
        } catch(err) {
            return err;
        }
    },

    async destroyStudents(_id, _idStudent) {
        try {
            const teacher = await Teacher.findById(_id);
            await teacher.students.pull(_idStudent);

            return { msg: 'Estudante removido com sucesso' };
        } catch(err) {
            return err;
        }
    },
}