const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

module.exports = {
    async index(page) {
        try {
            const data = await Teacher.paginate({}, { page, limit: 10 });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await Teacher.findById(_id, '-students');
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async showStudent(_id) {
        try {
            const data = await Student.find({ teacher: _id });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async store(teacher) {
        try {
            const data = await Teacher.create(teacher);
            return { data, status: 201 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async updateStudents(_id, _idStudent) {
        try {
            const { teacher } = await Student.findById(_idStudent, 'teacher'); 
            const alreadyStudent = Teacher.find({ students: _idStudent });

            if (teacher && teacher.toString() !== _id.toString()) {
                return { data: { msg: 'Aluno ja pertence a outro personal' }, status: 204};
            }

            if (alreadyStudent) {
                return { data: { msg: 'Aluno ja cadastrado' }, status: 204 };
            }

            await Student.findByIdAndUpdate(
                _idStudent,
                { $set: { teacher: _id } },
                { useFindAndModify: false, new: true }
            );

            const data = await Teacher.findByIdAndUpdate(
                _id,
                { $push: { students: _idStudent }}, 
                { useFindAndModify: false, new: true }
            );

            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroy(_id) {
        try {
            await Teacher.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { data: { msg: 'Personal removido com sucesso' }, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroyStudents(_id, _idStudent) {
        try {
            await Student.findByIdAndUpdate(_idStudent, { $set: { teacher: null } }, { useFindAndModify: false });
            
            const data = await Teacher.findByIdAndUpdate(
                _id,
                { $pull: { students: _idStudent }},
                { useFindAndModify: false, new: true }
            );

            return { data, status: 200 }
            
        } catch(err) {
            return { err, status: 204 };
        }
    },
}