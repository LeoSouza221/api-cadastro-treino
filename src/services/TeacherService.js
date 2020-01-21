const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

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
            return await Student.find({ teacher: _id });
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
            const { teacher } = await Student.findById(_idStudent, 'teacher'); 
            const alreadyStudent = Teacher.find({ students: _idStudent });

            if (teacher && teacher.toString() !== _id.toString()) {
                return { msg: 'Aluno ja pertence a outro personal' };
            }

            if (alreadyStudent) {
                return { msg: 'Aluno ja cadastrado' };
            }

            await Student.findByIdAndUpdate(_idStudent, { $set: { teacher: _id } }, { useFindAndModify: false, new: true });

            return await Teacher.findByIdAndUpdate(
                _id,
                { $push: { students: _idStudent }}, 
                { useFindAndModify: false, new: true }
            );
        } catch(err) {
            return err;
        }
    },

    async destroy(_id) {
        try {
            await Teacher.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { msg: 'Personal removido com sucesso' };
        } catch(err) {
            return err;
        }
    },

    async destroyStudents(_id, _idStudent) {
        try {
            await Student.findByIdAndUpdate(_idStudent, { $set: { teacher: null } }, { useFindAndModify: false });
            
            return await Teacher.findByIdAndUpdate(
                _id,
                { $pull: { students: _idStudent }},
                { useFindAndModify: false, new: true }
            );
            
        } catch(err) {
            return err;
        }
    },
}