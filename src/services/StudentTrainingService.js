const StudentTraining = require('../models/StudentTraining');

module.exports = {
    async index(page) {
        try {
            return await StudentTraining.paginate({}, { page, limit: 10 });
        } catch(err) {
            return err;
        }
    },

    async show(_id) {
        try {
            return await StudentTraining.findById(_id);
        } catch(err) {
            return err;
        }
    },

    async store(studentTraining) {
        try {
            return await StudentTraining.create(studentTraining);
        } catch(err) {
            return err;
        }
    },

    async update(_id, _idTraining, studentTraining) {
        try {
            const { training } = studentTraining;
            const { name } = studentTraining;
            const { training_type } = studentTraining;

            return await StudentTraining.findOne(
                { _id },
            ).then((trng) => {
                const pos = trng.trainings.findIndex(training => training._id == _idTraining);
                
                if (name) trng.trainings[pos].name = name; 
                if (training_type) trng.trainings[pos].training_type = training_type;
                if (training) trng.trainings[pos].training = training;

                return trng.save();
            });
        } catch(err) {
            return err;
        }
    },

    async updateTraining(_id, training) {
        try {
            return await StudentTraining.findByIdAndUpdate(
                _id,
                { $push: { trainings: training}},
                { useFindAndModify: false, new: true }
            );
        } catch(err) {
            return err;
        }
    },

    async destroy(_id) {
        try {
            await StudentTraining.findByIdAndRemove(_id);

            return { msg: 'Treino apagado com sucesso' };
        } catch(err) {
            return err;
        }
    },

    async destroyTraining(_id, _idTraining) {
        try {
            return await StudentTraining.findByIdAndUpdate(
                _id,
                { $pull: { trainings: { _id: _idTraining }}},
                { useFindAndModify: false, new: true }
            );

            return { msg: 'Treino apagado com sucesso' };
        } catch(err) {
            return err;
        }
    },
}