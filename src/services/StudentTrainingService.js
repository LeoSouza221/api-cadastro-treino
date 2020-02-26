const StudentTraining = require('../models/StudentTraining');

module.exports = {
    async index(page) {
        try {
            const data = await StudentTraining.paginate({}, { page, limit: 10 });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await StudentTraining.findById(_id);
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async store(studentTraining) {
        try {
            const data = await StudentTraining.create(studentTraining);
            return { data, status: 201 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async update(_id, _idTraining, studentTraining) {
        try {
            const { training } = studentTraining;
            const { name } = studentTraining;
            const { training_type } = studentTraining;

            const data = await StudentTraining.findOne(
                { _id },
            ).then((trng) => {
                const pos = trng.trainings.findIndex(training => training._id == _idTraining);
                
                if (name) trng.trainings[pos].name = name; 
                if (training_type) trng.trainings[pos].training_type = training_type;
                if (training) trng.trainings[pos].training = training;

                return trng.save();
            });

            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async updateTraining(_id, training) {
        try {
            const data = await StudentTraining.findByIdAndUpdate(
                _id,
                { $push: { trainings: training}},
                { useFindAndModify: false, new: true }
            );
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroy(_id) {
        try {
            await StudentTraining.findByIdAndRemove(_id);

            return { data: { msg: 'Treino apagado com sucesso' }, status: 200};
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroyTraining(_id, _idTraining) {
        try {
            const data = await StudentTraining.findByIdAndUpdate(
                _id,
                { $pull: { trainings: { _id: _idTraining }}},
                { useFindAndModify: false, new: true }
            );
            return { data, status: 200 };                
        } catch(err) {
            return { err, status: 204 };
        }
    },
}