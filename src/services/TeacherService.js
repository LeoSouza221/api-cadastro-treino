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
            student = Student.findById(_id);

            console.log(student.schema);

            return { msg: 'ok' };
            return await Teacher.findOneAndUpdate(
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

            return { msg: 'Professor removido com sucesso' };
        } catch(err) {
            return err;
        }
    },

    async destroyStudents(_id, _idStudent) {
        try {
            return await Teacher.findOneAndUpdate(
                _id,
                { $pull: { students: _idStudent }},
                { useFindAndModify: false, new: true } 
            );
            
        } catch(err) {
            return err;
        }
    },
}